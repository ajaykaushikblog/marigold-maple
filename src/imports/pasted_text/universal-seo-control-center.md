PHASE 12 — CREATE THE UNIVERSAL TECHNICAL SEO CONTROL CENTER

Keep the entire existing website, public pages, CMS admin, design system, responsive behavior, content models, advertisements, Pinterest system, authors, search, recipes, DIY system, and existing functionality.

DO NOT redesign the public website from scratch.

Create a complete technical SEO management system inside the CMS.

The goal is to make the future production CMS capable of managing SEO for thousands of pages across the entire Universal Lifestyle Website.

This is a front-end/UI and architecture prototype. Do not pretend that real search-engine APIs or indexing are currently connected.

==================================================
1. SEO DASHBOARD
==================================================

Create:

/admin/seo

Dashboard cards:

- Total Published Pages
- Indexable Pages
- Noindex Pages
- Pages in Sitemap
- Missing SEO Titles
- Missing Meta Descriptions
- Missing Canonicals
- Missing Image Alt Text
- Schema Issues
- Broken Links
- Orphan Pages
- 404 Errors
- Redirects

Use realistic placeholder data.

Clearly indicate that dashboard values are example/placeholder data until connected to a real backend.

==================================================
2. SEO HEALTH SCORE
==================================================

Create an SEO health overview.

Show categories:

Technical SEO
On-Page SEO
Indexing
Structured Data
Images
Internal Linking
Sitemaps
Redirects

Use status indicators such as:

Healthy
Needs Attention
Warning

Do not create a fake Google ranking score.

Do not claim that the website is actually indexed or ranking.

==================================================
3. UNIVERSAL SEO EDITOR
==================================================

Every content item should have a reusable SEO panel.

Fields:

- SEO title
- Meta description
- Canonical URL
- Meta robots
- Index / Noindex
- Follow / Nofollow
- Sitemap inclusion
- Primary URL
- Breadcrumb title

Show live previews for:

Google-style search result
Social preview
Pinterest preview

These previews are visual representations only.

==================================================
4. SEO TITLE VALIDATION
==================================================

Create validation states for SEO titles.

Show:

- Empty
- Too short
- Recommended
- Too long

Provide character-count feedback.

Do not automatically claim that one exact character limit guarantees good rankings.

==================================================
5. META DESCRIPTION VALIDATION
==================================================

Create:

- Character count
- Empty state
- Short state
- Recommended state
- Long state

Show a search-result preview.

Do not guarantee a specific description will be displayed by search engines.

==================================================
6. CANONICAL MANAGEMENT
==================================================

Create canonical controls.

Each indexable page should have:

- Canonical URL
- Auto-generated canonical option
- Custom canonical option

Show warnings for:

- Missing canonical
- Duplicate canonical
- Canonical pointing to another URL
- Invalid URL

Support canonical URLs across:

Articles
Recipes
DIY
Categories
Occasions
Authors
Guides
Listicles
Product Guides

==================================================
7. ROBOTS META CONTROLS
==================================================

Create controls:

Index
Noindex

Follow
Nofollow

Additional future options:

Noarchive
Nosnippet
Noimageindex

Show a readable robots configuration summary.

Example:

index, follow

or:

noindex, follow

Do not apply noindex automatically to public content.

==================================================
8. ROBOTS.TXT MANAGER
==================================================

Create:

/admin/seo/robots

Show:

Current robots.txt
Preview
Edit
Validation

Provide sensible default sections for:

Public pages
Admin pages
Private/account pages
Internal search
API/private endpoints

Example conceptual rules:

Allow public content.

Disallow:

/admin/
/login/
/account/
/api/

Do not blindly block CSS, JavaScript or important public assets.

Include sitemap declaration.

Clearly mark the editor as a future production configuration.

==================================================
9. XML SITEMAP SYSTEM
==================================================

Create:

/admin/seo/sitemap

Show:

Sitemap Status
Last Generated
URLs Included
Excluded URLs
Errors

Create sitemap categories:

- Posts Sitemap
- Recipes Sitemap
- DIY Sitemap
- Categories Sitemap
- Occasions Sitemap
- Authors Sitemap
- Images Sitemap
- Sitemap Index

Only eligible URLs should conceptually enter the sitemap:

- Public
- Canonical
- Indexable
- HTTP 200
- Non-redirect
- Non-duplicate

Exclude:

- Noindex pages
- Redirects
- Deleted content
- Private content
- Internal search pages
- Duplicate URLs

Create "Regenerate Sitemap" UI.

