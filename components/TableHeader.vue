<script lang="ts" setup>
type Props = {
  columnLabels: string[]
}

defineProps<Props>();
</script>

<template>
  <header class="header">
    <span class="label" v-for="label in columnLabels">
      {{ label }}
    </span>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles" as *;

.header {
  border: 1px solid $grey;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 1fr 0.75fr 0.5fr;
  margin: 20px 0 16px;
  padding: 8px;
}

.label {
  color: $black;
  font-weight: 500;
}
</style>
