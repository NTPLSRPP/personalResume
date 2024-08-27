<template>
  <div :data-theme="theme" class="h-screen">
    <navBar @theme="toggleTheme()"></navBar>
    <tab @activeTab="activeTab"></tab>
    <mainView v-show="tabActive === 1"></mainView>
    <mainView2 v-show="tabActive === 2"></mainView2>
  </div>
</template>

<script setup>
import navBar from '@/components/navbar.vue'
import mainView from '@/components/mainView.vue'
import mainView2 from './components/mainView2.vue'
import { ref, onMounted } from 'vue'
import tab from '@/components/tab.vue'

const tabActive = ref(1)
const theme = ref('dark') // Initialize with a default theme

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'dark'
})

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'garden' : 'dark'
  localStorage.setItem('theme', theme.value)
}

const activeTab = (numTab) => {
  tabActive.value = numTab
}
</script>

<style lang="scss" scoped></style>