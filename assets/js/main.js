// // declaro e atribuo valor
// let boasVindas = "Fala, Dev!";
// boasVindas = "Fala, Dev! Beleza?";

// // Constante nao pode mudar o valor
// const serHumano = true;
// serHumano = false // Error nao pode mudar


function createGAme(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/img/icon-${player1}.svg" alt="Icon ${player1}" />
            <strong>${hour}</strong>
            <img src="./assets/img/icon-${player2}.svg" alt="Icon ${player2}" />
        </li>
    `
}


let delay = -.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style= "animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    
    `
}

document.querySelector("#cards").innerHTML = 
   createCard("20/11", "domingo", createGAme("qatar", "13:00", "ecuador")) +

   createCard("21/11", "segunda", createGAme("senegal", "13:00", "netherlands") +  createGAme("england", "10:00", "iran") + createGAme("united-states", "16:00", "wales")) +

   createCard("22/11", "terça", createGAme("argentina", "07:00", "saudi-arabia") +  createGAme("mexico", "13:00", "poland") + createGAme("denmark", "10:00", "tunisia") + createGAme("france", "16:00", "australia")) +

   createCard("23/11", "quarta", createGAme("germany", "10:00", "japan") +  createGAme("spain", "13:00", "costa-rica") + createGAme("morocco", "16:00", "croatia") + createGAme("belgium", "16:00", "canada")) +

   createCard("24/11", "quinta", createGAme("switzerland", "7:00", "cameroon") +  createGAme("brazil", "16:00", "serbia") + createGAme("uruguai", "10:00", "south-korea") + createGAme("portugal", "13:00", "ghana")) 
