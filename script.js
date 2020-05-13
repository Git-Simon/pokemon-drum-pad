function playSound(e) 
{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // attribute selector for the audio where there is a data key
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`) // select the corresponding key

  if (!audio) return // stop the function from running all together
  
  key.classList.add('playing') // add the class playing for the transition

  audio.currentTime = 0 // rewind sound from the start 
  audio.play() // play sound linked with data key
}

function removeTransition(e)
{
  e.target.classList.remove('playing')
}

const keys = Array.from(document.querySelectorAll('.key')) // create an array that select every single key
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // listen to all elements in the array when that end let run removeTransition

window.addEventListener('keydown', playSound) // listen to the keydown events when that happened let the function run


// toggle dark theme
var button = document.getElementsByTagName("button")[0]
var body = document.body
button.addEventListener("click", () =>
{
  body.classList.toggle("dark-theme")
})


// rotate pokeballs 360 degree on click
$('.key').on("click", () =>
{       
  $(this).addClass("imageRot").one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () 
  {
      $(this).removeClass("imageRot") //remove anim class
      var url = $(this).data('https://image.flaticon.com/icons/svg/188/188918.svg') //get url from data-attribute
      $( ":mobile-pagecontainer" ).pagecontainer( "change", url) //navigate to page      
  })
})