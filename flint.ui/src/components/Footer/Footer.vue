<template>
  <FooterComponent
    v-bind:content="content"
    v-bind:socials="socials"
    Heading="Footer"
    v-bind:lowercontent="'Copyright © ' + new Date().getFullYear() + ' moja global.'"
    logosrc="https://community.moja.global/img/logo-light.png"
    trigger="hover"
    color="white"
    Bgheading="#2f382a"
    Bgcontent="#475447"
    socialsheading="Follow Us On"
    :isPrimary="true"
  ></FooterComponent>
</template>

<script>
import { FooterComponent } from '@moja-global/mojaglobal-ui'

export default {
  name: 'Footer',
  components: {
    FooterComponent
  },
  setup() {
    const content = [
      {
        title: 'Get In Touch',
        subitems: [
          {
            name: 'info@moja.global',
            href: 'mailto:info@moja.global'
          }
        ]
      },
      {
        title: 'Docs',
        subitems: [
          {
            name: 'FLINT UI',
            href: 'https://docs.moja.global/projects/flint-ui/en/latest/'
          },
          {
            name: 'FLINT Reporting Tool',
            href: 'https://docs.moja.global/projects/flint-reporting/en/latest/'
          },
          {
            name: 'Taswira',
            href: 'https://github.com/moja-global/taswira/'
          },
          {
            name: 'FLINT JSON Editor',
            href: 'https://github.com/moja-global/FLINT.JSON_Interface/'
          },
          {
            name: 'FLINT Cloud',
            href: 'https://docs.moja.global/projects/flintcloud/en/latest/'
          }
        ]
      },
      {
        title: 'Site Links',
        subitems: [
          {
            name: 'About',
            href: 'https://moja.global/about/'
          },
          {
            name: 'What We Do',
            href: 'https://moja.global/what-we-do/'
          },
          {
            name: 'FLINT',
            href: 'https://moja.global/flint/'
          },
          {
            name: 'Get Involved',
            href: 'https://moja.global/get-involved/'
          },
          {
            name: 'Resources',
            href: 'https://moja.global/resources/'
          },
          {
            name: 'News',
            href: 'https://moja.global/news/'
          }
        ]
      }
    ]
    const socials = [
      {
        html: ' <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="26px" height="26px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg>',
        href: 'https://twitter.com/mojaglobal',
        altattribute: 'Twitter'
      },
      {
        html: ' <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="26px" height="26px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg>',
        href: 'https://www.youtube.com/channel/UCfQUrrNP1Xf-Fv4c8uHYXhQ',
        altattribute: 'Youtube'
      },
      {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#0a66c2" class="mercado-match" width="24" height="24" focusable="false"> <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path> </svg>',
        href: 'https://www.linkedin.com/company/moja-global/',
        altattribute: 'Linkedin'
      },
      {
        html: '<svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github v-align-middle"> <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path> </svg>',
        href: 'https://github.com/moja-global',
        altattribute: 'Github'
      }
    ]
    return {
      content,
      socials
    }
  }
}
</script>

<style scoped></style>
