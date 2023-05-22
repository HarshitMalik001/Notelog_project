document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form and note list elements
    const form = document.querySelector("form");
    const noteList = document.getElementById("note-list");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const title = document.getElementById("Notetitle").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const note = document.getElementById("note").value;
  
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>${note}</p>
      `;
  
      noteList.appendChild(noteElement);
  
      form.reset();
    });
  });
  
