let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

////////////////////////////////////////////
// ボタン判定
////////////////////////////////////////////
let move = 0; // 1=jump, 2=hado, 3=shoryu

$("#jump_btn").on("click", function(){
    move = 1;
    console.log(move);
    judge_f();
});
$("#hado_btn").on("click", function(){
    move = 2;
    console.log(move);
    judge_f();
});
$("#shoryu_btn").on("click", function(){
    move = 3;
    console.log(move);
    judge_f();
});

////////////////////////////////////////////
// 勝利判定
////////////////////////////////////////////
let judge=0;

let judge_f = function(){
    judge = Math.ceil( Math.random()*3); // 1: win 2: lose 3:draw;
    console.log(judge);
}

if(judge==1){

} else if(judge==2) {

} else if(judge==3){

}


////////////////////////////////////////////
// 描画 - ジャンプ
////////////////////////////////////////////
let dx = 2;
let dy = -1.5;

let head_x = 50;
let head_y = 90;
let body_x = 40;
let body_y = 100;
let larm_x = 60;
let larm_y = 105;
let rarm_x = 20;
let rarm_y = 105;
let rleg_x = 55;
let rleg_y = 120;
let lleg_x = 40;
let lleg_y = 120;

var head_r = 10; //頭の中心取得のためここで半径設定


function jumpWin() {

// clear
ctx.clearRect(0, 0, canvas.width, canvas.height);

if(head_y - 10 + dy < 0) {
    dy = -dy;
}

//頭
ctx.beginPath();
ctx.arc(head_x, head_y, head_r, 0, Math.PI*2, false);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

head_x += dx;
head_y += dy;

//体
ctx.beginPath();
ctx.rect(body_x, body_y, 20, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

body_x += dx;
body_y += dy;

//左腕

ctx.beginPath();
ctx.rect(larm_x, larm_y, 20, 5);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

larm_x += dx;
larm_y += dy;

//右腕

ctx.beginPath();
ctx.rect(rarm_x, rarm_y, 20, 5);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

rarm_x += dx;
rarm_y += dy;

//右脚

ctx.beginPath();
ctx.rect(rleg_x, rleg_y, 5, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

rleg_x += dx;
rleg_y += dy;

//左脚

ctx.beginPath();
ctx.rect(lleg_x, lleg_y, 5, 20);
ctx.fillStyle = "#ff0000";
ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.closePath();

lleg_x += dx;
lleg_y += dy;

}

setInterval(jumpWin, 20);

