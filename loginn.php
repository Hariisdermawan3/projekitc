<?php
session_start();
if (isset($_SESSION["login"])) {
    header("Location: dashb.php");
    exit;
}
require 'function.php';

if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM users 
    WHERE username = '$username'");
    //Cek Users name
    if (mysqli_num_rows($result) === 1) {
        //cek password yang sudah diregister 
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"])) {
            //set session
            $_SESSION["login"] = true;
            header("Location: dashb.php");
            exit;
        }
    }
    $error = true;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div style="padding-top: 10%;"></div>
            <div class="col-md-4">
                <?php if (isset($error)): ?>
                    <div class="alert alert-secondary" role="alert">
                        A simple secondary alert—check it out!
                    </div>
                <?php endif; ?>
                <div class="card">
                    <main>
                        <div class="card-header bg-transparent mb-0">
                            <h5 class="text-center"><span class="font-weight-bold text-primary">LOGIN</span></h5>
                        </div>
                        <div class="card-body">
                            <form action="" method="POST">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" name="username" class="form-control" placeholder="Username">
                                    
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>

                                <div class="mb-3 d-grid gap-2 ">
                                    <button type="submit" name="login" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <small class="d-block text-center">Not registered ?
                                <a href="registrasi.php">Register now</a>
                            </small>
                            <main>
                        </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</html>