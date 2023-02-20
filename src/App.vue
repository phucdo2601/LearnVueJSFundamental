<script>
import ModalComp from "./components/ModalComp.vue";

export default {
  name: "App",
  components: {
    BaseModal : ModalComp
  },
  data() {
    return {
      isShowModal: false,
    }
  },

  methods: {
    onToggleModel() {
      this.isShowModal = !this.isShowModal;
    }
  },
}

</script>

<template>
    <h1>Hello from vue cli</h1>
   <Teleport :to="body">
    <BaseModal
    v-if="isShowModal"
     title="this is the new title from app component" 
    content="this is content model"
    theme = "sales"
    @cancel="onToggleModel"
    >
    <template v-slot:header>
      <h2>This is header</h2>
    </template>
    <template v-slot:footer>
      <button @click="onToggleModel">Cancel</button>
    </template>
    <label for="">Name</label>.
    <input type="password">
  </BaseModal>
   </Teleport>

    <button @click="onToggleModel">Toggle Modal</button>
</template>
