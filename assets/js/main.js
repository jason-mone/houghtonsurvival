var logo = document.getElementById( 'sidelogo' );
var book = document.getElementById( 'lostlink' );
logo.addEventListener('click', goHome);
book.addEventListener('click', goBook);
function goHome(){
  window.location.href = '/';
}
function goBook(){
    window.location.href = '/public/the-lost-ways.html';
  }


var step = document.getElementsByClassName( 'step' );
var prevStepLink = document.getElementsByClassName( 'steplink-prev' );
var nextStepLink = document.getElementsByClassName( 'steplink-next' );
var amount = document.getElementById('amount');

function activeState( clickedId ) {
  step[clickedId.replace(/[^0-9]/g, '')].className = 'step checked active';
}
function checkState(){
  var steps = document.getElementsByClassName( 'step active' );
  for (var i = 0; i < steps.length; i++) {
    steps[i].className = 'step checked';
  }
}
function updateAmount(){
  var steps = document.getElementsByClassName( 'step checked' );
  amount.innerHTML = (steps.length) + '/' + step.length;
}
function findId() {
  checkState();
  activeState(this.id);
  updateAmount();
}
for (var i = 0; i < step.length; i++){
  step[i].addEventListener('click', findId);
  prevStepLink[i].addEventListener('click', findId);
  nextStepLink[i].addEventListener('click', findId);
}
for (var i = 0; i < step.length; i++){
  if (document.location.href === document.getElementsByClassName( 'step' )[i].href) {

    for (var a = i; a > -1; a--) {
      step[a].className = 'step checked';
    }
    step[i].className += ' active';
  }
}
step[0].click();

var tab = document.getElementsByClassName("tab");
var tablink = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tabcontent");
var content = document.getElementsByClassName("content");

function resetClass(parent){
  for (var i = 0; i < tab[0].children.length; i++){
    tab[parent].children[i].className = 'tablinks';
    content[parent].children[i].className = 'tabcontent';
    }
}
for (var z = 0; z < tab.length; z++){
  for (var r = 0, len = tab[0].children.length; r < len; r++){
     (function(index, z){
       tab[z].children[r].onclick = function(){
          var child = index;
          var parent = z;
          var link = tab[parent].children[child];
          var cont = content[parent].children[child];
          resetClass(z);
          link.className = 'tablinks active-tablinks';
          cont.className = 'tabcontent active-tabcontent';
        };
     })(r, z);
  }
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function stopVideo() {
  player.stopVideo();
}
function playSilent(){
  player.mute();
  player.playVideo();
}
// playSilent();
