function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    if (!audio) return;

    key.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {

    e.target.classList.remove('playing');

}


const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound);



//toggle darkmode
  var button = document.getElementsByTagName("button")[0];
  var body = document.body;
  button.addEventListener("click", function(){
   body.classList.toggle("dark-mode");
}); 

//volume controller