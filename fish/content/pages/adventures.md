---
title: Adventures
layout: AdvancedLayout
sections:
  - type: HeroSection
    variant: variant-c
    colors: colors-f
    width: full
    height: short
    alignHoriz: center
    topGap: none
    bottomGap: none
    title: We love our sea, we care about it, and we want to enjoy it for years to come.
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-a
    width: full
    alignHoriz: center
    title: Our Team
    topGap: small
    bottomGap: large
    people:
      - content/data/team/dianne-ameter.json
      - content/data/team/theodore-handle.json
      - content/data/team/gustav-purpleson.json
      - content/data/team/hugh-saturation.json
  - type: CtaSection
    variant: variant-b
    colors: colors-h
    width: wide
    height: short
    topGap: none
    bottomGap: none
    alignHoriz: left
    title: Let's go fishing!
    text: |-
      The Stackbit theme is felxible and scalable to every need.


      It can manage any layout and any screen
    actions:
      - type: Button
        label: Contact Us
        url: "https://www.stackbit.com/"
        style: secondary
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    width: full
    alignHoriz: center
    title: Try A Class Today
    topGap: none
    bottomGap: large
    posts:
      - content/pages/blog/as-fresh-as-it-gets.md
      - content/pages/blog/kayak-fishing-5-advantages-and-benefits.md
      - content/pages/blog/sustainability-at-its-purest.md
  - type: QuoteSection
    colors: colors-c
    width: full
    height: tall
    topGap: large
    bottomGap: none
    alignHoriz: left
    quote: |-
      “In every species of fish I’ve angled for, it is the ones that have got away that thrill me the most, the ones that keep fresh in my memory. So I say it is good to lose fish. If we didn’t, much of the thrill of angling would be gone.”
    name: Ray Bergman
    backgroundImage:
      type: ImageBlock
      url: "/images/quote-bg.jpg"
      opacity: 80
---
