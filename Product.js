var Product = /** @class */ (function () {
    function Product(productID) {
        this._productId = productID;
    }
    Object.defineProperty(Product.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (value) {
            this._productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "unitPrice", {
        get: function () {
            return this._unitPrice;
        },
        set: function (value) {
            this._unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "qty", {
        get: function () {
            return this._qty;
        },
        set: function (value) {
            this._qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var p1 = new Product(1);
p1.productName = "Product one";
p1.unitPrice = 1234;
p1.qty = 12;
console.log("Product Details::");
console.log("Id :" + p1.productId);
console.log("Name :" + p1.productName);
console.log("Price :" + p1.unitPrice);
console.log("Qty :" + p1.qty);
