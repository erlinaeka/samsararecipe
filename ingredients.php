<?php
$api_url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
$json_list = @file_get_contents($api_url);
$array = json_decode($json_list, true);
$array = $array["meals"];
?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>samsararecipe</title>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="img/samsararecipe.png" alt="logomealbd" width="160px" href="index.html">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="index.html">Home</a>
                    <a class="nav-item nav-link active" href="search.php">Search</a>
                    <a class="nav-item nav-link active" href="listcategory.php">Category</a>
                    <a class="nav-item nav-link active" href="listmeals.php">Meals</a>
                    <a class="nav-item nav-link active" href="area.php">Area</a>
                    <a class="nav-item nav-link active" href="ingredients.php">Ingredients</a>
                </div>
            </div>
        </div>
    </nav>


    <div class="container">
        <div class="row mt-5 text-center">
            <div class="col">
                <h2>Ingredients</h2>
            </div>
        </div>
    </div>


    <div class="container">

        <div class="row mt-5 ">

            <div class="col">
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th style="width: 10%;" scope="col" class="text-center">No</th>
                            <th style="width: 15%;" scope="col" class="text-center">Name</th>
                            <th style="width: 75%;" scope="col" class="text-center">Description</th>

                        </tr>
                    </thead>
                    <?php foreach ($array as $ingre) : ?>
                        <tbody>
                            <tr>
                                <td><?= $ingre["idIngredient"]; ?></td>
                                <td><?= $ingre["strIngredient"]; ?></td>
                                <td><?= $ingre["strDescription"]; ?></td>
                            </tr>

                        </tbody>
                    <?php endforeach ?>
                </table>


            </div>


        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>

</html>