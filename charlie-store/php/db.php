<?php
$servername = "localhost";
$username = "root"; // Usuário padrão do MySQL no XAMPP
$password = "";     // Senha padrão do MySQL no XAMPP
$dbname = "charlie_user";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
