---
title: Home
layout: AdvancedLayout
sections:
  - type: HeroSection
    variant: variant-a
    colors: colors-e
    width: "wide"
    height: "auto"
    alignHoriz: "left"
    badge: "New Website"
    title: "The quick, brown fox jumps over a lazy dog"
    text: |-
      A group of local fisherman, working to deliver sustainable fish to your table. Each fish you buy, helps support fishing regulations and laws, to help sustain a better future for our waters, our food, and our globe.
    actions:
      - type: Button
        label: Get Started
        url: https://www.stackbit.com/
        style: "primary"
      - type: Button
        label: Learn More
        url: https://www.stackbit.com/
        style: "secondary"
    feature:
      type: ImageBlock
      url: "https://source.unsplash.com/wPJygs79jMA/640x360"
      altText: Image alt text
      caption: Image caption
  - type: TestimonialsSection
    variant: variant-a
    colors: colors-c
    width: "wide"
    height: "auto"
    alignHoriz: "left"
    testimonials:
      - quote: |-
          “It’s great to see someone taking action while still maintaining a sustainable fish supply to home cooks.”
        name: Isabelle Parks
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/isabelle-parks.jpg
          altText: Isabelle Parks
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-e
    width: wide
    posts:
      - content/pages/blog/as-fresh-as-it-gets.md
      - content/pages/blog/bi-weekly-subscription.md
      - content/pages/blog/sustainability-at-its-purest.md
  - type: CtaSection
    variant: variant-a
    colors: colors-e
    width: wide
    height: auto
    alignHoriz: center
    title: Let's do this
    text: |-
      The Stackbit theme is flexible and scalable to every need. It can manage any layout and any screen.
    actions:
      - type: Button
        label: Get Started
        url: "https://www.stackbit.com/"
        style: primary
  - type: ContentSection
    colors: colors-e
    width: wide
    height: auto
    alignHoriz: center
    badge: Small text
    title: The Section Title
    subtitle: The section subtitle
    text: |-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  - type: ContactSection
    variant: variant-b
    colors: colors-e
    width: wide
    height: auto
    alignHoriz: left
    title: Join our club
    text: |-
      We will notify you every time a shipment is heading to your neighborhood, and you could immediatly let us know if you want in or not.
    image:
      type: ImageBlock
      url: "/images/lobster.jpg"
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
  - type: ExampleSection
    title: "Our Partners"
    logos:
      - name: 'Stackbit'
        image: '/images/stackbit.svg'
      - name: 'NextJs'
        image: '/images/nextdotjs.svg'
      - name: 'Tailwind'
        image: '/images/tailwindcss.svg'
---
