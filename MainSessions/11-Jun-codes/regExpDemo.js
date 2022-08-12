let text = "Full stack web developer internship 20 weeks";

/*1-searching*/

let i = text.search("web");

console.log(i);

i = text.search(/dev/i);

console.log("dev at = "+i);

/*2-replace*/
let replacedText = text.replace("Full stack web","database");
console.log("replacedText = "+replacedText)

let regReplacedText = text.replace(/Full stack web/i,"database")
console.log("regReplacedText = "+regReplacedText)

/*3-search for set of characters*/

let regCharMatch = text.match(/[l,e,t]/g)

console.log("regCharMatch = "+regCharMatch);

/*4-numbers mmatching*/

let regNumMatch = text.match(/[0-3]/g)

console.log("regNumMatch = "+regNumMatch);

/*5-alternative matches*/
let altMatches = "orange guava apple grapes mangoes";

let newAltMatches = altMatches.match(/grapes|apple/g)

console.log("newAltMatches = "+newAltMatches);

/*6-Meta characters*/

let numMatch = text.match(/\d/g)

console.log("numMatch = "+numMatch);

let spaceMatches = text.match(/\s/g)

console.log("spaceMatches = "+spaceMatches);

let text2 = "HELLO, LOOK AT YOU"
let result = text2.search(/\bLO/)
console.log("first occurnce of LO = "+result);

let atleastOne = text2.match(/LO+/g)
console.log("atleastOne = "+atleastOne);

let zeroOneOccur = text2.match(/LO*/g)
console.log("zeroOneOccur = "+zeroOneOccur)

let zeroOccur = text2.match(/LO?/g)
console.log("zeroOccur = "+zeroOccur);




