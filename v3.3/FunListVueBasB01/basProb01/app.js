const vm =  Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: "Billy",
            url: "https://www.google.com.vn/",
            raw_url: '<a href="https://www.google.com.vn/" target="_blank">Google</a>',
            age: 23,
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },
        increment() {
            this.age++;
        },
        updateLastName(event) {
            this.lastName = event.target.value;
        }
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000)


