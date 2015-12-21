<?php

$data = array();

$data['status'] = "Все хорошо";

header("Content-Type: application/json");

echo json_encode($data);
exit;

