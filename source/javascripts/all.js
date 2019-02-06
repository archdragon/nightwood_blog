//= require_tree .
var eye0 = document.querySelector(".eye1");
var eye1 = document.querySelector(".eye2");

document.addEventListener("mousemove", function(e) {
  var box0 = eye0.getBoundingClientRect();
  var box1 = eye1.getBoundingClientRect();

  var x0 = box0.left + box0.width/2 - e.clientX;
  var y0 = box0.top + box0.width/2 - e.clientY;

  var x1 = box1.left + box1.width/2 - e.clientX;
  var y1 = box1.top + box1.width/2 - e.clientY;

  var angle0 = Math.atan2(0 - x0, y0) * (180/Math.PI);
  var angle1 = Math.atan2(0 - x1, y1) * (180/Math.PI);

  eye0.style.transform = "rotate(" + angle0 + "deg)";
  eye1.style.transform = "rotate(" + angle1 + "deg)";
});

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

let shuffleItemsContainers = document.querySelectorAll(".shuffle-items");
[].forEach.call(shuffleItemsContainers, function(container) {
  let items = container.querySelectorAll(".shuffle-item");
  let itemsArray = [];
  [].forEach.call(items, function (item) {
    itemsArray.push(item);
  })

  items = shuffleArray(itemsArray)
  container.innerHTML = "";

  items.forEach(function (item) {
    container.appendChild(item);
  })
});
