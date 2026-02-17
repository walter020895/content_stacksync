---
description: Move a published LinkedIn post from drafts to published with proper naming and YAML. Usage: /publish-post [persona] [linkedin-url]
---

You are executing the Stacksync post-publish workflow. This runs AFTER the post is live on LinkedIn.

## STEP 1: PARSE INPUT

The user provided: $ARGUMENTS

Extract:
- **Persona:** Which persona? (Ruben/Alexis/Nacho/Carter/Tony)
- **LinkedIn URL:** The published post URL

If either is missing, ask.

## STEP 2: VERIFY PUBLICATION

Fetch the LinkedIn URL to confirm the post is live. Extract the post text to match it against the draft.

## STEP 3: FIND THE DRAFT

Look in `04_linkedin_content/[Persona]/drafts_[Persona]/` for:
- The `.md` draft file
- Any image files (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`)

If multiple drafts exist, ask the user which one was published.

## STEP 4: BUILD THE PUBLISHED FILENAME

Convention: `YYYY-MM-DD_first_words_of_hook_slug.md`

Rules:
- Date = today's date (YYYY-MM-DD)
- Slug = first 6-8 words of the hook, lowercased, underscores, no special characters
- Truncate slug at ~50 chars max
- Match the style of existing published files in the persona's folder

Examples from existing posts:
- `2026-02-14_heroku_was_built_as_an_inbrowser_code_editor.md`
- `2026-01-27_fivetran_now_charges_you_to_delete_data.md`
- `2026-02-02_i_studied_6_major_crm_companies.md`

## STEP 5: ADD YAML FRONTMATTER

Read the draft. If YAML frontmatter already exists, update it. If not, add it at the top.

Use this template:
```yaml
---
name: [topic_slug]
description: [one-line description of the post]
domain: business
node_type: linkedin-post
status: published
last_updated: [today YYYY-MM-DD]
published_date: [today YYYY-MM-DD]
tags:
  - [tag1]
  - [tag2]
topics:
  - [topic1]
  - [topic2]
related_concepts:
  - "[[concept1]]"
  - "[[concept2]]"
link: [linkedin-url]
image: [images/filename.ext or empty if text-only]
---
```

## STEP 6: MOVE FILES

1. Write the updated `.md` file to `04_linkedin_content/[Persona]/published_[Persona]/[YYYY-MM-DD_slug].md`
2. If image exists: move it to `04_linkedin_content/[Persona]/published_[Persona]/images/[YYYY-MM-DD_slug].[ext]`
   - Create the `images/` subfolder if it doesn't exist
   - Rename the image to match the `.md` filename
3. Delete the original draft `.md` from `drafts_[Persona]/`
4. Delete the original image from `drafts_[Persona]/`

**Image convention:** Images ALWAYS go in `published_[Persona]/images/`, NEVER at root level of `published_[Persona]/`.

## STEP 7: VERIFY

Run `ls` on both folders to confirm:
- `published_[Persona]/` has the new `.md` file
- `published_[Persona]/images/` has the image (if applicable)
- `drafts_[Persona]/` no longer has the draft or image

## STEP 8: REPORT

Show the user:
1. Published filename
2. LinkedIn URL (confirmed live)
3. Image location
4. Confirmation that drafts folder is clean
