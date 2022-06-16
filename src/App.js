import './App.css';
import first from './calcs/first'
import {stringItUp} from "./calcs/stringItUp";
import {capitalizeNames} from "./calcs/capitalizeNames";

function App() {
    console.log(first([2, 5, 100])); // [4, 10, 200]
    console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
    console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]





  return (
    <div className="App">
     app
        {first([2, 5, 100])}
        {stringItUp([2, 5, 100])}
        {capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])}
    </div>
  );
}

export default App;
