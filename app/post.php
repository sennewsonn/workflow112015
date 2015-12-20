<?php

$data = array();

$data['status'] = "ok";

header("Content-Type: application/json");

echo json_encode($data);
exit;

