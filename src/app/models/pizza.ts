export class Pizza {
  _id: number;
  name: string;
  desc: number;
  price: number;
  picture: string;
  ingredients: Array<any>;

  constructor(name, desc, price, picture, ingredients) {
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.picture = picture;
    this.ingredients = ingredients;
  }
}
