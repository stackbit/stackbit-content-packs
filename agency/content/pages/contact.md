---
title: Contact us
sections:
  - type: HeroSection
    title: Contact
    text: >
      Let’s build something great together.

      Complete our contact form or send us an email at [email@example.com](mailto:email@email.com) .
    feature:
      type: FormBlock
      action: /.netlify/functions/submission_created
      elementId: contact-form
      submitLabel: Send Message
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          width: full
        - name: services
          label: What services are you looking for?
          defaultValue: Please select...
          options:
            - Branding
            - Design
            - Digital
          isRequired: false
          width: full
          type: SelectFormControl
        - name: message
          label: Message
          placeholder: Your Message
          isRequired: false
          width: full
          type: TextareaFormControl
        - type: CheckboxFormControl
          label: >-
            I understand that this form is storing my submitted information so I
            can be contacted.
          width: full
          name: consent
    styles:
      self:
        height: auto
        width: narrow
        margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0']
        padding: ['pt-12', 'pb-12', 'pr-4', 'pl-4']
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
        margin:
          - mb-5
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-a
    title: Our offices
    text: |
      ### San Francisco

      1234 Some St.

      San Francisco, CA 12345

      1-234-556-7890

      [Get directions →](https://www.google.com/maps)

      ### New York

      1234 Some St.

      New York, NY 12345

      1-234-556-7890

      [Get directions →](https://www.google.com/maps)
    styles:
      self:
        height: auto
        width: wide
        margin: ['mt-0', 'mb-0', 'ml-0', 'mr-0']
        padding: ['pt-12', 'pb-12', 'pr-4', 'pl-4']
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
    type: TextSection
layout: PageLayout
---
