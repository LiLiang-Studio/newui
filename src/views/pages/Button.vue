<template>
  <div>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div><br>

    <div>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </div><br>

    <div>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </div><br>

    <div>
      <el-button icon="x-icon-search" circle></el-button>
      <el-button type="primary" icon="x-icon-edit" circle></el-button>
      <el-button type="success" icon="x-icon-check" circle></el-button>
      <el-button type="info" icon="x-icon-message" circle></el-button>
      <el-button type="warning" icon="x-icon-star-off" circle></el-button>
      <el-button type="danger" icon="x-icon-delete" circle></el-button>
    </div><br>

    <div>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </div><br>

    <div>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </div><br>

    <div>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </div><br>

    <div>
      <el-button type="primary" icon="x-icon-edit"></el-button>
      <el-button type="primary" icon="x-icon-share"></el-button>
      <el-button type="primary" icon="x-icon-delete"></el-button>
      <el-button type="primary" icon="x-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="x-icon-upload x-icon--right"></i></el-button>
    </div><br>

    <div>
      <el-button-group>
        <el-button type="primary" icon="x-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="x-icon-arrow-right x-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="x-icon-edit"></el-button>
        <el-button type="primary" icon="x-icon-share"></el-button>
        <el-button type="primary" icon="x-icon-delete"></el-button>
      </el-button-group>
      <el-button-group>
        <el-button icon="x-icon-edit"></el-button>
        <el-button icon="x-icon-share"></el-button>
        <el-button icon="x-icon-delete"></el-button>
      </el-button-group>
      <el-button-group size="small">
        <el-button type="primary" icon="x-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="x-icon-arrow-right x-icon--right"></i></el-button>
      </el-button-group>
    </div><br>

    <div>
      <el-button type="primary" loading>加载中</el-button>
    </div><br>

    <div>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </div><br>

    <div>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.x-button {
  margin-right: 10px;
}
</style>
