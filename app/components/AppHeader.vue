<template>
  <header>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;

}

a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

a:hover {
  color: #00dc82;
}
</style>