$(function(){
	//DATA/sample4.txt�̃f�[�^��ϐ�data�ɓn��
	$.get("study.txt",function(data){
		//�ϐ���錾
		//sample4.txt�̃f�[�^��",�i�J���}�j"��؂�ŕϐ�scores�ɔz��̏�ԂŒl��n��
		var scores = data.split(",");
		var html = "";
		
		//<table>
		html += "<table border='1'>";
			html += "<tr>";
				html += "<th>�ԍ�</th>";
				html += "<th>���_</th>";
			html += "</tr>";
		
		//<tr><td>�^�O��for���ŌJ��Ԃ�����������
		for ( var i = 0; i < scores.length; i++) {
			html += "<tr>";
				html += "<td>" + (i+1) + "</td>";
				html += "<td>" + scores[i] + "�_</td>";
			html += "</tr>";
		
		//�ϐ��̐錾�i���v�_�ƕ��ϓ_�j
			total = parseInt(scores[i]);
			avg = total/scores.length;
		}
		
		//���v�_�̕\��
			html += "<tr>";
				html += "<td>���v</td>";
				html += "<td>" + total + "�_</td>";
			html += "</tr>";
		
		//���ϓ_�̕\��
		html += "<tr>";
			html += "<td>����</td>";
			html += "<td>" + avg + "�_</td>";
		html += "</tr>";
		
		//</table>
		html += "</table>";
		
		//id��getLoad�ɕϐ�html��������
		$("#getLoad").html(html);
	});
});