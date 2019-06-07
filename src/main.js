//BUSINESS LOGIC

//UI LOGIC
import {DoctorLookup} from '.doctorLookup.js';
$(document).ready(function() {
  $('#doctorLocation').click(function() {
    let medicalIssue = $('#medicalIssue').val();
    $('#name').val("");


    let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
    let promise = doctorLookup.getDoctor(name, medicalIssue);  // call the instance method and pass in user input

    promise.then(function(response) {
    let body = JSON.parse(response);
      $('.showDoctor').text(`This Doctors match your search ${medical issue} is ${body.main.humidity}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
