
var texts = ["You clicked the button", "Steven's page","All of the colors","CLickity click click" ];
var pic_urls = ['../pics/explore.jpg','../pics/bored.jpg','../pics/creek.jpeg',
'../pics/pirate_ship.jpg','../pics/canopy.jpg','../pics/blackbeard.jpg',
'../pics/sails.jpg','../pics/sea_monster.jpg',  '../pics/piratedog.jpg','../pics/daydream.jpg']
var currentPage = 1;  //Metadata on which page you're viewing.

function init() {

    var h1tags = document.getElementById("heads");
    h1tags.onclick = changeColor;
    document.getElementById("next_page").onclick = nextPage;
    document.getElementById("previous_page").onclick = previousPage;

    

}
function changeColor() {
    
    this.innerHTML = texts[Math.floor(Math.random(0,4)*4)];
    var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.color = randomcolor;

}
    
//Go to page X
function goToPage(pageNumber) {
    currentPage = pageNumber;
    nextPage();
    
}
    
//Moves to the next page
function nextPage() {

    if(currentPage < pagesText.length) {
    var paragraphs = document.getElementsByTagName("p");
    for(i=0;i<paragraphs.length;i++) {
       paragraphs[i].innerHTML = "";
        }  
    for(i=0;i<paragraphs.length;i++) {
        if(pagesText[currentPage][i] === undefined){
            break
        } else {
        paragraphs[i].innerHTML = pagesText[currentPage][i];
        }
    }
    currentPage +=1;
    loadPageImage(getCurrentPageImageUrl(currentPage));
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    
    }
    else {
        return
    }
}
//Moves to the previous page
function previousPage() {
    if(currentPage !=1) {
    currentPage -=1;
    var paragraphs = document.getElementsByTagName("p");
    for(i=0;i<paragraphs.length;i++) {
       paragraphs[i].innerHTML = "";
        }    
    for(i=0;i<paragraphs.length;i++) {
        if(pagesText[currentPage][i] === undefined){
            break
        } else {
        paragraphs[i].innerHTML = pagesText[currentPage - 1][i];
        }
    }
        loadPageImage(getCurrentPageImageUrl(currentPage));
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    } else {
        return
    }
}

//This function returns a url to the correct page image.
function getCurrentPageImageUrl(pageNumber) {
    if(pageNumber <= pic_urls.length)
    return pic_urls[pageNumber-1];
   else {
       return '../pics/lf-1.jpg'
   }
}

//this function takes a page url and changes the image
function loadPageImage(url) {
    console.log(url);
    document.getElementById("image").src= url;
}
onload = init;
