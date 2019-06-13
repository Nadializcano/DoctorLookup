
import {DoctorLookup} from './doctorLookup.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';


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
        $('.showDoctor').append("<h3>This are the Doctors from your search</h3>" + "<h3>Dr."+" " +body.data[i].profile.first_name +" "+ body.data[i].profile.last_name+"</h3>" + "<h4>Address:</h4>" + "<p>" + body.data[i].practices[0].visit_address.street + "," + " " + body.data[i].practices[0].visit_address.city + "," + " " + body.data[i].practices[0].visit_address.zip +"</p>" + "<h4>Phone:</h4>" + "<p>" + body.data[i].practices[0].phones[0].number +"</p>"+"<h4>Website:</h4>" + "<p>" + body.data[i].practices[0].website +"</p>"+"</p>"+"<h4>Accepts new Patients:</h4>" + "<p>" + body.data[i].practices[0].accepts_new_patients+"</p>");
      }
}

   });

  });
});
