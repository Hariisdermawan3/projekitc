<?php 
session_start();
if(!isset($_SESSION["login"])){
    header("Location: loginn.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>SeniBudaya</title>
</head>

<body>
    <!--header-->
    <nav class="navbar bg-white shadow-sm">
        <div class="container-fluid">

            <a class="navbar-brand" href="#">
                <img src="public/SeniBudayaLogo.svg" alt="Logo" width="40" height="40">
                SeniBudaya
            </a>
            <div class="card-header">
                <a href="logout.php" class="btn btn-dark float-xl-end">Logut</a>
            </div>
        </div>
    </nav>
    <!--end-->
    <div class="container mt-5">
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
                to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>