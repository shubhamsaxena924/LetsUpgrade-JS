// Program to display only elements containing 'a' in them from an array 
let arr = ["This","is","the","array","to","search","in"];
let ch = 'a';
for( let i=0 ; i < arr.length ; i++ )
{
    if( arr[i].indexOf(ch) != -1 )
    {
        console.log(arr[i]);
    }
}
