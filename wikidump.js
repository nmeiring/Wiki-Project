$.getJSON(
          "http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?",
          {page:"Category:Internet"},
          function(data) {
            console.log(data);
            console.log(data.parse.text['*']);
            
          })