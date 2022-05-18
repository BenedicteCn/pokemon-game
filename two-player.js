// This is a class

console.log("                                  ,\'\\\r\n    _.----.        ____         ,\'  _\\   ___    ___     ____\r\n_,-\'       `.     |    |  \/`.   \\,-\'    |   \\  \/   |   |    \\  |`.\r\n\\      __    \\    \'-.  | \/   `.  ___    |    \\\/    |   \'-.   \\ |  |\r\n \\.    \\ \\   |  __  |  |\/    ,\',\'_  `.  |          | __  |    \\|  |\r\n   \\    \\\/   \/,\' _`.|      ,\' \/ \/ \/ \/   |          ,\' _`.|     |  |\r\n    \\     ,-\'\/  \/   \\    ,\'   | \\\/ \/ ,`.|         \/  \/   \\  |     |\r\n     \\    \\ |   \\_\/  |   `-.  \\    `\'  \/|  |    ||   \\_\/  | |\\    |\r\n      \\    \\ \\      \/       `-.`.___,-\' |  |\\  \/| \\      \/  | |   |\r\n       \\    \\ `.__,\'|  |`-._    `|      |__| \\\/ |  `.__,\'|  | |   |\r\n        \\_.-\'       |__|    `-._ |              \'-.|     \'-.| |   |\r\n                                `\'                            \'-._|");

console.log("Welcome to the fight between : ")

class OpenSourcePocketFightingAnimal {
  // Classes always have constructors
  constructor(name, moves, maxHitPoints) {
    this.name = name
    this.moves = moves
    this.hitPoints = maxHitPoints
    this.maxHitPoints = maxHitPoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.hitPoints <= 0
  }
  toString() {
    return `${this.name} (${this.hitPoints}/${this.maxHitPoints})`
  }
  takeDamage(hit) {
    this.hitPoints -= hit
  }

  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    if(this.criticalHit()){
      opponent.takeDamage(move.hit+10)
      console.log(`CRITICAL !! + 10 damage points
      .
      ,O,
     ,OOO,
'oooooOOOOOooooo'
 'OOOOOOOOOOO'
   'OOOOOOO'
   OOOO'OOOO
  OOO'   'OOO
 O'         'O`)

    }else{
      opponent.takeDamage(move.hit)
    }

    console.log(opponent.toString())
  }
  criticalHit(){
    return Math.random()>0.8 ? true : false
  }

  chanceToRegenerate(){
    if(Math.random()>0.8){
      console.log(this.name,`-->REGENERATION !
      \r\n:.  .:\r\n.\'  \'.\r\n|    |\r\n|    |\r\n'----\'\r\n DRUG
      `)
      if(this.hitPoints<this.maxHitPoints-10){
          console.log('+10 health points')
          this.hitPoints+=10
      }else{
        console.log('+5 health points')
        this.hitpoints+=5
      }
    }
  }


}

// We can extend OpenSourcePocketFightingAnimal with a specific species
class Thundermouse extends OpenSourcePocketFightingAnimal {
  constructor(moves, maxHitPoints) {
    super('Pikachu', moves, maxHitPoints)
  }
}

const myOspfa = new Thundermouse(
  [
    { name: 'Flash', hit: 25 },
    { name: 'Thunder', hit: 15 },
    { name: 'Thunderbolt', hit: 23 },
  ],
  50
)
// or we can use the main class
const theirOspfa = new OpenSourcePocketFightingAnimal(
  'Bulbasaur',
  [
    { name: 'Seed Bomb', hit: 20 },
    { name: 'Sludge Bomb', hit: 35 },
    { name: 'Power Whip', hit: 5 },
  ],
  60
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("           \\:.             .:\/\r\n        \\``._________.\'\'\/ \r\n         \\             \/ \r\n .--.--, \/ .\':.   .\':. \\\r\n\/__:  \/  | \'::\' . \'::\' |\r\n   \/ \/   |`.   ._.   .\'|\r\n  \/ \/    |.\'         \'.|\r\n \/___-_-,|.\\  \\   \/  \/.|\r\n      \/\/ |\'\'\\.;   ;,\/ \'|\r\n      `==|:=         =:|\r\n         `.          .\'\r\nl42        :-._____.-:\r\n          `\'\'       `\'\'")

console.log(' Player One Ospfa '.padStart(30, '=').padEnd(40, '='))
console.log(myOspfa)

console.log("and")


console.log("             `;,;.;,;.;.\'\r\n              ..:;:;::;: \r\n        ..--\'\'\' \'\' \' \' \'\'\'--.  \r\n      \/\' .   .\'        \'.   .`\\\r\n     | \/    \/            \\   \'.|\r\n     | |   :             :    :|\r\n   .\'| |   :             :    :|\r\n ,: \/\\ \\.._\\ __..===..__\/_..\/ \/`.\r\n|\'\' |  :.|  `\'          `\'  |.\'  ::.\r\n|   |  \'\'|    :\'\';          | ,  `\'\'\\\r\n|.:  \\\/  | \/\'-.`\'   \':\'.-\'\\ |  \\,   |\r\n| \'  \/  \/  | \/ |...   | \\ |  |  |\';\'|\r\n \\ _ |:.|  |_\\_|`.\'   |_\/_|  |.:| _ |\r\n\/,.,.|\' \\__       . .      __\/ \'|.,.,\\\r\n     | \':`.`----._____.---\'.\'   |\r\nl42   \\   `:\"\"\"-------\'\"\"\' |   |\r\n       \',-,-\',             .\'-=,=,")

console.log(' Player Two Ospfa '.padStart(30, '=').padEnd(40, '='))
console.log(theirOspfa)

function promptUserForMove(player, opponent) {
  rl.question(
    `Which move would you like ${player.toString()} to use against ${opponent.toString()}?
  Options are:
    ${player.moves.map(({ name }, i) => `${i}. ${name}`).join('\n  ')}
  Indicate 0-${player.moves.length - 1}.
  > `,
    function (index) {
      // The user has chosen a move — we'll now perform that move.
      player.useMoveAgainstOpponent(index, opponent)

      if (opponent.isFainted()) {
        // If the opponent has fainted, we win
        console.log(
          `${player.toString()} sufficiently injured ${opponent.toString()}!`
        )
      } else {
        // If the opponent hasn't fainted, they can now move
        if(opponent.hitPoints!=opponent.maxHitPoints){
          opponent.chanceToRegenerate()
        }
        promptUserForMove(opponent, player)
      }
    }
  )
}

promptUserForMove(myOspfa, theirOspfa)
