"use strict";

let couterErrorMessages = 1;
let couterOfIds = 0;

class Element {
  constructor(id, text, data, click) {
    this.id = id;
    this.text = text;
    this.data = data;
    this.click = click;
  }
}

let list = [];
let bin;

const addNewElem = () => {
  const text = $("#new-elem").val();
  const listInHtml = document.getElementById("list");

  if (text !== "") {
    couterOfIds++;
    let elem = new Element(couterOfIds, text, null, true);
    list.push(elem);

    let newElem = document.createElement("li");
    newElem.className = "list-group-item list-group-item-primary";
    newElem.innerHTML = text;
    listInHtml.appendChild(newElem);

    couterErrorMessages = 1;
    $("#error-message").html("");
    draw();
  } else {
    $("#error-message").html(
      "Nie można dodać pustej wartości: x" + couterErrorMessages
    );
    couterErrorMessages++;
  }
};

const draw = () => {
  const listInHtml = document.getElementById("list");
  while (listInHtml.firstChild) {
    listInHtml.removeChild(listInHtml.firstChild);
  }
  for (let i = 0; i < list.length; ++i) {
    let newElem = document.createElement("li");
    newElem.innerHTML = list[i].text;
    newElem.id = list[i].id;
    newElem.className = list[i].click
      ? "list-group-item list-group-item-primary"
      : "list-group-item list-group-item-secondary";
    newElem.style = list[i].click
      ? "display: inline-block"
      : "text-decoration: line-through";

    if (!list[i].click) {
      newElem.innerHTML += list[i].data;
    }
    listInHtml.appendChild(newElem);

    // div do prawej
    // let div = document.createElement("p");
    // div.className = "float-right";
    // newElem.appendChild(div);

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "btn btn-warning";
    button.id = list[i].id;
    button.addEventListener("click", function (event) {
      var del = confirm("Are you sure to delete this todo?");
      if (del) {
        bin = list.find((el) => el.id == event.target.id);
        const index = list.indexOf(bin);
        if (index > -1) {
          list.splice(index, 1);
        }
        $("#" + event.target.id).remove();
      }
    });
    newElem.appendChild(button);
  }
};

const listOfToDos = document.querySelector("ul");
listOfToDos.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      let elem = list.find((li) => li.id === Number(event.target.id));
      if (
        event.target.className === "list-group-item list-group-item-primary"
      ) {
        let now = new Date();
        let date =
          now.getFullYear() +
          "-" +
          (now.getMonth() + 1) +
          "-" +
          now.getDate() +
          " " +
          now.getHours() +
          ":" +
          now.getMinutes() +
          ":" +
          now.getSeconds();
        elem.data = date;
        elem.click = false;
      } else {
        elem.data = null;
        elem.click = true;
      }
      draw();
    }
  },
  false
);

const comebackWithLastElem = () => {
  if (bin !== null && bin !== undefined) {
    list.push(bin);
    bin = null;
    draw();
  }
};
