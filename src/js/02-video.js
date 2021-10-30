import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeReff = document.querySelector('iframe');
const player = new Player(iframeReff);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(event) {
  const { seconds } = event;
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));