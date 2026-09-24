PHASE 11 — CREATE THE UNIVERSAL CMS ADMIN DASHBOARD

Keep the entire existing public website, design system, components, routes, responsive behavior, SEO architecture, advertisement system, Pinterest system, and all existing functionality.

DO NOT redesign the public website.

Create a complete reusable WordPress-like CMS administration interface for managing the Universal Lifestyle Website.

This is a UI/UX and front-end prototype for the future production CMS/backend.

The CMS must be designed for thousands of content items and future expansion.

==================================================
1. CMS ADMIN APPLICATION
==================================================

Create a dedicated admin area:

/admin

Use a professional dashboard layout.

Desktop:
- Left sidebar navigation
- Main content area
- Top admin bar

Mobile/tablet:
- Collapsible sidebar
- Responsive navigation
- Touch-friendly controls

The admin interface should feel like a professional editorial CMS.

Do not make it visually identical to WordPress.

==================================================
2. ADMIN SIDEBAR
==================================================

Create navigation sections:

Dashboard

CONTENT
- All Content
- Articles
- Recipes
- DIY / Tutorials
- Guides
- Listicles
- Product Guides
- Drafts
- Scheduled
- Published
- Trash

TAXONOMY
- Categories
- Subcategories
- Occasions
- Seasons
- Tags
- Styles
- Colors
- Audiences

MEDIA
- Media Library
- Pinterest Images
- Galleries

PEOPLE
- Authors
- Contributors

MONETIZATION
- Advertisements
- Affiliate Products
- Sponsored Content

SEO
- SEO Dashboard
- Redirects
- Sitemap
- Robots
- Indexing

SITE
- Homepage
- Navigation
- Newsletter
- Settings

SYSTEM
- Activity Log
- Import / Export
- Site Health

==================================================
3. ADMIN DASHBOARD
==================================================

Create:

/admin

Dashboard cards:

- Total Content
- Published
- Drafts
- Scheduled
- Authors
- Categories
- Media Items
- Indexable Pages

Additional cards:

- Missing SEO Metadata
- Missing Alt Text
- Broken Links
- Orphan Pages
- 404 Errors
- Redirects

Create a recent activity section:

- Recently published
- Recently edited
- Scheduled content
- Drafts needing attention

Create a quick actions section:

- New Article
- New Recipe
- New DIY
- Upload Media
- Add Author
- Add Category

Use realistic placeholder data.

Clearly make the dashboard UI ready for real data later.

Do not claim placeholder numbers are real analytics.

==================================================
4. UNIVERSAL CONTENT MANAGEMENT
==================================================

Create:

/admin/content

A universal content table.

Columns:

- Content
- Type
- Status
- Author
- Categories
- Occasions
- Updated
- Published
- SEO status
- Actions

Support filters:

- Content type
- Status
- Author
- Category
- Occasion
- Season
- Date

Support search.

Support:

- Sort
- Pagination
- Bulk selection
- Bulk actions

Bulk actions:

- Publish
- Unpublish
- Move to draft
- Move to trash
- Change category
- Change author
- Add tag

Do not create separate unrelated tables for every content type.

Use a universal content management pattern.

==================================================
5. CONTENT TYPES
==================================================

The CMS must support:

Article
Recipe
DIY / Tutorial
Listicle / Ideas
Guide
Product Guide

Design the system so future content types can be added without rebuilding the CMS.

Each content item should have:

- ID
- Title
- Slug
- Content type
- Status
- Author
- Featured image
- Categories
- Subcategories
- Occasions
- Seasons
- Tags
- Styles
- Colors
- Audiences
- Publish date
- Updated date
- SEO metadata
- Pinterest metadata
- Social metadata
- Related content

==================================================
6. CONTENT STATUS SYSTEM
==================================================

Support:

Draft
Review
Scheduled
Published
Unpublished
Trash

Create status badges.

Show status clearly throughout the admin.

==================================================
7. QUICK CONTENT CREATION
==================================================

Create a "New Content" action.

Show:

New Article
New Recipe
New DIY
New Listicle
New Guide
New Product Guide

When a content type is selected, open the appropriate editor.

Use reusable editor components.

==================================================
8. UNIVERSAL ARTICLE EDITOR
==================================================

Create:

/admin/content/new/article

and an edit version.

Editor layout:

