const objectToJson = function(text){
  return JSON.stringify(text);
};
const jsonToObject = function(text){
  return JSON.parse(text);
};
let storage = {};
let storageName = "";
export class OperatingStorage{
  constructor(name){
    storage = jsonToObject(localStorage.getItem(name)) ?? {};
  }
  save(name,value){
    storage[name] = value;
    localStorage.setItem(storageName,objectToJson(storage));
  }
  get(name){
    return storage[name];
  }
  getAll(){
    return storage;
  }   

}