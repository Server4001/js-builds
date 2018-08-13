<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Starter Template for Bootstrap</title>

    <link href="dist/css/bundle.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container" id="app">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="well">
                <h2>Some Form</h2>
                <form class="form-horizontal">
                    <div class="form-group">
                        <label for="blah" class="col-sm-2 control-label">Input</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="txtInput" placeholder="Type Something" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <button type="submit" id="btnSubmit" class="btn btn-info">Click Me</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="txtOutput" class="col-sm-2 control-label">Output</label>
                        <div class="col-sm-10">
                            <textarea id="txtOutput" class="form-control" cols="30" rows="10" placeholder="Output"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="well">
                <form class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <button class="btn btn-warning" id="btnLogin">Login</button>
                        </div>
                        <div class="col-sm-10 col-sm-offset-2">
                            <button class="btn btn-primary" id="btnHitEndpoint">Hit Endpoint</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div><!-- /.container -->

<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
<script src="dist/js/bundle.js"></script>
</body>
</html>
