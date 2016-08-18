import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {VictoryBar, VictoryGroup} from 'victory';

export default class VictoryGraph extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return [1, 2, 3, 4].map((index) => {
      return [1, 2, 3, 4].map((i) => {
        return {x: i, y: Math.random(2, 10)};
      })
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  render() {
    return (
      <VictoryGroup
        height={600}
        offset={15}
        colorScale={"qualitative"}
        animate={{
          duration: 500,
          onExit: {
            duration: 1000,
            before: () => ({y: -1})
          },
        }}
      >
        {this.state.data.map((data, i) => {
          return (
            <VictoryBar
              data={data} key={i}
            />
          );
        })}
      </VictoryGroup>
    );
  }
}
