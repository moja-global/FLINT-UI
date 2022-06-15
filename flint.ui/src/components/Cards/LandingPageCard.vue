<template>
      <a-col type="flex" align="center" :span="24" :md="{ span: 11 }" :xl="{ span: 7 }" class="card bg-white rounded shadow-lg">
            <a-col>
                <h2 class="text-earth text-2xl mb-2">
                    {{ title }}
                </h2>
                <p class="text-earth text-base leading-7 justify-text">
                    {{ description }}
                </p>
            </a-col>

            <a-row type="flex" justify="center">
                <a-space>
                    <Button class="mt-4 ml-2 mr-2" :btn-size="'auto'" @click="onClick">Explore <span> →</span></Button>
                    <Button class="mt-4" :btn-size="'auto'" @click="goDocs">Docs <span> →</span></Button>
                </a-space>
            </a-row>
      </a-col>
</template>

<script>
import Button from '../Button/Button.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    Button
  },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    docLink: { type: String, required: true }
        },

  setup (props) {
    const link = ref(props.link)
    const docLink = ref(props.docLink)
    const router = useRouter()
    
      function onClick () {
        router.push(link.value)
      }

      function goDocs() {
        return window.open(docLink.value)
      }
      return { 
        onClick,goDocs
      }
  }
}
</script>

<style scoped>
    .card {
        padding: 16px 8px;
        transition:transform 0.3s;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .card:hover {
        transform:scale(1.03)
    }

    .justify-text{
        text-align:justify
    }

@media screen and (min-width: 1400px) {
  .card {
    max-width: 350px;
  }
  .card:first-child {
    margin-right: auto;
  }
  .card:last-child {
    margin-left: auto;
  }
  .card:nth-child(2) {
    margin-left: auto;
    margin-right: auto;
  }

}
</style>
