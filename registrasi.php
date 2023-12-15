<?php
require 'function.php';
if (isset($_POST["submit"])) {
    if (register($_POST) > 0) {
        echo "<script>
        alert('user baru berhasil ditambahkan');
        </script>";
    } else {
        echo mysqli_error($conn);
    }
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
    <title>Registered</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div style="padding-top: 6%;"></div>
            <div class="col-md-4">
                <div class="card">
                    <main>
                        <div class="card-header bg-transparent mb-0">
                            <h5 class="text-center"><span class="font-weight-bold text-primary">Registrasi</span></h5>
                        </div>
                        <div class="card-body">
                            <form action="" method="POST">
                                <div class="mb-3">
                                    <label for="nama" class="form-label">Nama</label>
                                    <input type="text" name="nama" class="form-control" placeholder="Nama Lengkap">
                                </div>
                                <div class="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" name="username" class="form-control" placeholder="Username">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" name="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" name="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Remember Password</label>
                                    <input type="password" name="password2" class="form-control"
                                        placeholder="Remember Password">
                                </div>
                                <div class="mb-3 d-grid gap-2 ">
                                    <button type="submit" name="submit" class="btn btn-primary">Registrasi</button>
                                </div>
                            </form>
                            <small class="d-block text-center">Alredy Register ? ?
                                <a href="loginn.php">Login now</a>
                            </small>
                            <main>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>