const order = prompt('Enter your order');
const operation = prompt('Enter operation(BUY, SELL)');


if (operation === 'buy' || operation === 'sell') {
  if (order === 'coffee') {
    alert(`You ${operation} coffee`);
  } else if (order === 'cake') {
    alert(`You ${operation} cake`);
  } else if (order === 'wine') {
    alert(`You ${operation} wine`);
  } else {
    alert(`You ${operation} ${order} .`)
  }
} else  {
  alert('Invalid operation')
}


/*if (operation === 'BUY') {
  if (order === 'COFFEE') {
    alert('You bought coffee');
  } else if (order === 'CAKE' && operation === 'BUY') {
    alert('You bought cake');
  } else if (order === 'WINE') {
    alert('You bought wine');
  } else {
    alert(`You bought ${order}`);
  }
} else if (operation === 'SELL') {
  if (order === 'COFFEE') {
    alert('You sell coffee');
  } else if (order === 'CAKE' && operation === 'BUY') {
    alert('You sell cake');
  } else if (order === 'WINE') {
    alert('You sell wine');
  } else if (order === 'COFFEE') {
    alert('You sell coffee');
  } else {
    alert(`You sell ${order}`);
  }
} else {
  alert('Invalid operation');
}
*/
