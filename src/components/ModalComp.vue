<script>
export default {
  props:{
    title: {
      type: String,
      required: true
    },
    content:{
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: "example",
      validator(val) {
        ["example", "sales", "contact", "right", "left"].includes(val);
      }
      
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    onCloseModal() {
      //gui su kien tu con ra cha
      this.$emit('cancel');
    }
  },
}
</script>

<template>
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" @click.self="onCloseModal">
      <div class="modal-content" :class="{'bg-purple': theme === 'contact'}">
        <div class="modal-header">
         <slot name="header"></slot>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
         <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- khi them scoped thi css chi app dung trong component nay thoi, kko co thi global -->
<style lang="css" scoped>
.modal-content.bg-purple{
  background-color: purple;
}
</style>
