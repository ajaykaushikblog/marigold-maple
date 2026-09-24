PHASE 9 — CREATE THE UNIVERSAL PINTEREST CONTENT & SHARING SYSTEM

Keep the existing design system, typography, spacing, colors, components, navigation, responsive behavior, editorial layouts, CMS structure, and monetization system.

DO NOT redesign the website from scratch.

Build a reusable Pinterest-first content and social sharing system for the entire Universal Lifestyle CMS.

The website is an editorial lifestyle inspiration platform designed to generate visually strong, saveable, shareable content.

==================================================
1. PINTEREST-FIRST CONTENT ARCHITECTURE
==================================================

Create reusable Pinterest metadata fields for every content item:

- Pinterest title
- Pinterest description
- Pinterest image
- Pinterest destination URL
- Optional Pinterest board/category
- Optional pin template
- Enable/disable Pinterest sharing

Support these fields for:

- Articles
- Recipes
- DIY/Tutorials
- Listicles
- Guides
- Product Guides
- Future content types

Do not hard-code Pinterest fields only into recipes.

==================================================
2. PINTEREST SAVE BUTTON
==================================================

Create a reusable Pinterest Save button component.

It should work on:

- Featured images
- Article images
- Recipe images
- DIY images
- Pinterest-specific images
- Gallery images where appropriate

Desktop:
- Show Save button on image hover where appropriate.

Mobile:
- Provide an accessible Save action without requiring hover.

The button must not cover important image content.

Use a clean editorial implementation rather than making the entire website look like Pinterest.

==================================================
3. PINTEREST IMAGE SYSTEM
==================================================

Create a reusable Pinterest image specification.

Primary Pinterest format:

1000 × 1500 px
2:3 aspect ratio

Create reusable templates for:

- Standard editorial article
- Recipe
- Holiday/occasion
- Beauty/nails
- DIY/craft
- Wedding
- Home decor
- Gift guide
- Listicle

Each template should support:

- Large vertical image
- Content title
- Optional short supporting text
- Optional website branding
- Consistent typography
- Safe margins
- Strong visual hierarchy

Keep the templates visually consistent with the existing website.

Do not turn the website itself into a Pinterest clone.

==================================================
4. PINTEREST IMAGE PREVIEW
==================================================

Create a CMS preview component showing:

"Pinterest Preview"

Display:

- Pin image
- Pinterest title
- Pinterest description
- Destination URL
- Save button preview

Include an example preview for:

"25 Elegant Christmas Nail Ideas"

But make the component dynamic so the same system works for:

Halloween
Thanksgiving
Christmas
Weddings
Recipes
DIY
Beauty
Home Decor
Birthdays
etc.

==================================================
5. ARTICLE IMAGE PIN ACTIONS
==================================================

Update the universal article page so editors can associate Pinterest information with article images.

For an article:

Featured Image
→ Pinterest Image
→ Pinterest Title
→ Pinterest Description

Allow optional additional Pinterest images within the article.

Do not require every normal article image to be a Pinterest pin.

==================================================
6. RECIPE PIN SYSTEM
==================================================

Update the universal Recipe page to support Pinterest sharing.

Recipe Pinterest fields:

- Pinterest title
- Pinterest description
- Pinterest image
- Optional alternate pin images

Create a recipe pin preview.

Example:

"Easy Creamy Garlic Pasta"
Vertical 2:3 image
Recipe-focused visual hierarchy
Save to Pinterest CTA

Do not remove existing Recipe structured data or recipe functionality.

==================================================
7. DIY PIN SYSTEM
==================================================

Update the universal DIY/Tutorial page.

Support:

- Project Pinterest image
- Pinterest title
- Pinterest description
- Step image pin options
- Finished project pin

Create a DIY Pinterest preview.

==================================================
8. SOCIAL SHARING SYSTEM
==================================================

Create a reusable SocialShare component.

Support:

- Pinterest
- Facebook
- X
- Copy Link
- Native Share where supported

Use accessible buttons.

Desktop:
Place sharing near article metadata or article content where appropriate.

Mobile:
Use a compact sharing row or sticky/mobile-friendly sharing action.

Do not allow sharing controls to cover content.

==================================================
9. COPY LINK
==================================================

Create a reusable Copy Link interaction.

States:

Default:
"Copy link"

Success:
"Link copied"

Error:
"Unable to copy"

Do not require a page reload.

==================================================
10. SOCIAL PREVIEW / OPEN GRAPH
==================================================

Create CMS fields for:

- Social title
- Social description
- Social image
- Open Graph image
- X/Twitter image

Create a social preview UI showing approximately how a shared article could appear.

Keep this separate from Pinterest metadata because Pinterest and general social sharing can use different assets.

==================================================
11. CMS PINTEREST MANAGEMENT
==================================================

Create:

CMS
→ Content
→ Pinterest

and include Pinterest controls inside the content editor.

Pinterest editor fields:

