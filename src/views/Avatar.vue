<template>
  <div>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block"><el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar></div>
        <div class="block" v-for="size in sizeList" :key="size">
          <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
        </div>
      </div>
    </el-col> 
  </el-row>
  <div class="demo-type">
    <div>
      <el-avatar icon="x-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </el-avatar>
  </div>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

<style lang="scss" scoped>
.demo-avatar.demo-basic {
  text-align: center;
}
.demo-block .source {
  padding: 24px;
}
.demo-block {
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
}
.demo-type {
  display: flex;
  margin: 24px 0;
}
.sub-title {
  margin-bottom: 10px;
}
.demo-avatar.demo-basic .demo-basic--circle, .demo-avatar.demo-basic .demo-basic--square {
      display: flex;
    justify-content: space-between;
    align-items: center;
}
.demo-avatar.demo-basic .demo-basic--circle .block, .demo-avatar.demo-basic .demo-basic--square .block {
  flex: 1;
}
.demo-avatar.demo-basic .demo-basic--circle .block:not(:last-child), .demo-avatar.demo-basic .demo-basic--square .block:not(:last-child) {
  border-right: 1px solid rgba(224,230,237,.5);
}
.demo-fit {
  display: flex;
    text-align: center;
    justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
}
</style>
