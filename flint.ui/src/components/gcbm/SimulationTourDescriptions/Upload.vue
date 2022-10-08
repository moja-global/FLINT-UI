<template>
  <p class="mt-2">
    Upload the required files for the simulation. There are sub-sections inside the Upload Section for uploading
    different types of files. <br />
    <b>Classifier</b> files are required by all the simulations. Other file types are not mandatory but recommended.
  </p>
  <p>
    After selecting files into the upload container, you can review the files and remove them if needed. Click the
    <b>Start Upload</b> button to start uploading the files.
  </p>

  <a-alert show-icon type="info" style="margin-bottom: 16px">
    <template #message>
      You can <b>Preview Config</b> for the uploaded files. The preview will show you the contents of the auto-generated
      configurations for the uploaded files. <br />
    </template>
  </a-alert>

  <a-alert show-icon type="info">
    <template #message>
      The <b>Input Database</b> upload section allows you to reivew the table and column names after uploading a db
      file. Please check out the (?) icon in that section for more information.
    </template>
  </a-alert>
</template>

<script>
export default {
  name: 'Upload'
}
</script>
