<template>
  <p class="mt-2">
    Run the simulation and download the results. <br />
    You will also see live logs of the simulation as soon as you click the <b>Run Simulation</b> button.
  </p>
  <a-alert show-icon type="info">
    <template #message>
      You can also export the simulation configurations by clicking the <b>export simulation </b> link. The exported
      simulation configurations can be imported in the <b>Import Simulation</b> section.
    </template>
  </a-alert>
</template>

<script>
export default {
  name: 'RunAndDownload'
}
</script>
