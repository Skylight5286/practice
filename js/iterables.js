let disp = document.getElementById("display");
const iter = {};

iter[Symbol.iterator] =
function() {
  let n = 0;
  done = false;

  return {
    next() {
      n += 10;
      if (n == 100) done = true;
      return {
        value: n,
        done: done
      }
    }
  }
};
let dis = disp ?. innerHTML;
if (dis) {
  dis = "test1"
} else console.log(dis);
let text="";
for (let i of iter) {
  disp.innerHTML=text+=(i+"<br>");
}

console.log(window)