const myObject={
    js: 'javaScript',
    cpp: 'c++',
    rb: 'rubby',
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(`${key} for shortcut is for ${myObject[key]}`);   
}

const programming= ["js","c++","java","rubby","flow"]

for (const key in programming) {
  console.log(key);
  
}