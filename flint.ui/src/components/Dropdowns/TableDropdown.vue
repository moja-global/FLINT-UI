<template>
  <div>
    <a ref="btnDropdownRef" class="text-blueGray-500 py-1 px-3" href="#pablo" @click="toggleDropdown($event)">
      <i class="fas fa-ellipsis-v" />
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      :class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow
      }"
    >
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Action
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Another action
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Something else here
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core'
import { ref } from 'vue'
export default {
  setup() {
    const dropdownPopoverShow = ref(false)
    function toggleDropdown(event) {
      event.preventDefault()

      if (dropdownPopoverShow.value) {
        dropdownPopoverShow.value = false
      } else {
        dropdownPopoverShow.value = true
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start'
        })
      }
    }

    return {
      dropdownPopoverShow,
      toggleDropdown
    }
  }
}
</script>
