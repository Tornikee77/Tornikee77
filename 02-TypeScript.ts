//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let usrername: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number) {
  return a * b;
}

// მაგალითი 4
type userType = {
  id: number;
  name: string;
};

const user: userType = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი: თუ ფუნქციას პარამეტრი არ გადაეცემა, name ავტომატურად მიიღებს Guest.

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

type uniConfigtype = {
  theme?: string;
  options?: {
    fontSize?: number;
    layout?: null;
  };
  tester?: string;
};

const config1: uniConfigtype = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2: uniConfigtype = {
  theme: "dark",
};

const config3: uniConfigtype = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =
type MixedArray = (string | number | boolean | object)[];
const array1: MixedArray = [42, "hello", { name: "Alice" }];
const array2: MixedArray = ["apple", true, { isValid: false }];
const array3: MixedArray = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  // ფუნქცია იღებს და აბრუნებს სტრინგს
  validate?: (input: string) => boolean;
  // არგუმენტად იღებს სტრინგს და აბრუნებს booleans
  log?: () => void;
  // ფუნქცია არაფერს არ აბრუნებს
};

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const username: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
