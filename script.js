const MINCOLOR = parseInt("000000", 16);
const MAXCOLOR = parseInt("FFFFFF", 16);

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
const divs = document.getElementsByTagName('div');
setInterval(() => colorElements(divs, randomColor), 500);

const audio = document.getElementById('audio')
audio.load();
