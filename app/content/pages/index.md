---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: We write things. Sometimes it’s important, most times it’s not.
    actions:
      - type: Button
        url: '#'
        label: Download
        style: primary
    media:
      type: ImageBlock
      url: /images/hero.png
      altText: Image alt text
      caption: Image caption
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: flex-start
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-4
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-6
      text:
        textAlign: left
        margin:
          - mt-0
          - mb-8
      actions:
        justifyContent: flex-start
  - type: FeaturedPostsSection
    elementId: ''
    variant: variant-b
    colors: colors-a
    title: Recent posts
    showDate: true
    showAuthor: true
    actions:
      - type: Button
        label: Read all posts
        url: /
        style: secondary
    posts:
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: screen
        width: wide
        margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0']
        padding: ['pt-12', 'pb-12', 'pr-4', 'pl-4']
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
        margin: ['mb-20']
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin: ['mt-0', 'mb-12']
      actions:
        justifyContent: center
  - type: QuoteSection
    elementId: ''
    colors: colors-a
    backgroundImage:
      url: /images/quote-bg.png
      altText: Product Marketing Manager Quote
    quote: >-
      “Since I started using this app, I’m really using my phone more often.”
    name: Serah, Lead Finance
    styles:
      self:
        height: screen
        width: wide
        padding:
          - pt-36
          - pb-36
          - pl-36
          - pr-36
        alignItems: flex-start
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: Get early access
    subtitle: Section subtitle
    text: >-
      Sign up your team today to be the first to try out our new product to increae your team’s productivity
    actions: null
    media:
      type: FormBlock
      elementId: hero-form
      fields:
        - type: EmailFormControl
          name: email
          placeholder: Email
          isRequired: true
          width: full
      submitLabel: SIGN UP
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: screen
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-32
          - pb-12
          - pl-0
          - pr-0
        alignItems: center
        justifyContent: center
        flexDirection: col
        borderRadius: 10px
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: center
      subtitle:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
---
