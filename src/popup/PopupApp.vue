<template>
  <div class="background">
    <p>This is a Popup view</p>
    <p>{{ foo }}</p>
    <img :src="chrome.runtime.getURL('assets/logo.png')" alt="Vue Logo" width="60" height="60" />
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'

const chrome = inject('chrome')

const foo = ref('Foo')

onMounted(() => chrome.runtime.sendMessage('Message from PopupApp'))
</script>
