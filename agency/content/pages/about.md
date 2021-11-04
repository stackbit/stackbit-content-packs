---
title: About us
sections:
  - type: HeroSection
    title: Our story
    text: >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
      venenatis augue. Suspendisse tincidunt, nibh eget sodales eleifend, lectus
      magna elementum lorem, ut bibendum tellus turpis quis risus. Vivamus
      sagittis enim est, et semper lectus hendrerit ut.


      In sollicitudin imperdiet turpis quis accumsan. Pellentesque euismod
      turpis et nisi fermentum accumsan.
    feature:
      type: ImageBlock
      url: /images/about.jpg
      altText: About us
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
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mb-8
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    variant: variant-a
    colors: colors-a
    backgroundWidth: full
    title: The Team
    subtitle: An optional subtitle of the section
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hilary-ouse.json
      - content/data/team/person-evcrq76qa.json
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
    type: FeaturedPeopleSection
  - elementId: ''
    colors: colors-h
    backgroundWidth: inset
    backgroundImage:
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: Become A Team Player
    text: >
      We are always looking for great people to join our team. If you are
      interested in working for Agency, please send an email to
      [email@example.com ](mailto:email@email.com)with your CV and which
      position you are interested in.
    actions: []
    feature:
      type: ImageBlock
      url: /images/cta-about.svg
      altText: Hero section image
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
        alignItems: flex-end
        justifyContent: flex-end
        flexDirection: row
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
      actions:
        justifyContent: flex-start
    type: HeroSection
layout: PageLayout
---
