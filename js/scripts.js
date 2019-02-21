// Business Logic //

var medium = ["Medium"];
var large = ["Large"];
var mutton = ["Mutton"];
var veggie = ["Vegetarian"];
var pepperoni = ["Pepperoni"];

function Pizza(pSize, toppings, price) {
  this.pSize = pSize;
  this.toppings = toppings;
  this.price = 100;
}
Pizza.prototype.addToPrice = function () {
  if(medium.includes(this.pSize)) {
    this.price += 50;
  }
  if(large.includes(this.pSize)) {
    this.price += 100;
  }
  if(mutton.includes(this.toppings)) {
    this.price += 20;
  }
  if(veggie.includes(this.toppings)) {
    this.price += 10;
  }
  if(pepperoni.includes(this.toppings)){
    this.price += 20;
  }
};

// User Interface //

$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var pSize = $("#pSize").val();
    var toppings = $("#toppings").val();
    var price = 100;

    var newPizza = new Pizza(pSize, toppings, price);

    newPizza.addToPrice();

    console.log(newPizza);
    $("#list").append("<ul>" + newPizza.pSize + "</ul>");
    $("#list").append("<ul>" + newPizza.toppings + "</ul>");
    $("#list").append("<ul>" + "Rs." + newPizza.price + "</ul>");

    $("#formInput").hide();
    $("#orderConfirmation").show();









  });
});
