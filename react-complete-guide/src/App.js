//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
// class App extends Component {
//  state = {
//   persons : [
//     {name: "Manish" ,age: 24},
//     {name : "kunal" , age: 25},
//     {name: "Omkar" ,age: 20}
//   ],
// someOtherState: "this is some othe state"
//   };


//  switchNameHandler = ()=>{
//   console.log('was clicked')
// // DON't Do THis React NOt able to handle this   this.state.persons[0].name = "hello"
// this.setState({
//   persons : [
//   {name: "Manish Ukirade" ,age: 28},
//   {name : "kunal Shinde" , age: 29},
//   {name: "Omkar" ,age: 20}
// ]})
// };
 
//   render() {
// /*  
//   HOW IT'S WORKS
// =============================================================================
// == TIP ::=>  in every componenet you need to render the some html always   ==
// == html template render that is called as jsx and css class should give as ==
// == className instead of class                                              ==
// =============================================================================

//  */
 
//  // This is standard way to render template but for understand that how this template is compile and converts to html read below explanations

//  return (
//       <div className="App">
//        <h1>hi , React App</h1>
//        <p>It's works and this is para</p>
//       <button onClick={ this.switchNameHandler} >Switch Name</button>
//       <Person name= {this.state.persons[0].name} age ={this.state.persons[0].age}> </Person>
//   <Person name= {this.state.persons[1].name} age ={this.state.persons[1].age}>    </Person>
//   <Person name= {this.state.persons[2].name} age ={this.state.persons[2].age}>    hello</Person>
//       </div>
//     ); 
  
   
   
//    // below code explain how internally above code is render to ui
   
//    // return React.createElement('div',null,'h1','hello from react app');

//    // above code not works with inner html element so how inner html element works that will explein by below code  
  
//    // return React.createElement('div',null,React.createElement('h1',null,'hello from react app'));

//    // how styles added is explin by below statement 
  
// //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'hello from react app'));
//   }
// }

// export default App;


const app = props =>{
var [personsState , setPersonsState ] = useState(
  {
  persons : [
    {name: "Manish" ,age: 24},
    {name : "kunal" , age: 25},
    {name: "Omkar" ,age: 20}
  ],
   someOtherState: "this is some other state"
  }
  );

  useState('any state')
 // IMPORTANT While Using Hooks 
 /* 
  Remember that while set a new hooks using the hooks 
  the whole state object is change 
 */
 const switchNameHandler = ()=>{
   console.log('was clicked')
 // DON't Do THis React NOt able to handle this   this.state.persons[0].name = "hello"
 setPersonsState({
   persons : [
   {name: "Manish Ukirade" ,age: 28},
   {name : "kunal Shinde" , age: 29},
   {name: "Omkar" ,age: 20}
 ],
 someOtherState : "this is some othe state"}
 )
 };

 return (
      <div className="App">
       <h1>hi , React App</h1>
       <p>It's works and this is para</p>
       <button onClick= {switchNameHandler}>Switch</button>
  <Person name= {personsState.persons[0].name} age = {personsState.persons[0].age}> </Person>
  <Person name= {personsState.persons[1].name} age = {personsState.persons[1].age}>    </Person>
  <Person name= {personsState.persons[2].name} age = {personsState.persons[2].age}>    hello</Person>
      </div>
    );  
}

export default app;