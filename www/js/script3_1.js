google.load("feeds", "1");

function initialize() {
  var feedurl = "http://www.amazon.co.jp/gp/rss/bestsellers/books/ref=zg_bs_books_rsslink";
  var feed2 = new google.feeds.Feed(feedurl);
  feed2.setNumEntries(8);

  feed2.load(function (result){
    if (!result.error){
      var container = document.getElementById("feed2");
      var htmlstr = "";
      htmlstr += "<p>[ƒ^ƒCƒgƒ‹]" + result.feed.title + "</p>";

      htmlstr += "<ul>";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];

        htmlstr += "<li>"
        htmlstr += entry.content;
        htmlstr += "</li>"
      }
      htmlstr += "</ul>";

      container.innerHTML = htmlstr;
    }else{
      alert(result.error.code + ":" + result.error.message);
    }
  });
}

google.setOnLoadCallback(initialize);