- Pinterest title
- Pinterest description
- Pinterest image
- Pin template
- Enable Save button
- Social sharing enabled
- Featured pin
- Alternate pin images

Add validation indicators:

- Title present
- Description present
- Image present
- Correct 2:3 image ratio
- Destination URL present

These are UI validation indicators only.

==================================================
12. PIN TEMPLATE SELECTOR
==================================================

Create a reusable template selector.

Templates:

1. Standard
2. Recipe
3. Holiday
4. Beauty
5. DIY
6. Wedding
7. Home Decor
8. Gift Guide
9. Listicle

Show visual previews.

Allow the editor to select one template.

The actual production implementation can later generate/export the corresponding Pinterest image.

==================================================
13. MULTIPLE PINS PER ARTICLE
==================================================

The system must support multiple Pinterest assets for a single content item.

Example:

Article:
"25 Halloween Party Ideas"

Pins:

1. Main Halloween Party Ideas
2. Halloween Food Ideas
3. Halloween Decor Ideas
4. Halloween Games
5. Halloween Drinks

Create a CMS UI where an editor can:

- Add pin
- Edit pin
- Duplicate pin
- Delete pin
- Set primary pin

Do not assume one article equals one Pinterest image.

==================================================
14. PINTEREST-FRIENDLY CONTENT BLOCKS
==================================================

Create optional content blocks that are naturally suitable for Pinterest:

- Idea list
- Step-by-step tutorial
- Recipe card
- Checklist
- Tips
- Product collection
- Inspiration gallery
- Before/after
- Quote/inspiration block

These should remain editorial components, not social-media widgets.

==================================================
15. IMAGE OPTIMIZATION REQUIREMENTS
==================================================

Design the system to support:

- Responsive images
- Correct dimensions
- Descriptive image filenames
- Alt text
- Lazy loading for below-fold images
- Modern image formats where supported
- Optimized image sizes
- Pinterest 2:3 assets
- Separate social images where needed

Do not use unnecessarily huge images.

==================================================
16. PINTEREST-FRIENDLY URL / DESTINATION
==================================================

Every Pinterest asset should point to the canonical content URL.

Example:

Pinterest Pin
→ /christmas/christmas-nail-ideas/

Not:

Pinterest Pin
→ random query URL
→ tracking-only URL
→ duplicate URL

Keep the canonical URL system already created in the SEO architecture.

==================================================
17. UNIVERSAL TAXONOMY COMPATIBILITY
==================================================

Pinterest functionality must work across:

Categories
Subcategories
Occasions
Seasons
Tags
Styles
Colors
Audiences

Examples:

Christmas + Nails
Halloween + Crafts
Thanksgiving + Recipes
Wedding + Decor
Birthday + Party Ideas
DIY + Home Decor

Do not create separate Pinterest systems for individual categories.

==================================================
18. HOMEPAGE / CATEGORY PINTEREST ACTIONS
==================================================

Support Pinterest Save actions on:

- Homepage featured content
- Category featured content
- Article cards where appropriate
- Recipe cards
- DIY cards
- Inspiration galleries

Avoid placing a Save button on every tiny UI element.

Prioritize important visual content.

==================================================
19. MOBILE EXPERIENCE
==================================================

Test at:

320px
375px
390px
414px

Pinterest and social controls must:

- Remain tappable
- Never overlap text
- Never create horizontal scrolling
- Never cover important content
- Maintain adequate touch targets

==================================================
20. ACCESSIBILITY
==================================================

All sharing buttons must have:

- Accessible labels
- Keyboard focus states
- Visible focus indicators
- Appropriate button semantics
- Screen-reader-friendly labels

Do not rely only on icons.

==================================================
21. CMS DATA MODEL
==================================================

Create reusable data structures conceptually similar to:

pinterest:
{
  enabled,
  title,
  description,
  primaryImage,
  template,
  alternatePins[]
}

social:
{
  enabled,
  title,
  description,
  image
}

alternatePins:
{
  id,
  title,
  description,
  image,
  template,
  isPrimary
}

Do not hard-code these values into individual components.

==================================================
22. KEEP EXISTING FUNCTIONALITY
==================================================

Do NOT break:

- Homepage
- Universal Category Page
- Universal Article Page
- Universal Recipe Page
- Universal DIY Page
- Author Page
- Search Page
- Advertisement system
- Existing routing
- Existing responsive layouts
- Existing SEO fields
- Existing structured data

Use reusable components.

==================================================
FINAL GOAL
==================================================

Create a complete Pinterest-first publishing and sharing system that can support thousands of future lifestyle articles.

The system should allow an editor to create highly visual, Pinterest-friendly content without requiring developers to manually modify each page.

The website itself must remain a premium editorial lifestyle website, not a Pinterest clone.

Build the reusable UI, components, data structures, and CMS concepts now.

Actual Pinterest API integration and automated image generation can be connected later during production/backend implementation.