/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
    var d = new Date();
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year || d.getFullYear();
}
// @TODO: если конструктор вызывается без указания текущего года, то подставлять текущий
// @TODO: реализовать методы вывода информации о машине: 
// console.log('Car: ' + bmw); // Car: BMW X5 2010
// console.log(bmw.getInfo()); // BMW X5 2010
// console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010
Car.prototype.toString = function(){return this.manufacturer + " " + this.model + " " + this.year};
Car.prototype.getInfo = function(){return this.manufacturer + " " + this.model + " " + this.year};
Car.prototype.getDetailedInfo = function(){return "Производитель: " + this.manufacturer + ". Модель: " + this.model + ". Год: " + this.year};
Car.prototype.getCountryByManuf = getCountry;

var bmw = new Car("BMW", "X5", 2010),
    audi = new Car("Audi", "Q5", 2012),
    toyota = new Car("Toyota", "Camry");

document.write('<p>Car: ' + bmw + '</p>'); 
document.write('<p>' + bmw.getInfo() + '</p>'); 
document.write(bmw.getDetailedInfo()); 

/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
    this.name = name;
    this.cars = [];
}
CarDealer.prototype.add = function(){
        for(var i=0; i<arguments.length; i++){
            this.cars.push(arguments[i]);
        }
    };
CarDealer.prototype.prices = {};
CarDealer.prototype.setPrice = function(carID, price){
        this.prices[carID] = price;  
    };
CarDealer.prototype.list = function(){
        var carList = "";
        for(var i=0; i<this.cars.length; i++){
            if(i>0){carList += ", "};
            carList += this.cars[i];
        };
        document.write('<p>' + carList + '</p>');
    };
CarDealer.prototype.listByCountry = function(country){
        var carListByCountry = "";
        for(var i=0; i<this.cars.length; i++){
            if(this.cars[i].getCountryByManuf() != country){continue};
            if(carListByCountry != ""){carListByCountry += ", "};
            carListByCountry += this.cars[i];
        };
        document.write('<p>' + carListByCountry + '</p>');
    };

var yandex = new CarDealer('Яндекс.Авто');

// @TODO: реализовать метод добавления машин в автосалон. Предусмотреть возможность добавления одной машины, нескольких машин.
yandex.add(toyota);
yandex.add(bmw, audi);

// @TODO: реализовать метод установки цены на машину
/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
// идентификатор машины составляется следующим образом "производитель модель год"
// стоимость машины может быть задана в двух валютах: йена и евро.
yandex.setPrice('BMW X5 2010', '€2000')
yandex.setPrice('Audi Q5 2012', '€3000')
yandex.setPrice('Toyota Camry 2012', '¥3000');

// @TODO: реализовать вывод списка автомобилей в продаже, с фильтрацией по стране производителю, используя метод getCountry:
function getCountry() {
    switch (this.manufacturer.toLowerCase()) {
        case 'bmw':
            return 'Germany';
        case 'audi':
            return 'Germany';
        case 'toyota':
            return 'Japan';
        default:
            return '';
    }
}

yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012

// @TODO: бонус! выводить список машин с ценой в рублях.
