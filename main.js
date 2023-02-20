const app = Vue.createApp({
    // noi dung cua vue se dc load tu day
    template: `<div><h1>Contact with {{teamName}} and {{ !isHello ? firstName + lastName : ''}}</h1>
    <!-- <br> 
    <button v-on:click= "onChangeName">Change Name</button> -->
    <br />
    <button @click= "onChangeName">Change Name Method 2</button>
    <div class="modal" v-if="isShowModel">
        <h1>Modal Content</h1>

    </div>

</div>`,
    data() {
        return {
            teamName: "Test Team 01",
            firstName: "Phuc",
            lastName: "Do Ngoc",
            isHello: false,
            isShowModel: false,
        }
    },

    methods: {
        onChangeName() {
            console.log(this);
            this.firstName = "Sky";
            this.lastName = "Billy";
            this.isShowModel = !this.isShowModel;
        }
    },
});

app.mount('#contact');