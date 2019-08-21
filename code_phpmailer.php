<?php
    	$mail = new PHPMailer(true);

      $mail->IsSMTP();
      $mail->SMTPKeepAlive = true;
      $mail->Host       = "email-smtp.eu-west-1.amazonaws.com";
      $mail->SMTPDebug  = false;
      $mail->SMTPAuth   = true;
      $mail->SMTPSecure = "ssl";
      $mail->Port       = 465;
      $mail->Username   = "AKIAJDN7GPJ22RUVOTSQ";
      $mail->Password   = "AuJ4uEgFnie8PyOF6+LWDX2ewS/qzdqe3PUeW7tH7/Fa";

    	$mail->From = $from;
    	$mail->FromName = stripslashes(utf8_decode($fromName));
      $mail->AddAddress($to,stripslashes(utf8_decode($toName)));
    	$mail->Subject  = stripslashes(utf8_decode($subject));
    	$mail->MsgHTML(stripslashes($msg));
    	$mail->IsHTML(false); // send as HTML

    	if($mail->Send())
        return true;
      else return false;
?>
