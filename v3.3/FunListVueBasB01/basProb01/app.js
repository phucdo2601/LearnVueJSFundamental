const vm =  Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: "Billy",
            url: "https://www.google.com.vn/"
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000)


