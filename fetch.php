<?php
	$conn = new mysqli('localhost', 'root', '', 'angular');
 
	$output = array();
	$sql = "SELECT * FROM restraurant";
	$query=$conn->query($sql);
	while($row=$query->fetch_array()){
		$output[] = $row;
	}
 
	echo json_encode($output);
?>
