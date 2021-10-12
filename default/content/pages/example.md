---
title: Example Page
layout: PageLayout
sections:
  - type: ContactSection
    variant: variant-b
    colors: colors-e
    width: wide
    height: short
    topGap: large
    bottomGap: none
    textAlign: left
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not.
    feature:
      type: ImageBlock
      url: /images/contact.png
      altText: Fisherman holding lobster
    form:
      type: FormBlock
      idAttr: contact-form
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
  - type: TextSection
    colors: colors-a
    width: wide
    height: short
    textAlign: left
    badge:
      label: Small text
    title: The Section Title
    subtitle: The section subtitle
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  - type: CtaSection
    variant: variant-a
    colors: colors-h
    width: wide
    height: short
    topGap: none
    bottomGap: none
    textAlign: center
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        url: '#'
        label: Get Started
        style: primary
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-a
    width: full
    textAlign: center
    title: Our Team
    topGap: small
    bottomGap: large
    people:
      - content/data/team/dianne-ameter.json
      - content/data/team/desmond-eagle.json
      - content/data/team/hilary-ouse.json
      - content/data/team/hugh-saturation.json
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-e
    width: wide
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
  - type: HeroSection
    variant: variant-a
    colors: colors-a
    width: wide
    height: short
    topGap: none
    bottomGap: small
    contentAlignVert: bottom
    textAlign: left
    badge:
      label: New Website
    title: The quick, brown fox jumps over a lazy dog
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
    actions:
      - type: Button
        url: '#'
        label: Apply Now
        style: primary
      - type: Button
        url: '#'
        label: Learn more
        style: secondary
    feature:
      type: ImageBlock
      url: /images/hero.png
      altText: Image alt text
      caption: Image caption
  - type: TestimonialsSection
    variant: variant-a
    colors: colors-e
    width: wide
    height: short
    testimonials:
      - quote: >-
          “It’s great to see someone taking action while still maintaining a
          sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at The Cook
        image:
          type: ImageBlock
          url: /images/isabelle-parks.jpg
          altText: Photo of Isabelle Parks
        logo:
          type: ImageBlock
          url: /images/the-logo.svg
          altText: The logo
  - type: QuoteSection
    colors: colors-c
    width: wide
    height: short
    textAlign: left
    quote: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    name: Isabelle Parks
    title: Head chef at The Cook
    backgroundImage:
      type: ImageBlock
      url: /images/water.jpg
      altText: Water
      caption: ''
      opacity: 40
---
