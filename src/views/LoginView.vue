<template>
  <div class="login">
    <p class="login__title">
      Войдите в систему
    </p>

    <div class="login__fields">
      <base-input
        v-model="userName"
        label="Логин"
        margin="0 0 24px 0"
      />

      <base-input
        v-model="password"
        label="Пароль"
        margin="0 0 24px 0"
        type="password"
      />
    </div>

    <base-button
      margin="0 0 0 auto"
      @click="login()">
      Войти
    </base-button>
  </div>
</template>

<script setup>

import BaseInput from "@/components/UI/BaseInput.vue";
import {ref} from "vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import api from '@/api';

const userName = ref('');
const password = ref('');

async function login() {
  await api.auth.login({
    userName: userName.value,
    password: password.value,
  });
}
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10% auto 0 auto;
  width: 46%;
  height: 300px;
  padding: 16px;
  border-radius: 16px;
  background: #0c0c0c;
  box-shadow: 0 4px 32px 0 rgba(255, 255, 255, 0.15);

  &__title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
  }
}
</style>