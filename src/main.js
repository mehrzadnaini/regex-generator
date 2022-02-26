import Blockly from 'blockly';

const workspace_wrapper = document.querySelector('#workspace_wrapper');
const workspace = document.querySelector('#workspace');

onresize = function(){
    let element = workspace_wrapper;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      workspace.style.left = x + 'px';
      workspace.style.top = y + 'px';
      workspace.style.width = workspace_wrapper.offsetWidth + 'px';
      workspace.style.height = workspace_wrapper.offsetHeight + 'px';
};
window.addEventListener('resize', onresize, false);
onresize();

var toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      }
    ]
  };

Blockly.inject('workspace',{toolbox: toolbox});
