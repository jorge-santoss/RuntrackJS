
const keyCodesByLabel = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    a: 65,
    b: 66
  };
  
  const konamiCode = [
    'up',
    'up',
    'down',
    'down',
    'left',
    'right',
    'left',
    'right',
    'b',
    'a'
  ];
  
  const konamiKeyCodes = konamiCode.map(label => keyCodesByLabel[label]);
  
  const activateCheats = () => {
     document.body.style.color='white';
     document.body.style.background='rgb(0, 121, 241)';
  };
  
  var inputPositions = [];
  
  const incrementOrRemove = (inputPositions, keyCode) => {
    return inputPositions.reduce((acc, inputPosition, i, arr) => {
      if (keyCode == konamiKeyCodes[inputPosition]) {
        inputPosition++;
        if (inputPosition == konamiCode.length) {
          inputPositions = [];
          activateCheats();
          arr.splice(1); // eject early by mutating iterated copy
          return [];
        } else {
          acc.push(inputPosition);
          return acc;
        }
      } else {
        return acc;
      }
    }, []);
  };
  
  const handleKeyCode = keyCode => {
    if (keyCode == konamiKeyCodes[0]) {
      inputPositions.push(0);
    }
    if (inputPositions.length > 0) {
      inputPositions = incrementOrRemove(inputPositions, keyCode);
    }
  };
  
  document.addEventListener('keydown', ({ keyCode }) =>
    handleKeyCode(keyCode)
  );