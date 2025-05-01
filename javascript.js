
        // Original task management code
        function add() {
            let data = document.getElementById("task").value;
            if (data === "") {
                alert("Input area cannot be empty");
            } else {
                let ul = document.getElementById("taskList");
                let li = document.createElement("li");
                
                let taskText = document.createElement("span");
                taskText.textContent = data;
                
                let deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.className = "delete";
                deleteBtn.onclick = function () {
                    ul.removeChild(li);
                };
                
                li.appendChild(taskText);
                li.appendChild(deleteBtn);
                ul.appendChild(li);
                
                document.getElementById("task").value = ""; // Clear input field
            }
        }
        
        // Theme toggle functionality
        function toggleTheme() {
            const body = document.body;
            
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                localStorage.setItem('taskManagerTheme', 'light');
            } else {
                body.classList.add('dark-mode');
                localStorage.setItem('taskManagerTheme', 'dark');
            }
        }
        
        // Load saved theme preference
        window.onload = function() {
            const savedTheme = localStorage.getItem('taskManagerTheme');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }
        }
