


function egyptionleague() {
  const api =
    "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=America/New_York&userCountryId=131&competitions=552&live=true&withSeasonsFilter=true";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const standings = data.standings?.[0] || {}; //standings is an object
      const rows = standings.rows || []; //rows is an array of objects

      const table = document.getElementById("standingsTable").getElementsByTagName('tbody')[0];
      table.innerHTML = "";
      rows.forEach((row) => {
        const position = row.position;
        const team = row.competitor.name;
        const played = row.gamePlayed;
        const won = row.gamesWon;
        const drawn = row.gamesEven;
        const lost = row.gamesLost;
        const goalsFor = row.for;
        const points = row.points;

        // Create a new table row
        const tr = document.createElement("tr");

        // Create new table cells for each variable
        const positionCell = document.createElement("td");
        positionCell.textContent = position;

        const teamCell = document.createElement("td");
        teamCell.textContent = team;

        const playedCell = document.createElement("td");
        playedCell.textContent = played;

        const wonCell = document.createElement("td");
        wonCell.textContent = won;

        const drawnCell = document.createElement("td");
        drawnCell.textContent = drawn;

        const lostCell = document.createElement("td");
        lostCell.textContent = lost;

        const goalsForCell = document.createElement("td");
        goalsForCell.textContent = goalsFor;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = points;

        // Append the cells to the row
        tr.appendChild(positionCell);
        tr.appendChild(teamCell);
        tr.appendChild(playedCell);
        tr.appendChild(wonCell);
        tr.appendChild(drawnCell);
        tr.appendChild(lostCell);
        tr.appendChild(goalsForCell);
        tr.appendChild(pointsCell);

        // Append the row to the table
        table.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function laligaleague() {
  const api =
    "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=11&live=false&isPreview=true&stageNum=1&seasonNum=96";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const standings = data.standings?.[0] || {}; //standings is an object
      const rows = standings.rows || []; //rows is an array of objects

      const table = document.getElementById("standingsTable").getElementsByTagName('tbody')[0];
      table.innerHTML = "";

      rows.forEach((row) => {
        const position = row.position;
        const team = row.competitor.name;
        const played = row.gamePlayed;
        const won = row.gamesWon;
        const drawn = row.gamesEven;
        const lost = row.gamesLost;
        const goalsFor = row.for;
        const points = row.points;

        // Create a new table row
        const tr = document.createElement("tr");

        // Create new table cells for each variable
        const positionCell = document.createElement("td");
        positionCell.textContent = position;

        const teamCell = document.createElement("td");
        teamCell.textContent = team;

        const playedCell = document.createElement("td");
        playedCell.textContent = played;

        const wonCell = document.createElement("td");
        wonCell.textContent = won;

        const drawnCell = document.createElement("td");
        drawnCell.textContent = drawn;

        const lostCell = document.createElement("td");
        lostCell.textContent = lost;

        const goalsForCell = document.createElement("td");
        goalsForCell.textContent = goalsFor;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = points;

        // Append the cells to the row
        tr.appendChild(positionCell);
        tr.appendChild(teamCell);
        tr.appendChild(playedCell);
        tr.appendChild(wonCell);
        tr.appendChild(drawnCell);
        tr.appendChild(lostCell);
        tr.appendChild(goalsForCell);
        tr.appendChild(pointsCell);

        // Append the row to the table
        table.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    
}
function primerleague() {
  const api =
    "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=7&live=false&seasonNum=130&withSeasonsFilter=true";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const standings = data.standings?.[0] || {}; //standings is an object
      const rows = standings.rows || []; //rows is an array of objects

      const table = document.getElementById("standingsTable").getElementsByTagName('tbody')[0];
      table.innerHTML = "";

      rows.forEach((row) => {
        const position = row.position;
        const team = row.competitor.name;
        const played = row.gamePlayed;
        const won = row.gamesWon;
        const drawn = row.gamesEven;
        const lost = row.gamesLost;
        const goalsFor = row.for;
        const points = row.points;

        // Create a new table row
        const tr = document.createElement("tr");

        // Create new table cells for each variable
        const positionCell = document.createElement("td");
        positionCell.textContent = position;

        const teamCell = document.createElement("td");
        teamCell.textContent = team;

        const playedCell = document.createElement("td");
        playedCell.textContent = played;

        const wonCell = document.createElement("td");
        wonCell.textContent = won;

        const drawnCell = document.createElement("td");
        drawnCell.textContent = drawn;

        const lostCell = document.createElement("td");
        lostCell.textContent = lost;

        const goalsForCell = document.createElement("td");
        goalsForCell.textContent = goalsFor;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = points;

        // Append the cells to the row
        tr.appendChild(positionCell);
        tr.appendChild(teamCell);
        tr.appendChild(playedCell);
        tr.appendChild(wonCell);
        tr.appendChild(drawnCell);
        tr.appendChild(lostCell);
        tr.appendChild(goalsForCell);
        tr.appendChild(pointsCell);

        // Append the row to the table
        table.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
function championeleague() {
  const api =
    "https://webws.365scores.com/web/standings/?appTypeId=5&langId=27&timezoneName=Africa/Cairo&userCountryId=131&competitions=572&live=false&withSeasonsFilter=true";
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const standings = data.standings?.[0] || {}; //standings is an object
      const rows = standings.rows || []; //rows is an array of objects

      const table = document.getElementById("standingsTable").getElementsByTagName('tbody')[0];
      table.innerHTML = "";

      rows.forEach((row) => {
        const position = row.position;
        const team = row.competitor.name;
        const played = row.gamePlayed;
        const won = row.gamesWon;
        const drawn = row.gamesEven;
        const lost = row.gamesLost;
        const goalsFor = row.for;
        const points = row.points;

        // Create a new table row
        const tr = document.createElement("tr");

        // Create new table cells for each variable
        const positionCell = document.createElement("td");
        positionCell.textContent = position;

        const teamCell = document.createElement("td");
        teamCell.textContent = team;

        const playedCell = document.createElement("td");
        playedCell.textContent = played;

        const wonCell = document.createElement("td");
        wonCell.textContent = won;

        const drawnCell = document.createElement("td");
        drawnCell.textContent = drawn;

        const lostCell = document.createElement("td");
        lostCell.textContent = lost;

        const goalsForCell = document.createElement("td");
        goalsForCell.textContent = goalsFor;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = points;

        // Append the cells to the row
        tr.appendChild(positionCell);
        tr.appendChild(teamCell);
        tr.appendChild(playedCell);
        tr.appendChild(wonCell);
        tr.appendChild(drawnCell);
        tr.appendChild(lostCell);
        tr.appendChild(goalsForCell);
        tr.appendChild(pointsCell);

        // Append the row to the table
        table.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}




