---
title: Blog
layout: PageLayout
sections:
  - type: QuoteSection
    elementId: ''
    colors: colors-b
    quote: |
      # Experience it for yourself
    backgroundImage:
      type: ImageBlock
      url: /images/bg.png
      altText: Product Marketing Manager Quote
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0", "ml-0", "mr-0"]
        padding: ["pt-36", "pb-12", "pr-4", "pl-4"]
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    title: Current offers
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0", "ml-0", "mr-0"]
        padding: ["pt-12", "pb-12", "pr-4", "pl-4"]
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin: ["mt-0", "mb-12"]
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - type: HeroSection
    elementId: ''
    colors: colors-f
    title: All about the art of selling fish
    subtitle: Fresh. Better. Faster
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Get Started
        url: /
        style: primary
        elementId: hero-main-button
      - type: Button
        label: Learn More
        url: /
        style: secondary
    feature:
      type: ImageBlock
      url: /images/hero-image.png
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0']
        padding: ['pt-12', 'pb-12', 'pl-4', 'pr-4']
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
        margin: ['mt-5', 'mb-5']
      text:
        textAlign: left
        margin: ['mt-0', 'mb-10']
      actions:
        justifyContent: flex-start
---
