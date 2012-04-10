var link = "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?"

$.getJSON(
          link,
          {page:"Category:Internet"},
          function(data) {
            console.log(data); //returns an object which includes 6 categories, with no useful data
            console.log(data.parse.categories[0]); //returns an object of the 1st of 6 categories
            
          })