import { DECREASE_QUANTITY, INCREASE_QUANTITY } from './ActionTypes'

/*
 * action creators
 */

export function decreaseQuantity(index) {
  return { type: DECREASE_QUANTITY, index }
}

export function increaseQuantity(index) {
  return { type: INCREASE_QUANTITY, index }
}
