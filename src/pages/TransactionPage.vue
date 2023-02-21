<template>
  <h1>Transaction is here!</h1>

  <div class="card" style="width: 18rem" v-for="object in listTrans" :key="object.id">
    
    <div class="card-body">
      <h5 class="card-title">{{ object.name }}</h5>
      <!-- <router-link :to="`/transactions/${object.id}`" class="card-text">
       {{ object.name }}
      </router-link> -->

      <router-link :to="{name:'transaction-details-route', params: {id: object.id}}" class="card-text">
       {{ object.name }}
      </router-link>

      <p class="card-text">Price:{{ object.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionPage",
  data() {
    return {
      listTrans: [
        {
          id: 1,
          name: "Test-trans-01",
          price: 10000,
        },
        {
          id: 2,
          name: "Test-trans-02",
          price: 20000,

        },
        {
          id: 3,
          name: "Test-trans-03",
          price: 30000,

        },
        {
          id: 4,
          name: "Test-trans-04",
          price: 40000,

        },
        {
          id: 5,
          name: "Test-trans-05",
        },
      ],
    };
  },
};
</script>
