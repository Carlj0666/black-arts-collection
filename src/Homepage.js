// function Homepage(props){
//         return(
//             <div>
//                 <h1>{props.color} Arts Home</h1>
//             </div>
//         )
// }

// export default Homepage
import React from 'react';
import './App.css';

class Homepage extends React.Component{

    state = {
        color: 'red',
        on: true
    }

    render(){
        return(
            <div style={{color: this.state.color}}>
                <h1>Welcome to {this.props.color} Arts Home</h1>
                <h4>A place where {this.props.alignment} Arts are cultivated</h4>
            </div>
        )
    }

};

export default Homepage;