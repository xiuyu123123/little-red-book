<!-- 点赞组件 点击图标有缩小放大效果 并且点赞 外围有一圈 border的圆环 -->
<script setup lang="ts">
const isActive = ref(false);
const isLike = ref('');
const handleActive = () => {
  // 点赞
  isLike.value = 'likes';
  isActive.value = !isActive.value;
  setTimeout(() => {
    // 取消点赞
    isLike.value = '';
  }, 300);
};
</script>

<template>
  <image
    :class="[isLike]"
    :src="isActive ? '/static/img/likes-active.svg' : '/static/img/likes.svg'"
    @click="handleActive"
  ></image>
</template>

<style scoped lang="scss">
image {
  --like-size: 30rpx;
  width: var(--like-size);
  height: var(--like-size);
}
.likes {
  animation: aniLikes 0.3s;
}
@keyframes aniLikes {
  0% {
    scale: 1;
  }
  50% {
    scale: 0.4;
  }
  100% {
    scale: 1;
  }
}
</style>
