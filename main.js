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
})
