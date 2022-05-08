<script setup lang="ts">
const props = defineProps<{ count?: number }>()
const count = $ref(props.count || 0)
</script>

<template>
  <div box-border b="1 gray-2" all:transition-15 rounded-md>
    <p italic text-red text-15>
      asd
    </p>
    <div m-10 py-2 bg-gray-3 text-blue ring-1 rounded-md>
      <p>{{ count ? count : 'No count was set' }}</p>
      <p>{{ typeof count }}</p>
    </div>
    <input
      v-model.number="count"
      type="text"
      class="block px-2 focus:ring-2 outline-0 my-2 ma text-gray-500"
      b="1 op30 gray rounded-md"
      placeholder="Enter a number"
    >
    <button
      class="ring-inset ring-2 rounded-md py-2 px-4 focus:ring-purple"
      my-2
      style="font-weight: bold"
    >
      Comfirm
    </button>
  </div>
</template>
