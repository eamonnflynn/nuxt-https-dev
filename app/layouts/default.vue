<template>
  <div class="h-screen flex flex-col">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
main {
 
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  
}

</style>