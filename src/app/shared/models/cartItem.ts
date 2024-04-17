import { Foods } from "./food";

export class CartItem {
    price:number=0;
    forEach(arg0: (element: any) => void) {
        throw new Error("Method not implemented.");
    }
    food: Foods;
    quantity: number = 1;

    constructor(food: Foods) {
        this.food = food;
    }

    getPrice(): number {
        return this.food.price * this.quantity;
    }
}
