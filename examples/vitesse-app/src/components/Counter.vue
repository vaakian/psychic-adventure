<script setup lang="ts">
const props = defineProps<{
  initial?: number
}>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div py-2>
    {{ count }}
    <button class="inc btn mx-2" @click="inc()">
      +
    </button>
    <button class="dec btn mx-2" @click="dec()">
      -
    </button>
  </div>
</template>
