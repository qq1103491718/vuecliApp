<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index ) in navList" :key="index">
        <img :src="item.imgPath" alt />
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          text: "首页",
          imgPath: require("../assets/images/home.png"),
          activeImgPath: require("../assets/images/home-select.png"),
          routerPath: ""
        },
        {
          text: "车辆",
          imgPath: require("../assets/images/search.png"),
          activeImgPath: require("../assets/images/search-select.png"),
          routerPath: ""
        },
        {
          text: "e湾区",
          imgPath: require("../assets/images/imlogo.png"),
          activeImgPath: require("../assets/images/imlogo.png"),
          routerPath: ""
        },
        {
          text: "管家",
          imgPath: require("../assets/images/inquiry.png"),
          activeImgPath: require("../assets/images/inquiry-select.png"),
          routerPath: ""
        },
        {
          text: "我的",
          imgPath: require("../assets/images/my.png"),
          activeImgPath: require("../assets/images/my-select.png"),
          routerPath: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>