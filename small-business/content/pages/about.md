---
title: About us
layout: PageLayout
sections:
  - type: FeaturedPeopleSection
    variant: variant-c
    colors: colors-a
    backgroundWidth: full
    title: Our Team
    people:
      - content/data/team/dianne-ameter.json
      - content/data/team/hilary-ouse.json
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
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
  - type: ContactSection
    colors: colors-a
    backgroundWidth: full
    title: Get in touch
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not.
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
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
  - type: FeaturedPostsSection
    variant: variant-c
    colors: colors-b
    backgroundWidth: full
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
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
  - type: QuoteSection
    colors: colors-c
    backgroundWidth: full
    quote: >
      dicta sunt explicabo. Sed ut perspiciatis undeomnis iste natus error sit
      voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque
      ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo.
    name: Isabelle Parks
    title: Home cook
    backgroundImage:
      type: ImageBlock
      url: /images/Screen Shot 2021-10-26 at 8.33.31 PM.png
      altText: Water
      caption: ''
      styles:
        self:
          opacity: 40
    styles:
      self:
        height: screen
        width: wide
        margin:
          - mt-12
          - mb-0
        padding:
          - pt-36
          - pb-36
        alignItems: center
        justifyContent: flex-end
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
