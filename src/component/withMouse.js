import React from 'react';


const withMouse =  Component => {
    return class ModifiedComponent extends React.Component {
     
      state = {x: 0, y : 0 }

      componentDidMount = () => {
        console.log('Rendering Component.')
      }

      handleMove = ({screenX, screenY}) => {
        this.setState({ x: screenX, y: screenY})
      }

      render() {
        return <div onMouseMove={this.handleMove}>
            <div> Mouse is at : {this.state.x} , {this.state.y}  </div>
            <Component></Component>
        </div>
      }
    };
  };


export default withMouse;