import React, { Component } from 'react';
import StatusController from '../controller/BingStatus/status' 
import Moment from 'moment';

export default class BingStatus extends Component  {
    constructor() {
      super();
      this.state =  "" ;
    }

    async componentDidMount() {
      let statusController  = new StatusController();
      let data = await statusController.statusOfSpammer();


      Moment.locale('en');
      let today = Moment(new Date()).format('YYYY-MM-DD')
      console.log(today);
      let isDone  = data.indexOf(today) > -1;
      if (isDone){
        this.setState({correct: "DONE"} );
      } else {
        this.setState({correct: "NOT DONE"} );
     
      }
    }




  render() {
    return(
      <><h3>Status of Bing Obtainer:  {this.state.correct}</h3> 
      </>
    )
  }

  
}
