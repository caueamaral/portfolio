  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <title>Cauê Amaral - Desenvolvedor Front-end</title>
      <link rel="shortcut icon" href="img/favicon.ico">
      <link rel="icon"          href="img/favicon.gif" type="image/gif">
      <link href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,900italic,900,700italic,400italic,700" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="css/layout.css">
      <script src="js/efeitos.js"></script>
    </head>
    <body>
      <div class="container">
        <header class="fundo"></header>
        <?php echo include 'elementos/topo.php'; ?>

        <main class="principal">
        	<?php include 'elementos/sobre.php'; ?>
        	<?php include 'elementos/habilidades.php'; ?>
					<?php include 'elementos/portfolio.php'; ?>
        </main><!-- /principal -->

        <?php include 'elementos/contato.php'; ?>
      </div><!-- /container -->
    </body>
  </html>