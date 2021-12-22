<template>
  <div>
    <el-row>
      <el-col :sm="12" :lg="6">
        <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
          <template #extra>
            <el-button type="primary" size="medium">返回</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="warning" title="警告提示" subTitle="请根据提示进行操作">
          <template #extra>
            <el-button type="primary" size="medium">返回</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="error" title="错误提示" subTitle="请根据提示进行操作">
          <template #extra>
            <el-button type="primary" size="medium">返回</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result icon="info" title="信息提示" subTitle="请根据提示进行操作">
          <template #extra>
            <el-button type="primary" size="medium">返回</el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
    <el-result title="404" subTitle="抱歉，请求错误">
      <template #icon>
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
      </template>
      <template #extra>
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </div>
</template>
