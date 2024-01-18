const rocks = [...document.querySelectorAll(".rock")];
let currentFriendlyCreature;
let currentHostileCreature;
let score = 0;

window.onload = function () {
	startGame();
}

function startGame() {
	setInterval(createFriendlyCreature, 1000);
	setInterval(createHostileCreature, 1500);
}

function getRandomTile() {
	let tile = Math.floor(Math.random() * rocks.length);
	return tile;
}

function createFriendlyCreature() {
	if (currentFriendlyCreature) {
		currentFriendlyCreature.innerHTML = "";
	}

	let rock = getRandomTile();

	if (currentHostileCreature && currentHostileCreature.getAttribute("tile") == rock) {
		return;
	}

	currentFriendlyCreature = rocks[rock];
	
	let creature = document.createElement("img");
	creature.src = "./images/monty-mole.png";

	creature.addEventListener("click", () => {
		score += 10;
		document.getElementById("score").innerText = score.toString();
	})

	currentFriendlyCreature.appendChild(creature);
}

function createHostileCreature() {
	if (currentHostileCreature) {
		currentHostileCreature.innerHTML = "";
	}

	let rock = getRandomTile();

	if (currentFriendlyCreature && currentFriendlyCreature.getAttribute("tile") == rock) {
		return;
	}

	currentHostileCreature = rocks[rock];

	let creature = document.createElement("img");
	creature.src = "./images/piranha-plant.png";

	currentHostileCreature.appendChild(creature);
}