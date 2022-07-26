<?php
require '../config/conexPub.php';
require '../config/config.php';

$sql = $conexion->prepare("SELECT id, nombre, descripcion, precio, imagen FROM productos  WHERE activo=1");
$sql->execute();
$resultSet = $sql->get_result();
$data = $resultSet->fetch_all(MYSQLI_ASSOC);

$query = "SELECT id_OP, NombreOp, Opinion FROM banner";
$result = mysqli_query($conexion, $query);

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos.</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/estilos.css">

    <link href="../assets/css/Estilos.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="../assets/js/mainP.js"></script>
</head>
<body>
<header>
   <nav class="navegacion">
   <ul class="menu">
                <li><a href="../index.html">Home</a></li>
                <li><a href="comenta.html">Danos tu Opinion</a></li>
                <li><a href="#">Carrito</a></li>
                <li><a href="html/login.html">Mi cueta</a>
                    <ul class="submenu">
                        <li><a href="../html/login.html">Iniciar Sesion</a></li>
                        <li><a href="html/Registro.html">Registrar</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <h2 class="text-white "> Valoracion de nuestros clientes</h2>
        <?php while($fila=mysqli_fetch_array($result)) 
{
?>
<table>
        <section class="client-container">
            <div >
					<tr >
                        <h4 class="text-white"><?php echo $fila["NombreOp"];?></h4>
                        <p class="text-white"><?php echo $fila["Opinion"];?></p>
                        </td>
                <?php } ?>
        </section>
        </table>
    </header>
        <div class="wave" style="height: 150px; overflow: hidden;"> <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 525.67,60.70 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: rgb(255, 255, 255);"></path>
            </svg>
        </div>
        
<!-- Container -->
<main>
    <div class="container">
    <strong>Productos Disponibles</strong>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <?php foreach($resultSet as $row){?>
            <div class="col">
                <div class="card shadow-sm">
                    <?php
                    $id = $row['id'];

                    ?>
                    <img width="60%" height="60%" src="../assets/img/productos/<?php echo $row["imagen"];?>">
                    <div class="card-body">
                    <h5 class="card-title"><?php echo $row['nombre']; ?></h5>
                    <p class="card text"><?php echo $row['precio']; ?></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <a href="" class="btn btn-primary">Detalle</a>
                        </div>
                     <a href="#" class="btn btn-success">Agregar al Carrito</a>
                    </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossorigin="anonymous"></script>
<footer>
        <div class="container-footer">
            <div class="container-foot">
                <h4>Telefono</h4>
                <p>503 +2525-2525</p>
            </div>
            <div class="container-foot">
                <h4>Contacto</h4>
                <p>FarmaciaUtec@farmaUtec.com</p>
                <p>Chat Online</p>
            </div>
            <div class="container-foot">
                <h4>Enlaces de interés</h4>
                <p>Sucursales</p>
                <p>Club VIP</p>
                <p>Servicios</p>
            </div>
        </div>
        <h2 class="titulo-end">&copy; Grupo 5|Farmacia UTEC</h2>
    </footer>
    <script src="js/indexjs.js"></script>
</body>
</html>