(function (w, d) {
  const MINCOLOR = parseInt("000000", 16);
  const MAXCOLOR = parseInt("FFFFFF", 16);
  const DANCEFLOOR = d.getElementById("dance-floor");
  const AUDIO = d.getElementById('audio');

  function randomColor(){
      let colorstring = "#" + (Math.floor(Math.random()*MAXCOLOR)+MINCOLOR).toString(16);
      return colorstring;
  }

  function colorElements(HTMLCollection, colorfunction){
      for(let i=0; i<HTMLCollection.length; i++){
          HTMLCollection[i].style.backgroundColor = colorfunction()
          ;;
      }
  }

  function init() {
    for(let i=0; i<50; i++){
      DANCEFLOOR.appendChild(d.createElement("div"));
    }

    setInterval(() => colorElements(DANCEFLOOR.children, randomColor), 500);

    AUDIO.load();
  }

  init();
}(window, document));
