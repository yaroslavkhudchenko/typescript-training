
type numExample = { num1: number, num2: number}

let ex: (number | boolean)[] = [1,2,3,4,5, true]; // number and boolean
let exAny: any = [1,'sfa',true]; // allow all

// ex = ''; // cannot change type

/* let ex2 = ex.map((o)=>{
    return o + 1;
}) */ // cannot because of type restrictions


function add(nums: numExample) : string {// expect to return a number
    // return num1 + num2; // cannot type string is not assignable to type string
    return (nums.num1 + nums.num2).toString(); // correct
}

//add(NumsEnum.Num1, NumsEnum.Num2);
add({num1: 1,num2: 2});