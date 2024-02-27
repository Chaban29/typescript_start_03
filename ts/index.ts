const firstName: string = 'Roman';
const lastName: string = 'Chaban';

const userAge: number = 23;
const isMarried: boolean = false;

const empty: null = null;
let nothing: undefined = undefined;

let mySymbol: symbol = Symbol('userId');

const person: { name: string; age: number; isMarried: boolean } = {
  name: 'Roman',
  age: 23,
  isMarried: false,
};

type Person = {
  name: string;
  age: number;
  isMarried?: boolean | string;
  favoriteColor?: string;
};

const newPerson: Person = {
  name: 'Roman',
  age: 23,
  isMarried: 'Not married',
};

newPerson.favoriteColor = 'red';

interface Person_2 {
  name: string;
  age: number;
  hasChildren?: boolean;
}

const currentUser: Person_2 = {
  name: 'John',
  age: 40,
  hasChildren: true,
};

const greetingUser = (greet: string, userName: string): string => {
  return `${greet} ${userName}`;
};

console.log(greetingUser('Hello', 'Roman'));

interface homePet {
  petName: string;
  petLegs?: number;
  petColor: string;
  petIsMale?: boolean;
}

const myDog: homePet = {
  petName: 'Julia',
  petLegs: 4,
  petColor: 'Black&White',
  petIsMale: false,
};

const strings: string[] = ['1', '2', '3', '4', '5'];

const numbers: Array<number> = [1, 2, 3, 4, 5];

type UserName = string | number;

type SomeObj = {
  name: UserName;
  age: number;
  getMoreInfo?: (numbers: []) => Array<number>;
};

const obj: Array<SomeObj> = [
  {
    name: 100,
    age: 23,
  },
];

let age: number | string = 23;

let isHasDog: boolean = false;
let universityAbbreviation: string = 'KNU';
let myRealAge: number | string = 23;

isHasDog = true;

let myBrotherName: string = 'Bogdan';

let numberSome: any = '1010212011';

numberSome = 10010101021211;

let u: any = 100;
u = '100';


let y: unknown = 1;
console.log(y);
y = '2';
console.log(y);
y = true;
console.log(y);


let not: string;

not = 'hello';