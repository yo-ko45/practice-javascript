let sliderR = null;
let slideValueR = null;
let sliderG = null;
let slideValueG = null;
let sliderB = null;
let slideValueB = null;

/**********************
 * スライダー情報ログ出力関数
 **********************/
function SliderOutput(valueR,valueG,valueB){
    //alert(valueR);//デバッグ用
    //document.bgColor = "rgb(valueR, valueG, valueB)";
    var R = valueR;
    document.body.style.backgroundColor = "rgb("+valueR+","+valueG+","+valueB+")";
}

/**********************
 * スライダー値を取得して表示
 **********************/
const setValue = ()=> {
    const valueR = sliderR.value;
    slideValueR.textContent = valueR;

    const valueG = sliderG.value;
    slideValueG.textContent = valueG;

    const valueB = sliderB.value;
    slideValueB.textContent = valueB;
}

/**********************
 * 起動時の処理
 **********************/
window.addEventListener("load", ()=>{
    //スライダー、スライダー値DOM
    sliderR = document.getElementById("volumeSlider_R");
    slideValueR = document.getElementById("sliderValueR");

    sliderG = document.getElementById("volumeSlider_G");
    slideValueG = document.getElementById("sliderValueG");

    sliderB = document.getElementById("volumeSlider_B");
    slideValueB = document.getElementById("sliderValueB");

    //スライドさせた時の処理
    sliderR.addEventListener("input", setValue);
    sliderG.addEventListener("input", setValue);
    sliderB.addEventListener("input", setValue);

    //スライダー初期値を表示
    setValue();
});