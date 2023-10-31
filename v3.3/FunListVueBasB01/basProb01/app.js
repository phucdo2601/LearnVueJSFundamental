const vm =  Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: "test-middle-name",
            lastName: "Billy",
            url: "https://www.google.com.vn/",
            raw_url: '<a href="https://www.google.com.vn/" target="_blank">Google</a>',
            age: 23,
        }
    },
    methods: {
        
        increment() {
            this.age++;
        },
        updateLastName(msg, event) {
            // event.preventDefault();
            // console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        }
    },

    computed: {
        fullName() {
            console.log('Full name computed property was called!');
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    }
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000)


