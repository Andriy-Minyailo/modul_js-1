// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if (ordered === 0) {
//   message = "There are no products in the order!";
// } else if (ordered > available) {
//   message = "Your order is too large, there are not enough items in stock!";
// } else {
//   message = "The order is accepted, our manager will contact you";
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));


// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000 && totalSpent < 50000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000 && totalSpent < 20000) {
//   discount = BRONZE_DISCOUNT;
// } else {
//   discount = BASE_DISCOUNT;
// }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));// 0.1
// console.log(getDiscount(46900));// 0.5

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";


//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));// "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130));// "Not enough goods in stock!"

task_27
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter":  // Change this line
      price = 0; // Change this line
      break;

    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}




