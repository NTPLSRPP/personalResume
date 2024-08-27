<template>
  <div class="w-[48%] ml-auto mr-auto mt-2">
    <div role="tablist" class="tabs tabs-bordered">
      <a
        role="tab"
        class="tab"
        :class="tabActive === 1 ? 'tab-active' : ''"
        @click="ChangeTab(1)"
        >Home</a
      >
      <a
        role="tab"
        class="tab"
        :class="tabActive === 2 ? 'tab-active' : ''"
        @click="ChangeTab(2)"
        >Details</a
      >
      <a
        role="tab"
        class="tab"
        :class="tabActive === 3 ? 'tab-active' : ''"
        @click="ChangeTab(3)"
        >Portfolio</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["activeTab"]);
const tabActive = ref(1);

const ChangeTab = (numTab) => {
  tabActive.value = numTab;
  emit("activeTab", numTab);
};
</script>

<style lang="scss" scoped></style>
