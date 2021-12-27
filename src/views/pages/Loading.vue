<template>
  <div class="container">
    <div v-loading class="area">
      这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容
    </div>
    <div
      class="area"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="x-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容这是一些内容</div>
    <el-button
      type="primary"
      @click="openFullScreen1"
      v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </el-button>
    <el-button
      type="primary"
      @click="openFullScreen2">
      服务方式
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'x-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
.area {
  height: 200px;
  border: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
}
.x-button {
  margin-right: 10px;
}
</style>
