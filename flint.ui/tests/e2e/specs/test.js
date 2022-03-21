// https://docs.cypress.io/api/introduction/api.html

describe('Test landing page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check children', () => {
    cy.get('.parent').children().should('have.length', 4)
  })

  it('check content', () => {
    const items = [
      {
        element: 'h1',
        title: 'Flint UI'
      },
      {
        element: 'p',
        title:
          'FLINT-UI provides an intuitive way to explore preconfigured FLINT modules, including the Generic Budget Carbon Model (GCBM). Through the FLINT-UI, you can provide relevant datasets from custom or public data providers, dispatch the job to the FLINT engine for processing, through our user-interface on a local or remote environment.'
      },
      {
        element: 'div',
        title: 'Point'
      },
      {
        element: 'p',
        title:
          'Point is a basic model int the FLINT that allows a person to enter three pool values, date, location. This is a good model to practice and a good starting point.'
      },
      {
        element: 'div',
        title: 'RothC'
      },
      {
        element: 'p',
        title:
          'RothC is a model for the turnover of organic carbon in non-waterlogged topsoil that allows for the effects of soil type, temperature, soil moisture and plant cover on the turnover process.'
      },
      {
        element: 'div',
        title: 'GCBM'
      },
      {
        element: 'p',
        title:
          'The Generic Carbon Budget Model (GCBM) which uses the Carbon Budget Model science modules from the Canadian Forest Service on top of the FLINT platform, was used to generate forest sector based climate change mitigation analyses for British Columbia, Canada.'
      }
    ]

    items.map(({ element, title }) => {
      cy.contains(element, title)
    })
  })

  it('routing test', () => {
    const pages = [
      { title: ':nth-child(1) > .pt-4 > .flex', link: '/flint/configurations/point' },
      { title: ':nth-child(2) > .pt-4 > .flex', link: '/flint/configurations/rothc' },
      { title: ':nth-child(3) > .pt-4 > .flex', link: '/gcbm/dashboard' }
    ]

    pages.map(({ title, link }) => {
      cy.contains(title, 'Explore').click()
      cy.url().should('contain', link)
      cy.go('back')
    })
  })

  it('navbar', () => {
    const nav = [
      { element: ':nth-child(1) > .text-earth > a', link: 'https://docs.moja.global/projects/flint-ui/en/latest/' },
      { element: ':nth-child(2) > .text-earth > a', link: 'https://github.com/moja-global/FLINT-UI' },
      { element: ':nth-child(3) > .text-earth > a', link: 'mailto:info@moja.global' }
    ]

    nav.map(({ element, link }) => {
      cy.get(element).should('have.prop', 'href', link)
    })
  })

  it('footer', () => {
    const footer = [
      { element: '[style="margin-right: 8px;"] > .ant-btn', link: 'https://twitter.com/mojaglobal' },

      { element: ':nth-child(2) > .ant-btn', link: 'https://www.linkedin.com/company/moja-global/' },
      {
        element: ':nth-child(2) > a-typography-title > a',
        link: 'https://moja.global/about/'
      },
      {
        element: ':nth-child(3) > a-typography-title > a',
        link: 'https://moja.global/what-we-do/'
      },
      {
        element: ':nth-child(4) > a-typography-title > a',
        link: 'https://moja.global/flint/'
      },
      {
        element: ':nth-child(5) > a-typography-title > a',
        link: 'https://moja.global/get-involved/'
      },
      {
        element: ':nth-child(6) > a-typography-title > a',
        link: 'https://moja.global/resources/'
      },
      {
        element: ':nth-child(7) > a-typography-title > a',
        link: 'https://moja.global/news/'
      }
    ]

    footer.map(({ element, link }) => {
      cy.get(element).should('have.prop', 'href', link)
    })
  })
})
