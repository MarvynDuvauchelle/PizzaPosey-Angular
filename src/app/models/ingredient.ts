export class Ingredient {
  _id: number;
  name: string;
  weight: number;
  price: number;

  constructor(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
}
