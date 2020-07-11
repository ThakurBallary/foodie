import {
  DECREASE_QUANTITY,
  INCREASE_QUANTITY
} from '../Actions/ActionTypes'

const initialState = [
  {
    description: 'tortillas de maïs, fruit de la passion, mango',
    id: 1,
    name: 'Gauc de la Costa',
    quantity: 0,
    price: 7
  },
  {
    description: 'citron vert / Corona sauce',
    id: 2,
    name: 'Chicharron y Cerveza',
    quantity: 0,
    price: 7
  },
  {
    description: 'padrones tempura, gambas',
    id: 3,
    name: 'Chilitos con Cam',
    quantity: 0,
    price: 8
  }
]

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case DECREASE_QUANTITY:
      let mainIndex = state.findIndex(e => e.id === action.id) 
      return state.map((item, index) => {
        if (index === mainIndex && item.quantity) {
          return Object.assign({}, item, {
            quantity: item.quantity - 1
          })
        }
        return item
      })
    case INCREASE_QUANTITY:
      mainIndex = state.findIndex(e => e.id === action.id) 
      return state.map((item, index) => {
        if (index === mainIndex && item.quantity < 20) {
          return Object.assign({}, item, {
            quantity: item.quantity + 1
          })
        }
        return item
      })
    default:
      return state
  }
}

export default menuReducer