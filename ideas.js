var randomLink = function (url) {
    go to http://en.wikipedia.org/wiki/Category:Internet
    
    pick a link from #mw-subcategories (all the links have class of CategoryTreeLabel or #mw-pages at randomLink
                                        all the <li> tags on the page eventually contain the <a> tags with href to the pages
    
    if the link is from mw pages (.CategoryTreeLabel) return href of link
    else go to the link and find another random link
        if #mw-subcategories pick one and keep going
        else #mw-pages then pick one
        
    keep going until you get something from a div with #mw-pages
    
    
    
    start at en.wikipedia.org/wiki/Category:Internet this will be the paramter the first time arounf
    $('#go').onclick(randomLink(en.wikipedia.org/wiki/Category:Internet));
    var page = 1
    var subCat = 2
    var num = Math.floor(Math.random(1)*2+1) //will give either 1 or 2 to decide to keep moving on or not
   
   if (num = page) {
    //code to be executed if it chooses #mw-pages
    var pages = $('.CategoryTreeLabel'); //looks at all the links in the top category (might have to filter to also have parent with id #mw-pages)
    var articleNum = Math.floor(Math.random(1)*pages.length); //will give you a random number between 0 and how many ever links there are (on a 0 based index)
    var articleChoice = pages[articleNum];
    var articleHREF = $(articleChoice).attr('href');
    return articleHREF
   }
   
   else if (num = subCat) {
    //code to be executed if it chooses #mw-subcategories
    var categories = $(''); //all the <a> tags that are children on some level of a div with the id #mw-subcategories
    var categoryNum = Math.floor(Math.random(1)*categories.length);
    var categoryChoice = categories[categoryNum];
    var categoryHREF = $(categoryChoice).attr('href');
    randomLink (categoryHREF);
    
   }
    
    
    
    
}