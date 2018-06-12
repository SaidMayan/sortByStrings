function sortByString(s,t) {
  return s.split('').sort((r, u) => {
    return t.indexOf(r) - t.indexOf(u);
  }).join('');
}

console.log(sortByString("weather", "therapyw"));
