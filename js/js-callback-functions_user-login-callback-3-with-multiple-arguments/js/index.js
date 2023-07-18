console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function showWelcomeMessage() {
  console.log("Welcome ${userName}! You are logged in now as ${userRole}.");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(function showWelcomeMessage() {
  console.log("Welcome ${userName}! You are logged in now as ${userRole}.");
});
