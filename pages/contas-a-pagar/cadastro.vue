<script lang="ts" setup>

let installmentsOptions = [
  { label: "1X", value: 1 },
  { label: "2X", value: 2 },
  { label: "3X", value: 3 },
  { label: "4X", value: 4 },
  { label: "5X", value: 5 },
  { label: "6X", value: 6 },
  { label: "7X", value: 7 },
  { label: "8X", value: 8 },
  { label: "9X", value: 9 },
  { label: "10X", value: 10 },
  { label: "11X", value: 11 },
  { label: "12X", value: 12 }
];

// new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(120)

const form = ref({
  account: {
    name: null,
    amount: null
  },
  installments: {
    quantity: null,
    date: null
  }
})
</script>

<!-- TODO: Descobrir uma forma de adicionar um campo de valor monetário -->

<template>
  <div class="page">
    <h1 class="title">Cadastro de Conta</h1>
    <main>
      <QForm class="form">
        <div>
          <h2 class="subtitle">Conta</h2>
          <div class="input-box">
            <QInput type="text" label="Nome da conta*" v-model="form.account.name" lazy-rules :rules="[
              (value: string) => value !== null && value.trim() !== '' || 'Campo obrigatório!']" />
            <QInput label="Valor total*" v-model="form.account.amount" lazy-rules :rules="[
              (value: string) => value !== null && value.trim() !== '' || 'Campo obrigatório!']" />
          </div>
        </div>
        <div>
          <h2 class="subtitle">Parcelas</h2>
          <div class="input-box">
            <QSelect v-model="form.installments.quantity" :options="installmentsOptions" label="Nº de parcelas*"
              lazy-rules :rules="[
                (value) => value !== null && value.trim() !== '' || 'Campo obrigatório!']" />
            <QInput type="date" label="Data*" v-model="form.installments.date" mask="" lazy-rules :rules="[
              (value) => value !== null && value.trim() !== '' || 'Campo obrigatório!']" />
          </div>
        </div>
        <QBtn type="submit" label="Gerar parcelas" class="button" />
      </QForm>
    </main>
    <br />
    <div>
      <pre>
        {{ JSON.stringify(form, null, 2) }}
      </pre>
    </div>
    <Navbar />
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

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 20px;
}

.subtitle {
  color: $green;
  font-size: 20px;
}

.input-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.button {
  background-color: $green;
  color: $white;
}
</style>
