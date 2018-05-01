import React, {Component} from 'react';
import './App.css';

const conf = {
    lines: 6,
    columns: 10,
    step_v: 10,
    step_h: 10,
    offset_v: 5,
    offset_h: 15
};

const getLine = (index) => `M ${conf.offset_h} ${conf.step_v * index + conf.offset_v} H ${(conf.columns + 1) * conf.step_h + conf.offset_h - conf.offset_h}`;

const getColumn = (index) => `M ${conf.offset_h + conf.step_h * index} ${conf.offset_v} V ${conf.lines * conf.step_v - conf.offset_v}`;

const getGridPath = (lines, columns) =>
    Array.apply(null, Array(lines))
        .map((_, pos) => getLine(pos))
        .join(' ')
        .concat(
            Array.apply(null, Array(columns))
                .map((_, pos) => getColumn(pos))
                .join(' '));

const Grid = () => (
    <path
        stroke="#444"
        strokeWidth="0.25"
        strokeLinecap="square"
        strokeLinejoin="square"
        d={`${getGridPath(conf.lines, conf.columns)}`} />
);


class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="main">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="100%" preserveAspectRatio="xMinYMin meet"
                         viewBox={`0 0 ${conf.columns * conf.step_h + conf.offset_h} ${conf.lines * conf.step_v}`}>
                        <Grid />
                    </svg>
                </div>
            </div>
        );
    }
}

export default App;
