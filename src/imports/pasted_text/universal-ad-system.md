PHASE 8 — CREATE THE UNIVERSAL ADVERTISEMENT & MONETIZATION SYSTEM

Keep the existing design system, typography, spacing, colors, components, navigation, responsive behavior and editorial style.

DO NOT redesign the website from scratch.

Build a reusable, scalable advertisement and monetization system that can be used across the entire Universal Lifestyle CMS.

The website will eventually monetize through:
- Google AdSense
- Other display advertising networks
- Amazon affiliate links
- Other affiliate programs
- Sponsored placements
- Product recommendation placements

The goal is to create the COMPLETE FRONT-END ADVERTISEMENT SYSTEM now so it can later be connected to a real ad network/CMS.

==================================================
1. CREATE A CENTRAL AD SYSTEM
==================================================

Create reusable advertisement components instead of manually designing ads inside individual pages.

Create these reusable components:

- AdSlot
- TopBannerAd
- InContentAd
- MidArticleAd
- BottomArticleAd
- SidebarAd
- StickySidebarAd
- MobileInlineAd
- HomepageAd
- CategoryPageAd
- RelatedContentAd
- AffiliateProductBlock
- SponsoredContentBlock

Every ad component must support:
- Ad slot ID
- Ad type
- Desktop/mobile visibility
- Active/inactive state
- Placeholder state
- Reserved dimensions
- Optional label such as "Advertisement"
- Optional custom content
- Optional affiliate content
- Optional sponsored content

Do not hard-code advertisements into individual pages.

==================================================
2. ARTICLE PAGE ADS
==================================================

Update the universal article layout so advertisements can appear in reusable positions:

Desktop:
- Optional ad below header
- Optional ad before article content
- Sticky sidebar advertisement
- Optional in-content advertisement
- Optional mid-article advertisement
- Optional advertisement near article ending
- Optional advertisement before related content

Mobile:
- Optional top advertisement
- Inline advertisement between content sections
- Mid-article advertisement
- Advertisement before related content

Advertisements must NEVER overlap:
- Text
- Images
- Buttons
- Navigation
- Sticky elements

Reserve space for advertisements to reduce layout shift.

==================================================
3. CATEGORY / OCCASION PAGE ADS
==================================================

Add reusable advertisement positions to:

/weddings/
/christmas/
/halloween/
/thanksgiving/
/recipes/
/nails/
/diy/
/home-decor/
/birthdays/

and all future category and occasion pages.

Support:

- Top banner
- Between content sections
- Grid advertisement
- Sidebar advertisement on desktop
- Mobile inline advertisement

Do not hard-code category names.

==================================================
4. HOMEPAGE ADS
==================================================

Add optional monetization areas to the homepage:

- Top promotional advertisement
- Between major editorial sections
- Native-style sponsored content area
- Newsletter-adjacent advertisement
- Bottom advertisement

Keep advertisements visually separated from editorial content.

The homepage must still feel like an editorial lifestyle website, not an advertising-heavy website.

==================================================
5. STICKY DESKTOP SIDEBAR
==================================================

Create a reusable StickySidebarAd component.

Requirements:

- Desktop/tablet only where appropriate
- Sticky positioning
- Does not cover content
- Does not overlap footer
- Has reserved dimensions
- Has "Advertisement" label
- Stops before reaching footer
- Automatically disappears or changes layout on mobile

Create realistic placeholder dimensions for common display ad formats.

==================================================
6. MOBILE AD SYSTEM
==================================================

Mobile advertisements must NOT use the desktop sticky sidebar.

Create responsive mobile inline advertisement components.

Requirements:

- Full-width responsive container
- Reserved height
- No horizontal scrolling
- No content overlap
- Clear spacing before and after advertisement
- "Advertisement" label
- Supports different ad sizes
- Does not disrupt reading experience

Test the design at:

320px
375px
390px
414px

==================================================
7. AFFILIATE PRODUCT BLOCK
==================================================

Create a reusable AffiliateProductBlock.

It should support:

- Product image
- Product name
- Short description
- Price
- Optional rating
- CTA button
- Affiliate disclosure
- Affiliate destination/link field
- Optional merchant name

Example:

"Shop This Look"

Product Card:
Image
Product Name
Price
"View Product"

Include a small disclosure such as:

"This post may contain affiliate links. We may earn a commission if you purchase through our links."

Do not make the affiliate block look identical to a normal editorial article card.

==================================================
8. SPONSORED CONTENT BLOCK
==================================================

Create a reusable SponsoredContentBlock.

Fields:

