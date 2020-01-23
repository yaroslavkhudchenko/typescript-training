var ex = [1, 2, 3, 4, 5, true]; // number and boolean
var exAny = [1, 'sfa', true]; // allow all
// ex = ''; // cannot change type
/* let ex2 = ex.map((o)=>{
    return o + 1;
}) */ // cannot because of type restrictions
function add(num1, num2) {
    // return num1 + num2; // cannot type string is not assignable to type string
    return (num1 + num2).toString(); // correct
}
