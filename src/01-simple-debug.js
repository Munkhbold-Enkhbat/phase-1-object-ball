// console.log('Simple debugging example running.')

// let x = 99
// console.log(x)

function numPointsScored(name) {
    let game = gameObject()

    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            if (player === name) {
                return players[player].points
            }
        }
    }
}

function shoeSize(name) {
    let game = gameObject()

    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            if (player === name) {
                return players[player].shoe
            }
        }
    }
}

function teamColors(tName) {
    let game = gameObject()

    for (let team in game) {
        let gTeam = game[team]
        if (gTeam.teamName === tName) {
            return gTeam.colors
        }
    }
}

function teamNames() {
    let game = gameObject()
    let arrTeams = []
    for (let team in game) {
        arrTeams.push(game[team].teamName)
    }
    return arrTeams
}

function playerNumbers(tName) {
    let game = gameObject()
    let pNums = [];
    for (let team in game) {
        if (game[team].teamName === tName) {
            let players = game[team].players
            for (let player in players) {
                pNums.push(players[player].number)
            }
        }
    }
    return pNums
}

function playerStats(playerName) {
    let game = gameObject()
    for (let team in game) {
        let players = game[team].players
        for (let player in players) {
            if (player === playerName) {
                return players[player]
            }
        }
    }
}

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
