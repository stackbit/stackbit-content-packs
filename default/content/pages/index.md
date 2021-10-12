---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    variant: variant-a
    colors: colors-f
    width: wide
    height: tall
    bottomGap: none
    topGap: none
    contentWidth: large
    contentAlignHoriz: center
    contentAlignVert: middle
    textAlign: left
    badge:
      label: New Website
    title: This Is A Big Hero Headline
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl. Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Get Started
        url: https://www.stackbit.com/
        style: primary
        elementId: hero-main-button
      - type: Button
        label: Learn More
        url: https://www.stackbit.com/
        style: secondary
    feature:
      type: ImageBlock
      url: '/images/hero.png'
      altText: Image alt text
      caption: Image caption
  - type: FeaturedPostsSection
    variant: variant-b
    colors: colors-c
    width: wide
    height: short
    contentWidth: medium
    contentAlignHoriz: center
    contentAlignVert: middle
    bottomGap: none
    topGap: none
    title: Blog Posts
    textAlign: center
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
  - type: TestimonialsSection
    variant: variant-b
    colors: colors-h
    width: wide
    height: short
    textAlign: left
    bottomGap: none
    topGap: none
    contentAlignHoriz: center
    testimonials:
      - quote: |-
          “It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/isabelle-parks.jpg
          altText: Isabelle Parks
  - type: CtaSection
    variant: variant-b
    colors: colors-c
    width: wide
    height: short
    textAlign: left
    contentAlignHoriz: center
    contentWidth: medium
    bottomGap: none
    topGap: none
    title: Let's do this
    text: |-
      The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen.
    actions:
      - type: Button
        label: Get Started
        url: 'https://www.stackbit.com/'
        style: primary
  - type: TextSection
    colors: colors-f
    width: wide
    height: tall
    contentWidth: small
    contentAlignHoriz: center
    contentAlignVert: middle
    bottomGap: none
    topGap: none
    textAlign: center
    badge:
      label: Small text
    title: The Section Title
    subtitle: The section subtitle
    text: |-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  - type: ContactSection
    variant: variant-b
    colors: colors-h
    width: wide
    height: tall
    textAlign: left
    title: Join our club
    bottomGap: none
    topGap: none
    text: |-
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.
    feature:
      type: ImageBlock
      url: '/images/contact.png'
      altText: Fisherman holding lobster
    form:
      type: FormBlock
      idAttr: contact-form
      destination: ''
      action: /.netlify/functions/submission_created
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
---
