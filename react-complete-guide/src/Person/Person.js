import React  from 'react'

const person = (props) =>{
    let name = props.name;
    let age = props.age;
    return (
        <div>
    <p> {name} : i am person and {age } years old </p>
    <p>{props.children}</p>
   </div>
    )
}

// class person extends Component {
//     constructor(props){
//        super(props)
//        this.name = props.name;
//        this.age  = props.age;
//        this.children = props.children;
//     }
//     render(){
//         return(
//             <div>
//                 <p> {this.name}: i am a person  i am { this.age } year old</p>
//         <p>{this.children}</p>
//             </div>
//         )
//     }
// } 
export default  person;