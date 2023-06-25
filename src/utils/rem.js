
import { isH5 } from './index';

function setRem() {
  const baseFontSize = 50;
  const designWidth = 375;
  const fontSize = (document.documentElement.clientWidth / designWidth) * baseFontSize * 2;

  isH5()

  if (document.documentElement.clientWidth < 440) {
    document.documentElement.style.fontSize = fontSize + 'px';
  } else {
    document.documentElement.style.fontSize = "117.33px"
  }
}

setRem();

console.log('remmmmm');

window.onresize = function () {
  setRem();
  isH5()
}

export default setRem;
