
export class csvData {
	constructor(){

	}
	csv_data(dataPath,func) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		
      func(csv_array(response));
		

		
  });
	  request.open('GET', dataPath, true); // csvのパスを指定
  	request.send();
  }

}


function csv_array(data) {
	const dataArray = []; //配列を用意
	const dataString = data.split('\n'); //改行で分割
	for (let i = 0; i < dataString.length; i++) { //あるだけループ
		dataArray[i] = dataString[i].split(',');
	}
	return dataArray;
}
