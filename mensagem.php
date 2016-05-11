<meta http-equiv="refresh" content="2;url=/">

<?php
  require 'phpmailer/class.phpmailer.php';
  require 'phpmailer/class.smtp.php';
  
  $mail = new PHPMailer();
  $mail->setLanguage('pt');
  
  $host     = 'smtp.caueamaral.x-br.com';
  $username = 'contato@caueamaral.com.br';
  $password = 'shinigami';
  $port     = 587;
  $secure   = 'tls';
 
  $from     = $username;
  $fromName = 'Site Cooper';
  
  $nome     = $_POST['nome'];
  $email    = $_POST['email'];
  $assunto  = $_POST['assunto'];
  $mensagem = $_POST['mensagem'];
 
  $mail->isSMTP();
  $mail->Host = $host;
  $mail->SMTPAuth   = true;
  $mail->Username   = $username;
  $mail->Password   = $password;
  $mail->Port       = $port;
  $mail->SMTPSecure = $secure;
 
  $mail->From       = $from;
  $mail->FromName   = $fromName;
  $mail->addReplyTo($from, $fromName);
 
  $mail->addAddress('caue.amaral@hotmail.com', 'Contato do Site');
  
  $mail->isHTML(true);
  $mail->CharSet     = 'utf-8';
  $mail->WordWrap    = 70;
    
  $mail->Subject     = "Site Cooper: ". $assunto;
  $mail->Body        = "<strong>Nome:</strong> ". $nome . "<br><br></strong><strong>Assunto: </strong>" . $assunto . "<br><br><strong>E-mail: </strong>" . $email . "<br><br><strong>Mensagem: </strong>" . $mensagem;
 
// Faz a validação se a mensagem foi enviada para o servidor. 
  $send = $mail->Send();
 
  if($send)
      echo '<h1>E-mail enviado com sucesso!</h1>';
  else
      echo 'Error : ' .$mail->ErrorInfo;
?>