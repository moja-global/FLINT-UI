<template>
  <v-app>
    <div>
      <v-slider
        v-model="ex3.val"
        :label="ex3.label"
        :thumb-color="ex3.color"
        thumb-label="always"
      ></v-slider>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      ex3: { label: "thumb-color", val: 50, color: "red" },
    };
  },
};
</script>
