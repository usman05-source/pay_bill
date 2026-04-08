import { useContext } from "react";
import { MyContext } from "./context/index.jsx";


import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css"

import Stage1 from "./components/stage_one";
import Stage2 from "./components/stage_two";


export default function App() {
const context = useContext(MyContext);



  return (
    <div className="wrapper">
      <div className="center-wrapper">
          <h1>Who Pay the Bill</h1>
           { context.stage === 1 ? 
           <Stage1 />
            : 
            <Stage2 /> }
          
      </div>

    </div>
  )
}