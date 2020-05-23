import * as actions from "./actions";

const initialState = {
  ingredients: {
 chees:0,
  steak:0,
   tamato:0,
   lettuce:0,
  },
  price: 0,
};

const PRICES = {
    Chees:5,
    steak:6,
     tamato:7,
     lettuce:8,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
};