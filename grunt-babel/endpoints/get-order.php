<?php

if (!array_key_exists("order_id", $_GET)) {
    respond(array("status" => "error", "message" => "Missing order id"));
}

$order = array(
    "id"            => intval($_GET["order_id"]),
    "user_id"       => mt_rand(1, 1000),
    "customer_name" => getCustomerName(),
    "subtotal"      => (mt_rand(1000, 20000) / 100),
);

respond(array("status" => "success", "data" => $order));

function respond(array $response) {
    header('Content-Type: application/json');
    echo json_encode($response);
    die();
}

function getCustomerName() {
    $firstNames = array(
        "Burt",
        "Tom",
        "Amy",
        "Bill",
        "Percy",
        "Linda",
        "Alice",
        "Tony",
        "Kelly",
        "Urcella",
        "Nicole",
        "Victor",
        "Ben",
        "Nancy"
    );
    $lastNames = array(
        "Cattolack",
        "Thompson",
        "Schumer",
        "Clapson",
        "Perkins",
        "Donnally",
        "Radcliff",
        "Dalmer",
        "Graspen",
        "Edwards",
        "Elliot",
        "Sempre",
        "Glass",
    );

    return $firstNames[mt_rand(0, (count($firstNames) - 1))] . " " . $lastNames[mt_rand(0, (count($lastNames) - 1))];
}
