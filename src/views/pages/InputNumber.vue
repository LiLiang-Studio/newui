<template>
  <div>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <br><br>
    <el-input-number v-model="num" :disabled="true"></el-input-number>
    <br><br>
  <el-input-number v-model="num" :step="2"></el-input-number>
    <br><br>
  <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
    <br><br>
  <el-input-number v-model="num1" :precision="2" :step="0.1" :max="10"></el-input-number>
    <br><br>
  <el-input-number v-model="num5"></el-input-number>
  <el-input-number size="medium" v-model="num2"></el-input-number>
  <el-input-number size="small" v-model="num3"></el-input-number>
  <el-input-number size="mini" v-model="num4"></el-input-number>
    <br><br>
  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 1,
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1,
        num5: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style lang="scss" scoped>
.x-input-number {
  margin-right: 10px;
}
</style>
