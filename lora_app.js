function checkstatus(){
	var state_display = document.getElementById("state");
	const http = new XMLHttpRequest();
	const url = 'http://192.168.1.248:8080/api/devices/0000000000000001';
	const headers = {"access-control-allow-origin": "http://192.168.1.248",
  "access-control-allow-methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
  "grpc-metadata-content-type": "application/grpc",
  "content-length": "200",
  "grpc-metadata-trailer": "Grpc-Status, Grpc-Message, Grpc-Status-Details-Bin",
  "content-type": "application/json",
  'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJsb3JhLWFwcC1zZXJ2ZXIiLCJleHAiOjE1NTQ5MDg5MzIsImlzcyI6ImxvcmEtYXBwLXNlcnZlciIsIm5iZiI6MTU1NDgyMjUzMiwic3ViIjoidXNlciIsInVzZXJuYW1lIjoiYWRtaW4ifQ.OeX-sPKuf4FXWGRSUpcp34Hwq9Stc1Oy4Q3GN1JMs1A'};
	http.open("GET",url,headers);
	http.send();
	http.onreadystatechange = (e)=>{
		console.log(http.responseText)
		state_display.innerHTML = 'OFF';
	}
}