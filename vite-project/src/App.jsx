import { Component } from "react";
import Wine from "./Wine";

class App extends Component{
    render(){
        return(
            <>
            <Wine title="A wine" description="Russian" reting="5"/>
            <Wine title="B wine" description="American" reting="11"/>
            <Wine title="C wine" description="Italian" reting="23"/>
            </>
        )
    }
}
export default App;