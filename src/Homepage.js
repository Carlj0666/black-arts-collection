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
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOffClick = this.handleOffClick.bind(this);
        this.state = {
            isNightOn: false,
            color: "red"
        }
    };

    handleClick = (e) => {

        const nightTheme = this.state.nightOn;

        this.setState({
            nightOn: !nightTheme
        })
    };

    handleOnClick() {
        this.setState({
            isNightOn: true,
            color: "Red"
        });
    }

    handleOffClick() {
        this.setState({
            isNightOn: false,
            color: "Red"
        });
    }

    render(){
        const isNightOn = this.state.nightOn;
        let button;
        if (isNightOn) {
            button = <button className="nightButtonOn" onClick={this.handleOnClick}>Night night theme {this.state.nightOn ? "On" : "Off"}</button>;
        } else {
            button = <button className="nightButtonOff" onClick={this.handleOffClick}>Night night theme {this.state.nightOn ? "On" : "Off"}</button>;
        }

        return(
            <>
            <div style={{color: this.state.color}}>
                <h1> Welcome to the Black Arts Collection </h1>
                {button}
            </div>
            </>
        )
    }

};

export default Homepage;