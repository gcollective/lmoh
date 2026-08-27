import { SubstackPost } from '../types';
import { SUBSTACK_POSTS, SUBSTACK_URL } from '../data/content';

/**
 * Fetches and parses the live RSS feed from the Substack publication.
 * Dynamic pulling works by requesting the public RSS feed and transforming it into SubstackPost items.
 */
export async function fetchLiveSubstackPosts(): Promise<{ posts: SubstackPost[]; source: 'live_rss' | 'cached_curated'; lastFetched: string }> {
  const rssUrl = `${SUBSTACK_URL}/feed`;
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  try {
    // Attempt 1: Fetch via RSS2JSON public gateway for client-side CORS resilience
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=&t=${Date.now()}`;
    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      cache: 'no-cache'
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
        const livePosts: SubstackPost[] = data.items.map((item: any, idx: number) => {
          // Clean HTML tags from content / description for excerpt
          const rawDesc = item.description || item.content || '';
          const cleanText = rawDesc.replace(/<[^>]*>?/gm, '').trim();
          const excerpt = cleanText.length > 220 ? cleanText.substring(0, 220) + '...' : cleanText;
          
          // Format date
          let formattedDate = item.pubDate;
          try {
            const d = new Date(item.pubDate);
            formattedDate = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
          } catch {
            // fallback to original string
          }

          // Generate tags from categories or content
          const tags = Array.isArray(item.categories) && item.categories.length > 0
            ? item.categories.slice(0, 3)
            : ['Pro-Se Rights', 'Advocacy', 'North Carolina'];

          return {
            id: `rss-${idx}-${item.guid || item.link || idx}`,
            title: item.title || 'Untitled Substack Dispatch',
            subtitle: excerpt.slice(0, 95) + '...',
            excerpt: excerpt || 'Read the full essay on our Substack journal.',
            publishedAt: formattedDate,
            readTime: '6 min read',
            url: item.link || SUBSTACK_URL,
            slug: item.guid || `post-${idx}`,
            tags: tags,
            author: item.author || 'The Constituents Men of Legal Honor',
            pinned: idx === 0
          };
        });

        // Ensure "Understanding Your Foundational Rights" is prioritized if present or merged
        return {
          posts: livePosts,
          source: 'live_rss',
          lastFetched: timestamp
        };
      }
    }
  } catch (err) {
    console.warn('Live Substack RSS query encountered network issue, falling back to curated posts:', err);
  }

  // Fallback to verified local curated posts
  return {
    posts: SUBSTACK_POSTS,
    source: 'cached_curated',
    lastFetched: timestamp
  };
}
