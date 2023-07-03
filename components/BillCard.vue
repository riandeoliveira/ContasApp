<script lang="ts" setup>
import { toBRL } from '../utils';

type Props = {
  name: string;
  amount: number;
}

defineProps<Props>();
</script>

<template>
  <div class="card">
    <span class="label">{{ name }}</span>
    <span class="label">{{ toBRL(amount) }}</span>
    <div class="options">
      <div class="option">
        <q-btn flat round icon="attach_money" title="Pagar conta" class="attach-money" />
      </div>
      <div class="option">
        <q-btn flat round icon="open_in_new" title="Ver parcelas" class="open-in-new" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles" as *;

.card {
  align-items: center;
  border: 1px solid $grey;
  border-radius: 10px;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 0.5fr 0.25fr;
  padding: 8px;
}

.label {
  color: $black;
}

.options {
  display: flex;
}

.option {
  display: flex;
  flex: 1;
  justify-content: center;
}

.attach-money {
  color: $green;
}

.open-in-new {
  color: $grey;
}
</style>
../src/utils
