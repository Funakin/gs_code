
////////////////////////////////////////////
// グローバル変数定義
////////////////////////////////////////////
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
let move = 0; // 1=jump, 2=hado, 3=shoryu
let judge = 0; // 1: win 2: lose 3:draw;
let hado_audio = document.getElementById("hado_audio_p");
let shoryu_audio = document.getElementById("shoryu_audio_p");
let gong_audio = document.getElementById("gong");
let jump_audio = document.getElementById("jump");
let damage_audio = document.getElementById("damage");
let meter_val = 0;
let p_win =0;
let e_win =0;
let round =0;

////////////////////////////////////////////
// ボタン判定
////////////////////////////////////////////

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

let judge_f = function(){
    judge = Math.ceil( Math.random()*3);
    console.log(judge);
    if ( judge == 1 ){
        if (move==1){
            document.getElementById('jump_p_head').beginElement();
            document.getElementById('jump_p_body').beginElement();
            document.getElementById('jump_p_rarm').beginElement();
            document.getElementById('jump_p_larm').beginElement();
            document.getElementById('jump_p_rleg').beginElement();
            document.getElementById('jump_p_lleg').beginElement();
            document.getElementById('hado_e_head').beginElement();
            document.getElementById('hado_e_body').beginElement();
            document.getElementById('hado_e_rarm').beginElement();
            document.getElementById('hado_e_larm').beginElement();
            document.getElementById('hado_e_rleg').beginElement();
            document.getElementById('hado_e_lleg').beginElement();

            document.getElementById('ehado_ani1').beginElement();
            document.getElementById('ehado_ani2').beginElement();
            document.getElementById('ehado_ani3').beginElement();
            document.getElementById('ehado_ani4').beginElement();
            document.getElementById('ehado_ani5').beginElement();
            document.getElementById('ehado_ani6').beginElement();
            document.getElementById('ehado1_opa').beginElement();
            document.getElementById('ehado2_opa').beginElement();
            document.getElementById('ehado3_opa').beginElement();
            document.getElementById('ehado4_opa').beginElement();
            document.getElementById('ehado5_opa').beginElement();
            document.getElementById('ehado6_opa').beginElement();

            document.getElementById('ehado_ani7').beginElement();
            document.getElementById('ehado_ani8').beginElement();
            document.getElementById('ehado_ani9').beginElement();
            document.getElementById('e_hado_line_opa1').beginElement();
            document.getElementById('e_hado_line_opa2').beginElement();
            document.getElementById('e_hado_line_opa3').beginElement();

            document.getElementById('p_hado_damage').beginElementAt(1.0);

            jump_audio.play();
            setTimeout("damage_audio.play()",1000);

        } else if (move==2){
            document.getElementById('hado_p_head').beginElement();
            document.getElementById('hado_p_body').beginElement();
            document.getElementById('hado_p_rarm').beginElement();
            document.getElementById('hado_p_larm').beginElement();
            document.getElementById('hado_p_rleg').beginElement();
            document.getElementById('hado_p_lleg').beginElement();

            document.getElementById('shoryu_e_head').beginElementAt(1);
            document.getElementById('shoryu_e_body').beginElementAt(1);
            document.getElementById('shoryu_e_rarm').beginElementAt(1);
            document.getElementById('shoryu_e_larm').beginElementAt(1);
            document.getElementById('shoryu_e_rleg').beginElementAt(1);
            document.getElementById('shoryu_e_lleg').beginElementAt(1);

            document.getElementById('hado_ani1').beginElement();
            document.getElementById('hado_ani2').beginElement();
            document.getElementById('hado_ani3').beginElement();
            document.getElementById('hado_ani4').beginElement();
            document.getElementById('hado_ani5').beginElement();
            document.getElementById('hado_ani6').beginElement();
            document.getElementById('hado1_opa').beginElement();
            document.getElementById('hado2_opa').beginElement();
            document.getElementById('hado3_opa').beginElement();
            document.getElementById('hado4_opa').beginElement();
            document.getElementById('hado5_opa').beginElement();
            document.getElementById('hado6_opa').beginElement();

            document.getElementById('hado_ani7').beginElement();
            document.getElementById('hado_ani8').beginElement();
            document.getElementById('hado_ani9').beginElement();
            document.getElementById('p_hado_line_opa1').beginElement();
            document.getElementById('p_hado_line_opa2').beginElement();
            document.getElementById('p_hado_line_opa3').beginElement();

            document.getElementById('p_hado_damage').beginElementAt(2.0);

            hado_audio.play();
            setTimeout("damage_audio.play()",2000);

        } else if (move==3){
            document.getElementById('shoryu_p_head').beginElementAt(0.5);
            document.getElementById('shoryu_p_body').beginElementAt(0.5);
            document.getElementById('shoryu_p_rarm').beginElementAt(0.5);
            document.getElementById('shoryu_p_larm').beginElementAt(0.5);
            document.getElementById('shoryu_p_rleg').beginElementAt(0.5);
            document.getElementById('shoryu_p_lleg').beginElementAt(0.5);
            document.getElementById('jump_e_head').beginElement();
            document.getElementById('jump_e_body').beginElement();
            document.getElementById('jump_e_rarm').beginElement();
            document.getElementById('jump_e_larm').beginElement();
            document.getElementById('jump_e_rleg').beginElement();
            document.getElementById('jump_e_lleg').beginElement();

            document.getElementById('p_shoryu_damage').beginElementAt(1.0);

            shoryu_audio.play();
            setTimeout("damage_audio.play()",1000);
        }

        p_win++;
        winlose();

    } else if(judge==2) {
        if (move==1){
            document.getElementById('jump_p_head').beginElement();
            document.getElementById('jump_p_body').beginElement();
            document.getElementById('jump_p_rarm').beginElement();
            document.getElementById('jump_p_larm').beginElement();
            document.getElementById('jump_p_rleg').beginElement();
            document.getElementById('jump_p_lleg').beginElement();
            document.getElementById('shoryu_e_head').beginElementAt(0.5);
            document.getElementById('shoryu_e_body').beginElementAt(0.5);
            document.getElementById('shoryu_e_rarm').beginElementAt(0.5);
            document.getElementById('shoryu_e_larm').beginElementAt(0.5);
            document.getElementById('shoryu_e_rleg').beginElementAt(0.5);
            document.getElementById('shoryu_e_lleg').beginElementAt(0.5);

            document.getElementById('p_hado_damage').beginElementAt(1.0);

            setTimeout("damage_audio.play()",1000);

        } else if (move==2){
            document.getElementById('hado_p_head').beginElement();
            document.getElementById('hado_p_body').beginElement();
            document.getElementById('hado_p_rarm').beginElement();
            document.getElementById('hado_p_larm').beginElement();
            document.getElementById('hado_p_rleg').beginElement();
            document.getElementById('hado_p_lleg').beginElement();
            document.getElementById('jump_e_head').beginElement();
            document.getElementById('jump_e_body').beginElement();
            document.getElementById('jump_e_rarm').beginElement();
            document.getElementById('jump_e_larm').beginElement();
            document.getElementById('jump_e_rleg').beginElement();
            document.getElementById('jump_e_lleg').beginElement();

            document.getElementById('p_shoryu_damage').beginElementAt(1.0);

            hado_audio.play();
            setTimeout("damage_audio.play()",2000);

        } else if (move==3){
            document.getElementById('shoryu_p_head').beginElementAt(0.5);
            document.getElementById('shoryu_p_body').beginElementAt(0.5);
            document.getElementById('shoryu_p_rarm').beginElementAt(0.5);
            document.getElementById('shoryu_p_larm').beginElementAt(0.5);
            document.getElementById('shoryu_p_rleg').beginElementAt(0.5);
            document.getElementById('shoryu_p_lleg').beginElementAt(0.5);
            document.getElementById('hado_e_head').beginElement();
            document.getElementById('hado_e_body').beginElement();
            document.getElementById('hado_e_rarm').beginElement();
            document.getElementById('hado_e_larm').beginElement();
            document.getElementById('hado_e_rleg').beginElement();
            document.getElementById('hado_e_lleg').beginElement();

            document.getElementById('ehado_ani1').beginElement();
            document.getElementById('ehado_ani2').beginElement();
            document.getElementById('ehado_ani3').beginElement();
            document.getElementById('ehado_ani4').beginElement();
            document.getElementById('ehado_ani5').beginElement();
            document.getElementById('ehado_ani6').beginElement();
            document.getElementById('ehado1_opa').beginElement();
            document.getElementById('ehado2_opa').beginElement();
            document.getElementById('ehado3_opa').beginElement();
            document.getElementById('ehado4_opa').beginElement();
            document.getElementById('ehado5_opa').beginElement();
            document.getElementById('ehado6_opa').beginElement();

            document.getElementById('ehado_ani7').beginElement();
            document.getElementById('ehado_ani8').beginElement();
            document.getElementById('ehado_ani9').beginElement();
            document.getElementById('e_hado_line_opa1').beginElement();
            document.getElementById('e_hado_line_opa2').beginElement();
            document.getElementById('e_hado_line_opa3').beginElement();

            document.getElementById('p_shoryu_damage').beginElementAt(1.5);

            shoryu_audio.play();
            setTimeout("damage_audio.play()",1500);

        }

        e_win++;
        winlose();

        // meter_val = "0";
        // let meter_f = function(){
        //     $("#p_meter").val(meter_val);
        // }
        // meter_val = "100";
        // setTimeout(meter_f, 5000);

    } else if(judge==3) {
        if (move==1){
            document.getElementById('jump_p_head').beginElement();
            document.getElementById('jump_p_body').beginElement();
            document.getElementById('jump_p_rarm').beginElement();
            document.getElementById('jump_p_larm').beginElement();
            document.getElementById('jump_p_rleg').beginElement();
            document.getElementById('jump_p_lleg').beginElement();
            document.getElementById('jump_e_head').beginElement();
            document.getElementById('jump_e_body').beginElement();
            document.getElementById('jump_e_rarm').beginElement();
            document.getElementById('jump_e_larm').beginElement();
            document.getElementById('jump_e_rleg').beginElement();
            document.getElementById('jump_e_lleg').beginElement();

            jump_audio.play();

        } else if (move==2){
            document.getElementById('hado_p_head').beginElement();
            document.getElementById('hado_p_body').beginElement();
            document.getElementById('hado_p_rarm').beginElement();
            document.getElementById('hado_p_larm').beginElement();
            document.getElementById('hado_p_rleg').beginElement();
            document.getElementById('hado_p_lleg').beginElement();
            document.getElementById('hado_p_head').beginElement();
            document.getElementById('hado_e_head').beginElement();
            document.getElementById('hado_e_body').beginElement();
            document.getElementById('hado_e_rarm').beginElement();
            document.getElementById('hado_e_larm').beginElement();
            document.getElementById('hado_e_rleg').beginElement();
            document.getElementById('hado_e_lleg').beginElement();

            document.getElementById('hado_ani1').beginElement();
            document.getElementById('hado_ani2').beginElement();
            document.getElementById('hado_ani3').beginElement();
            document.getElementById('hado_ani4').beginElement();
            document.getElementById('hado_ani5').beginElement();
            document.getElementById('hado_ani6').beginElement();
            document.getElementById('hado1_opa').beginElement();
            document.getElementById('hado2_opa').beginElement();
            document.getElementById('hado3_opa').beginElement();
            document.getElementById('hado4_opa').beginElement();
            document.getElementById('hado5_opa').beginElement();
            document.getElementById('hado6_opa').beginElement();

            document.getElementById('hado_ani7').beginElement();
            document.getElementById('hado_ani8').beginElement();
            document.getElementById('hado_ani9').beginElement();
            document.getElementById('p_hado_line_opa1').beginElement();
            document.getElementById('p_hado_line_opa2').beginElement();
            document.getElementById('p_hado_line_opa3').beginElement();

            document.getElementById('ehado_ani1').beginElement();
            document.getElementById('ehado_ani2').beginElement();
            document.getElementById('ehado_ani3').beginElement();
            document.getElementById('ehado_ani4').beginElement();
            document.getElementById('ehado_ani5').beginElement();
            document.getElementById('ehado_ani6').beginElement();
            document.getElementById('ehado1_opa').beginElement();
            document.getElementById('ehado2_opa').beginElement();
            document.getElementById('ehado3_opa').beginElement();
            document.getElementById('ehado4_opa').beginElement();
            document.getElementById('ehado5_opa').beginElement();
            document.getElementById('ehado6_opa').beginElement();

            document.getElementById('ehado_ani7').beginElement();
            document.getElementById('ehado_ani8').beginElement();
            document.getElementById('ehado_ani9').beginElement();
            document.getElementById('e_hado_line_opa1').beginElement();
            document.getElementById('e_hado_line_opa2').beginElement();
            document.getElementById('e_hado_line_opa3').beginElement();

            hado_audio.play();
            setTimeout(hado_audio.play(),300);

        } else if (move==3){
            document.getElementById('shoryu_p_head').beginElementAt(0.5);
            document.getElementById('shoryu_p_body').beginElementAt(0.5);
            document.getElementById('shoryu_p_rarm').beginElementAt(0.5);
            document.getElementById('shoryu_p_larm').beginElementAt(0.5);
            document.getElementById('shoryu_p_rleg').beginElementAt(0.5);
            document.getElementById('shoryu_p_lleg').beginElementAt(0.5);
            document.getElementById('shoryu_e_head').beginElementAt(0.5);
            document.getElementById('shoryu_e_body').beginElementAt(0.5);
            document.getElementById('shoryu_e_rarm').beginElementAt(0.5);
            document.getElementById('shoryu_e_larm').beginElementAt(0.5);
            document.getElementById('shoryu_e_rleg').beginElementAt(0.5);
            document.getElementById('shoryu_e_lleg').beginElementAt(0.5);

            shoryu_audio.play();

        }

        document.getElementById('draw').beginElementAt(1.5);

    }
}

////////////////////////////////////////////
// ライフ処理
////////////////////////////////////////////



////////////////////////////////////////////
// 勝利・敗北処理１
////////////////////////////////////////////
function winlose(){
    if(p_win==1){
        // $("#icon_p2").css("opacity","1");
        setTimeout (function(){
            $("#icon_p2").css("opacity","1")},2500);
            console.log(p_win, e_win);

    } else if(p_win==2){
        document.getElementById('win').beginElementAt(1.5);
        // setTimeout($("#icon_p2").css("opacity","1"),3000);
        setTimeout(function(){
            $("#icon_p1").css("opacity","1")},2500);
        console.log(p_win, e_win);

    } else if(e_win==1){
        setTimeout(function(){
            $("#icon_e1").css("opacity","1")},2500);
            console.log(p_win, e_win);


    } else if(e_win==2){
        document.getElementById('lose').beginElementAt(1.5);
        // $("#icon_e1").css("opacity","1");
        setTimeout(function(){
         $("#icon_e2").css("opacity","1")},2500);
        console.log(p_win, e_win);

    }
}





