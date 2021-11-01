---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-f
    backgroundWidth: full
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
      url: "/images/hero.png"
      altText: Image alt text
      caption: Image caption
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
        margin: ["mt-0", "mb-4"]
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
        margin: ["mt-0", "mb-6"]
      text:
        textAlign: left
        margin: ["mt-0", "mb-8"]
      actions:
        justifyContent: flex-start
  - type: FeaturedPostsSection
    variant: variant-c
    colors: colors-c
    backgroundWidth: full
    title: Blog Posts
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - type: TestimonialsSection
    colors: colors-h
    backgroundWidth: full
    testimonials:
      - quote: |-
          “It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/isabelle-parks.jpg
          altText: Isabelle Parks
        styles:
          self:
            margin: ["mt-0", "mb-0"]
            flexDirection: row
          quote:
            textAlign: left
          name:
            fontWeight: '700'
            fontStyle: normal
            textAlign: left
          title:
            fontWeight: '400'
            fontStyle: normal
            textAlign: left
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
  - type: CtaSection
    colors: colors-c
    backgroundWidth: full
    title: Let's do this
    text: |-
      The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen.
    actions:
      - type: Button
        label: Get Started
        url: "https://www.stackbit.com/"
        style: primary
    actionsPosition: right
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: TextSection
    colors: colors-f
    backgroundWidth: full
    title: The Section Title
    subtitle: The section subtitle
    text: |-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
  - type: ContactSection
    colors: colors-h
    backgroundWidth: full
    title: Join our club
    text: |-
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.
    feature:
      type: ImageBlock
      url: "/images/contact.png"
      altText: Fisherman holding lobster
    form:
      type: FormBlock
      elementId: contact-form
      destination: ""
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
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
---
