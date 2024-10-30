<template>
  <div class="groups">
    <h1 class="groups__h1">
      Мои группы

      <base-button
        icon
        margin="8px 0 0 16px"
        @click="openEditingModal({ ...newGroup })">
        <img src="@/assets/icons/plus.svg" alt="plus">
      </base-button>
    </h1>

    <div class="groups__list">
      <groups-item
        v-for="group in groups"
        :key="group._id"
        :group="group"
        @on-edit-group="openEditingModal"
        @update-group="updateGroup"
        @open-mailing-modal="openMailingModal"
      />
    </div>

    <groups-item-modal
      :showModal="isEditingModalOpened"
      :editedGroup="editedGroup"
      @close-modal="isEditingModalOpened = false"
      @update-group="updateGroup"
      @add-group="addGroup"
    />

    <groups-item-start-mailing-modal
      :showModal="isMailingModalOpened"
      :group="editedGroup"
      @close-modal="isMailingModalOpened = false"
    />
  </div>
</template>

<script lang="ts" setup>

import GroupsItem from "@/components/Groups/GroupsItem.vue";
import {onMounted, ref} from "vue";
import GroupsItemModal from "@/components/Groups/GroupsItemModal.vue";
import api from '@/api';
import BaseButton from "@/components/UI/BaseButton.vue";
import GroupsItemStartMailingModal from "@/components/Groups/GroupsItemStartMailingModal.vue";
import {Group} from "@/lib/Group";
import {Ref} from "vue";

let groups = ref<Group[]>([]);
const newGroup: Group = {
  _id: '',
  name: '',
  link: '',
  description: '',
  admins: [],
}

let isEditingModalOpened = ref<boolean>(false);
let editedGroup: Ref<Group> = ref({
  _id: '1', // Инициализируем корректно
  name: '',
  link: 'example.com',
  description: 'A group',
  admins: [],
});

function openEditingModal(group: Group): void {
  isEditingModalOpened.value = true;
  editedGroup.value = group;
}

function updateGroup(group: Group): void {
  const groupIdx: number = groups.value.findIndex(g => g._id === group._id);

  if (groupIdx !== -1) {
    groups.value[groupIdx] = group;
  }
}

function addGroup(group: Group): void {
  groups.value.push(group);
}


const isMailingModalOpened = ref<boolean>(false);

function openMailingModal(group: Group): void {
  isMailingModalOpened.value = true;
  editedGroup.value = group;
}


onMounted(async () => {
  editedGroup.value = { ...newGroup };

  groups.value = await api.groups.getAllGroups();
})
</script>

<style scoped lang="scss">
.groups {
  &__h1 {
    font-size: 42px;
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  &__list {
    display: flex;
    flex-direction: row;
    gap: 16px;
    flex-wrap: wrap;
  }
}
</style>