/**
 * Blog Posts Data
 * 
 * PUBLISHING WORKFLOW:
 * 1. Write your post in /content/blog/your-slug.md
 * 2. Add the metadata entry here
 * 3. The post will appear on the site
 * 
 * For a full MDX/dynamic-import solution, consider migrating to 
 * vite-plugin-md or Astro when post count exceeds ~10.
 * 
 * Current approach: metadata here, full content loaded on demand.
 * This keeps the homepage bundle small.
 */

export const posts = [
  {
    title: "Designing a Reliable Brand Extraction Pipeline",
    date: "2025-08",
    excerpt:
      "How I architected structured LLM outputs at scale — schema validation, retry policies, and the evaluation harness that caught 40% of edge cases before production.",
    readTime: "12 min",
    tags: ["LLM", "Production", "Architecture"],
    slug: "brand-extraction-pipeline",
    status: "draft", // Change to "published" when ready
  },
  {
    title: "From Churn Accuracy to Business Value",
    date: "2025-08",
    excerpt:
      "Why 85% accuracy meant nothing until we mapped model outputs to retention actions. Choosing metrics that matter for real business outcomes.",
    readTime: "8 min",
    tags: ["ML", "Business", "Metrics"],
    slug: "churn-metrics-that-matter",
    status: "draft",
  },
  {
    title: "What Broke in My First Production ML Pipeline",
    date: "2025-09",
    excerpt:
      "A postmortem of modeling assumptions that failed, the controls I added, and how I think about ML reliability now.",
    readTime: "10 min",
    tags: ["MLOps", "Postmortem", "Reliability"],
    slug: "first-pipeline-postmortem",
    status: "draft",
  },
];

/**
 * Get all published posts (sorted by date, newest first)
 */
export function getPublishedPosts() {
  return posts
    .filter((p) => p.status === "published")
    .sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Get all posts including drafts (for dev mode)
 */
export function getAllPosts() {
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
