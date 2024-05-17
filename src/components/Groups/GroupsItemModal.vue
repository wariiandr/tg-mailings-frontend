<template>
  <base-modal
    :showModal="showModal"
    id="groupModal"
    title="Редактирование группы"
    @close-modal="emit('close-modal')">
    <template #body>
      <div class="group-modal">
        <base-input
          v-model="editedGroup.name"
          label="Название группы"
          margin="0 0 16px 0"
          @on-change="editGroup"
        />

        <base-input
          v-model="editedGroup.link"
          label="Ссылка на группу"
          margin="0 0 16px 0"
          @on-change="editGroup"
        />

        <base-input
          v-model="editedGroup.description"
          label="Описание"
          margin="0 0 16px 0"
          @on-change="editGroup"
        />

        <template
          v-if="editedGroup._id">
          <p class="group-modal__subtitle">
            Список администраторов:
          </p>

          <div
            class="group-modal__admin"
            v-for="admin in editedGroup.admins"
            :key="admin._id">
            <p class="group-modal__fullname">
              {{ admin.firstName }} {{ admin.lastName }}
            </p>

            <p class="group-modal__username">
              @{{ admin.userName }}
            </p>
          </div>
        </template>
      </div>
    </template>

    <template #footer>
      <base-button
        v-if="!editedGroup._id"
        @click="createGroup()">
        Создать группу
      </base-button>
    </template>
  </base-modal>
</template>

<script setup>

import BaseModal from "@/components/UI/BaseModal.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import api from "@/api";
import BaseButton from "@/components/UI/BaseButton.vue";

const props = defineProps({
  showModal: {
    type: Boolean
  },
  editedGroup: Object,
})

const emit = defineEmits(['close-modal', 'update-group']);

async function createGroup() {
  const { data } = await api.groups.postGroup({ ...props.editedGroup });

  emit('add-group', data);
  emit('close-modal');
}

async function editGroup() {
  if (props.editedGroup._id) {
    const { data } = await api.groups.putGroup({ ...props.editedGroup });

    emit('update-group', data);
  }
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