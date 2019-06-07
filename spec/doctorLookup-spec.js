var DoctorLookup = require('./../src/doctorLookup.js').doctorLookupModule;
describe('DoctorLookup', function() {
  var reusableTriangle;

  beforeEach(function(){
    reusableTriangle = new DoctorLookup (5,5,5);
  });


  it('should test whether a Triangle has three sides', function() {
    var DoctorLookup = new DoctorLookup(3, 4, 5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });
  it('should correctly determine whether three lengths can be made into traingle', function(){
    var notTriangle = new DoctorLookup(30,3,3);
    expect (notTriangle.checkTriangle()).toEqual('invalid');
  });
});
