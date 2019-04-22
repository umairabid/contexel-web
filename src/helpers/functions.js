export function generateFormState(elements) {
  const state = {};
  state.errors = {};
  elements.forEach(e => {
    state[e] = "";
    state.errors[e] = [];
  });
  return state;
}

export function replaceTupleInCollectionById(collection, tuple) {
  const existingTuple = collection.find(t => tuple.id === t.id);
  if (existingTuple) collection[collection.indexOf(existingTuple)] = tuple;
  else collection.push(tuple);
  return collection.concat([]);
}
