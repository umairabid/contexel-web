<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h2>{{title}}</h2>
          <i @click="$emit('close')" class="material-icons md-18 pointer">close</i>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="hasFooter" class="modal-footer">
          <button class="btn primary"> Save </button>
          <button @click="$emit('close')" class="btn danger"> Close </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  props: {
    hasFooter: Boolean,
    title: String
  }
}

</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
  display: flex;
  align-items: center;
}

.modal-container {
  min-width: 300px;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  z-index: 3;
}

.modal-header { 
  padding: $ver_space * 1.5 $hor_space;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color_lighten_5;
  border-bottom: 1px solid $border_color;
  h2 {
    margin: 0;
  }
}

.modal-body { }

.modal-footer {
  background-color: $color_lighten_5;
  border-top: 1px solid $border_color;
  padding: $ver_space $hor_space;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button.btn {
    margin-left: $hor_space;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
