<template>
  <div class="tabbar_item" @click="ItemClick">
    <div v-if="!isactive">
      <slot name="item_icon"></slot>
    </div>
    <div v-else>
      <slot name="item_active_icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#00a8ff'
    }
  },
  data() {
    return {
      // isactive: true
    };
  },
  computed:{
    isactive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
     activeStyle(){
      return this.isactive? {color:this.activeColor}:{}
    }
  },

  methods: {
    ItemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar_item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: #00a8ff;
}
</style>