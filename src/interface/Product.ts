export default class Product {
  public id: number
  public title: string
  public description: string
  public price: number
  public imageURL: string
  public sizeOptions: sizeOption[]
}

type sizeOption = {
  id: number
  label: string
}
