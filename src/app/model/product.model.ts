export class Product {

  public id: number;
  public name: string;
  public category: string;
  public price: number;
  public description: string;

  constructor(
    name,
    category,
    description,
    price,
    id?
  ) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.id = id;
  }

}
