const elven = {
  leather: 2,
  iron: 1,
  refine: 4
};

const es6Syntax = {
  ...elven,
  leather: 5
}

console.log('[elven]', elven);
console.log('[es6Syntax]', es6Syntax);
