function getFirstSelector(selector){

  return document.querySelector(selector);
}
function nestedTarget(){
  /*const main = document.getElementsByTagName("main")[0];
  const nested = main.children[3];
  const target = nested.getElementsByClassName("target");
  return target[0];*/
  /*const nested = document.querySelector("#nested");
  return nested.querySelector(".target");*/
  return document.querySelector('#nested div.target');
}
function increaseRankBy(n){
  var rankList = document.querySelectorAll('ul.ranked-list li');
  for (let i=0, j=rankList.length; i<j; i++){
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML)+n;
  }
}
function deepestChild(){
  var grandNode = document.querySelector('div#grand-node div');
  while (!grandNode){  
    grandNode = grandNode.querySelector('div');
  }
  return grandNode;
}
