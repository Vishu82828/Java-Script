const myArray = [2,5,8,6,9]
console.log(myArray.slice(1,3));
console.log(myArray.splice(1,3));
const dc_hero = ["superman","batman","flash"]

const all_hero = [...dc_hero,...myArray]
console.log(all_hero);