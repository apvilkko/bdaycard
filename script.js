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

document.addEventListener('DOMContentLoaded', function() {
  videoEl = document.getElementById('video');
  scaleVideo();
}, false);

window.addEventListener('resize', function() {
  scaleVideo();
});
