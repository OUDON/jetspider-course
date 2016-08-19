function Car(brand, price) {
       this.brand = brand;
       this.price = price;
}
function car_getBrand() {
}
obj = new Car("toyota", 100);
obj.getBrand = car_getBrand;
obj.getBrand();

