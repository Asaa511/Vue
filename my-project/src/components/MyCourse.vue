<template>
  <div>
    <a href="#" class="btn btn-primary" @click="goToJava">Java</a>
    <a href="#" class="btn btn-primary" @click="goToPHP">PHP</a>
  </div>
</template>

<script>
export default {
  name: "MyCourse",
  methods: {
    goToJava() {
      // 执行 Java 页面的跳转逻辑
      this.$router.push("/java");
    },
    goToPHP() {
      // 执行 PHP 页面的跳转逻辑
      this.$router.push("/php");
    },
  },
};
</script>

<style scoped>
/* 添加需要的样式 */
.btn {
  margin-right: 10px;
}
</style>