The UI should make clear that actual generation will happen in the production backend.

==================================================
10. SITEMAP VALIDATION
==================================================

Create validation checks:

- Invalid URLs
- Duplicate URLs
- Redirect URLs
- Noindex URLs
- Missing canonicals
- Broken URLs

Show:

Healthy
Warning
Error

==================================================
11. INDEXING / SEARCH ENGINE SECTION
==================================================

Create:

/admin/seo/indexing

Search engines:

Google
Bing
Yandex
Other search engines

Show connection/status UI for:

Google Search Console
Bing Webmaster Tools
Yandex Webmaster

Do not display fake connection statuses.

Use states:

Not Connected
Connected
Needs Configuration
Error

Provide configuration placeholders.

==================================================
12. INDEXNOW
==================================================

Create an IndexNow configuration section.

Fields:

- Enable IndexNow
- API Key
- Verification file/status
- Submission status
- Last submission
- Last error

Create an event log showing conceptual events:

Published
Updated
Deleted

The UI should explain that IndexNow can notify participating search engines about URL changes, but does not guarantee instant crawling or indexing.

Do not claim that IndexNow guarantees Google indexing.

==================================================
13. URL / SLUG MANAGEMENT
==================================================

Create URL controls inside content editing.

Fields:

- Slug
- Full URL preview
- Canonical
- Previous URL
- Redirect status

Show warnings for:

- Duplicate slug
- Invalid characters
- Empty slug
- Changed published URL

==================================================
14. REDIRECT MANAGER
==================================================

Create:

/admin/seo/redirects

Table:

Source URL
Destination URL
Type
Status
Created
Updated

Support:

301
302

Primary action:

Add Redirect

Fields:

Source
Destination
Redirect type
Notes
Status

Create warnings for:

- Redirect loops
- Redirect chains
- Redirect to 404
- Redirect to another redirect

Do not automatically create redirect chains.

==================================================
15. 404 MANAGEMENT
==================================================

Create:

/admin/seo/404

Show:

- Requested URL
- First detected
- Last detected
- Hits
- Suggested destination
- Status

Actions:

Create 301 Redirect
Ignore
Mark Resolved

This is a future backend monitoring interface.

Use placeholder data only.

==================================================
16. ORPHAN PAGE MONITORING
==================================================

Create:

/admin/seo/orphans

Show pages that have no meaningful internal links.

Columns:

Page
Type
Published
Internal Links
Suggested Related Content
Status

Actions:

View
Edit
Add Internal Link
Ignore

Do not claim a page is orphaned unless real crawl/link data exists in production.

==================================================
17. INTERNAL LINKING
==================================================

Create an internal linking assistant UI.

For each content item show:

Related Content
Potential Internal Links
Existing Links
Missing Opportunities

Suggested matches can use:

- Same category
- Same subcategory
- Same occasion
- Same season
- Shared tags
- Same content type

Allow editor to insert a suggested internal link.

Do not create artificial or irrelevant links.

==================================================
18. BREADCRUMB SEO
==================================================

Ensure every appropriate public page supports:

Visible breadcrumbs
+
BreadcrumbList structured data

Examples:

Home
→ Christmas
→ Christmas Recipes
→ Article

or:

Home
→ Weddings
→ Wedding Decor
→ Article

Breadcrumb hierarchy must remain dynamic.

==================================================
19. STRUCTURED DATA CONTROL CENTER
==================================================

Create:

/admin/seo/schema

Supported schema concepts:

WebSite
Organization
Article
Recipe
BreadcrumbList
Person
ProfilePage
Product where genuinely applicable
Event where genuinely applicable

Create schema status cards:

Valid
Missing
Warning
Error

Do not allow editors to select irrelevant schema types indiscriminately.

For recipes, preserve the existing recipe structured-data architecture.

==================================================
20. ARTICLE SCHEMA PREVIEW
==================================================

Create a structured data preview for Article.

Show fields:

- Headline
- Description
- Image
- Author
- Date Published
- Date Modified
- Publisher
- Main Entity URL

==================================================
21. RECIPE SCHEMA PREVIEW
==================================================

Create a Recipe schema preview showing:

- Name
- Image
- Author
- Description
- Prep Time
- Cook Time
- Total Time
- Recipe Yield
- Ingredients
- Instructions
- Nutrition
- Rating only when genuine rating data exists

Do not create fake ratings or reviews.

==================================================
22. AUTHOR / PROFILE SEO
==================================================

Connect the SEO system to:

/author/:slug

Support:

