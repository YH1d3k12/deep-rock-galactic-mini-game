// HTML elements
const rocks = [...document.querySelectorAll(".rock")];
const scoreCounter = document.getElementById("score");
// Core game counters
let score = 0;
let gameOver = false;
// Creature location
let currentFriendlyCreature;
let currentHostileCreature;
// Intervals functions
let friendlyCreatureInterval;
let hostileCreatureInterval;

window.onload = function () {
	startGame();
}

function startGame() {
	friendlyCreatureInterval = setInterval(createFriendlyCreature, 1000);
	hostileCreatureInterval = setInterval(createHostileCreature, 1500);
}
function stopGame() {
	removeClickEvents();
	clearInterval(friendlyCreatureInterval);
	clearInterval(hostileCreatureInterval);
}

function handleFriendlyCreatureClick() {
	score += 10;
	scoreCounter.innerText = score.toString();
}

function handleHostileCreatureClick() {
	gameOver = true;
	scoreCounter.innerText = "GAME OVER: " + score.toString();
	stopGame();
}
function getRandomTile() {
	return tile = Math.floor(Math.random() * rocks.length);
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

	creature.addEventListener("click", handleFriendlyCreatureClick);

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

	creature.addEventListener("click", handleHostileCreatureClick);

	currentHostileCreature.appendChild(creature);
}

function removeClickEvents() {
	if (currentFriendlyCreature) {
		currentFriendlyCreature.firstChild.removeEventListener("click", handleFriendlyCreatureClick);
	}

	if (currentHostileCreature) {
		currentHostileCreature.firstChild.removeEventListener("click", handleHostileCreatureClick);
	}
}