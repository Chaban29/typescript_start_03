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
  favoriteColor?: string,
};

const newPerson: Person = {
  name: 'Roman',
  age: 23,
  isMarried: 'Not married',
};

newPerson.favoriteColor = 'red';


interface Person_2 {
  name: string,
  age: number,
  hasChildren?: boolean,
}


const currentUser: Person_2 = {
  name: 'John',
  age: 40,
  hasChildren: true,
}


const greetingUser = (greet: string, userName: string): string =>  {
  return `${greet} ${userName}`
}


console.log(greetingUser('Hello', 'Roman'));

