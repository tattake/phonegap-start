$(function(){
	//jsonのデータを変数jsonに渡す
	$.getJSON("study.json",function(json){
		//変数の宣言
		var html = "";
		var total = 0;
		
		//<dl>
		html += "<dl>";
		
		//<dt>タグをfor文で繰り返し処理をする
		for ( var i = 0; i < json.length; i++) {
			html += "<dt>名前</dt>";
			html += "<dd>" + json[i].name + "</dd>";
			
			html += "<dt>点数</dt>";
			html += "<dd>" + json[i].score + "</dd>";
		
		//変数の宣言（合計点）
		total += json[i].score; 
		
		}
		
		//合計点の表示
		html += "<dt>合計点</dt>";
		html += "<dd>" + total + "</dd>";
		
		//</dl>
		html += "</dl>";
		
		//id＝jsonLoadに変数htmlを代入する
		$("#jsonLoad").html(html);
		
	});

	
});