var teamIdCounter = parseInt(localStorage.getItem('teamIdCounter')) || 0;
const teamNameInput = document.getElementById("team_name");
const teamIconUrlInput = document.getElementById("team_icon_url");
const playerCountInput = document.getElementById("player_count");
const topBatsmanInput = document.getElementById("topbatsman");
const topBowlerInput = document.getElementById("topbowler");
const wonCountInput = document.getElementById("woncount");
const teamSubmit = document.getElementById("teamsubmit");

const teams = [];

teamSubmit.addEventListener("click", function () {
    const teamName = teamNameInput.value;
    const teamIconUrl = teamIconUrlInput.value;
    const playerCount = playerCountInput.value;
    const topBatsman = topBatsmanInput.value;
    const topBowler = topBowlerInput.value;
    const wonCount = wonCountInput.value;


    const teamId = teamIdCounter++;

    const team = {
        id: teamId,
        teamName: teamName,
        team_icon_url: teamIconUrl,
        player_count: playerCount,
        topBatsman: topBatsman,
        topBowler: topBowler,
        wonCount: wonCount
    };

    teams.push(team);
    const teamsJSON = JSON.stringify(teams);

    var dataFromLocal = JSON.parse(localStorage.getItem("teams"));
    if (dataFromLocal === null) {
        localStorage.setItem("teams", teamsJSON);
    } else {
        dataFromLocal.push(team);
        localStorage.setItem("teams", JSON.stringify(dataFromLocal));
    }

    localStorage.setItem('teamIdCounter', teamIdCounter.toString());

    teamNameInput.value = "";
    teamIconUrlInput.value = "";
    playerCountInput.value = "";
    topBatsmanInput.value = "";
    topBowlerInput.value = "";
    wonCountInput.value = "";

    alert("Team details stored in local storage.");
});




    
    // const teamName = prompt("Enter Team Name:");
    // if (teamName) {
    //     const team = {
    //         teamName,
    //         teamIcon: "team-icon-url",
    //         players: [],
    //     };
    //     teams.push(team);
    //     renderTeamCards();
    // }
