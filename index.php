<?php

require_once './db.php'

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>

<div class="container">
  <div class="row">
    <div class="_col col-2 d-flex flex-column align-items-center text-center">
    <?php foreach ($albums as $album):?>

      <img src="<?php echo $album['poster'] ?>" alt="">
      <h6><?php echo $album['title'] ?></h6>
      <span><?php echo $album['author'] ?></span>
      <span><?php echo $album['year'] ?></span>

    <?php endforeach ?>
    </div>
  </div>
</div>

</body>
</html>