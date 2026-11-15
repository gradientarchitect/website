import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
import { site } from '../site.config';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: [p.data.topic],
    })),
  });
}
