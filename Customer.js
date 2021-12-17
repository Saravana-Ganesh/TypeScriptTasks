var Customer = /** @class */ (function () {
    function Customer(id, name, city) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "xyz"; }
        if (city === void 0) { city = "abc"; }
        this.custId = id;
        this.custName = name;
        this.city = city;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Details ::  Id :" + this.custId + ", Name : " + this.custName + " City :" + this.city);
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(0);
var c3 = new Customer(123, "Vasu");
var c4 = new Customer(123, "Gokul", "Chennai");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
