window.onload = function(){
var insults ={
    test1: {
        text: 'test'
    }
}

var generatorBox = document.getElementById("generatorBox");

function addStory(text){
    generatorBox.innerHTML = text;

  }
  function createStory(text){
    Math.floor(Math.random() * 100);
    let pageNow = playerChoices[playerChoices.length - 1];
    generatorBox.innerHTML = "";
    updateImage(story[pageNow].imgElem);
    for(let idea of playerChoices){
      addStory(story[idea].text)
    }
    for (let idea of story[pageNow].options){
      createButton(idea[1],idea[0]);
    }
  
  }
  restart.addEventListener("click", function(){
    location.reload();
  });
  
  restart.style.display = 'none';
  
  x.addEventListener("click", function(){
    createStory(story.opener.text);
    restart.style.display = '';
  });
  
}