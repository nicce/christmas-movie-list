const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const calendarMap = {
    1: "Love hard (Netflix)",
    2: "A boy called Christmas (Netflix)",
    3: "Home Alone (Apple tv)",
    4: "The noel diary (Netflix)",
    5: "Love Actually (Viaplay)",
    6: "Spirited (Apple +)",
    7: "Christmas under wraps (Netflix)",
    8: "Christmas story christmas (HBO)",
    9: "Klaus (Netflix)",
    10: "Home Alone 2 (Apple tv)",
    11: "Last Christmas (Viaplay)",
    12: "Christmas Chronicles (Netflix)",
    13: "Christmas Chronicles 2 (Netflix)",
    14: "Christmas Chronicles 3 (Netflix)",
    15: "A castle for christmas (Netflix)",
    16: "The family stone (Viaplay)",
    17: "The night before (Apple tv)",
    18: "Every other holiday (Viaplay)",
    19: "Jingle Jangle: A christmas journey",
    20: "8-bit christmas (HBO Max)",
    21: "Single all the way (Netflix",
    22: "Office christmas party (Amazon prime)",
    23: "Your christmas or mine (Amazon Prime)",
    24: "National Lampoon's Christmas Vacation (Apple tv)",
}

const openDoor = (nbr, event) => {
    event.target.textContent = calendarMap[nbr];
    event.target.style.opacity = "100";
    event.target.style.backgroundColor = "saddlebrown";
    event.target.style.alignItems = "center";
}

for(let i = 0; i  < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    courseNumber = i + 1;
    calendarDoorText.addEventListener("click", openDoor.bind(null,  courseNumber));
}