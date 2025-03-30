### Open-Closed principle
The classes should be open to extends but closed to modification.
### Example
Instead of handling many cases at one class:
```ts
class PlayerWoW {
	race: string
	playerName: string
  
	constructor (race: string, playerName: string) {
		this.race = race
		this.playerName = playerName
	}

	chooseRace() {
		switch (this.race) {
			case "orc":
				console.log("You chose orc!");
				break;
			case "elf":
				console.log("You chose elf!");
			break;
			case "dwarf":
				console.log("You chose dwarf!");
				break;
			default:
				console.log("Unknown race")
			break
		}
	}
}
```
Instead of that we could use a [[baseclass]] to extends depending on every case
```ts
class PlayerWow {
	playerName: string
	race: Orc | Elf | Dwarf
	  
	constructor( playerName: string, race: Orc | Elf | Dwarf ) {
		this.playerName = playerName
		this.race = race
	}
	
	chooseRace() {
		return this.race.chooseRace();
	}
}
	
class PlayerRace {
	chooseRace() {}
}
	  
class Orc extends PlayerRace {
	chooseRace() {
	return 'orc'
	}
}
	  
class Dwarf extends PlayerRace {
	chooseRace() {
		return 'Dwarf'
	}
}
	
class Elf extends PlayerRace {
	chooseRace() {
		return 'Elf'
	}
}
  ```