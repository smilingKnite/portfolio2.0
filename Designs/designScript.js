// contents.js
// Tyler Mondragon
// April 26 2016

//icons
var leftImageTag = "<img src='../icons/white-left.png' />\n"
var homeImageTag = "<img src='../icons/white-waffle.png' />\n"
var rightImageTag = "<img src='../icons/white-right.png' />\n"

//pages in order
var contents2 =
[ "karmicEye_copy.html",
 "bankseyMonkey_copy.html",
 "owlTattoo_copy.html",
 "geoffry_copy.html",
 "Waffles_copy.html",
 "dreamState_copy.html",
 "stenciledSeattle_copy.html",
 "openedApple_copy.html",
 "personalSuicideSquad_copy.html",
 "deadAstronaut_copy.html",
 "deadByPineapple_copy.html",
 "rick_copy.html",
 "adobeIcons_copy.html",
 "basketball_copy.html",
 "spiderman_copy.html"];


function previous (page) {
    var item = contents2.indexOf(page);
    item--;
    item += contents2.length;
    item %= contents2.length;
    return contents2[item];
}

function next (page) {
    var item = contents2.indexOf(page);
    item++;
    item %= contents2.length;
    return contents2[item];
}

function makeImageLink (link, image) {
    return "<a href='" + link + "' />" + image + "</a>\n";

}

function makeNav () {
    var navHtml = " ";
    var myUrl = document.location.href.split('/');
    var myFile = myUrl[ myUrl.length-1 ];

    navHtml += makeImageLink (previous (myFile), leftImageTag);
    navHtml += makeImageLink ('designIndex.html', homeImageTag);
    navHtml += makeImageLink (next (myFile), rightImageTag);

    document.getElementById ('nav').innerHTML = navHtml;
}
