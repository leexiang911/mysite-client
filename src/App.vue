<template>
  <div id="app">
    <Layout>
      <template #header>
        <Navbar />
      </template>

      <template #main>
        <router-view style="height: 100%;" />
      </template>

    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout';
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Layout,
    Navbar
  }
}
</script>

<style lang="less">
@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css);
:root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  width: 100vw;
  height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  -webkit-user-drag: none;// 禁止拖动元素
}
</style>
