<template>
  <div id="myhome"></div>
</template>

<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 4s 1.4s infinite;
  position: absolute;
  left: 50%;
  bottom: 10%;
  margin-left: -10px;
  cursor: pointer;
}
@keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-30px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted () {
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementById("myhome").append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })
    this.bubble()
  },
  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    },
    bubble () {
      var canvas = document.createElement('canvas');
      canvas.id = "canvas";
      canvas.width = 2800;
      canvas.height = 700;
      canvas.style.zIndex = -1;
      canvas.style.position = "absolute";
      canvas.style.top = "40%";
      canvas.style.left = "0";
      document.getElementById("myhome").appendChild(canvas)
      // document.body.appendChild(canvas);

      if (canvas.getContext) {
          var ctx = canvas.getContext("2d")

          var arr = []

          setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height)
              for (var i = 0; i < arr.length; i++) {
                  if (arr[i].y <= 50) {
                      arr.splice(i, 1)
                  }
                  arr[i].deg += 5
                  arr[i].x = arr[i].startX + Math.sin(arr[i].deg * Math.PI / 180) * arr[i].step * 2;
                  arr[i].y = arr[i].startY - (arr[i].deg * Math.PI / 180) * arr[i].step;

              }
              for (var i = 0; i < arr.length; i++) {
                  /*  console.log(i)*/
                  ctx.save()
                  ctx.fillStyle = "rgba(" + arr[i].red + "," + arr[i].green + "," + arr[i].blue + "," + arr[i].alp + ")"
                  ctx.beginPath()
                  ctx.arc(arr[i].x, arr[i].y, arr[i].r, 0, 2 * Math.PI)
                  ctx.fill()
                  ctx.restore()
              }
          }, 1000 / 60)
          setInterval(() => {
              var r = Math.random() * 6 + 2
              var x = Math.random() * canvas.width
              var y = canvas.height - r
              var red = Math.round(Math.random() * 255)
              var green = Math.round(Math.random() * 255)
              var blue = Math.round(Math.random() * 255)
              var alp = 1

              var deg = 0
              var startX = x
              var startY = y
              var step = Math.random() * 20 + 10

              arr.push({
                  x: x,
                  y: y,
                  r: r,
                  red: red,
                  green: green,
                  blue: blue,
                  alp: alp,
                  deg: deg,
                  startX: startX,
                  startY: startY,
                  step: step
              })
          }, 50)
      }
    }
  }
}
</script>
