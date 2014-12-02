$(document).ready(function() {
 
  var tortoise, hare, fish, meter;
 
  function Animal(name, speed, focus, luck, weight) {
    this.name = name;
    this.speed = speed;
    this.focus = focus;
    // The higher the luck, the better:
    this.luck = luck;
    // The smaller the size the more Red Bull Energy they get from a single can:
    this.weight = weight;
    this.position = 0;
    this.run = function() {
      if (Math.random() * 10 < this.focus) {
        this.position = this.position + this.speed;
        console.log("Focused " + this.name + " got their hustle on and moved ahead " + (this.speed))
      }
      // To simulate: will they be lucky and find a red bull? If so, based on their weight, how much of a boost will it give them:
      else if (Math.random() * 10 < this.luck) {
        this.position = this.position + (10/this.weight);
        console.log("Lucky " + this.name + " found a red bull and got a boost of " + (10/this.weight))
      }
    }
  }

  tortoise = new Animal("Turbo the Turtle", 1, 8, 8, 3);
  hare = new Animal("Cotton the Rabbit", 4, 2, 6, 10);
  fish = new Animal("Tails the Fish", 2, 4, 1, 2);
 
  meter = 20;
  $(window).keydown(function(e) {
    if (e.keyCode == '32' && tortoise.position < meter && hare.position < meter && fish.position < meter) {
      console.log(" ");
      tortoise.run();
      hare.run();
      fish.run();
      $('#tortoise').width(tortoise.position * 50 + 'px');
      $('#hare').width(hare.position * 50 + 'px');
      $('#fish').width(fish.position * 50 + 'px');
    } else {
      alert("Congrats to the winner!")
    }
  });
 
});
