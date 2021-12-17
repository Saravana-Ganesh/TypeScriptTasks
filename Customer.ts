class Customer {
    private custName: String;
    private custId: number;
    private city:String;
    constructor(id:number=0, name:String ="xyz",city:String="abc"){
        this.custId=id;
        this.custName=name
        this.city=city

    }

    public showDetails():void{
        console.log("Customer Details ::  Id :" +this.custId +", Name : "+ this.custName +" City :"+ this.city)
    }

}
let c1: Customer = new Customer();
let c2: Customer = new Customer(0);
let c3: Customer = new Customer(123,"Vasu");
let c4: Customer = new Customer(123,"Gokul","Chennai");

c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();

