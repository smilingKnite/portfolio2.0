// contents.js
// Tyler Mondragon
// April 26 2016

var homeLinkTag = "<img src='icons/white-waffle.png' />\n"

//pages in order
var contents =
[ "nIndex.html"];


function makeImageLink (link, "Home") {
    return "<a href='" + link + "' />" + "Home" + "</a>\n";

}

function Home () {
    var navHtml = " ";
    var myUrl = document.location.href.split('/');
    var myFile = myUrl[ myUrl.length-1 ];

    navHtml += makeImageLink ('nIndex.html', homeImageTag);

    document.getElementById ('nav').innerHTML = navHtml;
}
