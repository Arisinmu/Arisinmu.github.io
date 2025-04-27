function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		csv_array(response); //csv_arrayの関数を実行
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}

function csv_array(data) {
	const dataArray = []; //配列を用意
	const dataString = data.split('\n'); //改行で分割
	for (let i = 0; i < dataString.length; i++) { //あるだけループ
		dataArray[i] = dataString[i].split(',');
	}
	return dataArray;

}

let dom_ls = {};
dom_ls.main = document.getElementById("main");
dom_ls.card = document.createElement("div");
dom_ls.card_child = document.createElement("div");
dom_ls.card.setAttribute("class","card");
dom_ls.card_child.setAttribute("class","card_child");
dom_ls.card.appendChild(dom_ls.card_child);
dom_ls.card_child.innerText = "あいうえお";
dom_ls.main.appendChild(dom_ls.card);


dom_ls.card.addEventListener("touchstart",touchstart);
var x;
var y;
function touchstart(event){
	this.classList.add("drag");
	var drag = document.getElementsByClassName("drag")[0];
	x = event.changedTouches[0].pageX;
  y = event.changedTouches[0].pageY;
  drag.addEventListener("touchmove",touch);
}
function touch(event){
	var drag = document.getElementsByClassName("drag")[0];
	drag.style.left = event.changedTouches[0].pageX - x + "px";
	drag.addEventListener("touchend", mup, false);

}
function mup(e){
	var drag = document.getElementsByClassName("drag")[0];
	drag.removeEventListener("touchmove", touch, false);
	drag.style.left = 0;
}

let stage_ls = {
	home: [[],[]],
	tango: [["card","card_child"],[]]


}
function stage(xx){
	for(let e in dom_ls) {
		dom_ls[e].classList.add("kesu");
  }
	dom_ls.main.classList.remove("kesu");
	for(let i = 0;i<stage_ls[xx][0].length;i++){
		dom_ls[stage_ls[xx][0][i]].classList.remove("kesu");
	}
}