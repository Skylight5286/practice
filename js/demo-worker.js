var i=0;
function count(){
  i+=1;
    postMessage(i);
    setTimeout("count()", 500);
}

count();