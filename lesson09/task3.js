// Завдання 3
// Створіть об'єкт car1 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// year: число, представляє рік випуску автомобіля.
// Створіть об'єкт car2 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// owner: число, представляє рік випуску автомобіля.
// Створіть об'єкт car3.
// Використайте оператор spread
// щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
// Виведіть об'єкт car3 в консоль.

// Create object car1.
const car1 = {
  brand: String, // brand: string, presents car brand.
  model: String, // model: string, presents car model.
  year: Number // year: number, presents car manufacture year.
};

// Create object car2.
const car2 = {
  brand: String, // brand: string, presents car brand.
  model: String, // model: string, presents car model.
  owner: Number // owner: number, presents car owner quantity.
};

// Create object car3 using spread operator.
const car3 = { ...car1, ...car2 };

// Output object car3 into console.
console.log(car3);

// Change objects car1, car2, car3 properties.
car1.brand = "Shelby";
car1.model = "AC Cobra 427";
car1.year = 1965;

car2.brand = "Ford";
car2.model = "Focus";
car2.owner = 10;

car3.brand = "Lamborghini";
car3.model = "Murcielago";
car3.year = 2010;
car3.owner = 1;

// Output object car1, car2, car3 new data into console.
for (let key in car1) {
  console.log("Car #1: " + key + ": " + car1[key]);
}
console.log(car1);

for (let key in car2) {
  console.log("Car #2: " + key + ": " + car2[key]);
}
console.log(car2);

for (let key in car3) {
  console.log("Car #3: " + key + ": " + car3[key]);
}
console.log(car3);