Main content area
+
Right settings panel on desktop.

Fields:

Basic:

- Title
- Slug
- Excerpt
- Featured image
- Author
- Publish status
- Publish date
- Updated date

Taxonomy:

- Category
- Subcategory
- Occasion
- Season
- Tags
- Styles
- Colors
- Audience

Content editor:

Create reusable content blocks:

- Paragraph
- Heading
- Image
- Gallery
- Video placeholder
- Quote
- List
- Checklist
- Table
- Callout
- Product block
- Affiliate block
- Sponsored block
- Advertisement placeholder
- Recipe embed
- Related content
- Newsletter

Allow blocks to be reordered.

==================================================
9. ARTICLE EDITOR RIGHT PANEL
==================================================

Create tabs/sections:

Content
Taxonomy
SEO
Pinterest
Social
Publishing

SEO fields:

- SEO title
- Meta description
- Canonical URL
- Robots
- Schema type
- Sitemap inclusion

Pinterest:

- Pinterest title
- Pinterest description
- Pinterest image
- Pin template
- Alternate pins

Social:

- Social title
- Social description
- Social image

Publishing:

- Status
- Publish date
- Author
- Updated date

==================================================
10. RECIPE CMS
==================================================

Create:

/admin/content/new/recipe

Use the existing Universal Recipe Page data model.

Fields:

- Recipe title
- Description
- Featured image
- Author
- Prep time
- Cook time
- Total time
- Servings
- Calories
- Ingredients
- Instructions
- Equipment
- Notes
- Tips
- Nutrition
- Gallery
- Affiliate products

Also include:

SEO
Pinterest
Social
Publishing

Add:

- Recipe Preview
- Print Preview
- PDF Preview

Do not remove existing recipe functionality.

==================================================
11. DIY CMS
==================================================

Create:

/admin/content/new/diy

Fields:

- Project title
- Description
- Featured image
- Author
- Difficulty
- Time
- Estimated cost
- Materials
- Tools
- Instructions
- Step images
- Tips
- Variations
- Gallery
- Affiliate products

Also include:

SEO
Pinterest
Social
Publishing

==================================================
12. TAXONOMY MANAGEMENT
==================================================

Create management pages for:

Categories
Subcategories
Occasions
Seasons
Tags
Styles
Colors
Audiences

Each taxonomy manager should support:

- Name
- Slug
- Description
- Image
- Parent taxonomy where applicable
- SEO title
- Meta description
- Canonical
- Index/noindex
- Featured content
- Sort/order

Support hierarchical relationships where appropriate.

Example:

Christmas
  ├── Christmas Recipes
  ├── Christmas Decor
  ├── Christmas Nails
  ├── Christmas Crafts
  └── Christmas Gifts

Do not hard-code only Christmas.

The same structure must support:

Halloween
Thanksgiving
Weddings
Birthdays
Recipes
DIY
Nails
Home Decor
etc.

==================================================
13. MEDIA LIBRARY
==================================================

Create:

/admin/media

Features:

- Search
- Upload
- Filter
- Sort
- Grid/list view
- Image preview
- Select media
- Edit metadata

Media fields:

- Filename
- Title
- Alt text
- Caption
- Description
- Width
- Height
- File type
- File size
- URL
- Pinterest-ready status

Create image usage information where appropriate.

Example:

Used in:
- 3 Articles
- 1 Recipe
- 2 Pinterest Pins

==================================================
14. AUTHOR MANAGEMENT
==================================================

Create:

/admin/authors

Support:

- Add author
- Edit author
- Profile photo
- Name
- Bio
- Expertise
- Social links
- Website
- Published article count
- Status

Author profiles must connect to the existing public:

/author/:slug

system.

==================================================
15. DRAFT / REVIEW WORKFLOW
==================================================

Create a publishing workflow.

Example:

Draft
→ Review
→ Scheduled
→ Published

Add:

- Save Draft
- Preview
- Submit for Review
- Schedule
- Publish

Show confirmation states.

Do not make publishing destructive.

==================================================
16. CONTENT PREVIEW
==================================================

Create preview modes:

Desktop
Tablet
Mobile

Allow the editor to preview:

- Article
- Recipe
- DIY
- Category
- Author

Use the existing public templates.

The preview should visually match the public website.

==================================================
17. BULK MANAGEMENT
==================================================

Create bulk management UI.

