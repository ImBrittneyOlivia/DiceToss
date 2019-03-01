// Math.floor();  -- This will take any JS number value and round it down to the nearest integer

// Math.random(); -- This will create a random number including 0 up to but not including 1

switch (Math.floor(Math.random() * 7)) {
  case 1:
    console.log("You rolled a 1");
    break;
  case 2:
    console.log("You rolled a 2");
    break;
  case 3:
    console.log("you rolled a 3");
    break;
  case 4:
    console.log("You rolled a 4");
    break;
  case 5:
    console.log("You rolled a 5");
    break;
  case 6:
    console.log("You rolled a 6");
    break;
  default:
    console.log("Did you forget to roll?");
}
