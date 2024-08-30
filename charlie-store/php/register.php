<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        echo "Usuário registrado com sucesso!";
        header("Location: /php/login.php");
    } else {
        echo "Erro: " . $stmt->error;
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
    <title>Registro de Usuário</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <form method="post" action="">
        <label>Nome de Usuário:</label>
        <input type="text" name="username" required placeholder="@usuario"><br>
        <label>Email:</label>
        <input type="email" name="email" required placeholder="seu-email@gmail.com"><br>
        <label>Senha:</label>
        <input type="password" name="password" required placeholder="*********"><br>
        <button type="submit">Registrar</button>
        <p class="signup-link">
            Se você já tem uma conta, <a href="/php/login.php">faça login aqui</a>.
        </p>
    </form>
</body>
</html>
