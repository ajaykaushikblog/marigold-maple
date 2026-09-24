PHASE 4 — CREATE THE UNIVERSAL RECIPE PAGE

The following are already completed:

1. Homepage
2. Universal Category Page
3. Universal Article Page

Do NOT redesign or modify those completed pages.

Keep the exact existing design system:
- typography
- colors
- spacing
- header
- footer
- card styles
- image treatment
- badges
- newsletter
- advertisements
- responsive behavior

Now create a UNIVERSAL RECIPE PAGE.

This is a specialized content template inside the larger universal lifestyle publishing system.

It must work for recipes across every category, occasion, season and food type.

==================================================
RECIPE TYPES
==================================================

The template must support:

Breakfast
Lunch
Dinner
Appetizers
Side Dishes
Desserts
Cookies
Cakes
Drinks
Cocktails
Mocktails
Holiday Recipes
Christmas Recipes
Halloween Recipes
Thanksgiving Recipes
Valentine's Recipes
Party Food
Family Meals
Quick Meals
Healthy Recipes
Baking
Seasonal Recipes

These are examples only.

The CMS must be able to add future recipe categories.

==================================================
RECIPE PAGE STRUCTURE
==================================================

Create:

1. GLOBAL HEADER

Reuse the existing website header.

Do not create a new header.

--------------------------------------------------

2. BREADCRUMBS

Example:

Home → Recipes → Desserts → Christmas Cookies

All breadcrumb values must be dynamic.

--------------------------------------------------

3. RECIPE HEADER

Include:

Category

Recipe title

Short description

Author

Published date

Updated date

Featured image

Optional rating

Example:

Christmas Desserts

Easy Christmas Sugar Cookies

These classic sugar cookies are simple to make and perfect
for holiday decorating.

By Jane Smith
December 10, 2026

Everything must be dynamic.

--------------------------------------------------

4. RECIPE HERO IMAGE

Large editorial food image.

Support:

- responsive image
- alt text
- caption
- image credit
- Pinterest-friendly vertical image

--------------------------------------------------

5. RECIPE QUICK INFORMATION

Create a visually clear recipe information area containing:

Prep Time

Cook Time

Total Time

Servings

Calories

Difficulty

Optional Cost

Example:

Prep
20 min

Cook
12 min

Total
32 min

Servings
24

The fields must be optional.

If a field does not exist, the design should gracefully hide it.

--------------------------------------------------

6. RECIPE ACTION BUTTONS

Create:

Print Recipe

Download PDF

Save Recipe

Share

Pinterest

Copy Link

The buttons should be prominent but elegant.

Do not make them look like a SaaS dashboard.

--------------------------------------------------

7. INGREDIENTS

Create a dedicated Ingredients section.

Support:

Ingredient groups

Ingredient name

Quantity

Unit

Optional notes

Example:

For the Cookies

2 cups flour

1 cup sugar

1/2 cup butter

1 egg

Ingredient groups must be optional.

--------------------------------------------------

8. SERVING ADJUSTER

Create a serving adjustment control.

Example:

Servings: 4

[-] 4 [+]

When servings change, the UI should communicate that ingredient quantities can scale.

For this Figma prototype, demonstrate the interaction visually.

==================================================
9. EQUIPMENT

Create an optional Equipment section.

Example:

Mixing bowl

Whisk

Baking sheet

Parchment paper

Hide the entire section when no equipment is provided.

==================================================
10. INSTRUCTIONS

Create a numbered step-by-step instruction system.

Each step supports:

Step number

Heading

Instruction text

Optional image

Optional video

Example:

1. Prepare the dough

2. Chill the dough

3. Shape the cookies

4. Bake

5. Decorate

The design must support recipes with any number of steps.

==================================================
11. RECIPE NOTES / TIPS

Create optional sections for:

Recipe Notes

Tips

Variations

Substitutions

Storage

Make Ahead

These should only appear when content exists.

==================================================
12. NUTRITION

Create an optional nutrition section.

Support:

Calories

Protein

Carbohydrates

Fat

Fiber

Sugar

