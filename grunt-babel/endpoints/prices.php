<?php

respond(array(
    "status" => "success",
    "data"   => array(
        "price" => 47.57,
    ),
));

function respond(array $response) {
    header('Content-Type: application/json');
    echo json_encode($response);
    die();
}
