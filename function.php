<?php 
//koneksi ke database
$conn = mysqli_connect("localhost", "root","","senibudaya");
// function query($query){
//     global $conn;
//     $result = mysqli_query($conn, $query);
//     $rows   = [];
//     while($row = mysqli_fetch_assoc($result)){
//         //code 
//         $rows[] = $row;
//     }
//     return $rows;
// }

function register($data){
    global $conn;

	$nama = mysqli_real_escape_string($conn, $data["nama"]);
    $username = strtolower(stripslashes($data["username"]));
    $email = mysqli_real_escape_string($conn, $data["email"]);
    $password = mysqli_real_escape_string($conn, $data["password"]);
	$password2 = mysqli_real_escape_string($conn, $data["password2"]);

	// cek username udah ada atau belum
	$result = mysqli_query($conn, "SELECT username FROM users WHERE username = '$username'");
	if (mysqli_fetch_assoc($result) ) {
		// code... jika users sudah terdaftar maka alert menampilkan users sudah terdaftar
		echo "<script>
						alert('username sudah terdaftar')
					</script>";
					return false;
	}
	//confirmasi password jika password tidak sama dengan password2, maka confirmasi password salah
	if($password !== $password2){
		echo "<script>
		alert('Confirmasi Password Salah');
		</script>";

		return false;
	}
	//enkripsi password / mengamankan password dan passworad akan membuat endskripsi menjadi "$aos@/ajj019s1jq8"
	 $password = password_hash($password, PASSWORD_DEFAULT);

	// // tambahkan user baru kedatabase
	 mysqli_query($conn, "INSERT INTO users (nama, username, email, password, role) VALUES ('$nama', '$username', '$email', '$password', 'admin')");


	 return mysqli_affected_rows($conn);
}
/*
user = admin
pass = admin411
*/
?>
