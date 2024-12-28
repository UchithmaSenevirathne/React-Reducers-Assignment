//Item.ts
export class Item {
    id: string;
    item_name: string;
    price: string;
    quantity: string;


    constructor(id: string, item_name: string, price: string, quantity: string) {
        this.id = id;
        this.item_name = item_name;
        this.price = price;
        this.quantity = quantity;
    }
}