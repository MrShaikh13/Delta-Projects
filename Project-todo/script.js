let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");

let el = function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.append(delBtn);
  ol.append(item);
  inp.value = "";
};
inp.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    el()
  }
});
btn.addEventListener("click", el);

ol.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
