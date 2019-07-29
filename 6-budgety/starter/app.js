
//module function using an IIFE
//BUDGET CONTROLLER
var budgetController = (function() {


})();


//UI CONTROLLER
var UIController = (function() {



})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // get field input data
    // add item to budget CONTROLLER
    // ADD ITEM TO User iNTERFACE
    // Calculate the budget
    // display budget on UI
    console.log('it works');
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if (e.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {
      e.eventPreventDefault;
    }
  });




})(budgetController, UIController);
