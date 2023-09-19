<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <elsa-studio-root
      server-url="https://localhost:7179/"
      monaco-lib-path="src/assets/monaco-editor/min"
    >
      <elsa-workflow-definition-editor-screen
        workflow-definition-id="4ecdc4d6ee3b455db6da0987ee8455d6"
      ></elsa-workflow-definition-editor-screen>
    </elsa-studio-root>
  </main>
</template>

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
  border-radius: 0.375rem;
}

/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
