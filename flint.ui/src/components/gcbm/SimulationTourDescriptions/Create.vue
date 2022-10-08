<template>
  <p class="mt-2">
    Enter the name of the simulation and click on the <b>Create Simulation</b> button to create a new simulation.
  </p>
  <p>You will see the active simulation in the <b>Active Simulation</b> section on top right.</p>
  <a-alert
    show-icon
    message="If you create a simulation when there is already an active simulation, the active simulation will be
            replaced by the new simulation and all of it's data will be deleted!"
    type="warning"
  />
</template>

<script>
export default {
  name: 'Create'
}
</script>
