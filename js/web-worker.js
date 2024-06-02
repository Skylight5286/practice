const display = document.getElementById("display");

function createWorker(worker) {
  if (typeof(Worker) === "undefined") {
    console.log("Worker not created.");
    return undefined;
  }
  return new Worker(worker);
}

window.addEventListener("load", function() {
  webWorker = createWorker("js/demo-worker.js");
  webWorker.onmessage = function(event) {
    display.innerHTML = event.data;
  };
})