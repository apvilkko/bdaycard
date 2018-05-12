import './style.css';
import config from './config.js';

let videoEl = null;

function getViewSize() {
  const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return [w, h];
}

function getVideoScale(viewSize) {
  if ((viewSize[0] / 16) > (viewSize[1] / 9)) {
    return [viewSize[0], viewSize[0] * 9/16];
  }
  return [viewSize[1] * 16/9, viewSize[1]];
}

function scaleVideo() {
  const scale = getVideoScale(getViewSize());
  videoEl.width = scale[0];
  videoEl.height = scale[1];
}

const COLORS = ['#54b64b', '#01a4ce', '#ec2426'];

document.addEventListener('DOMContentLoaded', function() {
  videoEl = document.getElementById('video');
  scaleVideo();

  document.getElementById('start').addEventListener('click', function () {
    document.getElementById('audio').play();
    document.getElementById('video').play();
    scaleVideo();
    document.getElementById('start').style.display = 'none';
    document.getElementById('text').style.display = 'block';
  });

  document.title = config.title;
  const textEl = document.getElementById('text');
  config.text.forEach((text, i) => {
    const newDiv = document.createElement('div');
    newDiv.appendChild(document.createTextNode(text));
    newDiv.style.color = COLORS[i % COLORS.length];
    newDiv.style['animation-delay'] = (i * 0.5) + 's';
    textEl.appendChild(newDiv);
  });
}, false);

window.addEventListener('resize', function() {
  scaleVideo();
});
