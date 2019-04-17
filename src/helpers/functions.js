export function generateFormState(elements) {
  const state = {};
  state.errors = {};
  elements.forEach(e => {
    state[e] = '';
    state.errors[e] = [];
  })
  return state;
}