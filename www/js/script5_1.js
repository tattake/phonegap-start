$(function(){
	//DATA/sample4.txtのデータを変数dataに渡す
	$.get("study.txt",function(data){
		//変数を宣言
		//sample4.txtのデータを",（カンマ）"区切りで変数scoresに配列の状態で値を渡す
		var scores = data.split(",");
		var html = "";
		
		//<table>
		html += "<table border='1'>";
			html += "<tr>";
				html += "<th>番号</th>";
				html += "<th>得点</th>";
			html += "</tr>";
		
		//<tr><td>タグをfor文で繰り返し処理をする
		for ( var i = 0; i < scores.length; i++) {
			html += "<tr>";
				html += "<td>" + (i+1) + "</td>";
				html += "<td>" + scores[i] + "点</td>";
			html += "</tr>";
		
		//変数の宣言（合計点と平均点）
			total = parseInt(scores[i]);
			avg = total/scores.length;
		}
		
		//合計点の表示
			html += "<tr>";
				html += "<td>合計</td>";
				html += "<td>" + total + "点</td>";
			html += "</tr>";
		
		//平均点の表示
		html += "<tr>";
			html += "<td>平均</td>";
			html += "<td>" + avg + "点</td>";
		html += "</tr>";
		
		//</table>
		html += "</table>";
		
		//id＝getLoadに変数htmlを代入する
		$("#getLoad").html(html);
	});
});