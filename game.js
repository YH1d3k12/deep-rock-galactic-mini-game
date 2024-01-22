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

function getRandomNumber(maxNum) {
	return num = Math.floor(Math.random() * maxNum);
}

function createFriendlyCreature() {
	// Removes creature from previous rock.
	if (currentFriendlyCreature) {
		currentFriendlyCreature.innerHTML = "";
	}

	// Places creature on rock.
	let rock = getRandomNumber(9);
	if (currentHostileCreature && currentHostileCreature.getAttribute("tile") == rock) {
		return;
	}
	currentFriendlyCreature = rocks[rock];

	// Creates creature.
	let creature = document.createElement("img");

	let type = getRandomNumber(4);
	switch (type) {
		case 0:
			creature.src = "./images/dwarfs/driller.png";
			break;
		case 1:
			creature.src = "./images/dwarfs/enginner.png";
			break;
		case 2:
			creature.src = "./images/dwarfs/gunner.png";
			break;
		case 3:
			creature.src = "./images/dwarfs/scout.png";
			break;
	}
	creature.addEventListener("click", handleFriendlyCreatureClick);

	currentFriendlyCreature.appendChild(creature);
}

function createHostileCreature() {
	// Removes creature from previous rock.
	if (currentHostileCreature) {
		currentHostileCreature.innerHTML = "";
	}

	// Places creature on rock.
	let rock = getRandomNumber(9);
	if (currentFriendlyCreature && currentFriendlyCreature.getAttribute("tile") == rock) {
		return;
	}
	currentHostileCreature = rocks[rock];

	// Creates creature.
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