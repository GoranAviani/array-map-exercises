import './App.css';
import first from './calcs/first'
import {stringItUp} from "./calcs/stringItUp";


function App() {
    console.log(first([2, 5, 100])); // [4, 10, 200]
    console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]




  return (
    <div className="App">
     app
        {first([2, 5, 100])}
    </div>
  );
}

export default App;
