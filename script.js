
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("captcha").innerText = captcha;
  }
  
  window.onload = generateCaptcha;
  function validateEmail() {
      const email = document.getElementById("email").value;
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (pattern.test(email)) {
        alert("Valid email!");
      } else {
        alert("Invalid email format!");
      }
    }
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
    
      const taskList = document.getElementById("taskList");
    
      const li = document.createElement("li");
      li.textContent = taskText;
    
    
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
    
      
      li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        taskList.removeChild(li);
      });
    
      taskList.appendChild(li);
      taskInput.value = "";
    }
    