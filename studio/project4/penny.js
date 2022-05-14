
function pennyfade() {
    var popup = document.getElementById("pennypopup");
    popup.style.opacity = "0";
    popup.style.transition = "0.5s";
    popup.style.display = 'none';
};

popup.addEventListener('onkeypress') {
    if (event.keyCode == 13) {
        // event.target.value = '';
        // add animation stuff here
        alert('') 
    }
}

window.addEventListener('keydown', function(drop)  {
    if (drop.keyCode == 13) {
      
    }
});

window.addEventListener('keydown', function(event) {   
    var code = event.keyCode || event.which;
    if(code == 13) { 
    var drop = document.getElementById('drop');
    drop.animationstart
    else {
        $('#drop').removeClass('penny');
    }
 });