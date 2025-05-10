const dom_ls = {};
dom_ls.main = document.getElementById("main");

import { toMemorizeWord } from "./js/toMemorizeWord.js";

import { csvData } from "./js/operateCssdata.js";
import { MenuDom } from "./js/menuDom.js";

import { createElement } from "./js/createElement.js";


const list_wordList = [
	"highschool1.csv",
	"highschool2.csv",
	"highschool3.csv"
];

dom_ls.header = new createElement(dom_ls.main,"header");
dom_ls.content = new createElement(dom_ls.main,"content");
dom_ls.footer = new createElement(dom_ls.main,"footer");
const app_list = {
	app1 : new toMemorizeWord(dom_ls.content.main)
}
for(let i = 0;i < 3;i++){
	dom_ls.header.createChild(i);
	dom_ls.footer.createChild(i);
}

dom_ls.app1Option = new createElement(dom_ls.content.main,"app1Option");


dom_ls.app1Option.createChild("begininput",{
	tagName : "input",
	attribute: {
		type:"number",
		inputmode: "numeric"
	}
});
dom_ls.app1Option.createChild("endinput",{
	tagName : "input",
	attribute: {
		type:"number",
		inputmode: "numeric"
	}
});
dom_ls.app1Option.createChild("Listinput",{
	tagName : "input",
	attribute: {
		list:"worddata"
	}
});
dom_ls.app1Option.createChild("randinput",{
	tagName : "input",
	attribute: {
		type:"checkbox"
	}
});
dom_ls.worddata = new createElement(dom_ls.content.main,"worddata","datalist");
dom_ls.worddata.main.setAttribute("id","worddata");
for(let i of list_wordList){
	dom_ls.worddata.createChild("",{
		mainrequire: false,
		tagName: "option",
		attribute: {
			value: i
		}
	});
}
dom_ls.app1Option.createChild("startbutton",{
	tagName : "input",
	attribute: {
		type:"button"
	},
	func : () => {
		requireCsv.csv_data("./csv/"+dom_ls.app1Option.dom_ls.Listinput.value,letstart);
	}
});





let highschool1Word = {
	name:"高校1年",
	main:[]
};
function showMiss(missList){
	let table = document.createElement("table");
	dom_ls.content.main.appendChild(table);
	for(let i in missList){
		let tr = document.createElement("tr");
		let thleft = document.createElement("th");
		let thcenter = document.createElement("th");
		let thright = document.createElement("th");
	  table.appendChild(tr);
	  tr.appendChild(thleft);
		tr.appendChild(thcenter);
	  tr.appendChild(thright);
		thleft.innerText = app_list.app1.option.wordList[i][0];
		thcenter.innerText = app_list.app1.option.wordList[i][1];
		thright.innerText = missList[i];
	}



}
const requireCsv = new csvData;
function letstart(list){
	highschool1Word.main = list;
	let optionData = dom_ls.app1Option.dom_ls;
	app_list.app1.option.wordList = highschool1Word.main;
	app_list.app1.option.beginNumber = optionData.begininput.value;
  app_list.app1.option.endNumber = optionData.endinput.value;
	app_list.app1.option.randomOrNot = optionData.randinput.checked;

	dom_ls.app1Option.disappear();

	app_list.app1.start(showMiss);
}



app_list.app1.option.wordList = highschool1Word.main;
app_list.app1.option.wordListName = highschool1Word.name;


/*
wordList : null,
	  wordListName :null,
	  beginNumber : null,
	  endNumber : null,
	  randomOrNot : 0




*/





