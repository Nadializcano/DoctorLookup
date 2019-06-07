function DoctorLookup (side1,side2,side3)
{
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}
DoctorLookup.prototype.checkType = function(){
  if((this.side1 < (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))){
    return "not a triangle";
  }

};

DoctorLookup.prototype.checkTriangle = function() {
  var triangleType;
  if (this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
    triangleType = 'equilateral';
  } else if (this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
    triangleType = "invalid";
  } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
    triangleType = 'isosceles';
  } else {
    triangleType = 'scalene';
  }
  return triangleType;
};

exports.doctorLookupModule = DoctorLookup;
