const dom_ls = {};
dom_ls.main = document.getElementById("main");

import { toMemorizeWord } from "./js/toMemorizeWord.js";

import { csvData } from "./js/operateCssdata.js";
import { MenuDom } from "./js/menuDom.js";

import { createElement } from "./js/createElement.js";




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
	type :"number"
});
dom_ls.app1Option.createChild("endinput",{
	tagName : "input",
	type :"number"
});
dom_ls.app1Option.createChild("randinput",{
	tagName : "input",
	type :"checkbox"
});
dom_ls.app1Option.createChild("startbutton",{
	tagName : "input",
	type :"button",
	func : () => {
		requireCsv.csv_data("./csv/highschool1.csv",letstart);
	}
});




let highschool1Word = {
	name:"高校1年",
	main:[]
};
const requireCsv = new csvData;
function letstart(list){
	highschool1Word.main = list;
	let optionData = dom_ls.app1Option.dom_ls;
	app_list.app1.option.wordList = highschool1Word.main;
	app_list.app1.option.beginNumber = optionData.begininput.value;
  app_list.app1.option.endNumber = optionData.endinput.value;
	app_list.app1.option.randomOrNot = optionData.randinput.checked;

	dom_ls.app1Option.disappear();

	app_list.app1.start();
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





