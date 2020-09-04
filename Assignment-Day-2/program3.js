//Program to search for a element in a array of strings
let a = ["laptop","desktop","mouse","keyboard","phone"];
let index = a.indexOf("keyboard");
if( index == -1 )
{
    console.log("The given element is not present in the array");
}
else
{
    console.log(`The given element is present at index ${index}`);
}