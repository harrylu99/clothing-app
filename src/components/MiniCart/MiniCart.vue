<template>
  <div class="mini-cart">
    <div v-if="CurCart.length === 0" class="empty-warning">
      Your Cart Is Empty!
    </div>
    <b-row
      v-for="item in CurCart"
      :key="item.size"
      :class="'button' + item.size"
    >
      <b-col class="pic" cols="4">
        <img
          :src="CurProduct.imageURL"
          :alt="'Pic of ' + CurProduct.title"
          width="80"
          height="120"
        />
      </b-col>
      <b-col class="desc" cols="8">
        <div class="title">{{ CurProduct.title }}</div>
        <div v-if="CurProduct.price" class="price">
          {{ item.qty }} * ${{ CurProduct.price.toFixed(2) }}
        </div>
        <div class="size">SIZE: {{ item.size }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import app from './MiniCart'
export default app
</script>

<style scoped lang="scss">
@import "./MiniCart.scss";
</style>
