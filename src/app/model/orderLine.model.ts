export class OrderLine {

  public quantity: number;
  public product: string;
  public price: number;
  public subtotal: number;

  constructor(
    quantity,
    product,
    price,
    subtotal
  ) {
    this.quantity = quantity;
    this.product = product;
    this.price = price;
    this.subtotal = subtotal;
  }
}
