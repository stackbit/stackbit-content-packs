---
title: Example Page
layout: PageLayout
sections:
  - type: ContactSection
    colors: colors-e
    backgroundWidth: full
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
      elementId: contact-form
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
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
  - type: TextSection
    colors: colors-a
    backgroundWidth: full
    title: The Section Title
    subtitle: The section subtitle
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
  - type: CtaSection
    colors: colors-h
    backgroundWidth: full
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions:
      - type: Button
        url: "#"
        label: Get Started
        style: primary
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-a
    backgroundWidth: full
    title: Our Team
    people:
      - content/data/team/dianne-ameter.json
      - content/data/team/desmond-eagle.json
      - content/data/team/hilary-ouse.json
      - content/data/team/hugh-saturation.json
    styles:
      self:
        height: auto
        width: narrow
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - type: FeaturedPostsSection
    variant: variant-c
    colors: colors-e
    backgroundWidth: full
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
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      actions:
        justifyContent: center
  - type: HeroSection
    colors: colors-a
    backgroundWidth: full
    title: The quick, brown fox jumps over a lazy dog
    text: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
    actions:
      - type: Button
        url: "#"
        label: Apply Now
        style: primary
      - type: Button
        url: "#"
        label: Learn more
        style: secondary
    feature:
      type: ImageBlock
      url: /images/hero.png
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
        flexDirection: row-reverse
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-neutral
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin: ["mt-0", "mb-4"]
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin: ["mt-0", "mb-6"]
      text:
        textAlign: left
        margin: ["mt-0", "mb-8"]
      actions:
        justifyContent: flex-start
  - type: TestimonialsSection
    colors: colors-e
    backgroundWidth: full
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
        styles:
          self:
            margin: ["mt-0", "mb-0"]
            flexDirection: col
          quote:
            textAlign: center
          name:
            fontWeight: 700
            fontStyle: normal
            textAlign: center
          title:
            fontWeight: 400
            fontStyle: normal
            textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
  - type: QuoteSection
    colors: colors-c
    backgroundWidth: full
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
      caption: ""
      styles:
        self:
          opacity: 40
    styles:
      self:
        height: auto
        width: wide
        margin: ["mt-0", "mb-0"]
        padding: ["pt-12", "pb-12"]
        alignItems: center
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
---
