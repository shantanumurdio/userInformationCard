const storedInfo = localStorage.getItem("userStoreInfo");

if (storedInfo) {
  const userInfo = JSON.parse(storedInfo);
  document.getElementById("first-name").textContent = userInfo.firstName;
  document.getElementById("last-name").textContent = userInfo.lastName;
  document.getElementById("country").textContent = userInfo.country;
  document.getElementById("phoneNumber").textContent = userInfo.phoneNumber;
  document.getElementById("state").textContent = userInfo.state;
  document.getElementById("city").textContent = userInfo.city;
  document.getElementById("village").textContent = userInfo.village;
}

function storeUserInfo() {
  const firstName = prompt("Enter your first name");
  const lastName = prompt("Enter your last name");
  const country = prompt("Enter your country");
  const phoneNumber = prompt("Enter your phone number");
  const state = prompt("Enter your state");
  const city = prompt("Enter your city");
  const village = prompt("Enter your village");

  const userData = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  localStorage.setItem("userStoreInfo", JSON.stringify(userData));

  document.getElementById("first-name").textContent = userData.firstName;
  document.getElementById("last-name").textContent = userData.lastName;
  document.getElementById("country").textContent = userData.country;
  document.getElementById("phoneNumber").textContent = userData.phoneNumber;
  document.getElementById("state").textContent = userData.state;
  document.getElementById("city").textContent = userData.city;
  document.getElementById("village").textContent = userData.village;
}

storeUserInfo();