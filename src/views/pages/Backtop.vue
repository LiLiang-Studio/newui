<template>
  <div>
    <p>Scroll down to see the bottom-right button.</p>
    <div class="scroll-container" style="overflow:auto;height:300px">
      <ul>
        <li v-for="i in 50" :key="i">{{ i }} 这是一个可滚动容器</li>
      </ul>
    </div>
    <ul>
      <li v-for="i in 50" :key="i">{{ i }} 这是一个可滚动容器</li>
    </ul>
    <el-backtop target=".page-main"></el-backtop>
    <el-backtop target=".scroll-container" :bottom="100">
      <div
        style="
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        "
      >UP</div>
    </el-backtop>
  </div>
</template>
