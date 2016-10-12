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
