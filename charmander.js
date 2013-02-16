/*
* Charmander HTML5 player
* for mobile only
*/
var Charmander = (function (){

  function _createHTMLAudio(){
    var audio = document.createElement('audio');
    audio.setAttribute('preload','auto');
    return audio;
  }
  
  return function Charmander(){
    var 
      audioEnded = function (){},
      bufferingStart = function (){},
      bufferingProgress = function (){},
      bufferingEnd = function (){},
      timeupdate = function (){},
      readyToPlay = function (){},
      audio = _createHTMLAudio();

    audio.addEventListener('ended', function (){
      audioEnded();
    }, false);
    audio.addEventListener('loadeddata', function (){
      bufferingEnd();
    }, false);
    audio.addEventListener('progress', function (){
      if (audio.buffered !== undefined && audio.buffered.length !== 0){
        bufferingProgress(parseInt(((audio.buffered.end(0) / audio.duration) * 100), 10));
      }
    }, false);
    audio.addEventListener('timeupdate', function (){
      var perc = (audio.currentTime / audio.duration) * 100;
        timeupdate(audio.currentTime, perc);
    },false);
    audio.addEventListener('canplay', function (){
      readyToPlay();
    }, false);
    
    document.getElementsByTagName('body')[0].appendChild(audio);

    this.h = audio;
    
    function load(music) {
      this.pause();
      audio.setAttribute('src',music);
      audio.load();
      bufferingStart();
    };
    Object.defineProperty(this, 'load', {value: load, enumerable: true});
    
    function unload() {
      this.pause();
      audio.setAttribute('src','');
    };
    Object.defineProperty(this, 'unload', {value: unload, enumerable: true});
    
    function play() {
      audio.play();
    };
    Object.defineProperty(this, 'play', {value: play, enumerable: true});

    function pause() {
      audio.pause();
    };
    Object.defineProperty(this, 'pause', {value: pause, enumerable: true});

    function vanish(){
      document.getElementsByTagName('body')[0].removeChild(audio);
    }
    Object.defineProperty(this, 'vanish', {value: vanish, enumerable: true});
    
    function seek(time) {
      audio.currentTime = time;
    };
    Object.defineProperty(this, 'seek', {value: seek, enumerable: true});

    function volume(level) {
      level = (level > 1) ? 1 : ((level < 0) ? 0 : level);
      audio.volume = level;
    };
    Object.defineProperty(this, 'volume', {value: volume, enumerable: true});

    function mute() {
      audio.muted = true;
    };
    Object.defineProperty(this, 'mute', {value: mute, enumerable: true});

    function unmute() {
      audio.muted = false;
    };
    Object.defineProperty(this, 'unmute', {value: unmute, enumerable: true});

    function onAudioEnded(callback) {
      if (typeof callback === 'function') {
        audioEnded = callback;
      }
    };
    Object.defineProperty(this, 'onAudioEnded', {value: onAudioEnded, enumerable: true});

    function onBufferingStart(callback) {
      if (typeof callback === 'function') {
        bufferingStart = callback;
      }
    };
    Object.defineProperty(this, 'onBufferingStart', {value: onBufferingStart, enumerable: true});

    this['onBufferingProgress'] = function onBufferingProgress(callback) {
      if (typeof callback === 'function') {
        bufferingProgress = callback;
      }
    };
    Object.defineProperty(this, 'volume', {value: volume, enumerable: true});
    
    function onBufferingEnd(callback) {
      if (typeof callback === 'function') {
        bufferingEnd = callback;
      }
    };
    Object.defineProperty(this, 'onBufferingEnd', {value: onBufferingEnd, enumerable: true});
    
    function onReadyToPlay(callback) {
      if (typeof callback === 'function') {
        readyToPlay = callback;
      }
    };
    Object.defineProperty(this, 'onReadyToPlay', {value: onReadyToPlay, enumerable: true});
    
    function onTimeupdate(callback) {
      if (typeof callback === 'function') {
        timeupdate = callback;
      }
    };
    Object.defineProperty(this, 'onTimeupdate', {value: onTimeupdate, enumerable: true});
    
    if (Object.freeze){
      Object.freeze(this);
    }
  };
})();
Charmander.constructor = Charmander;
Charmander.prototype.constructor = Charmander;