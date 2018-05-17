import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import React, { Component} from 'react'
// import './index.css';
// var createReactClass = require('create-react-class');

// create a component called header. create an h1 called title.
// var Header = createReactClass({
//     render: function () {
//         return (
//             <header>
//                 <h1>{this.props.title}</h1>
//             </header>
//         )
//     }
// });
class Calc extends Component {

    // state = {
    //     principal: this.props.principal,
    //     years: this.props.years,
    //     rate: this.props.rate
    // }

    state = {
        principal: 300000,
        years: 30,
        rate: 4.25
    }
    // getInitialState() {
    //     // this will return principal, years and rate
    //     //any values passing into it
    //     return {

    //     };
    // }

    calculatePayment(principal, years, rate){
        var monthlyRate = rate / 100 / 12;
        // math.pow returns the base to the exponent power.
        // math.pow(4,3) = (4*4*4)
        var monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
        var balance = principal
        for (var y=0; y<years; y++){
            var interestY = 0;
            var principalY = 0;
            for (var m=0; m<12;m++) {
                var interestM = balance * monthlyRate;
                var principalM = monthlyPayment - interestM;
                interestY = interestY + interestM;
                principalY = principalY + principalM;
                balance = balance - principalM
        }
        }
    
        return {monthlyPayment: monthlyPayment};
    };

    // setting state for event of target, value .
    principalChange(event) {
        this.setState({principal: event.target.value});
    }
    yearsChange(event) {
        this.setState({years: event.target.value});
    }
    rateChange(event) {
        this.setState({rate: event.target.value});
    }
    render() {
        var payment = this.calculatePayment(this.state.principal, this.state.years, this.state.rate);
        var monthlyPayment = payment.monthlyPayment;
// createing FORM for calculator
        return(
            <div className="content">
                <div className="form">
                    <div>
                        <label>Principal</label>
                        <input type ="text" value={this.state.principal} onChange={this.principalChange}/>
                    </div>
                    <div>
                        <label>Years</label>
                        <input type ="text" value={this.state.years} onChange={this.principalyearsChange}/>
                    </div>
                    <div>
                        <label>Rate</label>
                        <input type ="text" value={this.state.rate} onChange={this.rateChange}/>
                    </div>
                </div>
                <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
        </div>
        );

    }


}


// var MortgageCalculator = createReactClass({
//     getInitialState: function() {
//         // this will return principal, years and rate
//         //any values passing into it
//         return {
//             principal: this.props.principal,
//             years: this.props.years,
//             rate: this.props.rate
//         };
//     },

//     // setting state for event of target, value .
//     principalChange: function(event) {
//         this.setState({principal: event.target.value});
//     },
//     yearsChange: function(event) {
//         this.setState({years: event.target.value});
//     },
//     rateChange: function(event) {
//         this.setState({rate: event.target.value});
//     },
//     render: function() {
//         var payment = calculatePayment(this.state.principal, this.state.years, this.state.rate);
//         var monthlyPayment = payment.monthlyPayment;
// // createing FORM for calculator
//         return(
//             <div className="content">
//                 <div className="form">
//                     <div>
//                         <label>Principal</label>
//                         <input type ="text" value={this.state.principal} onChange={this.principalChange}/>
//                     </div>
//                     <div>
//                         <label>Years</label>
//                         <input type ="text" value={this.state.years} onChange={this.principalyearsChange}/>
//                     </div>
//                     <div>
//                         <label>Rate</label>
//                         <input type ="text" value={this.state.rate} onChange={this.rateChange}/>
//                     </div>
//                 </div>
//                 <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toLocaleString()}</span></h2>
//         </div>
//         );

//     }

// });

export default Calc;
// // this will create a class with render function and return value.
// // removed React.createClass and replaced with npm
// var App = createReactClass({
//     render: function() {
//         return (
//             <div>
//                 <Header title="Mortgage Calculator"/>
//                 <MortgageCalculator principal="0" years="30" rate="5"/>
//             </div>
//         );

//     }
// });

// // what you what to render and where
// ReactDOM.render(<App />, document.getElementById('root'));
// //registerServiceWorker();
