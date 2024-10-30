<template>
  <div
    class="base-input">
    <label
      v-if="label"
      class="label">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      @input="onInput"
      @change="onChange"
      :type="type"
      :class="error"
    >

    <span
      v-if="error"
      class="error">
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: string | number,
  type?: string,
  label?: string,
  error?: string,
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
  (event: 'on-change', value: string): void;
  (event: 'on-input', value: string): void;
}>()

function onChange(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('on-change', target.value);
}

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('on-input', target.value);
}
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  display: flex;
  flex-direction: column;

  .label, .error {
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .error {
    color: #F84B4B;
  }

  input {
    color: white;
    font-family: "Montserrat", sans-serif;
    border-radius: 10px;
    padding: 8px 10px;
    border: 1px solid #b7bac1;
    background: #0c0c0c;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background 0.2s ease-out, border-color 0.2s ease-out;

    &:hover, &:focus {
      outline: none;
      border: 1px solid #581c87;
    }

    &.error {
      border: 1px solid #F84B4B;
    }
  }
}
</style>