var playerIdCounter = parseInt(localStorage.getItem('playerIdCounter')) || 0;
const playerNameInput = document.getElementById("player_name");
const playerPhotoUrlInput = document.getElementById("player_photo_url");
const playerPriceInput = document.getElementById("playerprice");
const playingStatusInput = document.getElementById("playingstatus");
const roleInput = document.getElementById("role");
const playfromInput = document.getElementById("play_from");
const playerSubmit = document.getElementById("playersubmit");

const players = [];

playerSubmit.addEventListener("click", function () {
    const playerName = playerNameInput.value;
    const playerfrom = playfromInput.value;
    const playerPhotoUrl = playerPhotoUrlInput.value;
    const playerPrice = playerPriceInput.value+"cr";
    const playingStatus = playingStatusInput.value ; 
    const role = roleInput.value;
    const playerId = playerIdCounter++;
    const player = {
        id: playerId,
        playerName: playerName,
        playerfrom:playerfrom,
        player_photo_url: playerPhotoUrl,
        playerprice: playerPrice,
        playingstatus: playingStatus,
        role: role
    };

    players.push(player);
    const playersJSON = JSON.stringify(players);

    var dataFromLocal = JSON.parse(localStorage.getItem("players"));
    if (dataFromLocal === null) {
        localStorage.setItem("players", playersJSON);
    } else {
        dataFromLocal.push(player);
        localStorage.setItem("players", JSON.stringify(dataFromLocal));
    }

    localStorage.setItem('playerIdCounter', playerIdCounter.toString());

    playerNameInput.value = "";
    playfromInput.value="";
    playerPhotoUrlInput.value = "";
    playerPriceInput.value = "";
    playingStatusInput.value = "true"; 
    roleInput.value = "batsman"; 

    alert("Player details stored in local storage.");
});