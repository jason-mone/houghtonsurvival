var logo = document.getElementById( 'sidelogo' );
var book = document.getElementById( 'lostlink' );
logo.addEventListener('click', goHome);
book.addEventListener('click', goBook);
function goHome(){
  window.location.href = '/';
}
function goBook(){
    window.location.href = '/public/the-lost-ways';
  }
