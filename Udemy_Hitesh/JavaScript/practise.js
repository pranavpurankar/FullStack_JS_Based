// Task 2
/* 
Create a class Shape with a method area() that returns 0. 
Create two subclasses Circle and Rectangle that override the 
area() method to calculate the area of a circle and a 
rectangle, respectively.

Algorithm:
  1) Shape class creation with area() method.
  2) Circle and Rectangle Subclasses with overriden methods
  3) In circle -> define the method to calculate the Circle area
  4) In rect -> define the method to calculate the rect area
*/

class Shape{
  area(){
    return 0;
  }
}

class Circle extends Shape{
  area(radius){
    return Math.PI * (r**2);
  }
}

class Rectangle extends Shape{
  constructor(length, width){
    super();
    this.length = length;
    this.width = width;
  }

  area(){
    return this.length * this.width;
  }
}

let rect1 = new Rectangle(5,4);
console.log(rect1.area());