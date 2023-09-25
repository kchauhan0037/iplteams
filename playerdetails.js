var playerdetailscontainer=document.getElementById('playerdetailscontainer')
var playerdatafromlocal=JSON.parse(localStorage.getItem("players"));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const playerId = urlParams.get('playerId');
var id=parseInt(playerId.slice(6))-1
console.log(id)


if(playerdatafromlocal){


    playerdetailscontainer.innerHTML=` <div class="playerdetailsimagewrapper"><img class="playerdetailsimage" src="${playerdatafromlocal[id].player_photo_url}" alt=""></div>
<div class="playerdetailsmore">
<h2>Player Name</h2>
    <p>${playerdatafromlocal[id].playerName}</p>

    <h2>Playing</h2>
    <p>${playerdatafromlocal[id].playingstatus}</p>

    <h2>Playing as a</h2>
    <p>${playerdatafromlocal[id].role}</p>

    <h2>Price</h2>
    <p>${playerdatafromlocal[id].playerprice} </p>

    
</div>`
}






