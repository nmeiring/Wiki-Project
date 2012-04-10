var start = "en.wikipedia.org/wiki/Category:Internet";
   // $('#go').click(randomLink(start));

var randomLink = function (url) {
    //get request on the url. save the contents in JSON format and access them all that way
    //callback function
    
    //pick a number (1 or 2) to determine if we take a link or keep moving to more subcategories
    var page = 1;
    var subCat = 2;
    var num = Math.floor(Math.random(1)*2+1);
   
   
   if (num == page) {
    console.log("looking for a page");
    //code to be executed if it chooses #mw-pages
    //looks at all the links in the top category (might have to filter to also have parent with id #mw-pages)
    //pages should be querying the wiki page's DOM
    var pages = $('.CategoryTreeLabel');
    //will give you a random number between 0 and how many ever links there are (on a 0 based index)
    var articleNum = Math.floor(Math.random(1)*pages.length);
    var articleChoice = pages[articleNum];
    var articleHREF = $(articleChoice).attr('href');
    //go to articleHREF in a new window
   }
   
   else if (num == subCat) {
    console.log("looking for a subCat");
    //code to be executed if it chooses #mw-subcategories
    //all the <a> tags that are children on some level of a div with the id #mw-subcategories
    //categories should be querying the wiki page's DOM
    var categories = $(''); 
    var categoryNum = Math.floor(Math.random(1)*categories.length);
    var categoryChoice = categories[categoryNum];
    var categoryHREF = $(categoryChoice).attr('href');
    randomLink (categoryHREF);
   }
}