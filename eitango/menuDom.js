let menuname;

export class MenuDom{
  constructor(main_dom,name){ 
    menuname = name;
    this.dom_ls = [];
    this.dom_main = main_dom;
    
  }
  createMenu(n){
    this[menuname] = document.createElement("div"); //カード本体
    this[menuname].setAttribute("class",menuname);
    this.dom_main.appendChild(this[menuname]);

    for(let i = 0;i < n;i++){
      this.dom_ls[i] = document.createElement("div"); //カード本体
      this.dom_ls[i].classList.add(menuname + "C_" +i);
      this.dom_ls[i].classList.add(menuname + "C");
      this[menuname].appendChild(this.dom_ls[i]);
    }
  }
  menuFunc(n,func){
    this[n].addeventListener("click",func);
  }
  toggle(){
    this[menuname].classList.toggle("kesu");
  }

}
