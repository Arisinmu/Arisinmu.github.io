export class createElement{
  constructor(parent,className,tagName = "div"){
    this.className = className;
    this.main = document.createElement(tagName);
    this.main.classList.add(className);
    this.dom_ls = {};
    parent.appendChild(this.main);
  }
  createChild(Name,option = {
    tagName : "div"
  }){
    this.dom_ls[Name] = document.createElement(option.tagName);
    this.dom_ls[Name].classList.add(this.className + "C",this.className + "C_" + Name);
    this.main.appendChild(this.dom_ls[Name]);
    if(option.type){
      this.dom_ls[Name].setAttribute("type",option.type);
    }
    if(option.func){
      this.dom_ls[Name].addEventListener("click",option.func);
    }
    
  }
  childAdd(element,Name){
    this.dom_ls[Name] = element;
    this.main.appendChild(this.dom_ls[Name]);
  }
  removeChild(Name){
    this.dom_ls[Name].remove();
    delete this.dom_ls[Name];
  }
  appear(){
    this.main.classList.remove("kesu");
  }
  disappear(){
    this.main.classList.add("kesu");
  }

}




/*


{




}
*/
