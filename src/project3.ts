//union type
function calculation(n1: number | string, n2: number | string) {
  //const result = n1 + n2; ----> in this case, in typescript, it can not overlook "+" when the type is union. Therefore, I should use "if"
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    //First option : result = (n1 as string) + (n2 as string);
    //second option
    result = n1.toString() + n2.toString();
  }

  return result;
}

const combineAges = calculation(30, 26);
console.log(combineAges);
const combineNames = calculation("anderson", "mary");
console.log(combineNames);

//Literal type
function calculation2(
  n1: number | string,
  n2: number | string,
  resultType: "as-number" | "as-text" // not string. compared to enum style, of course it could be used, but if there is a few values I have to name specific type and the kind is only string or number, Literal typeed | string typed delcaration would be work efficiently.
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultType === "as-number"
  ) {
    result = Number(n1) + Number(n2); //or +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;

  /*  if (resultType === "as-number") {
    return +result; //alternative : parseFloat(result);
  } else {
    return result.toString();
  }---> Although I would write these codes, it is not gonna be worked in terms of const lteralUsage because already the upper codes compute and address all information in the "else" part */
}

const combineAges2 = calculation2(30, 26, "as-number");
console.log(combineAges);

const combineNames2 = calculation2("anderson", "mary", "as-text");
console.log(combineNames);

const literalUsage = calculation2("30", "26", "as-number");
console.log(literalUsage);

// type Alias

type testAlias = number | string;
type testAlias2 = { section: number; subject: string };
let whatLearn: testAlias2 = { section: 2, subject: "what?" };

interface interfaceTestor {
  inputTestContent: number;
}
let inputTest1: testAlias;
let inputTest2: interfaceTestor;
//inputTest1 = true; ---> Error.
//inputTest2.inputTestContent = "string"; ---> Error.

//you can use type Alias to shorten the type or integrate several conditions into one named type.
//But, as type Alias could not use for extending, It is not recommended over "interface"
//Therefore, if some type could not be declared by interface, and the targeted type is tuple or union, then use type Alias.

//return types = void

function add(n1: number, n2: number) {
  return n1 + n2;
} //the result type of this function is "number" because it has a return value.

function printResult(num: number) {
  console.log("It is" + num);
}
printResult(2); // The result type of this function is void because it doesn't return anything.
//Notice. in typescript, there is "undefined" type but if I use this in this function, this makes an error because technically it is undertanded as "though there is return but nothing is processed." for example,
function whenUndefined(num: number): undefined {
  console.log(2);
  return;
}
