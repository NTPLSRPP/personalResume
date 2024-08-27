<template>
  <div class="navbar bg-base-200 justify-between px-24">
    <div class="btn btn-ghost text-2xl font-bold">Personal Resume</div>
    <div class="flex gap-2">
      <a href="https://github.com/NTPLSRPP" target="_blank" class="btn btn-ghost">
        <v-icon name="co-github" class="scale-[2]"/>
      </a>
      <a class="btn btn-ghost">
        <v-icon name="co-twitter" class="scale-[2]"/>
      </a>
      <a href="https://www.linkedin.com/in/nathaphat-lertsiriphongphan-92982227a/" target="_blank" class="btn btn-ghost">
        <v-icon name="co-linkedin" class="scale-[2]"/>
      </a>
      <a class="btn btn-ghost" @click="ChangeTheme()">
        <v-icon v-if="isDark" name="co-moon" class="scale-[2]"/>
        <v-icon v-else name="co-sun" class="scale-[2]"/>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const emit = defineEmits(['theme']);
const isDark = ref(true);
const ChangeTheme = () => {
  emit("theme");
  isDark.value = !isDark.value;
};
onMounted(() => {
  if (localStorage.getItem('theme') !== 'dark') {
    isDark.value = false;
  }
})

</script>

<style lang="scss" scoped></style>
