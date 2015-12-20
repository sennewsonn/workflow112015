<?php

$data = array();

$data['status'] = "ok";

header("Content-Type: app/json");

echo json_encode($data);
exit;

