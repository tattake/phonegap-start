google.load("feeds", "1");

function initialize() {
  var feedurl = "https://gdata.youtube.com/feeds/api/standardfeeds/JP/top_favorites?v=2&time=this_month";

  var feed = new google.feeds.Feed(feedurl);
  feed.setNumEntries(5);

  feed.load(function (result){
    if (!result.error){
      var container = document.getElementById("feed");
      var htmlstr = "";
      htmlstr += "<p>[ƒ^ƒCƒgƒ‹]" + result.feed.title + "</p>";

      htmlstr += "<ul>";
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];

        htmlstr += "<li>"
        htmlstr += '<a href="' + entry.link + '">' + entry.title + '</a>';
        htmlstr += "</li>"

        htmlstr += "<li>"
        htmlstr += createYouTubeString(entry.link);
        htmlstr += "</li>"
      }
      htmlstr += "</ul>";

      container.innerHTML = htmlstr;
    }else{
       alert(result.error.code + ":" + result.error.message);
    }
  });
}

function createYouTubeString(link){
  var str = "";

  var id = parseParam(link);
  if (id){
    var url = 'http://www.youtube.com/v/' + id + '&hl=ja&fs=1';

    str += '<object width="300" height="200">';
    str += '<param name="movie" value="'+ url + '"></param>';
    str += '<param name="allowFullScreen" value="true"></param>';
    str += '<embed src="' + url + '" type="application/x-shockwave-flash" ';
    str += 'allowfullscreen="true" width="300" height="200">';
    str += '</embed></object>';
  }

  return str;
}

function parseParam(link){
  var paramStr = link.split('?')[1];
  var params = paramStr.split('&');

  for(var i = 0;i < params.length;i++){
    var pare = params[i].split('=');
    if (pare[0] == "v"){
      return pare[1];
    }
  }

  return null;
}

google.setOnLoadCallback(initialize);