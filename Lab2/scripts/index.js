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
  new Element(1, "one", null, true),
  new Element(2, "two", null, true),
  new Element(3, "thrEe", null, true),
  new Element(4, "four", null, true),
];
let bin;

// zapisanie eventu do id (ktore todo) aby po nacisnieciu w modalu obslozyc to
let eventToModal;

// po zaladowaniu dokumentu narysuj przykladowa liste
$(document).ready(function () {
  draw();
});

// wylacz modal jesli kliknie sie poza modalem
var modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// na close zamknij modala
document.getElementById("Close").addEventListener("click", () => {
  modal.style.display = "none";
});

document.getElementById("Confirm").addEventListener("click", () => {
  // id zostaje automatycznie przeksztalcony na Number przy ==
  bin = list.find((el) => el.id == eventToModal.target.id);
  const index = list.indexOf(bin);
  if (index > -1) {
    list.splice(index, 1);
  }
  $("#" + eventToModal.target.id).remove();
  modal.style.display = "none";
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
    newElem.className = "list-group-item list-group-item-primary d-flex justify-content-between mb-2";
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

  if (shouldChangeList) {
    copyOfList = newList;
  }

  for (let i = 0; i < copyOfList.length; ++i) {
    let newElem = document.createElement("li");
    newElem.innerHTML = copyOfList[i].text;
    newElem.id = copyOfList[i].id;
    newElem.className = copyOfList[i].click
      ? "list-group-item list-group-item-primary d-flex justify-content-between mb-2"
      : "list-group-item list-group-item-secondary d-flex justify-content-between mb-2";
    newElem.style = copyOfList[i].click
      ? "display: inline-block"
      : "text-decoration: line-through";

    if (!copyOfList[i].click) {
      let dateDiv = document.createElement("div");
      dateDiv.innerHTML += copyOfList[i].data;
      dateDiv.style = "display: inline-block";
      newElem.appendChild(dateDiv);
    }
    listInHtml.appendChild(newElem);

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.className = "btn btn-warning";
    button.id = copyOfList[i].id;
    button.addEventListener("click", function (event) {
      modal.style.display = "block";
      eventToModal = event;
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
        event.target.className === "list-group-item list-group-item-primary d-flex justify-content-between mb-2"
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
const searchInChangeCheckbox = document.getElementById(
  "search-with-case-sensitive"
);
searchInChangeCheckbox.addEventListener("change", function () {
  searching();
});

const searching = () => {
  let filter = search.value;
  if (search.value !== "") {
    let copyOfList = [];
    if (!document.getElementById("search-with-case-sensitive").checked) {
      filter = filter.toLowerCase();
      for (let i = 0; i < list.length; ++i) {
        if (list[i].text.toLowerCase().indexOf(filter) > -1) {
          copyOfList.push(list[i]);
        }
      }
    } else {
      for (let i = 0; i < list.length; ++i) {
        if (list[i].text.indexOf(filter) > -1) {
          copyOfList.push(list[i]);
        }
      }
    }
    draw(true, copyOfList);
  } else {
    draw();
  }
};
