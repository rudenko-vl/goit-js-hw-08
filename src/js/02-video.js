import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay({seconds}) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

function setTime() {
  const time = localStorage.getItem('videoplayer-current-time');
  if (time) {
    player.setCurrentTime(time);
    localStorage.removeItem('videoplayer-current-time');
  }
};
window.addEventListener('DOMContentLoaded', setTime);