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
