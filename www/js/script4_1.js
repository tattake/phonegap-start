$(function(){
	//json�̃f�[�^��ϐ�json�ɓn��
	$.getJSON("study.json",function(json){
		//�ϐ��̐錾
		var html = "";
		var total = 0;
		
		//<dl>
		html += "<dl>";
		
		//<dt>�^�O��for���ŌJ��Ԃ�����������
		for ( var i = 0; i < json.length; i++) {
			html += "<dt>���O</dt>";
			html += "<dd>" + json[i].name + "</dd>";
			
			html += "<dt>�_��</dt>";
			html += "<dd>" + json[i].score + "</dd>";
		
		//�ϐ��̐錾�i���v�_�j
		total += json[i].score; 
		
		}
		
		//���v�_�̕\��
		html += "<dt>���v�_</dt>";
		html += "<dd>" + total + "</dd>";
		
		//</dl>
		html += "</dl>";
		
		//id��jsonLoad�ɕϐ�html��������
		$("#jsonLoad").html(html);
		
	});

	
});