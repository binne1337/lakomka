<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST['name'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$source = $_POST['source'];

// Email, на который будет отправлен заказ
$to = 'youremail@example.com';
$subject = 'Новый заказ с вашего сайта';

$message = "Имя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Адрес доставки: $address\n";
$message .= "Источник заказа: $source";

// Отправка заказа на почту
mail($to, $subject, $message);

// Вывод сообщения на странице
echo "Спасибо, $name! Ваш заказ успешно оформлен. Мы свяжемся с вами для подтверждения доставки.";

// Редирект после отправки заказа
header("Location: thank_you.html");
} else {
header("Location: index.html");
}
?>