// let red = document.getElementById("stopButton");
// let yellow = document.getElementById("slowButton");
// let green = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

let all = document.querySelectorAll("h1");
for (let x = 0; x < all.length; x++) {
  all[x].addEventListener("click", () => {
    let id = all[x].getAttribute("id");

    if (id == "stopButton") {
      stopLight.style.backgroundColor = "red";
      slowLight.style.backgroundColor = "";
      goLight.style.backgroundColor = "";
    } else if (id == "slowButton") {
      stopLight.style.backgroundColor = "";
      slowLight.style.backgroundColor = "yellow";
      goLight.style.backgroundColor = "";
    } else if (id == "goButton") {
      stopLight.style.backgroundColor = "";
      slowLight.style.backgroundColor = "";
      goLight.style.backgroundColor = "green";
    }
  });
}
