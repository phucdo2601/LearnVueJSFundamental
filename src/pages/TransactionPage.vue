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

  <div v-else-if="error">
    {{ error.message }}
  </div>

  <div v-else>
    Loading transactions...
  </div>
</template>

<script>
import { ref } from "vue";
import baseUrl from "../baseUrl";

export default {
  name: "TransactionPage",
  //cach goi data truyen thong
  // data() {
  //   return {
  //     listTrans: [],
  //   };
  // },

  // methods: {
  //   async fetchAllTransactions() {
  //     await fetch("http://localhost:3000/transactions")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   },

  //   async getAllTransByAxios() {
  //     await baseUrl
  //       .basicCallApi()
  //       .get("/transactions")
  //       .then((response) => {
  //         console.log(response.data);
  //         this.listTrans = response.data;
  //       });
  //   },
  // },

  // async created() {
  //   // await this.fetchAllTransactions();
  //   await this.getAllTransByAxios();
  // },

  setup() {
    // fetch data api in setup  Composition API 
    let listTrans = ref([]);
    const error = ref(null);

    console.log(listTrans, error);

    // const fetchAllTransOnSetup = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3000/transactions");
    //     if (!response.ok) {
    //       throw new Error("Something went wrong");
    //     }
    //     // console.log(await response.json());
    //     listTrans.value = await response.json();
    //   } catch (err) {
    //     error.value = err;
    //       console.log(error.value);
    //   }
    // }

    const getAllTransOnSetup = async() => {
      await baseUrl.basicCallApi().get("/transactions")
        .then((response) => {
          console.log(response.data);
          listTrans.value = response.data;
        }).catch((err) => {
          error.value = err;
          console.log(error.value);
        });
    }

    getAllTransOnSetup();

    // fetchAllTransOnSetup();

    return { listTrans, error };

  }
};
</script>
