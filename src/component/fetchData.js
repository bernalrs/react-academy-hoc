import React from 'react';


const fetchData = url =>  Component => {
    return class ModifiedComponent extends React.Component {
     
      state = {
        data: 'A'
      }

      componentDidMount(){
        console.log('About to Fetch.')
        this.fetch();
      }

    fetch = () =>  {
        window.fetch(url)
        .then(response => {
            console.log('received data.')
            return response.json();
        })
        .then(myJson => {
            this.setState({data: JSON.stringify(myJson)});
        });
    }

      render() {
        const {data} =  this.state;
        return <div>
            <div> Fetch Data: {JSON.stringify(data)} </div>
            <Component />
        </div>
      }
    };
  };


export default fetchData;