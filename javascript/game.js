function Bear() {
  this.dBear = this.setSpeed().bearSpeed;
  this.htmlElement = document.getElementById("bear");
  this.id = this.htmlElement.id;
  this.x = this.htmlElement.offsetLeft;
  this.y = this.htmlElement.offsetTop;

  this.move = function (xDir, yDir) {
    this.fitBounds(); //we add this instruction to keep bear within board
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
  };

  this.display = function () {
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "absolute";
  };
}

function start() {
  bear = new Bear();
  document.addEventListener("keydown", moveBear, false);
  document
    .getElementById("speedBear")
    .addEventListener("change", setSpeed(), false);
}

function moveBear(e) {
  const KEYUP = 38;
  const KEYDOWN = 40;
  const KEYLEFT = 37;
  const KEYRIGHT = 39;

  if (e.keyCode == KEYRIGHT) {
    bear.move(1, 0);
  } // right key
  if (e.keyCode == KEYLEFT) {
    bear.move(-1, 0);
  } // left key
  if (e.keyCode == KEYUP) {
    bear.move(0, -1);
  } // up key
  if (e.keyCode == KEYDOWN) {
    bear.move(0, 1);
  } // down key
}

this.fitBounds = function () {
  let parent = this.htmlElement.parentElement;
  let iw = this.htmlElement.offsetWidth;
  let ih = this.htmlElement.offsetHeight;
  let l = parent.offsetLeft;
  let t = parent.offsetTop;
  let w = parent.offsetWidth;
  let h = parent.offsetHeight;
  if (this.x < 0) this.x = 0;
  if (this.x > w - iw) this.x = w - iw;
  if (this.y < 0) this.y = 0;
  if (this.y > h - ih) this.y = h - ih;
};

function setSpeed() {
  let bearSpeed = document.getElementById("speedBear").value;
}

class Bee {
  constructor(beeNumber) {
    this.htmlElement = createBeeImg(beeNumber);
    this.id = this.htmlElement.id;
    this.x = this.htmlElement.offsetLeft;
    this.y = this.htmlElement.offsetTop;

    this.move = function (dx, dy) {
      this.x += dx;
      this.y += dy;
      this.display();
    };

    this.display = function () {
      //adjust position of bee and display it
      this.fitBounds(); //add this to adjust to bounds
      this.htmlElement.style.left = this.x + "px";
      this.htmlElement.style.top = this.y + "px";
      this.htmlElement.style.display = "block";
    };

    this.fitBounds = function () {
      //check and make sure the bees stays in the board space
      let parent = this.htmlElement.parentElement;
      let iw = this.htmlElement.offsetWidth;
      let ih = this.htmlElement.offsetHeight;
      let l = parent.offsetLeft;
      let t = parent.offsetTop;
      let w = parent.offsetWidth;
      let h = parent.offsetHeight;
      if (this.x < 0) this.x = 0;
      if (this.x > w - iw) this.x = w - iw;
      if (this.y < 0) this.y = 0;
      if (this.y > h - ih) this.y = h - ih;
    };
  }
}
