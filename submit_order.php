<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $icing = $_POST['icing'];
    $filling = $_POST['filling'];
    $decorations = $_POST['decorations'];
    $text = $_POST['text'];
    $message = $_POST['message'];
    

    // Отправка данных на почту или обработка заказа
    // Например:
    $to = "youremail@example.com";
    $subject = "Новый заказ торта";
    $body = "Имя: $name\nИмя: $email\nПочта: $phone\nНомер телефона: $filling\nНачинка: $icing\nПокрытие: $decorations\nУкрашения: $text\nПожелания: $message\nНадпись: ";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Заказ успешно отправлен!";
    } else {
        echo "Ошибка при отправке заказа.";
    }
}
?>