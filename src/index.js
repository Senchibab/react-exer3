import React from "react";
import ReactDOM from "react-dom";

class Ex extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    
    return <div><h1>Card title</h1>
  <h2>Some quick example text to build on the card title and make up the bulk of the card's content</h2>
 <button >Go somewhere</button>
 </div> }
}

ReactDOM.render(<Ex />, document.getElementById("root"));
