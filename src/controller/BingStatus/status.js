import React  from 'react';

export default class StatusController{
StatusController(){}

  async statusOfSpammer () {
    let dataString ="";
    // Simple GET request using fetch
    await fetch('http://192.168.0.2/rewards.txt',{
              method: "GET"
            }
          )
            .then(response => response.text())
            .then(data => dataString=data)

        return dataString;
        

}
}           


/*

 let statusController  = new StatusController();
      let data = await statusController.statusOfSpammer();


      Moment.locale('en');
      let today = Moment(new Date()).format('YYYY-MM-DD')
      console.log(today);
      let isDone  = data.indexOf(today) > -1;
      if (isDone){
        setNum ("DONE");

      } else {
        setNum("NOT DONE");
     
      }




*/