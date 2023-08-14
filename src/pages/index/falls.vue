<script setup lang="ts">
import { imgList } from './data';
</script>

<template>
  <view class="page">
    <view v-for="(img, index) in imgList" :key="index">
      <view class="page_content">
        <video v-if="img.type === 'video'" tabindex="-1" :src="img.url"></video>
        <image v-else :src="img.url" mode="widthFix" />
        <view class="page_content_title">{{ img.content }}</view>
        <view class="page_content_user">
          <view class="page_content_avater">
            <image mode="scaleToFill" :src="img.userInfo.avater" />
            <text> {{ img.userInfo.accout }}</text>
          </view>
          <view class="page_content_likes">
            <Likes class="page_content_likes_components"></Likes>
            <text>{{ img.userInfo.numbeLikes }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.page {
  --avater-size: 30rpx;
  --content-padding: 20rpx;
  --font-size-sm: 16rpx;
  --font-size-title: 24rpx;
  padding: 20rpx;
  columns: 2;
  column-gap: 10rpx;
  view {
    padding: var(--content-padding) 0rpx;
  }
  .page_content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1rpx solid transparent;
    border-radius: 5rpx;
    box-shadow: 2rpx 2rpx 2rpx 2rpx #00000042;
    image {
      width: 100%;
    }
    .page_content_title {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 var(--content-padding);
      width: 90%;
      text-overflow: ellipsis;
    }
    .page_content_user {
      width: 90%;
      padding: 0 var(--content-padding);
      height: auto;
      display: inline-block;
      overflow: hidden;
      font-size: var(--font-size-sm);
      .page_content_avater {
        display: inline-flex;
        align-items: center;
        image {
          width: var(--avater-size);
          height: var(--avater-size);
          border-radius: 50%;
        }
      }
      .page_content_likes {
        display: inline-flex;
        align-items: center;
        float: right;
        .page_content_likes_components {
          display: flex;
        }
      }
    }
  }
}
</style>
