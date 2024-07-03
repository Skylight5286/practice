const ulEl = document.getElementsByTagName("ul");
const links =
["https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg",
  "https://sample-videos.com/img/Sample-jpg-image-2mb.jpg"]

function getImage(url, id) {
  return new Promise(function(myResolve, myReject) {
    const image = new Image();
    image.addEventListener("load", ()=> {
      let res = [image, id];
      myResolve(res);
    });
    image.src = url;
  });
}
let text = "";
let i = 0;
for (const link of links) {
  text += "<li><img class='loader'/></li>";
  ulEl[0].innerHTML = text;
  getImage(link, i).then(function(res) {
    ulEl[0].childNodes[res[1]].replaceChild(res[0],
      ulEl[0].childNodes[res[1]].childNodes[0]);
  });
  i++;
}