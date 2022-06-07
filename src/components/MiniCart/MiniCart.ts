import { Component, Vue } from 'vue-property-decorator'

@Component<MiniCart>({
  props: {
    CurCart: {
      type: Array,
      default() {
        return []
      },
    },
    CurProduct: {
      type: Object,
      default() {
        return {}
      },
    },
  },
})
export default class MiniCart extends Vue {}
