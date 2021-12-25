<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <br><br>
    <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
<br><br>
<el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
<br><br>
<el-input placeholder="请输入密码" v-model="input" show-password></el-input>
<div class="demo-input-suffix">
  属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="x-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="x-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  slot 方式：
  <el-input
    placeholder="请选择日期"
    v-model="input3">
    <template #suffix>
      <i class="el-input__icon x-icon-date"></i>
    </template>
  </el-input>
  <el-input
    placeholder="请输入内容"
    v-model="input4">
    <template #prefix>
      <i class="el-input__icon x-icon-search"></i>
    </template>
  </el-input>
</div>
<br>
<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea" />
  <br>
  <el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</el-input>
<br>
<div>
  <el-input placeholder="请输入内容" v-model="input1">
    <template #prepend>Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input2">
    <template #append>.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <template #append>
      <el-button icon="x-icon-search"></el-button>
    </template>
  </el-input>
</div>
<br>
<div class="demo-input-size">
  <el-input
    placeholder="请输入内容"
    suffix-icon="x-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="x-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="x-icon-date"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="x-icon-date"
    v-model="input4">
  </el-input>
</div>
<br>
<el-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      textarea: '',
      textarea1: '',
      textarea2: '',
      select: ''
    }
  }
}
</script>

<style>
  .x-input {
    width: 200px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
