"use strict";

let couterErrorMessages = 1;
let couterOfIds = 5;

class Element {
  constructor(id, text, data, click) {
    this.id = id;
    this.text = text;
    this.data = data;
    this.click = click;
  }
}

let list = [
            new Element(1,'one',null,true),
            new Element(2,'two',null,true),
            new Element(3,'thrEe',null,true),
            new Element(4,'four',null,true)
          ];
let bin;

// po zaladowaniu dokumentu narysuj przykladowa liste
$(document).ready(function() {
  draw();
});

// funkcja dodajaca nowy element
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

// funkcja rysujaca liste
const draw = (shouldChangeList = false, newList = []) => {
  const listInHtml = document.getElementById("list");
  while (listInHtml.firstChild) {
    listInHtml.removeChild(listInHtml.firstChild);
  }

  let copyOfList = list;

  if(shouldChangeList){
    copyOfList = newList;
  }

  for (let i = 0; i < copyOfList.length; ++i) {
    let newElem = document.createElement("li");
    newElem.innerHTML = copyOfList[i].text;
    newElem.id = copyOfList[i].id;
    newElem.className = copyOfList[i].click
      ? "list-group-item list-group-item-primary"
      : "list-group-item list-group-item-secondary";
    newElem.style = copyOfList[i].click
      ? "display: inline-block"
      : "text-decoration: line-through";

    if (!copyOfList[i].click) {
      newElem.innerHTML += copyOfList[i].data;
    }
    listInHtml.appendChild(newElem);

    // div do prawej
    // let div = document.createElement("p");
    // div.className = "float-right";
    // newElem.appendChild(div);

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "btn btn-warning";
    button.id = copyOfList[i].id;
    button.addEventListener("click", function (event) {
      var del = confirm("Are you sure to delete this todo?");
      if (del) {
        // id zostaje automatycznie przeksztalcony na Number przy ==
        bin = copyOfList.find((el) => el.id == event.target.id);
        const index = copyOfList.indexOf(bin);
        if (index > -1) {
          copyOfList.splice(index, 1);
        }
        $("#" + event.target.id).remove();
      }
    });
    newElem.appendChild(button);
  }
};

// event na dodanie nowego przedmiotu
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

// przywrocenie ostatniej usunietej rzeczy
const comebackWithLastElem = () => {
  if (bin !== null && bin !== undefined) {
    list.push(bin);
    bin = null;
    draw();
  }
};

// event przy wpisaniu litery do wyszukiwania
const search = document.getElementById("search");
search.addEventListener("keyup", function () {
  searching();
});
// event na zmiane checkboxa
const searchInChangeCheckbox = document.getElementById("search-with-case-sensitive");
searchInChangeCheckbox.addEventListener("change", function () {
  searching();
});

const searching = () => {
  let filter = search.value;
  if(search.value !== ""){
    let copyOfList = [];
    if(!document.getElementById("search-with-case-sensitive").checked){
      filter = filter.toLowerCase();
      for(let i = 0; i < list.length; ++i){
        if(list[i].text.toLowerCase().indexOf(filter) > -1){
          copyOfList.push(list[i]);
        }
      }
    }else{
      for(let i = 0; i < list.length; ++i){
        if(list[i].text.indexOf(filter) > -1){
          copyOfList.push(list[i]);
        }
      }
    }
    draw(true, copyOfList);
  }else{
    draw();
  }
}

