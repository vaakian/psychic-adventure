<template>
  <main
    font-sans
    p="x-4 y-10"
    text="center gray-700 dark:gray-200"
  >
    <router-view />
    <Footer />
    <CSSDemo :count="100" />
  </main>
</template>
<!-- see document below: -->
<!-- https://uno.antfu.me/ -->
