# Interview Questions - Blog Task
## TypeScript Interview Questions – Answers (Bangla)

### ১. TypeScript-এ Interfaces এবং Types-এর পার্থক্য

TypeScript-এ **`interface`** এবং **`type`** দুইটি ব্যবহার করা হয় টাইপ বা অবজেক্টের কাঠামো সংজ্ঞায়িত করার জন্য। যদিও তাদের কাজ কিছুটা একরকম, তবে পার্থক্য  রয়েচে ।  

**Interface:**
- অবজেক্টের কাঠামো সংজ্ঞায়িত করতে ব্যবহৃত হয়।
- একাধিক interface কে **extends** করা যায়।
- একই নামে declare করলে **merge** হয়ে যায়।
- সাধারণত class implements করার জন্য উপযুক্ত।

**Type Alias:**
- অবজেক্ট ছাড়াও **union, tuple, primitive, function** টাইপ সংজ্ঞায়িত করতে পারে।
- Type alias কে একাধিক declare করলে error হবে।
- Multiple type একত্র করতে **intersection `&`** ব্যবহার করতে হয়।
- Callable objects বা complex types এর জন্য সুবিধাজনক।

---

### ২. TypeScript-এ `keyof` keyword-এর ব্যবহার

**`keyof`** একটি TypeScript keyword যা একটি অবজেক্ট টাইপের **সকল প্রপার্টি নামকে ইউনিয়ন টাইপ** হিসেবে দেয়। এটি মূলত টাইপ সেফটি বাড়াতে এবং dynamic property access সহজ করতে ব্যবহৃত হয়।  

**উদাহরণ:**

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

// keyof ব্যবহার
type PersonKeys = keyof Person; 
// PersonKeys = "name" | "age" | "email"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person1: Person = { name: "Rakib", age: 25, email: "rakib@example.com" };

console.log(getProperty(person1, "name"));  // Output: Rakib
console.log(getProperty(person1, "age"));   // Output: 25
```