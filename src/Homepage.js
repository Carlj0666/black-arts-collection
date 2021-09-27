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
        color: 'Red',
        on: true
    }

    handleClick = (e) => {

        const nightButton = this.state.on

        this.setState({
            on: !nightButton
        })
    }

    render(){
        return(
            <>
            
            <div style={{color: this.state.color}}>
                <h1> Welcome to the Black Arts Collection </h1>
                <button onClick={this.handleClick}>Button {this.state.on ? "On" : "Off"}</button>
                {/* <h1>Welcome to {this.props.color} Arts Home</h1>
                <h4>A place where {this.props.alignment} Arts are cultivated</h4> */}
            </div>
            </>
        )
    }

};

export default Homepage;