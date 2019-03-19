/*
Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice
*/

const doctor = (name, specialty, address) => ({
    "name": name,
    "specialty": specialty,
    "address": address
});

const Ted = doctor("Theodore", "Obstrician", "4300 Brush Hill");
console.log(Ted);

/*
Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
*/
const BowWowKennels = [];

const pet = (name, breed) => ({
    "name": name,
    "breed": breed
});

BowWowKennels.push(pet("PorkChop", "Goldendoodle"));
BowWowKennels.push(pet("Millie", "Poodle"));
BowWowKennels.push(pet("Lasie", "Golden Retriever"));
console.log(BowWowKennels);
