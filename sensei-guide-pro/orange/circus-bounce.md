# Circus Bounce

> `scene`, Initialize When Scene Starts

```js
$this.startSpeed = -100;
$this.gravity = 5;
$this.launchNinja = function() {
    let startX = 100;
    ninja.x(startX);
    let startY = 400;
    ninja.y(startY);
    ninja.speedY($this.startSpeed);
};

if ($this.scene.state() === "PLAY") {
    $this.launchNinja();
}
```

> `scene`, Update Every Frame

```js
const spinSpeed = 50;
ninja.spin(spinSpeed);
```

> `ninja`, Update Every Frame

```js
$this.moveX($this.speedX());
$this.speedY(ninja.speedY() + $this.scene.gravity);
$this.moveY($this.speedY());

if ($this.x() >= 850) {
    ninja.x(-10);
}

if ($this.y() >= 650) {
    $this.scene.stopCode();
}
```

> `trampoline`, Update Every Frame

```js
$this.x(getPointerPos().x);
if ($this.isTouching(ninja)) {
    ninja.speedY($this.scene.startSpeed);
}
```
