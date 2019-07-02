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

export function getUserInitials(name) {
  var splittedName = name.split(" ");
  var firstInitial = splittedName[0].split("")[0];
  var secontInitial = "";
  if (splittedName[1]) secontInitial = splittedName[1].split("")[0];
  return `${firstInitial}${secontInitial}`.toUpperCase();
}

export function stripHtmlTags(html) {
  var span = document.createElement("span");
  html = html.replace(/\n/g, " ");
  span.innerHTML = html;
  return span.textContent || span.innerText;
}

export function removeById(collection, id) {
  const existingTuple = collection.find(t => t.id === id);
  if (!existingTuple) return collection;
  collection.splice(collection.indexOf(existingTuple));
  return collection.concat([]);
}

export function keyBy(collection, key) {
  const keyed = {};
  collection.forEach(c => (keyed[c[key]] = c));
  return keyed;
}
