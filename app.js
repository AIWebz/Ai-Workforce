function updateCost(){
  const employees = document.getElementById("employeeRange").value;
  document.getElementById("employeeCount").innerText = "AI Employees: " + employees;
  const price = employees * 10;
  document.getElementById("cost").innerText = "$" + price + "/month";
}

function createWebsite(){
  const prompt = document.getElementById("promptBox").value;
  const employees = document.getElementById("employeeRange").value;
  const project = {
    prompt:prompt,
    employees:employees,
    pages:["Home","About","Contact"],
    status:"building"
  };
  localStorage.setItem("project",JSON.stringify(project));
  window.location = "dashboard.html";
}

function sendCommand(){
  const cmd = document.getElementById("chatInput").value;
  const feed = document.getElementById("activityFeed");
  const message = document.createElement("div");
  message.innerText = "Command received: " + cmd;
  feed.appendChild(message);
}

function startBuilder(){
  window.location="index.html";
}