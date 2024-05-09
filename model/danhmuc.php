<?php
    function getall_dm()
    {
        $conn=connectdb();
        $stmt = $conn->prepare("SELECT * FROM MyGuests");
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $kq=$stmt->fetchAll();
        return $kq;
    }
?>