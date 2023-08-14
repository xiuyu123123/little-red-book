<!-- 购物车滑动删除 -->
<script setup lang="ts">
defineProps({
  goodsInfo: {
    type: Object,
    default: () => {}
  }
});
const yellow = ref(0);
const red = ref(0);
const handleScroll = (e) => {
  const { scrollLeft, deltaX } = e.detail;
  console.log(deltaX);
  const distance = Math.abs(deltaX);
  if (deltaX < 0) {
    if (red.value < 80) {
      red.value += distance * 3;
      console.log(red.value);
    } else if (red.value >= 80) {
      red.value = 80;
    }
    console.log('redvalue', red.value);
    if (yellow.value < 80 && red.value === 80) {
      yellow.value += distance * 3;
      console.log(yellow.value);
    } else if (yellow.value >= 80) {
      yellow.value = 80;
    }
  }
};
</script>

<template>
  <view class="shopping-car box">
    <view>
      <radio value="r1" style="transform: scale(0.7)"></radio
      >{{ goodsInfo.storeName }}</view
    >
    <view class="scroll-view" scroll-x="true" @scroll="handleScroll">
      <view class="scroll-view-item scroll-view-item-content">
        <view style="display: inline-flex">
          <radio
            value="r1"
            style="transform: scale(0.7); margin: auto 0"
          ></radio>
          <image mode="scaleToFill" :src="goodsInfo.url" />
        </view>
        <view class="remark">
          <view class="title">
            {{ goodsInfo.content }}
          </view>
          <view class="other">
            <text
              v-for="(tag, tagsIndex) in goodsInfo.tags"
              :key="tagsIndex"
              class="tags"
            >
              {{ tag }}
            </text>
          </view>
          <view class="price">
            <text>
              {{ goodsInfo.price }}
            </text>
            <text>
              +

              {{ goodsInfo.count }}
            </text>
          </view>
        </view>
      </view>
      <!-- <view id="yellow" ref="yello" class="scroll-view-item">b</view> -->
    </view>
  </view>
</template>

<style scoped lang="scss">
.shopping-car {
  --box-radius: 30rpx;
  border: 1rpx solid transparent;
  box-shadow: 2rpx 2rpx 2rpx 2rpx $book-color-shadow;
  border-radius: var(--box-radius);
  // margin: 20rpx;
  padding: 30rpx;
  height: 250rpx;

  .scroll-view {
    height: 200rpx;
    margin: 2rpx;

    .scroll-view-item-content {
      height: 100%;
      width: 100%;
      display: inline-flex;
      image {
        width: 200rpx;
        height: 200rpx;
        border-radius: 20%;
      }
      .remark {
        padding: 0 20rpx;
        width: calc(100% - 300rpx);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .other {
          white-space: nowrap;
          width: 100%;
        }
        .tags {
          font-size: 16rpx;
          margin-right: 10rpx;
          border-radius: 10%;
          padding: 5rpx;
          border: 1rpx solid $book-color-border;
          color: $book-color-border;
        }

        .price {
          display: flex;
          justify-content: space-between;
          bottom: 0;
          width: 100%;
          text:nth-child(1) {
            float: left;
          }
          text:nth-child(2) {
            float: right;
            border-radius: 40%;
            padding: 5rpx;
            min-width: 30rpx;
            text-align: center;
            font-size: 16rpx;
            height: 30rpx;
            line-height: 30rpx;
            border: 1rpx solid $book-color-border;
            color: $book-color-border;
          }
        }
      }
    }
  }

  .scroll-view-item:nth-child(1) {
    width: 101%;

    z-index: 1;
  }
  .scroll-view-item:nth-child(2) {
    width: 160rpx;
    background: $book-color-primary;
    z-index: 1;
    // animation: 2s move;
  }
}
</style>
