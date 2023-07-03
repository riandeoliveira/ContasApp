<script lang="ts" setup>
import "../../styles/_global.scss";

useHead({
  htmlAttrs: {
    lang: "pt-BR"
  },

  title: "Contas App",

  meta: [
    { name: "author", content: "Rian Oliveira" },
    { name: "description", content: "Meu app de contas." },
    { name: "keywords", content: "vue, nuxtjs" },
  ],
})
</script>

<template>
  <div class="page">
    <h1 class="title">Contas a Pagar</h1>
    <TableHeader :column-labels="['Nome', 'Valor total', 'Opções']" />
    <main class="main">
      <BillCard name="Boticário" :amount="249.99" />
      <BillCard name="Magazine Luiza" :amount="899.99" />
      <BillCard name="Cesuca" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mercado Pago" :amount="609.99" />
      <BillCard name="Mega Oferta do Supermercado Rissul" :amount="609.99" />
    </main>
    <Navbar />
    <NuxtLink to="/contas-a-pagar/cadastro">
      <q-btn flat round icon="add" title="Adicionar nova conta" class="add-bill-button" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "./styles" as *;

.page {
  min-height: 100vh;
  padding: 16px;
}

.title {
  color: $green;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 112px;
}

.add-bill-button {
  background-color: $green !important;
  border-radius: 100%;
  bottom: 64px;
  padding: 12px;
  color: $white;
  position: fixed;
  right: 16px;
}
</style>
