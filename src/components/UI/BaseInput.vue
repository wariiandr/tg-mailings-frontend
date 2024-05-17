<template>
  <div
    class="base-input"
    :style="{margin: margin}">
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

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
  },
  error: {
    type: String,
  },
  margin: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue', 'on-change', 'on-input']);

function onChange(e) {
  emit('on-change', e.target.value);
}

function onInput(e) {
  emit('update:modelValue', e.target.value);
  emit('on-input', e.target.value);
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
    border: 2px solid #b7bac1;
    background: #0c0c0c;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: background 0.2s ease-out, border-color 0.2s ease-out;

    &:hover, &:focus {
      outline: none;
      border: 2px solid #581c87;
    }

    &.error {
      border: 2px solid #F84B4B;
    }
  }
}
</style>