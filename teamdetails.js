var teamdetailscontainer=document.getElementById('teamdetailscontainer')
var teamdatafromlocal=JSON.parse(localStorage.getItem("teams"))
var playeratafromlocal = JSON.parse(localStorage.getItem("players"));


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamId = urlParams.get('teamId');

if (teamId.startsWith('team')) {
    id = parseInt(teamId.slice(4));
} else {
    id = parseInt(teamId);
}

console.log("teamId:", teamId);
console.log("id:", id);

if (teamdatafromlocal[id]) {
    teamdetailscontainer.innerHTML = `<div id="teamdetailscontainercard">
        <img src="${teamdatafromlocal[id].team_icon_url}" id="teamdetailscontainerimg" alt="">
        <p>Team Name: ${teamdatafromlocal[id].teamName}</p>
        <p>Total Number of Players: ${teamdatafromlocal[id].player_count}</p>
        <p>Top Batsman: ${teamdatafromlocal[id].topBatsman}</p>
        <p>Top Bowler: ${teamdatafromlocal[id].topBowler}</p>
        <p>Won Count: ${teamdatafromlocal[id].wonCount}</p>
    </div>`;
} else {
   
    teamdetailscontainer.innerHTML = "<p>Team not found.</p>";
}



var allplayerscontainer = document.getElementById('allplayerscontainer');

for (var i = 0; i < playeratafromlocal.length; i++) {
    if (
        teamdatafromlocal[id].topBatsman == playeratafromlocal[i].playerName ||
        teamdatafromlocal[id].topBowler == playeratafromlocal[i].playerName ||
        teamdatafromlocal[id].teamName == playeratafromlocal[i].playerfrom
    ) {
        var playerId = `player${playeratafromlocal[i].id-1}`;

        var playerCard = document.createElement('div');
        playerCard.className = 'allplayerscontainercard';
        playerCard.id = playerId;

        playerCard.innerHTML = `
            <img src="${playeratafromlocal[i].player_photo_url}" class="playerimg" alt="">
            <p>${playeratafromlocal[i].playerName}</p>
            <p>${playeratafromlocal[i].playerprice}</p>
        `;

        // Create a closure to capture the correct playerId
        (function (playerId) {
            playerCard.addEventListener('click', function () {
                var url = `playerdetails.html?playerId=${playerId}`;
                window.location.href = url;
            });
        })(playerId);

        allplayerscontainer.appendChild(playerCard);
    }
}

