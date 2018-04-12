import React from 'react';


const withMeasureTime =  Component => {
    return class ModifiedComponent extends React.Component {
     
      state = {
        second: 0 
      }

      componentDidMount = () => {
        setInterval(() => {
          this.handleTick()
        }, 1000)
      }

      handleTick = () => {
        console.log('Tick')
        this.setState( (prevState, props) => {
          return {second: prevState.second + 1}
        } )
      }

      render() {
        const {second} = this.state;
        return <div>
            <div> Measure Time: {second}  </div>
            <Component></Component>
        </div>
      }
    };
  };


export default withMeasureTime;