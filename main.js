const app = Vue.createApp({
  // noi dung cua vue se dc load tu day
  template: "",
  data() {
    return {
      classTesting: "flex",
      products: [
        {
          id: "pro01",
          name: "pro-name-01",
          price: 100,
          thumbUrl: "./assets/a1.png",
          isCart: false,
        },

        {
          id: "pro02",
          name: "pro-name-02",
          price: 150,
          thumbUrl: "./assets/ac1.png",
          isCart: false,

        },

        {
          id: "pro03",
          name: "pro-name-03",
          price: 200,
          thumbUrl: "./assets/arrow.png",
          isCart: false,

        },
      ],
    };
  },
  

  methods: {
    onToggleCart(event, pro) {
        pro.isCart = !pro.isCart;
    }

  },
  computed:{
    //tinh toan lai truoc khi tra du lieu
    productComputed(){

        return this.products.filter(pro => pro.price <= 160);
    }
  },
});

app.mount("#contact");
