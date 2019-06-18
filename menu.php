<?php
	$conn = new mysqli('localhost', 'root', '', 'angular');
 
	$data = json_decode(file_get_contents("php://input"));
 
	$restraurantmenu = $data->$restraurantmenu;
 
	$sql = "INSERT INTO menu (restraurant) VALUES ('$restraurant')";
	$conn->query($sql);
 
