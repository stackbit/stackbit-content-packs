---
title: Example Page
layout: AdvancedLayout
sections:
  - type: ContactSection
    variant: variant-b
    colors: colors-e
    width: wide
    height: short
    topGap: none
    bottomGap: none
    alignHoriz: left
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not.
    feature:
      type: ImageBlock
      url: /images/lobster.jpg
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
  - type: ContentSection
    colors: colors-a
    width: wide
    height: short
    alignHoriz: left
    badge: Small text
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
    alignHoriz: center
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
    variant: variant-a
    colors: colors-a
    width: wide
    height: short
    alignHoriz: center
    badge: Know Our Team
    title: The Team
    subtitle: >-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium.
    people:
      - firstName: Desmond
        lastName: Eagle
        role: Product Manager
        bio: Vincent Van Gogh’s most popular painting, The Starry Night.
        image:
          type: ImageBlock
          url: /images/desmond-eagle.jpg
          altText: Photo of Desmond Eagle
      - firstName: Dianne
        lastName: Ameter
        role: Product Manager
        bio: Vincent Van Gogh’s most popular painting, The Starry Night.
        image:
          type: ImageBlock
          url: /images/dianne-ameter.jpg
          altText: Photo of Dianne Ameter
      - firstName: Hilary
        lastName: Ouse
        role: Product Manager
        bio: Vincent Van Gogh’s most popular painting, The Starry Night.
        image:
          type: ImageBlock
          url: /images/hilary-ouse.jpg
          altText: Photo of Hilary Ouse
      - firstName: Hugh
        lastName: Saturation
        role: Product Manager
        bio: Vincent Van Gogh’s most popular painting, The Starry Night.
        image:
          type: ImageBlock
          url: /images/hugh-saturation.jpg
          altText: Photo of Hugh Saturation
  - type: FeaturedPostsSection
    variant: variant-a
    colors: colors-a
    width: full
    height: short
    alignHoriz: center
    actions:
      - type: Button
        url: '#'
        label: View More
        style: primary
    posts:
      - __metadata: {}
        title: Sustainability at it’s purest
        date: '2021-07-03'
        excerpt: >-
          We’re local, seasonal fisherman, supporting fishing restrictions. We
          fish what the sea has to offer, nothing more, and no cheating.
        thumbImage:
          type: ImageBlock
          url: /images/fisherman.jpg
          altText: Fisherman
        markdown_content: >+
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala
          virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An
          hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse
          quam fillum, cum alter stabilire rem publicam studuerit, alter
          evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn.
          Illud non continuo, ut aeque incontentae. Atqui pugnantibus et
          contrariis studiis consiliisque semper utens nihil quieti videre,
          nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non
          intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam
          dixisses, ad aliud nos unum certum vitium consuetudo Latina
          traduceret.


          ## Sed Ille, UT Dixi, Vitiose


          Utrum igitur tibi litteram videor an totas paginas commovere? Potius
          inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in
          odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a
          sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi
          uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat?
          Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia
          atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et
          ille ridens: Video, inquit, quid agas; In his igitur partibus duabus
          nihil erat, quod Zeno commutare gestiret.

      - __metadata: {}
        title: As fresh as it gets
        date: '2021-07-01'
        excerpt: Same day delivery, cleaned, on ice, ready to be eaten.
        thumbImage:
          type: ImageBlock
          url: /images/mackerels.jpg
          altText: Mackerels
        markdown_content: >+
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala
          virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An
          hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse
          quam fillum, cum alter stabilire rem publicam studuerit, alter
          evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn.
          Illud non continuo, ut aeque incontentae. Atqui pugnantibus et
          contrariis studiis consiliisque semper utens nihil quieti videre,
          nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non
          intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam
          dixisses, ad aliud nos unum certum vitium consuetudo Latina
          traduceret.


          ## Sed Ille, UT Dixi, Vitiose


          Utrum igitur tibi litteram videor an totas paginas commovere? Potius
          inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in
          odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a
          sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi
          uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat?
          Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia
          atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et
          ille ridens: Video, inquit, quid agas; In his igitur partibus duabus
          nihil erat, quod Zeno commutare gestiret.

      - __metadata: {}
        title: Bi-weekly subscription
        date: '2021-06-28'
        excerpt: >-
          This feature is the thing you were missing in your workflow, thank god
          we have it for you to use.
        thumbImage:
          type: ImageBlock
          url: /images/fish-lemon.jpg
          altText: Raw fish, spices, lemon
        markdown_content: >+
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala
          virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An
          hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse
          quam fillum, cum alter stabilire rem publicam studuerit, alter
          evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn.
          Illud non continuo, ut aeque incontentae. Atqui pugnantibus et
          contrariis studiis consiliisque semper utens nihil quieti videre,
          nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non
          intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam
          dixisses, ad aliud nos unum certum vitium consuetudo Latina
          traduceret.


          ## Sed Ille, UT Dixi, Vitiose


          Utrum igitur tibi litteram videor an totas paginas commovere? Potius
          inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in
          odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a
          sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi
          uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat?
          Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia
          atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et
          ille ridens: Video, inquit, quid agas; In his igitur partibus duabus
          nihil erat, quod Zeno commutare gestiret.

  - type: HeroSection
    variant: variant-a
    colors: colors-a
    width: wide
    height: short
    topGap: none
    bottomGap: small
    alignHoriz: left
    alignVert: bottom
    badge: New Collaboration
    title: The quick, brown fox jumps over **a lazy dog**
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
      url: /images/fishing.jpg
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
          url: /images/the-cook-logo.svg
          altText: The Cook logo
  - type: QuoteSection
    colors: colors-c
    width: wide
    height: short
    alignHoriz: left
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