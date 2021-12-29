function Circle(r) {
  r = r;
  pi = 3.14159265359;
  Circle.prototype.getArea = function () {
    console.log(pi * r ** 2);
  };
  Circle.prototype.getPerimeter = function () {
    console.log(pi * r * 2);
  };
}

let area = new Circle(11);
area.getArea();
let perimeter = new Circle(4.44);
perimeter.getPerimeter();
