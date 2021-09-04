<template>
  <nav
    class="
      md:left-0
      md:block
      md:fixed
      md:top-0
      md:bottom-0
      md:overflow-y-auto
      md:flex-row
      md:flex-nowrap
      md:overflow-hidden
      shadow-xl
      bg-white
      flex flex-wrap
      items-center
      justify-between
      relative
      md:w-64
      z-10
      py-4
      px-6
    "
  >
    <div
      class="
        md:flex-col md:items-stretch md:min-h-full md:flex-nowrap
        px-0
        flex flex-wrap
        items-center
        justify-between
        w-full
        mx-auto
      "
    >
      <button
        class="
          cursor-pointer
          text-black
          opacity-50
          md:hidden
          px-3
          py-1
          text-xl
          leading-none
          bg-transparent
          rounded
          border border-solid border-transparent
        "
        type="button"
        @click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars" />
      </button>

      <router-link
        class="
          md:block
          text-left
          md:pb-2
          text-blueGray-600
          mr-0
          inline-block
          whitespace-nowrap
          text-lg
          font-bold
          p-4
          px-0
        "
        to="/"
      >
        moja global - FLINT UI
      </router-link>

      <div
        class="
          md:flex
          md:flex-col
          md:items-stretch
          md:opacity-100
          md:relative
          md:mt-4
          md:shadow-none
          shadow
          absolute
          top-0
          left-0
          right-0
          z-40
          overflow-y-auto overflow-x-hidden
          h-auto
          items-center
          flex-1
          rounded
        "
        :class="collapseShow"
      >
        <div
          class="
            md:min-w-full md:hidden
            block
            pb-4
            mb-4
            border-b border-solid border-blueGray-200
          "
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="
                  md:block
                  text-left
                  md:pb-2
                  text-blueGray-600
                  mr-0
                  inline-block
                  whitespace-nowrap
                  text-sm
                  uppercase
                  font-bold
                  p-4
                  px-0
                "
                to="/"
              >
                FLINT UI
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="
                  cursor-pointer
                  text-black
                  opacity-50
                  md:hidden
                  px-3
                  py-1
                  text-xl
                  leading-none
                  bg-transparent
                  rounded
                  border border-solid border-transparent
                "
                @click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </div>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="
            md:min-w-full
            text-blueGray-500 text-lg
            uppercase
            font-bold
            block
            pt-1
            pb-4
            no-underline
          "
        >
          FLINT
        </h6>

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/flint/dashboard"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-home mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                />
                Dashboard
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/flint/configurations"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-cogs mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                />
                Configurations
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/flint/point_output_table"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-chart-bar mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                />
                Point Output Table
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/flint/rothc_output_table"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-chart-bar mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                />
                RothC Output Table
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="
            md:min-w-full
            text-blueGray-500 text-lg
            uppercase
            font-bold
            block
            pt-1
            pb-4
            no-underline
          "
        >
          GCBM
        </h6>
        <ul class="md:flex-col md:min-w-full flex flex-col list-none">
          <li class="items-center">
            <router-link
              v-slot="{ href, navigate, isActive }"
              to="/gcbm/dashboard"
            >
              <a
                :href="href"
                class="text-xs uppercase py-3 font-bold block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500'
                ]"
                @click="navigate"
              >
                <i
                  class="fas fa-home mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                />
                Dashboard
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
); }

<script>
export default {
  components: {},
  data() {
    return {
      collapseShow: 'hidden'
    }
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes
    }
  }
}
</script>
