// Create an empty map
const map = new Map();

// Map(0) {}
console.log(map);

// Create map with key value pairs
const greenrootsBlog = new Map([
  ["name", "greenroots"],
  ["type", "blog"],
  ["writer", "Tapas Adhikary"],
]);

console.log(greenrootsBlog);
// Map(3)
// {
//    "name" => "greenroots",
//    "type" => "blog",
//    "writer" => "Tapas Adhikary"
// }

// Add key to map
greenrootsBlog.set("key", "value");
console.log(greenrootsBlog);
// Map(4) {
//     'name' => 'greenroots',
//     'type' => 'blog',
//     'writer' => 'Tapas Adhikary',
//     'key' => 'value'
//   }

// replace key
greenrootsBlog.set("key", "replace");
console.log(greenrootsBlog);

// get value from map
console.log(greenrootsBlog.get("key"));
// replace

console.log(greenrootsBlog.get("sdfgdfg"));
// undefined

const data = {
  a: 123,
  b: 456,
};

// Add object as key
greenrootsBlog.set(data, "object");
console.log(greenrootsBlog);
// Map(5) {
//     'name' => 'greenroots',
//     'type' => 'blog',
//     'writer' => 'Tapas Adhikary',
//     'key' => 'replace',
//     'object' => { a: 123, b: 456 }
//   }

console.log(greenrootsBlog.get(data));
// object

console.log(
  greenrootsBlog.get({
    a: 123,
    b: 456,
  })
);
// undefined

/**
 * A regular JavaScript object always treats the keys as strings.
 * Even when you pass them as other primitives or objects,
 * it internally converts the keys to strings.
 */

console.log(greenrootsBlog.size);
//  5

greenrootsBlog.size = 0;
console.log(greenrootsBlog.size);
//  5

// Check if there is key in map:
console.log(greenrootsBlog.has("key")); // true
console.log(greenrootsBlog.has("key2")); // false

// Delete element
greenrootsBlog.delete("key"); // return true
greenrootsBlog.delete("key2"); // return false

// Delete all keys
greenrootsBlog.clear();

const ageMap = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["Bill", 10],
  ["Sam", 9],
]);

// Get all the keys
console.log(ageMap.keys());

// Get all the values
console.log(ageMap.values());

// Get all the entries(key-value pairs)
console.log(ageMap.entries());

/** Iterating over a Map */

// with forEach
ageMap.forEach((value, key) => {
  console.log(`${key} is ${value} years old!`);
});

// With for-of

for (const [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}

// Map to Object
console.log(Object.fromEntries(ageMap));

// Map to Array
console.log(Array.from(ageMap));
// [ [ 'Jack', 20 ], [ 'Alan', 34 ], [ 'Bill', 10 ], [ 'Sam', 9 ] ]
