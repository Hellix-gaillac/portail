<?php
    setcookie('cdd', true, time () + 365 * 24 * 3600, '/', null, false, true);
    header('location:'.$_SERVER['HTTP_REFERER']);
?>
