const disco = (function(d) {
  'use strict';

  function _generateRandomColors(minColor, maxColor) {
    const minColorNumber = parseInt(minColor.substr(1), 16);
    const maxColorNumber = parseInt(maxColor.substr(1), 16);

    const colors = [];

    for(let i = 0; i < 100; ++i) {
      colors.push("#" + (Math.floor(Math.random()*maxColorNumber)+minColorNumber).toString(16));
    }

    return colors;
  }

  function _generateTiles(containerSelector) {
    const discoElement = d.querySelector(containerSelector);
    discoElement.classList.add('disco-js-dance-floor');

    for(let i=0; i<50; i++){
      const tile = d.createElement("div");
      tile.classList.add('disco-js-tile');
      discoElement.appendChild(tile);
    }

    return discoElement.children;
  }

  function _addStyle() {
    const style = d.createElement('style');

    style.innerHTML = `
        .disco-js-tile {
            width: 20vw;
            height: 20vw;
            opacity: 50%;
            margin: 0;
        }

        .disco-js-dance-floor {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
    `;

    d.head.appendChild(style);
  }

  function _addAudio() {
    const audio = d.createElement("audio");
    audio.src = "dischipo.mp3";
    audio.loop = true;
    audio.innerHTML = "<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>";
    d.body.appendChild(audio);
    audio.play()
  }

  function _boogieDown(tiles, colors) {
    for(let i=0; i<tiles.length; i++){
        tiles[i].style.backgroundColor = colors[Math.floor(Math.random()*99)];
    }
  }

  function _disco(containerSelector, interval = 500, minColor = "#000000", maxColor = "#FFFFFF") {
    _addStyle();
    _addAudio();

    const colors = _generateRandomColors(minColor, maxColor);
    const tiles = _generateTiles(containerSelector);

    setInterval(() => _boogieDown(tiles, colors), interval);
  }

  return _disco;
}(document));
