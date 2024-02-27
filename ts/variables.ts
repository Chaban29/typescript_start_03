const userFirstName: string = 'Roman';
const someLuckyNumber: number = 199;
const isEmpty: boolean = true;
let empty_01: null = null;
let nothing_02: undefined = undefined;

console.log(userFirstName.charAt(0));

const showUserFullName = (user: {
  name: string;
  'last name': string;
}): string => {
  return `${user.name} ${user['last name']}`;
};

console.log(showUserFullName({ name: 'Roman', 'last name': 'Chaban' }));

function isDog(dogParam: boolean): string {
  return `Do you have a dog? ${dogParam}`;
}

console.log(isDog(true));

const person_02: { name: string; age: number; car: { color: string } } = {
  name: 'Roman',
  age: 23,
  car: {
    color: 'blue',
  },
};

console.log(person_02);

type User = { name: string; age: number; car?: { color: string } };

const newUser: User = {
  name: 'Roman',
  age: 23,
};

console.log(newUser);

interface Car {
  model?: string;
  year: number;
  color: string;
  isDiesel?: boolean;
}

const bmw: Car = {
  model: 'BMW',
  year: 2023,
  color: 'red&orange',
  isDiesel: true,
};

const newCar: Car = {
  model: 'BMW',
  year: 2023,
  color: 'red&orange',
};

const stringArr: string[] = ['1', '2', '3'];
const stringArr_02: Array<number> = [1, 2, 3, 4, 5];

type o13 = {
  name: string;
  age: number;
  hasJob: boolean;
  getMoreInfo: (config: o13_Config) => o13_getMoreInfo | null;
};

type o13_Config = {
  status: string | number;
};

type o13_getMoreInfo = {
  data: number;
};

const o13: Array<o13> = [
  {
    name: 'Alex',
    age: 23,
    hasJob: false,
    getMoreInfo: (config) => {
      if (config.status !== 200) {
        return null;
      } else {
        return { data: 123 };
      }
    },
  },
];

const SomeNiceArray: [boolean, number] = [true, 23];

const whatValueIsOurVariable: unknown = 'Nothing';

const currentAge: number | any = 23;
