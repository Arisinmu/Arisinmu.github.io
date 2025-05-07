
const dom_ls = {};
dom_ls.main = document.getElementById("main");


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

let dbName = 'eitango';
let storeName  = 'db1';
var openReq = indexedDB.open(dbName, 1);
let missdata = {
	eitango1 : []
};

const samplecsv = {
	name:"eitango1",
	main:[["apple","りんご"],["banana","バナナ"],["cat","猫"],["dog","犬"],["egg","卵"],["fish","魚"],["hotel","ホテル"],["ice","アイス"],["japan","日本"],["king","王"]]
};
/*
[name,[[表,裏],[]...]]

*/
	
import { csvData } from "./js/operateCssdata.js";
let highschool1Word = {
	name:"高校1年",
	main:[]
};
const requireCsv = new csvData;
function letstart(list){
	highschool1Word.main = list;
	app1.option.wordList = highschool1Word.main;
	app1.option.beginNumber = prompt("最初の番号");
  app1.option.endNumber = prompt("最後の番号");
	app1.option.randomOrNot = confirm("ランダムですか？");
	app1.start();
}
requireCsv.csv_data("./csv/highschool1.csv",letstart);

import { toMemorizeWord } from "./js/toMemorizeWord.js";
const app1 = new toMemorizeWord(dom_ls.main);
app1.option.wordList = highschool1Word.main;
app1.option.wordListName = highschool1Word.name;


/*
wordList : null,
	  wordListName :null,
	  beginNumber : null,
	  endNumber : null,
	  randomOrNot : 0




*/





