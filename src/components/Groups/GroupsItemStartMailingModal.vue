<template>
  <base-modal
    :showModal="showModal"
    id="groupStartMailingModal"
    title="Запустить рассылку"
    @close-modal="emit('close-modal')">
    <template #body>
      <div class="group-modal">
        <base-input
          v-model="message"
          label="Текст сообщения"
        />
      </div>
    </template>

    <template #footer>
      <base-button
        @click="startMailing()">
        Запустить рассылку
      </base-button>
    </template>
  </base-modal>
</template>

<script setup>

import BaseModal from "@/components/UI/BaseModal.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import api from "@/api";
import BaseButton from "@/components/UI/BaseButton.vue";
import {ref} from "vue";

const props = defineProps({
  showModal: {
    type: Boolean
  },
  group: Object,
})

const emit = defineEmits(['close-modal', 'update-group']);

let message = ref('');

async function startMailing() {
  const { data } = await api.groups.startMailing({
    groupId: props.group._id,
    message: message.value,
  });
}
</script>

<style scoped lang="scss">
.group-modal {
  width: 500px;

  &__subtitle {
    font-size: 18px;
    font-weight: 700;
    margin: 32px 0 16px 0;
  }

  &__admin {
    padding: 8px;
    border-radius: 16px;
    margin-bottom: 8px;
    box-shadow: 0 4px 32px 0 rgba(255, 255, 255, 0.1);
  }
}
</style>