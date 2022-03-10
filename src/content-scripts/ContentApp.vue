<template>
  <div class="background">
    <p>This is a Content App view</p>
    <p>{{ bar }}</p>
    <img :src="chrome.runtime.getURL('assets/logo.png')" alt="Vue Logo" width="60" height="60" />
    <HelloWorld :msg="bar" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  inject: ['chrome'],
  data() {
    return {
      bar: 'bar',
    }
  },
  onMounted() {
    chrome.runtime.sendMessage('Message from ContentApp')
  },
}
</script>
