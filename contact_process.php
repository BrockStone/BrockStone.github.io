<?php

//Email information
  $admin_email = "brockstone155@gmail.com";
  $email = $_POST['email'];
  $name = $_POST['name'];
  $msg = $_POST['msg'];
  var_dump($_POST);
  
  


  //send email
  mail($admin_email, $name, "This is a Contact Message from Brock Stone Design: ".$msg, "From:" . $email);



// require_once('PHPMailer_5.2.4/class.phpmailer.php'); //library added in download source.
//     $msg  = 'BSD Contact';
//     $subj = 'From Brock Stone Design';
//     $to   = 'info@site.com';
//     $from = 'you@youremail.com';
//     $name = 'My Name';
 
//    	smtpmailer($to,$from, $name ,$subj, $msg);
 
//     function smtpmailer($to, $from, $from_name = 'Example.com', $subject, $body)
//     {
//         global $error;
//         $mail = new PHPMailer();
//         $mail->IsSMTP();
//         $mail->SMTPAuth = true; 
//        	// Gmail
//         $mail->SMTPSecure = 'ssl'; 
//         $mail->Host = 'smtp.gmail.com';
//         $mail->Port = 465;  
//         $mail->Username = 'brockstone155@gmail.com';  
//         $mail->Password = 'brockstone122889';   
        
//         $mail->IsHTML(true);
//         $mail->From="admin@example.com";
//         $mail->FromName="Example.com";
//         $mail->Sender=$from; // indicates ReturnPath header
//         $mail->AddReplyTo($from, $from_name); // indicates ReplyTo headers
//         $mail->AddCC('cc@site.com.com', 'CC: to site.com');
//         $mail->Subject = $subject;
//         $mail->Body = $body;
//         $mail->AddAddress($to);
//         if(!$mail->Send())
//         {
//             $error = 'Mail error: '.$mail->ErrorInfo;
//             return true;
//         }
//         else
//         {
//             $error = 'Message sent!';
//             return false;
//         }
//     }

?>