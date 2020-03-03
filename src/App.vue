<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home" activeColor='#00a8ff'>
        <img slot="item_icon" src="~assets/image/home.svg" alt />
         <img slot="item_active_icon" src="~assets/image/home_active.svg" alt />
        <div slot="item_text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category" activeColor='#00a8ff'> 
        <img slot="item_icon" src="~assets/image/cate.svg" alt />
         <img slot="item_active_icon" src="~assets/image/cate_active.svg" alt />
        <div slot="item_text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart" activeColor='#00a8ff'>
        <img slot="item_icon" src="~assets/image/cart.svg" alt />
         <img slot="item_active_icon" src="~assets/image/cart_active.svg" alt />
        <div slot="item_text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" activeColor='#00a8ff'>
        <img slot="item_icon" src="~assets/image/profile.svg" alt />
         <img slot="item_active_icon" src="~assets/image/profile_active.svg" alt />
        <div slot="item_text">我的</div>
      </TabbarItem>
    </Tabbar>
  
  </div>
</template>

<script>
import Tabbar from "./components/tabbar/tabbar.vue";
import TabbarItem from "./components/tabbar/tabbarItem.vue";
export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
