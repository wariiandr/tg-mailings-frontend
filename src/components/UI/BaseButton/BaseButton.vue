<template>
  <button
    class="base-button"
    :class="[ color, icon && 'icon' ]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: 'primary' | 'error',
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})
</script>

<style scoped lang="scss">
.base-button {
  display: block;
  background: #6d28d9;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 16px;
  border: none;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background: #581c87;
    transition: background 0.3s ease-out;
  }

  &:active {
    background: #3b0764;
  }

  &.icon {
    background: none;
    padding: 4px 4px;
  }

  &.error {
    background: #F84B4B;
  }
}
</style>