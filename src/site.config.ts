// One place for the site's name, contact and social links.
// A link set to null is hidden, so add each one once the account exists.
export const site = {
  name: 'Gradient Architect',
  url: 'https://gradientarchitect.com',
  author: 'Sadhiq',
  headline: 'Quote-to-Cash Architecture · AI Agents · Enterprise Platforms',
  description:
    'Sadhiq writes about Quote-to-Cash architecture, Revenue Cloud, Google Cloud and AI agents. Views are my own.',
  email: 'sadhiq.mohammad@gradientarchitect.com',
  social: {
    github: 'https://github.com/gradientarchitect',
    linkedin: null as string | null,
    huggingface: 'https://huggingface.co/latent_architect',
    bluesky: null as string | null, // https://bsky.app/profile/gradientarchitect.com once the _atproto record is live
  },
};
