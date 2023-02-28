    <script>
  
        // Nombres de los jugadores
        var Jugador1 = "Jugador 1";
        var Jugador2 = "Jugador 2";
  
        // cambiar el nombre 
        function Editarnombre() {
            Jugador1 = prompt("Cambiar nombre Jugador 1");
            Jugador2 = prompt("Cambiar nombre Jugador 2");
  
            document.querySelector("p.Jugador1")
                            .innerHTML = Jugador1;
                              
            document.querySelector("p.Jugador2")
                            .innerHTML = Jugador2;
        }
  
        // funcion del juego 
        function jugardados() {
            setTimeout(function () {
    
                //Generar una función Random
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;
                var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
                document.querySelector(".img1").setAttribute("src",
                    "dado" + randomNumber1 + ".png");
  
                document.querySelector(".img2").setAttribute("src",
                    "dado" + randomNumber2 + ".png");
  
                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "Empate!";
                }
  
                else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").innerHTML
                        = (Jugador2 + " Gana!");
                }
  
                else {
                    document.querySelector("h1").innerHTML
                        = (Jugador1 + " Gana!");
                }
            }, 2500);
        }
    </script>