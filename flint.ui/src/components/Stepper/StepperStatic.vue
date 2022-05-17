<template>
  <div class="mt-14 flex items-center justify-center">
    <a-row :gutter="[24, 24]" class="p-4">
      <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :xl="{ span: 6 }">
        <a-row :gutter="[6, 6]">
          <a-col :xs="{ span: 24 }" :md="{ span: 20 }" :xl="{ span: 20 }" class="bg-gray-300 border border-gray-200">
            <i class="fas fa-plus fa-lg" />
            <div class="bg-gray-200 rounded-r-lg body-step">
              <h2 class="font-bold text-sm">Create a new simulation</h2>
              <p class="text-xs text-gray-600">Click the new button below</p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 4 }" :xl="{ span: 4 }">
            <i class="fas fa-arrow-right fa-2x" />
          </a-col>
        </a-row>
      </a-col>

      <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :xl="{ span: 6 }">
        <a-row :gutter="[6, 6]">
          <a-col :xs="{ span: 24 }" :md="{ span: 20 }" :xl="{ span: 20 }" class="bg-gray-300 border border-gray-200">
            <i class="fas fa-file fa-lg" />
            <div class="bg-gray-200 rounded-r-lg body-step">
              <h2 class="font-bold text-sm">Upload file</h2>
              <p class="text-xs text-gray-600">Dataset file for GCBM</p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 4 }" :xl="{ span: 4 }">
            <i class="fas fa-arrow-right fa-2x" />
          </a-col>
        </a-row>
      </a-col>

      <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :xl="{ span: 6 }">
        <a-row :gutter="[6, 6]">
          <a-col :xs="{ span: 24 }" :md="{ span: 20 }" :xl="{ span: 20 }" class="bg-gray-300 border border-gray-200">
            <i class="fas fa-cogs fa-lg" />
            <div class="bg-gray-200 rounded-r-lg body-step">
              <h2 class="font-bold text-sm">Configure</h2>
              <p class="text-xs text-gray-600">Change configuration parameters</p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 4 }" :xl="{ span: 4 }">
            <i class="fas fa-arrow-right fa-2x" />
          </a-col>
        </a-row>
      </a-col>

      <a-col :xs="{ span: 24 }" :md="{ span: 12 }" :xl="{ span: 6 }">
        <a-row :gutter="[6, 6]">
          <a-col :xs="{ span: 24 }" :md="{ span: 20 }" :xl="{ span: 20 }" class="bg-gray-300 border border-gray-200">
            <i class="fas fa-check fa-lg" />
            <div class="bg-gray-200 rounded-r-lg body-step">
              <h2 class="font-bold text-sm">Run</h2>
              <p class="text-xs text-gray-600">Run the simulation with new configs</p>
            </div>
          </a-col>
          <a-col :xs="{ span: 24 }" :md="{ span: 4 }" :xl="{ span: 4 }">
            <i class="fas fa-arrow-right fa-2x" />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
