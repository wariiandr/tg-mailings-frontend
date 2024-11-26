<template>
  <div class="groups__item">
    <p class="groups__title">
      {{ group.name }}

      <base-button
        icon
        @click="emit('on-edit-group', group)">
        <img src="@/assets/icons/edit.svg" alt="edit">
      </base-button>
    </p>

    <a
      class="groups__link"
      :href="group.link"
      target="_blank">
      {{ group.link }}
    </a>

    <p class="groups__description">
      {{ group.description }}
    </p>

    <div class="groups__actions">
      <base-button
        @click="parseAdmins()">
        Спарсить админов
      </base-button>

      <base-button
        @click="startMailing()">
        Запустить рассылку
      </base-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Group} from "@/lib/Group";
import BaseButton from "@/components/UI/BaseButton/BaseButton.vue";
import api from "@/api";

interface Props {
  group: Group,
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: 'on-edit-group', value: Group): void,
  (event: 'update-group', value: Group): void,
  (event: 'open-mailing-modal', value: Group): void,
}>();

async function parseAdmins(): void {
  const group: Group = await api.groups.parseGroupAdmins({
    groupId: props.group._id,
  });

  emit('update-group', group);
}

async function startMailing(): void {
  emit('open-mailing-modal', props.group);
}

</script>

<style scoped lang="scss">
.groups {
  &__item {
    width: 46%;
    padding: 16px;
    border-radius: 16px;
    background: #1D2127;
    box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.08);
  }

  &__title {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    color: #8b5cf6;
  }

  &__description {
    margin: 8px 0;
    word-break: break-word;
    color: #b7bac1;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  }
}
</style>