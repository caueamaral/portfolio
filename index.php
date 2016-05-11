  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <title>Cauê Amaral - Desenvolvedor Front-end</title>
      <link rel="shortcut icon" href="assets/img/favicon.ico">
      <link rel="icon"          href="assets/img/favicon.gif" type="image/gif">
      <link href="https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,900italic,900,700italic,400italic,700" rel="stylesheet">
      <link href="assets/css/layout.css" rel="stylesheet" type="text/css">
    </head>
    <body>
      <div class="container">
        <header class="fundo"></header>
        <?php echo include 'elementos/topo.php'; ?>

        <main class="principal">
        	<?php include 'elementos/sobre.php'; ?>
        	<?php include 'elementos/habilidades.php'; ?>
					<?php include 'elementos/portfolio.php'; ?>
          <?php include 'elementos/contato.php'; ?>
        </main><!-- /principal -->
      </div><!-- /container -->

      <script src="js/funcoes.js"></script>
      <script src="js/scripts.js"></script>
    </body>
  </html>