import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from '../constants/Freezer';


export const updateTemperature = (temp) => {
  return {
    type: UPDATE_TEMPERATURE,
    payload: temp
  };
};

export const addProductToFreezer = (name, amount = 20) => {
  return {
    type: ADD_PRODUCT_TO_FREEZER,
    payload: {
      name,
      amount
    }
  }
}