




function calculadora() {
    let pergunta = prompt("Quantos graus esta fazendo na sua cidade?")
    console.log(pergunta);
    
    while (pergunta >= 0 && pergunta <= 36){
alert ( "De acordo com o protocolo de temperatura do Rio de Janeiro, sua cidade esta no NC1 de calor")
    break;
    }
    while( pergunta >= 36 && pergunta <= 40){

        alert ( "De acordo com o protocolo de temperatura do Rio de Janeiro, sua cidade esta no NC2/NC3 de calor")
        break;
        }


            while( pergunta >= 40 && pergunta <= 44){

                alert ( "De acordo com o protocolo de temperatura do Rio de Janeiro, sua cidade esta no NC4 de calor")
                break;
                }

                while( pergunta >= 45){

                    alert ( "De acordo com o protocolo de temperatura do Rio de Janeiro, sua cidade esta no NC5 de calor")
                    break;
                    }
    
    }
    



calculadora();
