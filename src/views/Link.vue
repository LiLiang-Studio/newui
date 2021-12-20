<template>
  <div>
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div><br>

    <div>
      <el-link href="https://element.eleme.io" target="_blank" disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </div><br>

    <div>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div><br>

    <div>
      <el-link icon="x-icon-edit">编辑</el-link>
      <el-link>查看<i class="x-icon-view x-icon--right"></i> </el-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const type = ref('info')
    onMounted(() => {
      setTimeout(() => {
        type.value = 'warning'
      }, 2000)
    })
    return {
      type
    }
  }
}
</script>
