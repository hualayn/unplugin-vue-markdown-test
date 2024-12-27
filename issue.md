when i import the .md file in the component of children section like this:
```
// index.js
import { createRouter, createWebHistory } from 'vue-router'
import MyView from '../views/MyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyView,
    },
    {
      path: '/one',
      component: () => import('../pages/one.md'),
      children: [
        {
          path: 'sub-a',
          component: () => import("../pages/one-sub-a.md")
        },
        {
          path: 'sub-b',
          component: () => import("../pages/one-sub-b.md")
        }
      ]
    },
    {
      path: '/two',
      component: () => import('../pages/two.md')
    },
  ],
})

export default router
```

```
// App.vue
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
```

```
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    vueDevTools(),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
```


when i import the .md file in the component of children section like below, it doesnot work.
otherwise in the parent component it works well.
i donot know whether it is a bug, pls help me with this problem and how to do to make it work in the children section