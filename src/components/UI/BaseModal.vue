<template>
  <div
    v-if="showModal"
    class="modal__background">
    <div
      class="modal__wrapper"
      :id="id">
      <div class="modal__overlay" @click.stop="emit('close-modal')">
      </div>

      <div class="modal__container">
        <div class="modal__header">
          <h2 class="modal__title">{{ title }}</h2>

          <base-button
            icon
            @click="emit('close-modal')">
            <img src="@/assets/icons/cross.svg" alt="cross">
          </base-button>
        </div>

        <div class="modal__body">
          <slot name="body"></slot>
        </div>

        <div class="modal__footer" >
          <slot name="footer">
            <base-button
              @click="emit('close-modal')">
              Сохранить
            </base-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/UI/BaseButton.vue";

interface Props {
  showModal: boolean,
  title: string,
  id: string
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'close-modal'): void,
}>();
</script>

<style  lang="scss" scoped>
.modal {
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: visible;
    background: rgba(5, 16, 27, 0.4);
    z-index: 9999;
  }

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1046;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
    z-index: 999;
  }

  &__container {
    background: #0c0c0c;
    min-width: 450px;
    max-width: 1050px;
    width: auto;
    padding: 25px;
    margin: 10px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    z-index: 1000;
    position: relative;

    @media (max-width: 750px) {
      max-width: 375px;
      min-width: 300px;
      padding: 15px;
      border-radius: 32px;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px 0;
  }

  &__title {
    line-height: 33px;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
  }
}

</style>