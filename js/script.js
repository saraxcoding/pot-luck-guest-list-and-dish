// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// only appears when the guest list is full
const assignButton = document.querySelector(".assign");
// targets the list that will populate with the guest's name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//clears out the input box
const clearInput = function () {
  guestInput.value = "";
};

//refactor, moved 3 lines of code from within event listener to own function scope
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//limit the guest list
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//select .assigned-items and add an array of potluck dishes
const assignItems = function () {
  const potluckItems = [
    "cookies",
    "fruit salad",
    "potato salad",
    "sun chips",
    "cucumber sandwiches",
    "meatballs",
    "sushi",
    "fried chicken",
    "garlic bread",
    "tiramisu",
    "caesar salad",
    "tamales"
  ];

  //select all elements within the guest list and loop through the potluck dishes array
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex]; //add the item from the potluckItems array at the index position of randomPotluckIndex
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem); //kept getting error messages because the last two lines of code were not within the loop

    potluckItems.splice(randomPotluckIndex, 1); //To prevent assigning duplicate items
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true; //add code to disable the button once the loop completes
});
