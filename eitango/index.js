const dom_ls = {};
dom_ls.main = document.getElementById("main");

import { toMemorizeWord } from "./js/toMemorizeWord.js";

import { csvData } from "./js/operateCssdata.js";
import { MenuDom } from "./js/menuDom.js"




const app_list = {
	menu: new MenuDom(dom_ls.main,"menu"),
	app1 : new toMemorizeWord(dom_ls.main)
}
app_list.menu.createMenu(5);
dom_ls.begininput = document.createElement("input");
dom_ls.begininput.setAttribute("type","number");
dom_ls.main.appendChild(dom_ls.begininput);
dom_ls.endinput = document.createElement("input");
dom_ls.endinput.setAttribute("type","number");
dom_ls.main.appendChild(dom_ls.endinput);
dom_ls.randinput = document.createElement("input");
dom_ls.randinput.setAttribute("type","checkbox");
dom_ls.main.appendChild(dom_ls.randinput);
dom_ls.buttoninput = document.createElement("input");
dom_ls.buttoninput.setAttribute("type","button");
dom_ls.main.appendChild(dom_ls.buttoninput);
dom_ls.buttoninput.addEventListener("click",() =>{

	requireCsv.csv_data("./csv/highschool1.csv",letstart);

})

let highschool1Word = {
	name:"高校1年",
	main:[]
};
const requireCsv = new csvData;
function letstart(list){
	highschool1Word.main = list;
	app_list.app1.option.wordList = highschool1Word.main;
	app_list.app1.option.beginNumber = dom_ls.begininput.value;
  app_list.app1.option.endNumber = dom_ls.endinput.value;
	app_list.app1.option.randomOrNot = dom_ls.randinput.checked;

	dom_ls.begininput.classList.add("kesu");
	dom_ls.endinput.classList.add("kesu");
	dom_ls.randinput.classList.add("kesu");
	dom_ls.buttoninput.classList.add("kesu");

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





