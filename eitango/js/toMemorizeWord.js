import {OperatingStorage as MemoryWord} from "./LocalStorage.js";
let memoryWord = new MemoryWord("app1");

export class toMemorizeWord {
  constructor(main_dom){
    this.option= {
	  wordList : null,
	  wordListName :null,
	  beginNumber : null,
	  endNumber : null,
	  randomOrNot : 0
    
    };
    this.dom_ls = {};
    this.dom_ls.main = main_dom;
  }
  start(){
    let start_this = this;
    let dom_ls = this.dom_ls;
    let WordList,
        CardCount,
        NowMissWordList,
        isTurning,
        cardCue,
        timingfinished
        ;
    let frequencyOfmissCard = [1,3,7,10];
    
    memoryWord.save(start_this.option.wordListName,(memoryWord.get(start_this.option.wordListName) ?? {}));
    confirmingValue();
    Initialize();
    CardInitialize();
    CardEventCreate();
  
      function CardTouchStart(startEvent){
        var x,
            changedX,
            isMoved
        ;
        isMoved = false;
        this.classList.add("drag");
        var drag = document.getElementsByClassName("drag")[0];
        x = startEvent.changedTouches[0].pageX;
        drag.addEventListener("touchmove",CardMove);
        drag.addEventListener("touchend", CardLeave, false);
  
        function CardMove(moveEvent){
          changedX = moveEvent.changedTouches[0].pageX - x;
          let changedXSize = Math.abs(changedX);
          if(changedXSize > 10) isMoved = 1;
          drag.style.left = changedX + "px";	
        }
        function CardLeave(leaveEvent){
          if(isMoved == 1){
            if(changedX > 100 ){
            drag.style.left =  "1000px";
            RightScrollEvent();
            }else if(changedX < -100){
            drag.style.left =  "-1000px";
            LeftScrollEvent();
            }else{
            drag.style.left =  "0px";
            }
            isMoved = 0;
          }else{
            drag.style.left =  "0px";
            TurnCardEvent();
          }
          drag.removeEventListener("touchend", CardLeave, false);
        }
      }
  
      function RightScrollEvent(){
        if(!NowMissWordList[cardCue[0]]){
          PassMissedCardInput();
        }
        ChangeToNextCard();
      }
      function LeftScrollEvent(){
        MissCardInput();
        ChangeToNextCard();
      }
      function TurnCardEvent(){
      
        //cardCue[0] は現在の単語
        if(isTurning){
          isTurning = false;
          dom_ls.card_child.innerText = WordList[cardCue[0]][0];
        }else{
          isTurning = true;
          dom_ls.card_child.innerText = WordList[cardCue[0]][1];
        }
      }
  
    function ChangeToNextCard(){
      
      document.getElementsByClassName("drag")[0].style.left =  "0px";
      cardCue.shift();
      isTurning = false;
      CardCount++;
      if(cardCue.length == 0){
        gamefinish();
        return;
      }
      console.log(cardCue.length);
        dom_ls.card_child.innerText = WordList[cardCue[0]][0];
    }
    function PassMissedCardInput(){
      NowMissWordList[cardCue[0]]++;
      
      if(!frequencyOfmissCard[NowMissWordList[cardCue[0]]]){
        delete NowMissWordList[cardCue[0]];
      }else{
        if(frequencyOfmissCard[NowMissWordList[cardCue[0]]] <= cardCue.length){
          cardCue.splice(frequencyOfmissCard[NowMissWordList[cardCue[0]]] + 1,0,cardCue[0]);
        }
      }
    }
    function MissCardInput(){
      
      
      let totalMissList = memoryWord.get(start_this.option.wordListName);
      console.log(totalMissList);
      totalMissList[cardCue[0]] = totalMissList[cardCue[0]] + 1 || 1;
      memoryWord.save(totalMissList);

      NowMissWordList[cardCue[0]] = 0;
      cardCue.splice(frequencyOfmissCard[0] + 1,0,cardCue[0]);
      timingfinished++;
    }
    function Initialize(){
      if(typeof dom_ls.card === 'undefined'){//カードが作られていなかったら
        dom_ls.card = document.createElement("div"); //カード本体
        dom_ls.card_child = document.createElement("div"); //カードの文字
        dom_ls.card.setAttribute("class","card");
        dom_ls.card_child.setAttribute("class","card_child");
        dom_ls.card.appendChild(dom_ls.card_child);
        dom_ls.main.appendChild(dom_ls.card);
      }
      CardCount = 0;
      NowMissWordList = {};//{数字:回数}
      isTurning = false;
      WordList = start_this.option.wordList;
    }
    function CardInitialize() {
      let beginNumber =  start_this.option.beginNumber - 0 ;
      let endNumber =  start_this.option.endNumber - 0;
      let numberOfbeginning = endNumber - beginNumber + 1;
      timingfinished  = numberOfbeginning;
      let letSortCards = [];
      cardCue = [];
      for(let i = 0;i < numberOfbeginning;i++){
        letSortCards[i] = i + beginNumber;
        cardCue[i] = i + beginNumber;
      }
      //ソート順をランダムに変更するため
      console.log(letSortCards);
      if(start_this.option.randomOrNot){
        for(let i = 0;i < numberOfbeginning;i++){
          let randomSelectedCard  = Math.floor(Math.random() * letSortCards.length);
          cardCue[i] = letSortCards.splice(randomSelectedCard,1);
     
        }
      }
       console.log(cardCue);
      dom_ls.card_child.innerText = WordList[cardCue[0]][0];
    }
  
    function CardEventCreate(){
      dom_ls.card.addEventListener("touchstart",CardTouchStart);
    }
    function gamefinish(){

    }
    function confirmingValue(){

    }
  }

}






