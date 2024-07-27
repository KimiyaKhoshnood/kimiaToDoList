let inputBox = document.querySelector("#inputBox");
let ulBox = document.querySelector("#ulBox");
let liEach = Array.from(document.querySelectorAll(".right div ul li"));

inputBox.children[4].addEventListener("click", () => {
  console.log("add");
  if (inputBox.children[3].value != "") {
    inputBox.classList.remove("empty");

    const li = document.createElement("li");
    ulBox.appendChild(li);

    liEach = Array.from(document.querySelectorAll(".right div ul li"));

    liEach[liEach.length - 1].innerHTML = `<div class="colorRed"></div>
                        <span>${inputBox.children[3].value}</span>
                        <div class="edit editNotActive">e</div>
                        <div class="delete editNotActive">d</div>`;
    inputBox.children[3].value = "";

    liEach = Array.from(document.querySelectorAll(".right div ul li"));
    add();
  } else {
    inputBox.classList.add("empty");
    alert("Can't add empty text");
  }
});

//console.log(liEach[0].innerHTML);

// while (elem < liEach.length) {
//     console.log("nmd");
// }

let str;
function add() {
  liEach.map((elem) => {
    elem.children[2].addEventListener("click", () => {
      console.log("clicked edit");
      //console.log("elem", elem);

      elem.children[2].classList.remove("editNotActive");
      elem.children[3].classList.remove("editNotActive");
      elem.children[2].classList.add("editActive");
      elem.children[3].classList.add("editActive");

      //str= elem.children[1].innerHTML
      //console.log("str", str);
      elem.children[1].innerHTML = `<input type="text" placeholder="text"> <div>ok</div>`;
      //elem.children[1].children[0].value=str
      elem.children[1].children[1].addEventListener("click", () => {
        if (elem.children[1].children[0].value != "") {
          elem.classList.remove("empty");
          str = elem.children[1].children[0].value;
          elem.children[1].innerHTML = str;
          elem.children[2].classList.remove("editActive");
          elem.children[3].classList.remove("editActive");
          elem.children[2].classList.add("editNotActive");
          elem.children[3].classList.add("editNotActive");
        } else {
          elem.classList.add("empty");
          alert("Text can't be empty");
        }
      });
    });
    elem.children[3].addEventListener("click", () => {
      console.log("clicked del");
      elem.remove();
      liEach = Array.from(document.querySelectorAll(".right div ul li"));
    });
  });
}
add();
