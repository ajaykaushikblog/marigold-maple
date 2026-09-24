PHASE 7 — CREATE THE UNIVERSAL SEARCH RESULTS PAGE

The following public pages are already completed:

1. Homepage
2. Universal Category Page
3. Universal Article Page
4. Universal Recipe Page
5. Universal DIY / Tutorial Page
6. Universal Author Profile Page

Do NOT redesign or modify any completed page.

Keep the exact existing design system:
- typography
- colors
- spacing
- header
- footer
- cards
- image treatment
- badges
- filters
- newsletter
- advertisements
- responsive behavior

Now create the UNIVERSAL SEARCH RESULTS PAGE.

This must be the main site-wide search experience for the entire lifestyle publication.

==================================================
1. GLOBAL HEADER
==================================================

Reuse the existing global header.

The existing search icon/input should navigate to the search page.

Do not create a separate visual header.

==================================================
2. SEARCH PAGE HEADER
==================================================

Create a large editorial search area containing:

Search input

Search button

Optional search icon

Example:

Search for recipes, wedding ideas, DIY projects...

The search query must be dynamic.

Example URL:

/search?q=christmas

Do not hard-code the example query.

==================================================
3. SEARCH RESULTS SUMMARY
==================================================

Display:

Search results for:
"Christmas"

Example:

1,248 results

The query and result count must be dynamic.

If there are no results, show an appropriate empty state.

==================================================
4. SEARCH RESULT FILTERS
==================================================

Create filtering options for:

Content Type

Category

Subcategory

Occasion

Season

Style

Audience

Author

Allow multiple filters where appropriate.

Example:

Content Type:
All
Articles
Recipes
DIY
Guides
Ideas

Category:
All
Food
Beauty
DIY
Weddings
Home
Gifts

Occasion:
Christmas
Halloween
Thanksgiving
Valentine's Day
etc.

All filter values must come from the site's taxonomy/data system.

Do not hard-code filters into the final architecture.

==================================================
5. SORTING
==================================================

Create a sort control supporting:

Relevance

Latest

Most Popular

Most Saved

Editor's Picks

The selected sorting method must be visible.

==================================================
6. SEARCH RESULT CARDS
==================================================

Reuse the existing card system.

Search results must support:

Article

Recipe

DIY

Guide

Listicle

Mixed content

Each result should support:

Featured image

Content type

Category

Occasion when relevant

Title

Short excerpt

Author

Date

Read time when available

Do not create a completely new card style.

==================================================
7. SEARCH RESULT GRID
==================================================

Desktop:

Use a clean editorial grid.

Tablet:

Reduce columns appropriately.

Mobile:

Use a single-column layout or carefully optimized mobile cards.

No horizontal scrolling.

==================================================
8. PAGINATION / LOAD MORE
==================================================

Support:

Pagination

OR

Load More

The design must work for:

0 results

1 result

10 results

100 results

10,000+ results

Do not assume search results are small.

==================================================
9. NO RESULTS STATE
==================================================

Create a polished empty state.

Example:

No results found for "xyz"

Try:

Checking your spelling

Using fewer words

Searching another topic

Then show:

Popular Categories

Popular Occasions

Trending Content

This should help users continue browsing.

==================================================
10. SEARCH SUGGESTIONS
==================================================

Create an optional search suggestion/autocomplete state.

When the user types:

christ

Possible suggestions could include:

Christmas

Christmas Recipes

Christmas Decor

Christmas Nails

Christmas Gifts

Christmas Crafts

The suggestions must eventually come from actual CMS content/taxonomy.

==================================================
11. RECENT / TRENDING SEARCHES
==================================================

Create an optional state for:

Popular Searches

Trending Searches

Recent Searches

These should be configurable.

Do not require users to have search history.

==================================================
12. SEARCH URL STRUCTURE
==================================================

Design around:

/search?q=query

Additional filters may use URL parameters where appropriate.

However:

Search result pages should NOT be treated as indexable SEO landing pages by default.

The design should support the eventual implementation using:

noindex, follow

for internal search result URLs.

==================================================
13. SEARCH SEO / TECHNICAL REQUIREMENTS
==================================================

The search page must support:

Dynamic search query

Canonical handling

Robots/noindex control

Open Graph metadata where appropriate

Clean URLs

Do not create thousands of indexable duplicate search/filter URLs.

Curated SEO landing pages will be handled separately from internal search.

==================================================
14. ADVERTISEMENTS
==================================================

Reuse the existing advertisement system.

Support:

Top advertisement

Inline advertisement

Desktop sidebar advertisement

Sticky sidebar advertisement where appropriate

Mobile inline advertisement

Do not allow ads to overlap search results.

Reserve ad space to reduce layout shift.

==================================================
15. NEWSLETTER
==================================================

Reuse the existing newsletter component.

Do not redesign it.

==================================================
16. FOOTER
==================================================

Reuse the existing footer.

==================================================
17. SEARCH DATA MODEL
==================================================

Design the search experience around content with fields such as:

id

title

slug

excerpt

featuredImage

contentType

category

subcategory

occasions

seasons

tags

styles

audiences

author

publishedDate

updatedDate

readTime

status

featured

popularScore

savedCount

==================================================
18. SEARCH RESULT TYPES
==================================================

Demonstrate the same search page with mixed results.

Example search:

Christmas

Possible results:

Christmas Cookie Recipes
Christmas Nail Ideas
Christmas DIY Decorations
Christmas Wedding Ideas
Christmas Gift Ideas
Christmas Home Decor

The result page must mix content types naturally.

==================================================
19. RESPONSIVE DESIGN
==================================================

Support:

320px
375px
390px
414px
768px
834px
1280px
1440px
1920px

Mobile search must be extremely easy to use.

Make the search field touch-friendly.

Filters should work well on mobile using:

Filter button

Bottom sheet

Drawer

or another clean mobile pattern.

Do not create tiny desktop-style controls on mobile.

==================================================
20. IMPORTANT
==================================================

Do NOT build the CMS/admin dashboard yet.

Do NOT redesign the Homepage.

Do NOT redesign Category Pages.

Do NOT redesign Article Pages.

Do NOT redesign Recipe Pages.

Do NOT redesign DIY Pages.

Do NOT redesign Author Pages.

Reuse existing components wherever possible.

Create ONLY the Universal Search Results Page and the reusable search components required by it.

The final search experience should feel like a premium editorial lifestyle publication and work across thousands of articles, recipes, DIY projects, categories and occasions.