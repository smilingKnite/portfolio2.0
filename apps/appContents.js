// contents.js
// Tyler Mondragon
// April 26 2016

//icons
var leftImageTag = "<img src='icons/white-left.png' />\n"
var homeImageTag = "<img src='icons/white-waffle.png' />\n"
var rightImageTag = "<img src='icons/white-right.png' />\n"

//pages in order
var contentsA =
[ "tickTackBrockenShack.html",
 "noiseMaker.html" ];


function previous (page) {
    var item = contentsA.indexOf(page);
    item--;
    item += contentsA.length;
    item %= contentsA.length;
    return contentsA[item];
}

function next (page) {
    var item = contentsA.indexOf(page);
    item++;
    item %= contentsA.length;
    return contentsA[item];
}

function makeImageLink (link, image) {
    return "<a href='" + link + "' />" + image + "</a>\n";

}

function makeNav () {
    var navHtml = " ";
    var myUrl = document.location.href.split('/');
    var myFile = myUrl[ myUrl.length-1 ];

    navHtml += makeImageLink (previous (myFile), leftImageTag);
    navHtml += makeImageLink ('appIndex.html', homeImageTag);
    navHtml += makeImageLink (next (myFile), rightImageTag);

    document.getElementById ('nav').innerHTML = navHtml;
}
