<template>
  <nav class="nav">
    <ul class="list">
      <li>
        <NuxtLink to="/contas-a-pagar">
          <QBtn flat round icon="money_off" title="Contas a Pagar" class="button" />
        </NuxtLink>
      </li>
      <li>
        <QBtn flat round icon="attach_money" title="Contas a Receber" class="button" />
      </li>
      <li>
        <QBtn flat round icon="dashboard" title="Dashboard" class="button" />
      </li>
      <li>
        <QBtn flat round icon="person" title="Usuário" class="button" />
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