Sodium

Nutrition information should be clearly separated from the main recipe instructions.

==================================================
13. RECIPE CARD

Create a visually distinct printable-style Recipe Card component.

It should contain:

Recipe name

Description

Prep time

Cook time

Total time

Servings

Ingredients

Instructions

Nutrition

Author

This component should be suitable for the Print Recipe action.

==================================================
14. PINTEREST

The recipe must support:

Pinterest Save button

Pinterest title

Pinterest description

Pinterest image

Vertical Pinterest image

The design must remain an editorial website, not a Pinterest clone.

==================================================
15. AFFILIATE PRODUCTS

Create an optional section:

"Tools & Products Used"

Support:

Product image

Product name

Short description

Affiliate link

Optional price

Affiliate disclosure

Do not show the section if no products are assigned.

==================================================
16. ADVERTISEMENT SYSTEM

Reuse the existing advertisement design.

Support:

Top advertisement

Inline advertisement

Recipe-middle advertisement

Bottom advertisement

Desktop sticky sidebar advertisement

Mobile inline advertisement

Ads must never overlap recipe content.

Reserve advertisement space to reduce layout shift.

==================================================
17. AUTHOR BIO

Reuse the existing author component.

Include:

Author photo

Name

Bio

Expertise

Social links

Author profile link

==================================================
18. RELATED RECIPES

Create an automatic related recipe section.

Approximately 10 recipes.

Matching can use:

Same category

Same subcategory

Same occasion

Same season

Shared tags

Similar ingredients

Similar recipe type

Also allow manually selected related recipes.

==================================================
19. MORE INSPIRATION

After related recipes, add:

More Inspiration

Use the existing article-card system.

==================================================
20. NEWSLETTER

Reuse the existing newsletter component.

Do not redesign it.

==================================================
21. FOOTER

Reuse the existing footer.

==================================================
RECIPE DATA MODEL

Design the page around these dynamic fields:

id

title

slug

description

featuredImage

imageAlt

imageCaption

author

publishedDate

updatedDate

category

subcategory

occasions

seasons

tags

styles

prepTime

cookTime

totalTime

servings

calories

difficulty

cost

ingredients

ingredientGroups

equipment

instructions

instructionImages

notes

tips

variations

substitutions

storage

makeAhead

nutrition

gallery

products

pinterestTitle

pinterestDescription

pinterestImage

seoTitle

metaDescription

canonicalUrl

robots

schemaType

status

relatedRecipes

==================================================
RECIPE SCHEMA SUPPORT

Design the template so the eventual implementation can support
Recipe structured data including:

name

image

author

description

prepTime

cookTime

totalTime

recipeYield

recipeIngredient

recipeInstructions

nutrition

datePublished

dateModified

aggregateRating when genuine rating data exists

Do not invent ratings or reviews.

==================================================
MULTIPLE RECIPE EXAMPLES

Demonstrate that the same template works with different recipes.

Example 1:

Easy Christmas Sugar Cookies

Category:
Desserts

Occasion:
Christmas

Season:
Winter

Example 2:

Easy Halloween Party Punch

Category:
Drinks

Occasion:
Halloween

Season:
Fall

Example 3:

Creamy Garlic Pasta

Category:
Dinner

Subcategory:
Pasta

Occasion:
None

Season:
All Season

The visual template must remain the same.

==================================================
RESPONSIVE DESIGN

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

Mobile should prioritize:

Recipe title

Hero image

Quick recipe information

Recipe actions

Ingredients

Instructions

Tips

Nutrition

Related recipes

Do not create horizontal scrolling.

==================================================
IMPORTANT

Do NOT build the CMS/admin dashboard yet.

Do NOT build the DIY page yet.

Do NOT redesign the Homepage.

Do NOT redesign the Category Page.

Do NOT redesign the Article Page.

Reuse existing components wherever possible.

Create only the Universal Recipe Page and the reusable recipe-specific components required for it.

The final result should feel like a premium lifestyle publication recipe experience, not a generic recipe app.

The Recipe Page must fit seamlessly into the existing universal website system.