// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone Number Tests

// No parens valid phone number
test('Validates phone number 123-456-7890', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

// No parens valid phone number
test('Validates phone number (325) 632-7538', () => {
  expect(isPhoneNumber("(325) 632-7538")).toBe(true);
});

// Invalidates no dashes phone number
test('Invalidates phone number 1234567890', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

// Invalidates spaced phone number
test('Invalidates phone number 325 412 1285', () => {
  expect(isPhoneNumber("325 412 1285")).toBe(false);
});

// Email Tests

// Short valid email, 3 char url suffix
test('Validates email kvats@ucsd.edu', () => {
  expect(isEmail("kvats@ucsd.edu")).toBe(true);
});

// Long valid email, 2 char url suffix
test('Validates email dlk125in12i35l@weirdwebsiteland.co', () => {
  expect(isEmail("dlk125in12i35l@weirdwebsiteland.co")).toBe(true);
});

// Invalidates email with 4 char url suffix
test('Invalidates email kvats@ucsd.edus', () => {
  expect(isEmail("kvats@ucsd.edus")).toBe(false);
});

// Invalidates email with space
test('Invalidates email kabir vats@gmail.com', () => {
  expect(isEmail("kabir vats@gmail.com")).toBe(false);
});

// Password tests

// Valid password just letters
test('Validates password cars', () => {
  expect(isStrongPassword("cars")).toBe(true);
});

// Valid password all possible type of chars
test('Validates password daca_135cool', () => {
  expect(isStrongPassword("daca_135cool")).toBe(true);
});

// Invalidates password without starting letter
test('Invalidates password 9IgotMoney', () => {
  expect(isStrongPassword("9IgotMoney")).toBe(false);
});

// Invalidates password too long
test('Invalidates password carsarecoolbutnotenough', () => {
  expect(isStrongPassword("carsarecoolbutnotenough")).toBe(false);
});

// Date tests

// Valid date normal
test('Validates date 20/09/2002', () => {
  expect(isDate("20/09/2002")).toBe(true);
});

// Valid date short
test('Validates date 2/9/2025', () => {
  expect(isDate("2/9/2025")).toBe(true);
});

// Invalidates date without slashes
test('Invalidates date 08 23 2004', () => {
  expect(isDate("08 23 2004")).toBe(false);
});

// Invalidates date with short year
test('Invalidates date 5/5/24', () => {
  expect(isDate("5/5/24")).toBe(false);
});

// Hex Color tests

// Valid hex normal
test('Validates hex #FA937c', () => {
  expect(isHexColor("#FA937c")).toBe(true);
});

// Valid hex no hashtag
test('Validates hex cafe12', () => {
  expect(isHexColor("cafe12")).toBe(true);
});

// Invalid hex invalid letters
test('Invalidates hex #robert', () => {
  expect(isHexColor("#robert")).toBe(false);
});

// Invalid hex too long
test('Invalidates hex FA937cc', () => {
  expect(isHexColor("FA937cc")).toBe(false);
});