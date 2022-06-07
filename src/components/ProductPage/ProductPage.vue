<template>
  <div>
    <div class="header">
      <button :class="ShowMiniCart ? 'checked' : ''" @click="checkCart()">
        My Cart ( {{ TotalQty }} )
      </button>
    </div>
    <div class="row row-cols-1 row-cols-md-2">
      <b-col class="pic-section">
        <img
          :src="CurProduct.imageURL"
          :alt="'Pic of ' + CurProduct.title"
        />
      </b-col>
      <b-col class="desc-section">
        <div class="title">{{ CurProduct.title }}</div>
        <div v-if="CurProduct.price" class="price">
          ${{ CurProduct.price.toFixed(2) }}
        </div>
        <div class="description">{{ CurProduct.description }}</div>
        <div class="size">
          <div class="size-title">
            SIZE
            <span class="required-star">* </span>
            <span v-if="ShowSelectError" class="select-error"
              >Please select a size!
            </span>
            <span class="selected-size">{{ SelectedSize }}</span>
          </div>
          <div class="size-selector">
            <div
              v-for="size in CurProduct.sizeOptions"
              :key="size.id"
              :class="'button' + size.label"
            >
              <button
                :class="SelectedSize === size.label ? 'selected' : ''"
                type="button"
                @click="sizeChange(size.label)"
              >
                {{ size.label }}
              </button>
            </div>
          </div>
        </div>
        <button class="add-to-cart" @click="addToCart()">ADD TO CART</button>
      </b-col>
    </div>
    <mini-cart
      v-if="ShowMiniCart"
      :CurCart="CurCart"
      :CurProduct="CurProduct"
    />
  </div>
</template>

<script lang="ts">
import app from './ProductPage'
export default app
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './ProductPage.scss';
</style>
