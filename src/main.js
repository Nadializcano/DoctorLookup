//BUSINESS LOGIC

//UI LOGIC
$(document).ready(function() {
  $('#doctorLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");


    let doctorLookup = new DoctorLookup();  // create instance of WeatherService class
    let promise = doctorLookup.getDoctorByMedicalIssue(medical issue);  // call the instance method and pass in user input

    promise.then(function(response) {
    let body = JSON.parse(response);
      $('.showDoctor').text(`This Doctors match your search ${medical issue} is ${body.main.humidity}%`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
