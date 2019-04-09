<?php
    session_start();
      // define variables and set to empty values
      $username1 = $password = '';

      if (isset($_POST['login'])) {
          if (isset($_POST['username']) && !empty($_POST['username'])){
              $username1 = $_POST["username"];
          }
          else{
              $ok = false;
              $GLOBALS['User Name Error'] = "Enter your username";  
          }
          if (isset($_POST['password']) && !empty($_POST['password'])){
              $password = $_POST["password"];
          }
          else{
              $ok = false;
              $GLOBALS['password Error'] = "Enter your user password";   
          }

      }

    $servername = "remotemysql.com";
    $username = "0cyXNkJ5Hm";
    $password1 = "uvGSXzNBpQ";
    $dbname = "0cyXNkJ5Hm";

    echo $username1;
    echo $password;

    $conn = mysqli_connect($servername, $username, $password1,$dbname);

    // Check connection
    if (!$conn) {
        die("Connection failed: ". mysqli_connect_error());
    }
    else{
        $sql = "SELECT password FROM user_table WHERE username = '$username1' and password = '$password'";
        $result = $conn->query($sql);
        if($result->num_rows == 1){
        	$_SESSION['login_user'] = $username1;
        	mysqli_close($conn);
            header('location: dashboard.html');
        }
        else{
            mysqli_close($conn);
            header('location: index.html'); 
            }     
    }
?>