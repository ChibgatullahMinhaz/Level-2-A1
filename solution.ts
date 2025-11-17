
type formateValueType = number | string | boolean;
const formatValue = (value: formateValueType): formateValueType => {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type filterRatingTypes = {
  title: string;
  rating: number;
};

const filterByRating = (
  arr: filterRatingTypes[],
  minRating = 4
): filterRatingTypes[] => {
  return arr.filter((item) => item.rating >= minRating);
};

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: Users[]): Users[] => {
  const activeUser = users.filter((user) => !!user.isActive);
  return activeUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  let uniqValues: T[] = [];
  let seen: { [key: string]: boolean } = {};
  for (let i = 0; i < arr1.length; i++) {
    const key = arr1[i];
    if (!seen[key]) {
      uniqValues.push(arr1[i]);
      seen[key] = true;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const key = arr2[i];
    if (!seen[key]) {
      uniqValues.push(arr2[i]);
      seen[key] = true;
    }
  }

  return uniqValues;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  const total = products.reduce((acc, product) => {
    const discount = product.discount ? product.discount / 100 : 0;
    return (acc += product.price * product.quantity * (1 - discount));
  }, 0);
  return total;
};
