<?php

if (!array_key_exists("user_id", $_GET)) {
    respond(array("status" => "error", "message" => "Missing user id"));
}

$user = array(
    "id"            => intval($_GET["user_id"]),
    "customer_name" => getCustomerName(),
    "username"      => getUsername(),
    "company_id"    => mt_rand(1, 1000),
);

respond(array("status" => "success", "data" => $user));

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

function getUsername() {
    $charsAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    $charsNumeric = "0123456789";
    $result = array();
    $charsLength = mt_rand(6, 20);
    $numbersLength = mt_rand(2, 4);

    for ($i = 0; $i < $charsLength; $i++) {
        $result[] = $charsAlpha[mt_rand(0, strlen($charsAlpha) - 1)];
    }
    for ($i = 0; $i < $numbersLength; $i++) {
        $result[] = $charsNumeric[mt_rand(0, strlen($charsNumeric) - 1)];
    }

    return ucfirst(strtolower(implode("", $result)));
}
