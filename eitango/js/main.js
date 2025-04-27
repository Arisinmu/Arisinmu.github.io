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
dom_ls.card.setAttribute("class","card");
dom_ls.card.innerText = "あいうえお";
dom_ls.main.appendChild(dom_ls.card);