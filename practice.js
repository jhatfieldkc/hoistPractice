//1

console.log(hello);
var hello = 'world';
//var hello
//console.log(hello) - undefined
//hello = "world"

//2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//needle = 'haystack'
//undefined
//needle = 'magnet'
//console.log logs 'magnet

//3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//brendan = 'super cool'
// print sets brendan to 'only okay'
//console.log logs 'super cool'

//4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//food = 'chicken'
//console.log prints 'chicken'
//eat sets food = 'half-chicken'
//console.log prints 'half-chicken'
//food = 'gone'

//5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//mean being called returns TypeError and the code stops

//6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//genre is created
//console log returns undefined
//genre = 'disco'
//rewind is created and genre = 'rock'
//console log prints 'rock'
//genre is changed to 'r&b"
//console log prints 'r&b'
//console log prints 'disco'

//7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//dojo = 'san jose'
//console log prints 'san jose'
//learn is created
//dojo is set to 'seattle'
//console log prints 'seattle'
//dojo is set to 'burbank'
//console log prints 'burbank'
//console log prints 'san jose'

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//i didnt see the single = in the else if before i ran this