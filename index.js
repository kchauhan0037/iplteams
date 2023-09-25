var addTeam=document.getElementById('addTeam')
var addPlayer=document.getElementById('addPlayer')
var dataofteams=JSON.parse(localStorage.getItem('teams'))
var teamGrid=document.getElementById('teamGrid')
var cardwrapper=document.getElementsByClassName('cardwrapper')
var searchbar=document.getElementById('searchbar')
var searchbtn=document.getElementById('searchbtn')
var teamdatafromlocal=JSON.parse(localStorage.getItem("teams"))
var playeratafromlocal = JSON.parse(localStorage.getItem("players"));


addTeam.addEventListener('click',function(){
    window.location.href="addteam.html"
})

addPlayer.addEventListener('click',function(){
    window.location.href="addPlayer.html"
})

if(dataofteams!=null){
    for(var i=0;i<dataofteams.length;i++){
        teamGrid.innerHTML+=` <div id="team${dataofteams[i].id}" class="cardwrapper">
        <section class="teamcardlogosection"><img class="teamcardlogo" src="${dataofteams[i].team_icon_url}" alt=""></section>
        <p class="teamname">${dataofteams[i].teamName}</p>
        </div>`
    }

}


for(var i=0;i<cardwrapper.length;i++){
    cardwrapper[i].addEventListener('click',function(){
        // window.location.href=`teamdetails.html`

        var teamId = this.getAttribute('id');

        // Redirect to the second page with the teamId as a query parameter
        var url = `teamdetails.html?teamId=${teamId}`;
        window.location.href = url;
    })
}

searchbtn.addEventListener('click', function () {
    var searchTerm = searchbar.value.toLowerCase();
    
    
    for (var i = 0; i < teamdatafromlocal.length; i++) {
        if (teamdatafromlocal[i].teamName.toLowerCase() === searchTerm) {
            var searchId = parseInt(teamdatafromlocal[i].id);
            var searchUrl = `teamdetails.html?teamId=${searchId}`;
            window.location.href = searchUrl;
            break; 
        }
    }
});





