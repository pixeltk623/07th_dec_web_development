<?php

// $eq = fn ($x, $y) => $x == $y;

// echo $eq(100, '100'); // 1 (or true)


$list = [10, 20, 30];

$results = array_map(
	fn ($item) => $item * 2,
	$list
);

// print_r($results);

// $a = 5;
// function b() {
// 	return 5;
// }
// $foo = $a?->b();

$validValues = ["foo", "bar", "baz"];
$value = 0;
var_dump(in_array($value, $validValues));
// bool(true)


?>