<?php
// CONFIGURAÇÕES
$destino = "fabianoamaral47@hotmail.com"; // 🔥 Coloque seu e-mail aqui
$assunto = "Novo Pedido de Lanches Gourmet";

// DADOS DO FORMULÁRIO
$nome = $_POST["nome"];
$telefone = $_POST["telefone"];
$rua = $_POST["rua"];
$numero = $_POST["numero"];
$bairro = $_POST["bairro"];
$complemento = $_POST["complemento"];
$pagamento = $_POST["pagamento"];
$pedido = $_POST["pedido"];

// MONTAR O E-MAIL
$mensagem = "Novo Pedido de Lanches Gourmet\n\n";
$mensagem .= "Nome: " . $nome . "\n";
$mensagem .= "telefone: " . $telefone . "\n";
$mensagem .= "rua: " . $rua . "\n";
$mensagem .= "numero: " . $numero . "\n";
$mensagem .= "bairro: " . $bairro . "\n";
$mensagem .= "complemento: " . $complemento . "\n";
$mensagem .= "Forma de Pagamento: " . $pagamento . "\n\n";
$mensagem .= "Pedido:\n" . $pedido . "\n";

// CABEÇALHOS
$headers = "From: site@seudominio.com\r\n";
$headers .= "Reply-To: " . $destino . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// ENVIAR
$enviado = mail($destino, $assunto, $mensagem, $headers);

// RETORNO
if ($enviado) {
    echo "<h2>✅ Pedido enviado com sucesso!</h2>";
    echo "<p>Voltar para <a href='index.html'>Página Inicial</a></p>";
} else {
    echo "<h2>❌ Erro ao enviar o pedido.</h2>";
    echo "<p>Voltar para <a href='index.html'>Página Inicial</a></p>";
}
?>
