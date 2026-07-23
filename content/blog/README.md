# Blog Content Directory

## How to publish a new blog post

### Quick workflow (< 2 minutes to publish)

1. Create a new `.md` file in this directory
2. Add frontmatter (copy template below)
3. Write your content in Markdown
4. Commit and push — the site rebuilds automatically

### Frontmatter template

```markdown
---
title: "Your Post Title"
date: "2025-08-15"
excerpt: "One or two sentences that appear in the card preview."
readTime: "8 min"
tags: ["ML", "Production", "Architecture"]
status: "published"
slug: "your-post-slug"
---

Your markdown content here...
```

### Field reference

| Field     | Required | Description                                      |
|-----------|----------|--------------------------------------------------|
| title     | Yes      | Post title                                       |
| date      | Yes      | ISO date string (YYYY-MM-DD)                     |
| excerpt   | Yes      | 1-2 sentence preview                             |
| readTime  | Yes      | Estimated read time                              |
| tags      | Yes      | Array of topic tags                              |
| status    | Yes      | "published" or "draft"                           |
| slug      | Yes      | URL-safe identifier (used in route)              |

### Content guidelines (from editorial policy)

- Original experience only — no rewritten docs
- Reproducible examples where possible
- Explicit limitations stated
- Updated dates when content changes
- Quality > volume: one deep article monthly, two field notes monthly

### Supported Markdown features

- Standard Markdown (headings, lists, links, images, blockquotes)
- Code blocks with syntax highlighting (use triple backticks + language)
- Tables
- Inline code
- Bold/italic

### Status values

- `published` — visible on site
- `draft` — hidden from public, visible in dev mode

### File naming convention

Use the slug as filename: `brand-extraction-pipeline.md`
