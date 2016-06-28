var food = prompt("I will help you decide what to eat! Is it a WEEKDAY or the WEEKEND?").toUpperCase();
switch (food) {
  case 'WEEKDAY':
  var smart = prompt("Are you still trying to save money during the week (YES or NO)?").toUpperCase();
  var healthy = prompt("Are you still trying to eat healthy during the week (YES or NO)?").toUpperCase();
  if (smart === 'YES' && healthy === 'YES') {
    window.alert("Great!! I am going to give you a random healthy option that falls within your budget");
    window.location = "https://order.subway.com/Cart/Menu2.aspx";
  } else {
    window.alert("You should think about your long term goals.Unhealthy food is for the weekend ONLY! ");
  }
  break;


  case 'WEEKEND':
    var whatever = prompt("Its the weekend!!!! Ready to eat whatever you want? (YES or NO)").toUpperCase();
    var workout = prompt("Do you plan on working out today? (YES or NO)").toUpperCase();
    if (soup === 'YES' && run === 'YES') {
      window.alert("Great! You can eat whatever you want and not feel bad at all! Heres a random supper unhealthy option");
      window.location = "http://www.yelp.com/biz/mooyah-burgers-fries-and-shakes-mcallen";
    } else {
      window.alert(" Here is a not so unhealthy option.");
      window.location = "http://www.yelp.com/biz/fit-fillet-mcallen?osq=healthy"
    };
};
