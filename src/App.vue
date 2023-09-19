<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <main>
    <elsa-studio-root
      server-url="https://localhost:7179/"
      monaco-lib-path="src/assets/monaco-editor/min"
    >
    <!-- <elsa-studio-dashboard></elsa-studio-dashboard> -->
      <elsa-workflow-definition-editor-screen
        workflow-definition-id="4ecdc4d6ee3b455db6da0987ee8455d6">
      </elsa-workflow-definition-editor-screen>
    </elsa-studio-root>
  </main>
</template>

<!-- <style scoped> -->
<style>
#svg {
  height: 100vh !important;
}

.workflow-settings-button {
  display: none;
}

elsa-workflow-definition-editor-screen div span button {
  display: inline-flex !important;
  visibility: visible !important;
  top: 20px !important;
  right: 20px !important;
}

#option-menu {
  display: none !important;
}

elsa-workflow-publish-button span button {
  position: static !important;
  border-radius: 0.375rem;
}
</style>
