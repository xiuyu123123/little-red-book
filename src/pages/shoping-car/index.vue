<!-- 购物车组件 -->
<script setup lang="ts">
import { carList, goodsList } from './data';
</script>

<template>
  <view v-for="(item, index) in carList" :key="index" class="content-box"
    ><MoveDelete :goods-info="item"></MoveDelete
  ></view>

  <view class="maybe_like">
    <text> 猜你喜欢</text>

    <!-- grid布局 -->
    <view class="maybe_like_content">
      <view v-for="(goods, index) in goodsList" :key="index" class="commodity">
        <image mode="scaleToFill" :src="goods.url"></image>
        <text class="title">{{ goods.content }}</text>
        <view class="price">
          <text class="price_left">{{ goods.price }}</text>
          <text class="price_right">月销售{{ goods.count }}</text>
        </view>
      </view>
    </view>
  </view>
  <view class="foot">
    <view class="select_all">
      <radio style="transform: scale(0.7)"></radio>
      <text>全选</text>
    </view>
    <view class="settle">
      <text>总计：</text>
      <text>¥{{ 0 }}</text>
      <button>结算</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content-box {
  margin: 20rpx;
}
.maybe_like {
  padding: 20rpx;

  // width: 100%;
  .maybe_like_content {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 49% 49%;
    margin-top: 20rpx;
    grid-row-gap: 20rpx;
    grid-column-gap: 2%;
  }
  .commodity {
    position: relative;
    border: 1rpx solid transparent;
    border-radius: 5rpx;
    box-shadow: 2rpx 2rpx 2rpx 2rpx #00000042;
    image {
      width: 100%;
      height: 300rpx;
      object-fit: cover;
    }
    .title {
      width: 90%;
      padding: 20rpx;
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      // text-align: center;
      text-overflow: ellipsis;
    }
    .price {
      width: 90%;
      padding: 20rpx;
      display: flex;
      justify-content: space-between;
      .price_right {
        color: $book-color-border;
      }
    }
    // .square {
    // position: relative;
    // width: 50%; /* 设置正方形宽度为父元素宽度的一半 */
    // padding-top: 50%; /* 设置上边距为宽度的一半，实现正方形效果 */
    // background-color: blue; /* 设置背景颜色 */
    // }
  }
}
.foot {
  background: white;
  // margin: 20rpx;
  display: flex;
  font-size: 24rpx;
  width: 100%;
  box-sizing: border-box;
  padding: 20rpx;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  height: 100rpx;
  line-height: 100rpx;
  .select_all {
    display: flex;
    align-items: center;
  }
  .settle {
    display: flex;
    align-items: center;
    font-size: 20rpx;

    button {
      background: $book-color-icon;
      border: 1rpx solid transparent;
      border-radius: 30rpx;
      margin-left: 20rpx;
      font-size: 20rpx;
      color: white;
      display: inline-block;
      width: 100rpx;
    }
  }
}
</style>
