<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($hashed_password);
    $stmt->fetch();

    if (password_verify($password, $hashed_password)) {
        echo "Login bem-sucedido!";
        header("Location: http://localhost:3001");
    } else {
        echo "Email ou senha incorretos.";
    }

    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="index.css">
</head>
<form method="post" action="">
    <label>Email:</label>
    <input type="email" name="email" required placeholder="seu-email@gmail.com"><br>
    <label>Senha:</label>
    <input type="password" name="password" required placeholder="*********"><br>
    <button type="submit">Entrar</button>
    <p class="signup-link">
            Se você não tem uma conta, <a href="/php/register.php">faça seu registro</a>.
        </p>
</form>