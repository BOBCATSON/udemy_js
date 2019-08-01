
//module function using an IIFE
//BUDGET CONTROLLER
var budgetController = (function() {


})();


//UI CONTROLLER
var UIController = (function()

  var DOMstrings= {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp.
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    }
  }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // get field input data
    var input = UIController.getInput();
    console.log(input);
    // add item to budget CONTROLLER
    // ADD ITEM TO User iNTERFACE
    // Calculate the budget
    // display budget on UI
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
