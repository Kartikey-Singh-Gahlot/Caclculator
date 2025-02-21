const screen= document.querySelector('input');
screen.disabled =true;


function pressed(val){
    screen.value +=val;
}

function result(){
  if(screen.value.length != 0){
    screen.value = eval(screen.value);
  }
}

function clr(){
    screen.value = "";
}

function del(){
  screen.value = screen.value.slice(0,screen.value.length-1);
}


