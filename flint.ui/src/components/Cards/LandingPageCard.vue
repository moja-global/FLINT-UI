<template>
  <a-col display="inline-block">
    <CardComponent
      class="card bg-white rounded shadow-lg cover"
      align="center"
      :span="24"
      :md="{ span: 11 }"
      :xl="{ span: 7 }"
      type="flex"
    >
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
          <ButtonComponent
            classname="primarywh"
            BackgroundColor="#ffffff"
            Color="#475447"
            Padding="0.4rem 1.3rem"
            MinWidth="100px"
            FontSize="15px"
            @click="onClick"
            >Explore <span> →</span></ButtonComponent
          >
          <ButtonComponent
            classname="primarywh"
            BackgroundColor="#ffffff"
            Color="#475447"
            Padding="0.4rem 1.3rem"
            MinWidth="100px"
            FontSize="15px"
            @click="goDocs"
            >Docs <span> →</span></ButtonComponent
          >
        </a-space>
      </a-row>
    </CardComponent>
  </a-col>
</template>

<script>
import { ButtonComponent } from '@moja-global/mojaglobal-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CardComponent } from '@moja-global/mojaglobal-ui'

export default {
  components: {
    ButtonComponent,
    CardComponent
  },
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    docLink: { type: String, required: true }
  },

  setup(props) {
    const link = ref(props.link)
    const docLink = ref(props.docLink)
    const router = useRouter()

    function onClick() {
      router.push(link.value)
    }

    function goDocs() {
      return window.open(docLink.value)
    }
    return {
      onClick,
      goDocs
    }
  }
}
</script>

<style scoped>
.card {
  padding: 16px 8px;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card:hover {
  transform: scale(1.03);
}

.justify-text {
  text-align: justify;
}

.cover {
  height: 100%;
  width: 100%;
}

@media screen and (min-width: 1223px) {
  .card {
    max-width: 320px;
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

@media screen and (min-width: 1080px) and (max-width: 1224px) {
  .card {
    max-width: 420px;
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

@media screen and (min-width: 768px) and (max-width: 1080px) {
  .card {
    padding: 16px 8px;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
