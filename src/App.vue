<script setup>
</script>

<template>
  <nav>
    <RouterLink to="/">home</RouterLink>|
    <RouterLink to="/one">one</RouterLink>|
    <RouterLink to="/two">two</RouterLink>|
    <RouterLink to="/one/sub-a">one-sub-a</RouterLink>|
    <RouterLink to="/one/sub-b">one-sub-b</RouterLink>
  </nav>
  <br />
  <div>
    <RouterView />
  </div>  
</template>

