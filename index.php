  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <title>Cauê Amaral - Desenvolvedor Front-end</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,900italic,900,700italic,400italic,700" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/layout.css">
      <script src="js/efeitos.js"></script>
    </head>
    <body>
      <div class="container">
        <header class="fundo"></header>

        <div class="topo">
          <img src="img/logo-caue-amaral.png" alt="Cauê Amaral" class="topo-logo">
          <h1 class="topo-tt">Cauê Amaral</h1>
          <h2 class="topo-profissao">Desenvolvedor Front-end</h2>
        </div>

        <main class="principal">
        	<?php include 'elementos/sobre.php'; ?>
        	<?php include 'elementos/habilidades.php'; ?>
					<?php include 'elementos/portfolio.php'; ?>
					<?php include 'elementos/redes.php'; ?>			
        </main><!-- /principal -->
        
        <?php include 'elementos/contato.php'; ?>
      </div><!-- /container -->
    </body>
  </html>