- Person/ProfilePage structured data where appropriate
- Canonical
- Meta title
- Meta description
- Index/noindex
- Social image
- Sitemap inclusion

==================================================
23. CATEGORY / OCCASION SEO
==================================================

Every taxonomy landing page should have SEO controls.

Examples:

/christmas/
/halloween/
/weddings/
/recipes/
/nails/
/diy/

Fields:

- SEO title
- Meta description
- Canonical
- Index/noindex
- Sitemap inclusion
- Social image
- Pinterest image
- Description
- Structured data where appropriate

Do not hard-code only these examples.

==================================================
24. INTERNAL SEARCH SEO
==================================================

Internal search result pages should generally be configurable as:

noindex, follow

Create a setting:

"Index internal search pages"

Default conceptual state:

OFF

Explain that arbitrary internal search/filter URLs should generally not become indexable pages.

==================================================
25. FILTER / FACET SEO
==================================================

Create controls for filter URLs.

Examples:

?category=
?occasion=
?tag=
?style=
?color=

Allow the CMS to distinguish:

Curated indexable landing page
versus
Temporary/filter/search URL

Curated pages can be indexable.

Arbitrary filter combinations should normally be noindex.

Do not create thousands of thin indexable URLs.

==================================================
26. IMAGE SEO
==================================================

Create an image SEO dashboard.

Check:

- Missing alt text
- Missing dimensions
- Oversized images
- Missing descriptive filenames
- Unsupported/inefficient formats
- Missing captions where appropriate

Image fields:

- Filename
- Alt text
- Title
- Caption
- Description
- Width
- Height

Support future WebP/AVIF generation.

==================================================
27. SOCIAL / OPEN GRAPH SEO
==================================================

Create fields:

- Open Graph title
- Open Graph description
- Open Graph image
- X/Twitter title
- X/Twitter description
- X/Twitter image

Show social preview.

Keep these separate from:

SEO title
Meta description
Pinterest title
Pinterest description

==================================================
28. SEO BULK ACTIONS
==================================================

Allow editors to bulk:

- Add/update SEO title
- Add/update meta description
- Set index/noindex
- Add/remove sitemap inclusion
- Change canonical
- Regenerate metadata

Show confirmation before bulk changes.

==================================================
29. SEO AUDIT TABLE
==================================================

Create:

/admin/seo/audit

Columns:

URL
Content Type
Index Status
Canonical
Sitemap
SEO Title
Meta Description
Schema
Alt Text
Internal Links
Status

Filters:

- Errors
- Warnings
- Missing
- Healthy
- Content type
- Category
- Author

Provide sorting and pagination.

==================================================
30. SEO SETTINGS
==================================================

Create:

/admin/seo/settings

Sections:

Global SEO
Indexing
Robots
Sitemaps
Canonical
Structured Data
Open Graph
Pinterest
IndexNow
Redirects
Internal Search
Images

Global settings should be reusable across the entire website.

==================================================
31. SEO CHANGE LOG
==================================================

Create:

/admin/seo/history

Show:

- User
- Page
- Change
- Previous value
- New value
- Date/time

Examples:

SEO title changed
Canonical changed
Noindex enabled
Robots updated
Redirect created
Schema updated

==================================================
32. ADMIN RESPONSIVENESS
==================================================

The SEO dashboard must work at:

320px
375px
390px
414px
768px
834px
1024px
1280px
1440px

Mobile:

- Stack dashboard cards
- Use responsive tables
- Make forms single-column
- Keep controls touch-friendly
- Avoid accidental horizontal page overflow

==================================================
33. DO NOT BREAK EXISTING SYSTEMS
==================================================

Preserve:

- Public website
- Homepage
- Category pages
- Article pages
- Recipe pages
- DIY pages
- Author pages
- Search
- CMS dashboard
- Media
- Authors
- Ads
- Pinterest
- Social sharing
- Responsive layouts
- Existing routing
- Existing content models

Add the technical SEO system to the existing architecture.

==================================================
FINAL GOAL
==================================================

Create a professional technical SEO control center capable of managing a large editorial website with thousands of pages.

The CMS should provide centralized control over:

SEO metadata
Canonicals
Robots
XML sitemaps
Indexing
IndexNow
Redirects
404s
Orphan pages
Internal linking
Structured data
Image SEO
Open Graph
Pinterest SEO
Taxonomy SEO

Build the reusable UI, components and data structures now.

Actual Google, Bing, Yandex, IndexNow, crawler, sitemap generation and database integrations will be connected during production/backend implementation.

Run type checking/build validation after implementation.

Do not remove or break existing functionality.