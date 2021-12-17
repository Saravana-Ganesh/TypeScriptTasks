class Product{
    private readonly _productId: number;
    private _productName: string;
    private _unitPrice: number;
    private _qty: number;

    public get productId(): number {
        return this._productId;
    }
  
    public get productName(): string {
        return this._productName;
    }
    public set productName(value: string) {
        this._productName = value;
    }
   
    public get unitPrice(): number {
        return this._unitPrice;
    }
    public set unitPrice(value: number) {
        this._unitPrice = value;
    }
   
    public get qty(): number {
        return this._qty;
    }
    public set qty(value: number) {
        this._qty = value;
    }
    
    constructor(productID:number){
        this._productId = productID;
    }
}
        let p1: Product = new Product(1);
        p1.productName="Product one"
        p1.unitPrice=1234;
        p1.qty=12;
        console.log("Product Details::")
        console.log("Id :"+p1.productId)
        console.log("Name :"+p1.productName)
        console.log("Price :"+p1.unitPrice)
        console.log("Qty :"+p1.qty)


