<?php


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Beable Bakes n Bites</title>

    <link rel="stylesheet" type="text/css" href="css/nav.css">

    <link href="https://fonts.googleapis.com/css?family=Jim+Acme&display=swap" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-3.4.1.js"> </script>
    <script type="text/javascript">
    $(document).ready(function(){
        $('.search-icon').click(function(){
            $('.search').slideToggle()
    })
})
    </script>
</head>
<body>
    <section>
        <div class="full-width search">
            <div class="search-form">
                <input type="text" name="" placeholder="Whatya searching for buddy?">
                <div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>
                <div style="clear:both"></div>

        </div>
        </div>
   
    <nav>
        <div class="logo">
            <h4>Beable</h4>
        </div>
        <div class="nav-links">
        <ul>
            <li>
                <a href="index.php" class="active">Home</a>
            </li>
            <li>
                <a href="about.php">About Us</a>
            </li>
            <li>
                <a href="product.php">Products</a>
            </li>
            <li>
                <a href="services.php">Services</a>
            </li>
            <li>
                <a href="shop.php">Shop</a>
            </li>
            <li>
                <a href="vlog.php">Vlog</a>
            </li>
            <li>
                <a href="support.php">Support</a>
            </li>
            <li>
                <a class="search-icon"> <i class="fa fa-search" aria-hidden="true"></i></a>
            </li>
            
        </ul>
        </div>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
</section>
    <script src="js/nav.js"></script>

<body>
<div class="">
    <b> To book a table, kindly fill the form below </b>
    <form action="">
        <label for="name">
            Name:<input type="text" placeholder="Name">
        </label>
        <label for="email">
            Email:<input type="email" placeholder="Email">
        </label>       
        <label for="phone">
            Phone Number:<input type="text" placeholder="Phone">
        </label>
        <label for="date">
            Date:<input type="text" placeholder="Date">
        </label>
        <label for="time">
            Time:<input type="text" placeholder="Time">
        </label>       
        <label for="partysize">
            Party Size:<input type="text" placeholder="Party Size">
        </label>        
        <label for="special">
            Special Request:<input type="textarea" placeholder="Any Special Requests?">
        </label>
        <button type="submit">Book Reservation</button>
    
    </form>
    </div>
</body>


</html>