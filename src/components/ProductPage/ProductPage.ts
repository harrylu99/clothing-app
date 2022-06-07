import axiosHelper from '@/mapping/axiosHelper'
import { Component, Prop, Vue } from 'vue-property-decorator'
import Product from '../../interface/Product'
import CartItem from '../../interface/CartItem'
import MiniCart from '../MiniCart/MiniCart.vue'

@Component<ProductPage>({
  components: { MiniCart },
})
export default class ProductPage extends Vue {
  CurProduct: Product = new Product()
  CurCart: CartItem[] = []
  TotalQty = 0
  SelectedSize = ''
  ShowSelectError = false
  ShowMiniCart = false

  // send GET request
  async getCurProduct() {
    const rep = await axiosHelper.axiosGet(
      'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
    )
    if (rep.Error) {
      alert(rep.Message)
    } else {
      this.CurProduct = rep.Data
    }
  }

  // click or change size button
  sizeChange(size: string) {
    this.ShowSelectError = false
    this.SelectedSize = size
  }

  // click add to cart button
  addToCart() {
    // if user did not select size
    if (this.SelectedSize === '') {
      this.ShowSelectError = true
      return
    }
    // when user select size
    this.ShowSelectError = false
    const findSizeInCart = this.CurCart.map((it) => {
      return it.size
    }).indexOf(this.SelectedSize)

    if (findSizeInCart === -1) {
      this.CurCart.push({
        title: this.CurProduct.title,
        price: this.CurProduct.price,
        size: this.SelectedSize,
        qty: 1,
      })
    } else {
      this.CurCart[findSizeInCart].qty += 1
    }

    this.calculateTotalQty()
  }

  // calculate total item in the cart
  calculateTotalQty() {
    let totalQty = 0
    for (let i = 0; i < this.CurCart.length; i++) {
      totalQty += this.CurCart[i].qty
    }
    this.TotalQty = totalQty
  }

  // click my cart button
  checkCart() {
    this.ShowMiniCart = !this.ShowMiniCart
  }

  // when component mounted
  mounted() {
    this.getCurProduct()
  }
}
