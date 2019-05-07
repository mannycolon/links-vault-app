import types from './ActionTypes'

export function addNewLink(url) {
  return {
    type: types.ADD_NEW_LINK,
    url
  }
}

// export function submitNewUrl() {
//   return {
//     type: SUBMIT_NEW_URL,
//     url
//   }
// }