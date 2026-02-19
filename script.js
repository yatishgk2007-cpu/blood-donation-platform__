// Firebase code is commented out because it is not used
// and was causing API key errors.

/*
var firebaseConfig = {
  apiKey: "AIzaSyDIs6x2tbfYohMYUr6J4ZEGuudo4yinu",
  authDomain: "blood-donation-eb85d.firebaseapp.com",
  databaseURL: "https://blood-donation-eb85d-default-rtdb.firebaseio.com",
  projectId: "blood-donation-eb85d",
  storageBucket: "blood-donation-eb85d.appspot.com",
  messagingSenderId: "944961651310",
  appId: "1:944961651310:web:30c280a6ca5454c00cdc7f"
};

firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.database();
*/

let activeInputId = null;

/* OPEN / CLOSE DONOR MODAL */
function openModal() {
  document.getElementById("donorModal").style.display = "flex";
  document.getElementById("successMessage").style.display = "none";
}

function closeModal() {
  document.getElementById("donorModal").style.display = "none";
}

/* BLOOD GROUP CHART */
function openBloodChart(inputId) {
  activeInputId = inputId;
  document.getElementById("bloodChartModal").style.display = "flex";
}

function closeBloodChart() {
  document.getElementById("bloodChartModal").style.display = "none";
}

function selectBloodGroup(group) {
  document.getElementById(activeInputId).value = group;
  closeBloodChart();
}

/* REGISTER DONOR */
function registerDonor() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const bloodGroup = document.getElementById("bloodGroup").value.trim();
  const city = document.getElementById("city").value.trim();

  if (!name || !phone || !bloodGroup || !city) {
    alert("Please fill all fields");
    return;
  }

  // SHOW SUCCESS MESSAGE
  document.getElementById("showName").textContent = name;
  document.getElementById("showBlood").textContent = bloodGroup;
  document.getElementById("showCity").textContent = city;

  document.getElementById("successMessage").style.display = "block";
}
function addRequest() {
  const name = document.getElementById("reqName").value.trim();
  const blood = document.getElementById("reqBlood").value.trim();
  const city = document.getElementById("reqCity").value.trim();
  const phone = document.getElementById("reqPhone").value.trim();

  if (!name || !blood || !city || !phone) {
    alert("Please fill all fields");
    return;
  }

  document.getElementById("requestMessage").style.display = "block";

  document.getElementById("reqName").value = "";
  document.getElementById("reqBlood").value = "";
  document.getElementById("reqCity").value = "";
  document.getElementById("reqPhone").value = "";
}
