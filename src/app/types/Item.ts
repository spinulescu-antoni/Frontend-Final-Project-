class Item {
    public id: number;
    public name: string;
    public price: number;
    public quantity: number;
    public description: string;
    public url: string;

    // constructor() {
    //     this.id = 0;
    //     this.name = "";
    //     this.price = 0;
    //     this.description = "";
    //     this.quantity = 0;
    //     this.url = "";
    // }

    constructor(id: number, name: string, price: number, description: string, quantity: number, url: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.url = url;
    }

    // get nameE() { return this.name; }
}

export default Item;