Allow selection of multiple content items.

Bulk actions:

- Publish
- Draft
- Delete
- Change author
- Change category
- Add tags
- Remove tags

Show confirmation before destructive actions.

==================================================
18. CONTENT DUPLICATION
==================================================

Create:

"Duplicate Content"

When duplicated:

- Title should indicate duplicate
- Slug should be regenerated
- Status should become Draft
- SEO canonical should not accidentally remain identical
- Pinterest data should be editable

This is useful for creating similar seasonal content.

==================================================
19. IMPORT / EXPORT
==================================================

Create:

/admin/import-export

Support future UI for:

- Import content
- Export content
- CSV import
- CSV export
- JSON import
- JSON export

Show:

Import status
Progress
Success
Warnings
Errors

This is UI only for now.

Do not implement fake backend processing.

==================================================
20. SITE SETTINGS
==================================================

Create:

/admin/settings

Sections:

General
Branding
Navigation
Homepage
SEO
Social
Pinterest
Advertisements
Newsletter
Analytics
Redirects
Robots
Sitemap

Use reusable settings components.

==================================================
21. ADMIN SEARCH
==================================================

Create global admin search.

Search across:

- Content
- Authors
- Categories
- Tags
- Media

Show grouped results.

==================================================
22. ADMIN RESPONSIVE DESIGN
==================================================

Test admin UI at:

320px
375px
390px
414px
768px
834px
1024px
1280px
1440px

Mobile admin should use:

- Collapsible sidebar
- Responsive tables
- Horizontal table scrolling only when necessary
- Stacked forms
- Touch-friendly controls
- Large enough buttons

Never create accidental horizontal page scrolling.

==================================================
23. ADMIN ACCESS / PERMISSIONS UI
==================================================

Create a future-ready user roles interface.

Roles:

- Administrator
- Editor
- Author
- Contributor

Create permission concepts:

- Manage content
- Publish content
- Manage taxonomy
- Manage media
- Manage authors
- Manage monetization
- Manage SEO
- Manage settings

This is a UI representation only.

Do not implement real authentication yet.

==================================================
24. ACTIVITY LOG
==================================================

Create:

/admin/activity

Show:

- User
- Action
- Content
- Date/time
- Status

Examples:

"Published article"
"Updated recipe"
"Changed category"
"Uploaded image"
"Updated SEO metadata"

Use realistic placeholder activity.

==================================================
25. SITE HEALTH
==================================================

Create:

/admin/site-health

Show checks for:

- Broken links
- Missing metadata
- Missing alt text
- Missing canonical
- Orphan pages
- 404 errors
- Redirect errors
- Sitemap issues
- Robots configuration
- Schema issues

Use statuses:

Healthy
Warning
Needs attention

These are UI states, not actual scans.

==================================================
26. DESIGN REQUIREMENTS
==================================================

The admin interface should be:

- Clean
- Professional
- Fast-feeling
- Information-dense but readable
- Consistent
- Accessible
- Responsive
- Scalable

Do not make it visually identical to the public website.

The public site should remain editorial and inspirational.

The admin should feel like a serious publishing CMS.

==================================================
27. UNIVERSAL DATA ARCHITECTURE
==================================================

Use reusable concepts instead of creating separate systems for every page.

Conceptually:

Content
Taxonomy
Media
Author
SEO
Pinterest
Social
Monetization
Publishing

All content types should connect to the same universal architecture.

==================================================
28. DO NOT BREAK EXISTING SYSTEMS
==================================================

Preserve all existing:

- Homepage
- Category pages
- Article pages
- Recipe pages
- DIY pages
- Author pages
- Search
- Responsive layouts
- SEO
- Ads
- Pinterest
- Social sharing
- Existing routes
- Existing components

Do not replace the public website.

Add the admin system alongside it.

==================================================
FINAL GOAL
==================================================

Create a complete WordPress-like editorial CMS interface capable of managing thousands of lifestyle content items.

The system must support:

Content
Taxonomy
Authors
Media
Publishing
SEO
Pinterest
Social sharing
Monetization
Site settings
Site health

The architecture must remain universal so new categories, occasions and content types can be added later without rebuilding the CMS.

Build the front-end/admin UI and reusable component architecture now.

Real database, authentication, storage, publishing, analytics and API integrations will be connected during the production/backend implementation.