import React, {Component} from 'react';
import KeyboardEventHandler from "react-keyboard-event-handler";
import './App.css';

const KEYS = [ 'up', 'down', 'left', 'right' ];

const Dot = ({x, y, text, s}) => {
    let className = 'dot new';
    // if (s) {
    //     className += ' ' + s;
    // }
    return (
        <g className={className}>
            <circle strokeWidth="0.25" stroke="#444" fill="#444" cx={x} cy={y} r={5} />
            <text textAnchor="middle" fill="#aaa" x={x} y={y}>{`${text}`}</text>
        </g>
    );
};

class App extends Component {

    state = {
        dots: [
            {x: 10, y: 10, text: '1', s: ''}   //,
            // {x: 20, y: 20, text: '2'}
        ]
    };

    addDot() {
        let dots = this.state.dots;
        // console.log('dots 1', dots);
        dots.push({x: 30, y: 30, text: 'a', s: 'new'});
        // console.log('dots 2', dots);
        this.setState({ dots: dots });
    }

    delDel() {
    }

    handleKeypress = (key, e) => {      // arrow syntax allow to skip binding explicitely
        switch(key) {
            case 'left':
                this.delDot();
                break;
            case 'right':
                this.addDot();
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className="App">
                <KeyboardEventHandler
                    handleKeys={KEYS}
                    onKeyEvent={this.handleKeypress} />
                <div id="main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100">
                        {this.state.dots.map(
                            (dot, index) => <Dot key={index} {...dot} />
                        )}
                    </svg>
                </div>
            </div>
        );
    }
}

export default App;
