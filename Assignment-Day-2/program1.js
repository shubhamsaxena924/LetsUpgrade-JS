// Program to search for a particular character in a string
let a = "This is my test string";
let index = a.indexOf('t');
if( index == -1 )
{
    console.log("The given character is not present the string");
}
else
{
    console.log("The given character is present at " + index);
}