- Sponsored label
- Brand name
- Logo
- Image
- Title
- Description
- CTA
- Destination URL

Clearly distinguish sponsored content from normal editorial content.

==================================================
9. AD MANAGEMENT UI
==================================================

Create a front-end concept for a future CMS Advertisement Manager.

Add an admin section:

CMS
→ Monetization
→ Advertisements

Create a dashboard showing:

- Total active ad slots
- Active ads
- Inactive ads
- Sponsored placements
- Affiliate placements
- Desktop placements
- Mobile placements

Create an ad editor with:

- Ad name
- Ad slot ID
- Ad type
- Placement
- Device targeting
- Start date
- End date
- Status
- Ad code placeholder
- Image
- Destination URL
- Affiliate URL
- Sponsored brand
- Disclosure text

This is a UI/UX representation for the future CMS.
Do not implement a real advertising network.

==================================================
10. AD SLOT CONFIGURATION
==================================================

Create a reusable configuration concept.

Each slot should conceptually contain:

{
  id,
  name,
  placement,
  type,
  device,
  status,
  startDate,
  endDate,
  code,
  image,
  destinationUrl
}

Examples:

header_top
homepage_mid
article_top
article_mid
article_bottom
sidebar_sticky
category_top
category_mid
mobile_inline_1
mobile_inline_2
related_content
footer

Do not hard-code this only for the current pages.

==================================================
11. ADSENSE-READY DESIGN
==================================================

Make the front-end structure compatible with future Google AdSense integration.

Important:

Do NOT pretend that actual AdSense ads are currently connected.

Use clearly marked placeholder ad containers.

The architecture should allow actual ad code to be inserted later without redesigning the website.

Do not place fake ad earnings, fake CPC, fake RPM or fake performance data.

==================================================
12. AD PERFORMANCE DASHBOARD UI
==================================================

Create a future-ready Monetization Analytics section.

Show placeholder dashboard cards for:

- Impressions
- Clicks
- CTR
- Estimated Revenue
- RPM
- Affiliate Clicks
- Affiliate Revenue
- Sponsored Revenue

Clearly mark these as dashboard fields/placeholders rather than real data.

Create charts/cards showing how the future dashboard could display performance.

==================================================
13. RESPONSIVE BEHAVIOR
==================================================

Desktop:

Editorial content + optional sticky advertisement sidebar.

Tablet:

Responsive advertisement placement without breaking the editorial grid.

Mobile:

Single-column article/content layout with inline advertisements.

Never create horizontal scrolling.

Never allow advertisements to cover content.

==================================================
14. PERFORMANCE / CORE WEB VITALS DESIGN
==================================================

Design the system so future implementation can:

- Reserve ad space before ads load
- Prevent layout shifts
- Lazy-load below-the-fold advertisements
- Avoid blocking primary content
- Load third-party ad scripts separately
- Keep advertisements from blocking article content
- Avoid unnecessary JavaScript

Do not create animations that make advertisements distracting.

==================================================
15. UNIVERSAL COMPATIBILITY
==================================================

The advertisement system must work with every existing content type:

- Article
- Recipe
- DIY/Tutorial
- Listicle
- Guide
- Product Guide
- Future content types

And every taxonomy:

- Categories
- Subcategories
- Occasions
- Seasons
- Tags
- Styles
- Colors
- Audiences

Do not create separate ad designs for every category.

Use reusable components.

==================================================
16. DESIGN STYLE
==================================================

Maintain the existing premium editorial design.

Advertisements should feel integrated but clearly distinguishable from editorial content.

Avoid:

- Excessive borders
- Huge ad boxes
- Distracting colors
- Excessive animations
- Fake advertisements
- Clutter
- Aggressive popups
- Full-screen interruptions

The website should remain primarily a lifestyle inspiration/editorial platform.

==================================================
17. IMPLEMENTATION REQUIREMENT
==================================================

Create reusable React components and data structures for the advertisement system.

Do not duplicate large blocks of JSX.

Use reusable components and configuration-driven placement.

Update existing:

- Homepage
- Universal Category Page
- Universal Article Page
- Universal Recipe Page
- Universal DIY Page
- Author Page
- Search Page

to demonstrate the advertisement system.

Do not break existing routes.

Do not remove existing functionality.

Run type checking/build validation after implementation.

==================================================
FINAL GOAL
==================================================

The result should be a complete reusable monetization design system for a large Pinterest-first lifestyle website.

The same advertisement architecture must be able to support thousands of future pages without requiring a redesign.

Build the UI and component architecture now.

Real Google AdSense, affiliate networks and analytics integrations will be connected later in the production/backend implementation.