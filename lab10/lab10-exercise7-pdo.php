<?php require_once('config.php'); ?>
<!DOCTYPE html>
<html>
<head>
    <title>haha</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>Database Tester (PDO)</h1> <?php
header("Content-Type: text/html;charset=utf-8");
try {
    $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "select * from Artists order by LastName";
    $result = $pdo->query($sql);
    while ($row = $result->fetch()) {
        echo $row['ArtistID'] . " - " . $row['LastName'] . "<br/>";
    }
    $pdo = null;
}catch (PDOException $e) {
    die( mb_convert_encoding($e->getMessage(),"UTF-8","GBK"));
}
?>
</body>
</html>