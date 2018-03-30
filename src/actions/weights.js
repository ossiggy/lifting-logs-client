export const TOGGLE_ADD = 'TOGGLE_ADD';
export const toggleAdd = () => ({
  type: TOGGLE_ADD
});

export const ADD_WEIGHT = 'ADD_WEIGHT';
export const addWeight = weight => ({
  type: ADD_WEIGHT,
  weight
})

export const SUB_WEIGHT = 'SUB_WEIGHT';
export const subWeight = weight => ({
  type: SUB_WEIGHT,
  weight
})

export const ADD_PLATE = 'ADD_PLATE';
export const addPlate = plate => ({
  type: ADD_PLATE,
  plate
})

export const SUB_PLATE = 'SUB_PLATE';
export const subPlate = plate => ({
  type: SUB_PLATE,
  plate
})

export const RESET = 'RESET';
export const reset = () => ({
  type: RESET
})