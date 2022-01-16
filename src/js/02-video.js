// import libraries
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

// settings from library vimeo
const player = new Player('vimeo-player');

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// to put time in storage
const onPlay = function () {
  player.getCurrentTime().then(function (seconds) {

    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    console.log('time', Math.round(seconds));
  });
};
// to showing time with throttle
player.on('timeupdate', throttle(onPlay, 1000));
const startTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(startTime);

console.log(Math.round(startTime));
