<template>
  <h1>This is home page</h1>

  <input type="text" v-model="searchText" />

  <ul>
    <li v-for="(cus, index) in customerFilled" :key="index">
      {{ cus }}
    </li>
  </ul>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },

  setup(props, {emit}) {
    /**
     * Bien tao trong composition api se ko co reactive
     */
    // let firstName = "Phuc Do ";

    /**
     * De cau hinh reactive cho mot bien can them tu khoa ref
     */
    // const firstName = ref("Phuc Do");

    // const secondName = ref({
    //     name: "Test-name-02",
    //     age:23
    // })

    // let car = reactive({
    //     price: 20000,
    //     name: "Mec"
    // });

    // const onChangeSomething = () => {
    //     // console.log("running here...");

    //     // console.log(car);
    //     // // firstName = "David";
    //     // car.price = 40000;
    //     // secondName.value.name = "Tuong Trinh";
    //     // firstName.value = "David";
    //     // console.log(secondName);

    //     secondName.value = {
    //         name: "Tran Bang",
    //         age: 100
    //     };

    //     car = {
    //         name: "Toyota",
    //         price: 312312313
    //     }
    //     console.log(secondName);
    //     console.log(car);
    // }

    console.log(props.theme);
    console.log(emit);

    let listName = reactive([
      "Phuc do",
      "Tuong Trinh",
      "Truong Le",
      "Son Ba",
      "Dat Tran",
    ]);

    let searchText = ref("");

    //computed
    const customerFilled = computed(() =>
      listName
        .map((cus) => {
          cus = cus.toLowerCase();
          return cus;
        })
        .filter((cus) => cus.includes(searchText.value.toLowerCase()))
    );

    //watch de bat nhung gi ma mot func hoac mot bien ma co su thay doi
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    /**
     * watch effect dung de xu ly func ham ma khong tra du lieu
     * watch effect giong computed: no se thay doi khi noi tai no thay doi
     * khac computed: computed thi tra gia tri, watchEffect thi khong
     */
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again!!");
      }
    });

    return { searchText, customerFilled };
  },
};
</script>
