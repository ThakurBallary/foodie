import { DECREASE_QUANTITY, INCREASE_QUANTITY } from './ActionTypes'

/*
 * action creators
 */

export function decreaseQuantity(id) {
  return { type: DECREASE_QUANTITY, id }
}

export function increaseQuantity(id) {
  return { type: INCREASE_QUANTITY, id }
}
