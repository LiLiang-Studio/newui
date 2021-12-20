<template>
  <div class="page-home">
    <ul class="page-nav">
      <li v-for="_ in routes" :key="_.path">
        <el-link :to="`/${_.path}`">{{ getTitle(_) }}</el-link>
      </li>
    </ul>
    <div class="page-main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { routes } from '../router'

/** @param {{path: string}} param0 */
const getTitle = ({ path }) => path.charAt(0).toUpperCase() + path.slice(1)
</script>

<style lang="scss">
.page-home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .page-nav {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 16px;
    border-bottom: 1px solid #f2f2f2;
    li {
      list-style: none;
      margin-right: 10px;
      .router-link-active {
        color: #409EFF;
      }
    }
  }
  .page-main {
    padding: 16px;
    flex: 1;
    overflow-y: auto;
  }
}
</style>
