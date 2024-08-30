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

<form method="post" action="">
    <label>Nome de Usuário:</label>
    <input type="text" name="username" required><br>
    <label>Email:</label>
    <input type="email" name="email" required><br>
    <label>Senha:</label>
    <input type="password" name="password" required><br>
    <button type="submit">Registrar</button>
</form>
