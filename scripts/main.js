var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hanma.png'){
        myImage.setAttribute ('src','images/hanma2.png');
    }else{
        myImage.setAttribute ('src','images/hanma3.png');
    
    }
    if(mySrc === 'images/hanma3.png'){
        myImage.setAttribute('src','images/hanma.png' );
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector ('h1');
function setUserName(){
    var myName = prompt('Кто ты, воин?', 'неизвестный');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Приветствую тебя, '+ myName + '!';
    if(!localStorage.getItem('name')){
        setUserName();
    }else{
        var storedName = localStoragr.getItem('name');
        myHeading.textContent = 'Ну здравствуй, ' + storedName;
    }

}
myButton.onclick = function(){
    setUserName();
}