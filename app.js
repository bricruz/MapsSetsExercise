//maps allow us to create a key value data store with any data type for key
const myMap = new Map();

myMap.set(7, 'seven');
myMap.set('7', 'seven string');

myMap.get(7); //seven
myMap.get('7'); //seven string


// myMap.set([],'empty array');
// myMap.get([]); //undefined

const empty = [];
myMap.set(empty, 'empty array');
myMap.get([]) //undefined
myMap.get(empty) //empty array

myMap.set(true, 'TRUE');
myMap.get(true) //TRUE

const obj = { true: '21903' };
obj[true] //21903
obj['true'] //21903

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

const bandData = [
    [3, '3 Doors Down'],
    ['three', 'Three dog Night'],
    ['nine', 'Nine Inch Nails'],
    ['four', 'The Four Seasons'],
    [41, 'Sum 41']
]

const bandMap = new Map(bandData);

[...bandMap] //will turn bandMap back into array

bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

bandMap.has(41);
bandMap.has(3);
bandMap.has(9);
bandMap.has('nine');

bandMap.delete('twenty');

[...bandMap.keys()]

bandMap.values();

bandMap.size

bandMap.forEach((val, key) => {
    console.log(key + '=>' + val)
});

for (let [key, value] of bandMap) {
    console.log(key + '=' + value);
}

//Sets only store unique values

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

bannedHashTags.add('bestlife').add('selfie');

bannedHashTags.has('yolo'); //true
bannedHashTags.has('tbt'); //false

bannedHashTags.delete('selfie');

// bannedHashTags.clear() 

function filterHashTags(tags) {
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag))
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunsets'];

filterHashTags(susansTags);
//['happymonday','sunsets']

const ages = [45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 3, 12, 45];
[...new Set(ages)] //returns array with duplicates removed.

//When use set?
//remove duplicate values
//Uniqueness required
//efficiently checking if an item is in a collection
