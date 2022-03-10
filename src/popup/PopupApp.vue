<template>
  <div class="background">
    <p>This is a Popup view</p>
    <p>{{ foo }}</p>
    <img :src="chrome.runtime.getURL('assets/logo.png')" alt="Vue Logo" width="60" height="60" />
  </div>
</template>

<script>
export default {
  inject: ['chrome'],
  data() {
    return {
      foo: 'foo',
    }
  },
  onMounted() {
    chrome.runtime.sendMessage('Message from PopupApp')
  },
}
</script>
