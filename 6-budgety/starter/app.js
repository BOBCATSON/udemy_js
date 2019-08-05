//
//module function using an IIFE
///////////////////////////////////////////////////////////////BUDGET CONTROLLER
var budgetController = (function() {

  //function constructor - starts with a capital and takes arguments
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }



})();





///////////////////////////////////////////////////////////////////UI CONTROLLER
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp.
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();










//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {

    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
      if (e.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };


  var ctrlAddItem = function() {
    // get field input data
    var input = UIController.getInput();
    console.log(input);
    // add item to budget CONTROLLER
    // ADD ITEM TO User iNTERFACE
    // Calculate the budget
    // display budget on UI
  };

  return {
    init: function() {
      setupEventListeners();
    }
  }

})(budgetController, UIController);


controller.init();
