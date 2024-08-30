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

<form method="post" action="">
    <label>Email:</label>
    <input type="email" name="email" required><br>
    <label>Senha:</label>
    <input type="password" name="password" required><br>
    <button type="submit">Entrar</button>
</form>
