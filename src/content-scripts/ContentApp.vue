<template>
  <div class="background">
    <p>This is a Content App view</p>
    <p>{{ bar }}</p>
    <img :src="chrome.runtime.getURL('assets/logo.png')" alt="Vue Logo" width="60" height="60" />
    <HelloWorld :msg="bar" />
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

const chrome = inject('chrome')

const bar = ref('bar')

onMounted(() => chrome.runtime.sendMessage('Message from ContentApp'))
</script>
