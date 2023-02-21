<template>
  <h1>Transaction Detail Page is here....</h1>

  <div v-if="transaction">
    <h1>ID:{{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>

  <div v-else>
    Loading transaction {{ $route.params.id }}....
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },

  methods: {
    async fetchTransactionById() {
      const id = this.$route.params.id;
      await fetch(`http://localhost:3000/transactions/${id}`)
        .then((response) => response.json())
        .then((data) => (this.transaction = data))
        .then(() => console.log(this.transaction));
    },
  },

  async created() {
    await this.fetchTransactionById();
  },
};
</script>
