
class Product {
  constructor({
    id = 0,
    title= '',
  description= '',
  price= 0,
  discountPercentage= 0,
  rating= 0,
  stock= 0,
  brand= '',
  category= '',
  thumbnail= '',
  images= []
  }) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.discountPercentage = discountPercentage
    this.rating = rating
    this.stock = stock
    this.brand = brand
    this.category = category
    this.thumbnail = thumbnail
    this.images = images
  }
}

export default Product
