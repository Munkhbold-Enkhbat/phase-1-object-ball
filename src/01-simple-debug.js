const homeTeam = () => gameObject().home
const awayTeam = () => gameObject().away

const players = () => Object.assign({}, homeTeam().players, awayTeam().players)

const numPointsScored = playerName => players()[playerName].points

const shoeSize = playerName => players()[playerName].shoe

function teamColors(tName) {
    const teams = [homeTeam(), awayTeam()]
    const rightTeam = teams.find(team => team.teamName === tName)
    return rightTeam.colors
}

const teamNames = () => [homeTeam().teamName, awayTeam().teamName]

function playerNumbers(tName) {
    let playersNums = []
    if(homeTeam().teamName === tName) {
        Object.entries(homeTeam().players).map(player => playersNums.push(player[1].number))
    } else {
        Object.entries(awayTeam().players).map(player => playersNums.push(player[1].number))
    }
    return playersNums
}

const playerStats = playerName => players()[playerName]

function bigShoeRebounds() {
    let game = gameObject()
    let maxShoeSize = 0
    let rebounds = 0
    for (let team in game) {
        let players = game[team].players;
        for (let player in players) {
            if (players[player].shoe > maxShoeSize) {
                maxShoeSize = players[player].shoe
                rebounds = players[player].rebounds
            }

        }
    }
    return rebounds
}


/**************** BONUS QUESTIONS ****************/

function mostPointsScored() {
    let game = gameObject()
    let maxPointsScored = 0
    let playerName = ''
    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            if (players[player].points > maxPointsScored) {
                maxPointsScored = players[player].points
                playerName = player
            }
        }
    }
    return playerName
}

function winningTeam() {
    let game = gameObject()
    let teams = []

    for (let team in game) {

        //every time loop goes to different team, it creates currentTeam object
        //and sets current teamName as value of new objects's teamName 
        let currentTeam = { teamName: game[team].teamName, teamScore: 0 }
        let players = game[team].players

        //add all players scores in same team to new object's teamScore
        for (let player in players) {
            currentTeam.teamScore += players[player].points
        }
        teams.push(currentTeam)
    }

    let winner = ''
    let maxPoints = 0
    for (let team in teams) {
        if (teams[team].teamScore > maxPoints) {
            winner = teams[team].teamName
            maxPoints = teams[team].teamScore
        }
    }
    return winner
}

function playerWithLongestName() {
    let game = gameObject()
    let longestName = ''

    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            if (player.length > longestName.length) {
                longestName = player
            }
        }
    }
    return longestName
}

/**************** SUPER BONUS *****************/

function doesLongNameStealATon() {

    const longestNamePlayer = playerWithLongestName()
    let game = gameObject()
    let longestNamePlayerSteals = 0
    let mostSteals = 0

    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            debugger
            if (player === longestNamePlayer) {
                longestNamePlayerSteals = players[player].steals
            } else if (players[player].steals > mostSteals) {
                mostSteals = players[player].steals
            }

        }
    }
    return longestNamePlayerSteals > mostSteals
}
