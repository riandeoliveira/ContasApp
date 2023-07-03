<template>
  <nav class="nav">
    <ul class="list">
      <li>
        <q-btn flat round icon="money_off" title="Contas a Pagar" class="button" />
      </li>
      <li>
        <q-btn flat round icon="attach_money" title="Contas a Receber" class="button" />
      </li>
      <li>
        <q-btn flat round icon="dashboard" title="Dashboard" class="button" />
      </li>
      <li>
        <q-btn flat round icon="person" title="Usuário" class="button" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles" as *;

.nav {
  background-color: $green;
  bottom: 0;
  height: 48px;
  left: 0;
  position: fixed;
  width: 100%;
}

.list {
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-evenly;
}

.button {
  color: $white;
  font-size: 14px;
}
</style>
