// s.length
// s.charAt(1)
// s.at(-1) last char
// "HelloWorld".slice(0,5); // "Hello"
// substring(start, length-1);
// "hello".toUpperCase(); // "HELLO"
// Removing Spaces
// trim()
// Removes both sides.
// trimStart()
// trimEnd()
// "hello".indexOf("l"); // 2
// lastIndexOf()
// "hello".includes("he"); // true
// startsWith()
// endsWith()
// search()
// "hello world".replace("world", "JS");
// "hello world".split(" "); // ["hello", "world"]
// "hello world".join(" "); // ["hello", "world"]
// reverse()
// let char = "M";

// let ascii = char.charCodeAt(0);
// console.log("ASCII:", ascii);

// let backToChar = String.fromCharCode(ascii);
// console.log("Character:", backToChar);

console.log(/^[0-9]+$/.test(5));
console.log(/^[a-zA-Z0-9\s]+$/.test('fdskjjdjkjhmnmnsdek8 7867867hciD    SFSFsdfkjehdckjdkjkdjhf'))

let s="ahello";

console.log(s.charCodeAt(0));
console.log(String.fromCharCode(65));