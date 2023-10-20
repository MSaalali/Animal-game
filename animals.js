
function a2(ev) {
   ev.preventDefault();
}
function a3(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
}
function a1(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   if (ev.target.tagName !== "IMG") {
      ev.target.appendChild(document.getElementById(data));

   }

}
let tryBtn = document.querySelector(".btn1")
let img = document.querySelector("#happy")

let isNotw = false
tryBtn.addEventListener("click", () => {
   let td = document.querySelectorAll("td")
   for (let a = 0; a < td.length; a++) {
      if (td[a].children[0].id == td[a].getAttribute("data-name")) {
         td[a].style.backgroundColor = "green"
      }
      else {
         td[a].style.backgroundColor = "red"
         isNotw = true
      }
   } img.style.display = "block"
   if (isNotw == true) {
      img.src = "sad.png"
   }
   else { img.src = "happy.png" }
})
