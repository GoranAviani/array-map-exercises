import './App.css';
import first from './calcs/first'
import {stringItUp} from "./calcs/stringItUp";
import {capitalizeNames} from "./calcs/capitalizeNames";
import {namesOnly} from "./calcs/namesOnly";
import {makeStrings} from "./calcs/makeStrings";

function App() {
    console.log(first([2, 5, 100])); // [4, 10, 200]
    console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
    console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
    console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


  return (
    <div className="App">
     app
        {first([2, 5, 100])}
        {stringItUp([2, 5, 100])}
        {capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])}
        {namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])}
    </div>
  );
}

export default App;
