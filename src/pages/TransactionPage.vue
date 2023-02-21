<template>
  <h1>Transactions is here!</h1>

  <div v-if="listTrans.length > 0">
    <div
      class="card"
      style="width: 18rem"
      v-for="object in listTrans"
      :key="object.id"
    >
      <div class="card-body">
        <h5 class="card-title">{{ object.name }}</h5>
        <!-- <router-link :to="`/transactions/${object.id}`" class="card-text">
       {{ object.name }}
      </router-link> -->

        <router-link
          :to="{ name: 'transaction-details-route', params: { id: object.id } }"
          class="card-text"
        >
          {{ object.name }}
        </router-link>

        <p class="card-text">Price:{{ object.price }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    Loading transactions...
  </div>
</template>

<script>
import baseUrl from "../baseUrl";

export default {
  name: "TransactionPage",
  data() {
    return {
      listTrans: [],
    };
  },

  methods: {
    async fetchAllTransactions() {
      await fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then((data) => console.log(data));
    },

    async getAllTransByAxios() {
      await baseUrl
        .basicCallApi()
        .get("/transactions")
        .then((response) => {
          console.log(response.data);
          this.listTrans = response.data;
        });
    },
  },

  async created() {
    // await this.fetchAllTransactions();
    await this.getAllTransByAxios();
  },
};
</script>
