
function randomColor(){
    const HEXDIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = ['#'];
    for(let i=0; i<6; i++){
        color.push(HEXDIGITS[Math.floor(Math.random()*HEXDIGITS.length)])
    }  
    color = color.join('')
    return color;
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