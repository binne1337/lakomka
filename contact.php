<?php
// contact.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $phone = strip_tags(trim($_POST["phone"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = trim($_POST["message"]);

  // Адрес электронной почты для отправки
  $to = 'info@vashakonditerka.ru';
  $subject = 'Новое сообщение с вашего сайта кондитерской';

  // Содержимое письма
  $email_content = "Имя: $name\n";
  $email_content .= "Телефон: $phone\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Сообщение:\n$message\n";

  // Заголовки письма
  $email_headers = "From: $name <$email>";

  // Отправка письма
  mail($to, $subject, $email_content, $email_headers);

  // Перенаправление на страницу благодарности
  header("Location: thank_you.html");
  exit;
}
?>
