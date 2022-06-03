<template>
  <transition name="modal-fade">
    <div class="modal-container">
      <div
        class="modal-wrapper"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header">
          <slot name="header">
            This is the default title!
          </slot>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body"></slot>
        </section>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>

          <button
            type="button"
            class="btn btn-green"
            @click="onClick"
            :aria-label="buttonLabel"
          >
            {{ buttonLabel }}
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    buttonLabel: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-wrapper {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #000;
  justify-content: space-between;
  font-weight: 600;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white !important;
  background: #4aae9b !important;
  border: 1px solid #4aae9b !important;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
