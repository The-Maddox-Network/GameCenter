
var game_center_links = ["/games/hextris","/games/cat-bounce","/games/weave-silk","/games/flappy-copter","/games/koalas-to-the-max","/games/thisissand","/games/thisissand-dark","/games/sand-particle-simulator","/games/paperio-2","/tetris","/games/2048","/games/breakout","/games/chrome-dino-game","/games/flappy-bird","/games/pac-man","/games/paperio-2-multiplayer","/games/pong","/games/sprinter-turtle","/games/typer","/games/tower-game","/games/guess-the-image","/bypass/browse.php?u=http%3A%2F%2Fwww.brantsteele.net%2Fhungergames%2Freaping.php&amp;b=4&amp;f=norefer","/games/bad-parkour-game","/games/crab-race","/games/long-doge-challenge","/games/flappy-2048","/games/fun-text-effect","/games/squishy-earth","/games/infinite-horse","/games/color-fade","/games/pet-the-dog","/games/fidget-spinner","/games/pixels-fighting","/games/cut-the-rope","/games/crossy-road","/games/falling-guy","/games/whats-my-starbucks-name","/games/where-is-the-sloth","/games/swoop","/games/master-archer","/games/galaxies-combat","/games/orbital-survival","/games/bot-in-space"];
const random = Math.floor(Math.random() * game_center_links.length);

//Prevent arrow keys from scrolling page
document.addEventListener("keydown", function (e) {
  if([37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
    console.log("POTATO")
  }
}, false);


/*
$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

$('.game_center_page_wrap').randomize('.randomize_me');
*/


//Lazy Load images
//Source: http://blog.dynamicdrive.com/5-brilliant-ways-to-lazy-load-images-for-faster-page-loads/
window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)


$(window).resize(function() {
    console.log("window size has changed")
    $("iframe").height(($(window).height())-100);
});


$(document).ready(function() {
    //$(".ossn-inner-page").css("background-color", "#2B2B2B");
    $("iframe").height(($(window).height())-100);
});


