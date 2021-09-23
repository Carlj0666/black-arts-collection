// function Homepage(props){
//         return(
//             <div>
//                 <h1>{props.color} Arts Home</h1>
//             </div>
//         )
// }

// export default Homepage
import React from 'react';

class Homepage extends React.Component{



    render(){
        return(
            <div>
                <h1>Welcome to {this.props.color} Arts Home</h1>
                <h4>The place where {this.props.alignment} Arts are cultivated</h4>
            </div>
        )
    }

};

export default Homepage;