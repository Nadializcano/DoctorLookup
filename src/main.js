
import {DoctorLookup} from './doctorLookup.js';
import $ from 'jquery';


$(document).ready(function() {
  $('.formSearch').submit(function(event) {
    event.preventDefault();

    let name = $('.name').val();
    $('.name').val("");
    let medicalIssue = $('.medicalIssue').val();
      $('.medicalIssue').val("");
    let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
    let promise = doctorLookup.getDoctor(name, medicalIssue);  // call the instance method and pass in user input

    promise.then(function(response) {
    let body = JSON.parse(response);


    if(body.data.length>0)
    {
      $('.showDoctor').text('');

      for(let i= 0; i<body.data.length; i++)
      {
        $('.showDoctor').append("<h2>"+body.data[i].profile.first_name +" "+ body.data[i].profile.last_name+"</h2>");
      }
}
 else {
       $('.showErrors').text(`There was an error processing your request`);

     }

   });
  });
});
