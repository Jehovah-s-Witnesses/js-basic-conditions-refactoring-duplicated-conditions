const order = prompt('Enter your order');
const operation = prompt('Enter operation(BUY, SELL)');

if (operation === 'BUY') {
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
    alert('You sell corfee');
  } else {
    alert(`You sell ${order}`);
  }
} else {
  alert('Invalid operation');
}
