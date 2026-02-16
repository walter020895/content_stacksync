# Carter -- Young Commercial

Personality doc: `carter_personality_v01.md` (AI-generated, to be adapted)

## Folder Structure

```
Carter/
├── carter_personality_v01.md          Voice, style, hooks, and content lens
├── drafts_Carter/                     Active drafts (currently empty)
└── research_Carter/                   LinkedIn export datasets
    └── dataset_linkedin-post_2026-02-16_17-09-37-178.csv
```

## Current State

| Folder | Count |
|--------|-------|
| `drafts_Carter/` | 0 active drafts |
| `research_Carter/` | 1 dataset CSV (not yet processed) |
| `published_Carter/` | Does not exist yet |
| `bangers_Carter/` | Does not exist yet |

## Next Steps

1. **Adapt personality doc**: `carter_personality_v01.md` was AI-generated and needs manual review and adaptation to finalize Carter's voice and style.

2. **Process the dataset**: Run the LinkedIn export CSV through the pipeline:
   - Kallaway classification on all posts
   - Separate originals from reshares
   - Generate MDs for every original in a new `published_Carter/` folder using the YAML template
   - Download images to `published_Carter/images/`
   - Generate `carter_all_published_kallaway.csv` ranking all posts by engagement
   - Copy any post with 50+ engagement to a new `bangers_Carter/` folder

3. **Start drafting**: Once the personality doc is finalized and the dataset is processed, begin creating content drafts in `drafts_Carter/`.

## How It Works

**Drafts**: Will hold posts currently being written. Naming: `descriptive_name_carter.md`. Once published, they move to `published_Carter/` with the date-based naming convention.

**Research**: Raw LinkedIn export CSV ready to be processed. Once processed, it will create `published_Carter/` and `bangers_Carter/` following the same conventions as Ruben, Alexis, and Nacho.

**Published/Bangers**: Will be created once the dataset is processed through the pipeline. Published posts will follow the YAML template with Kallaway analysis. Bangers will be copies of posts crossing the 50+ engagement threshold.

## Content Lens

Carter writes as the young commercial professional. His content covers the early-career B2B perspective, learning sales in the SaaS world, and the fresh eyes view of enterprise software challenges. See `carter_personality_v01.md` for the full voice guide (pending adaptation).
