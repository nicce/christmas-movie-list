const calendarContainer = document.querySelector(".container");

const calendarDays = 24;



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