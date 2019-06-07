export class DoctorLookup {
  getDoctorByMedicalIssue(medical issue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
