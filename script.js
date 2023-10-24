document.addEventListener("DOMContentLoaded", function () {
    const addNoteButton = document.getElementById("addNoteButton");
    const notesContainer = document.getElementById("notesContainer");
    let noteCount = 0;

    function createNote() {
        if (noteCount >= 3) {
            alert("You can only add up to three notes.");
            return;
        }

        const note = document.createElement("div");
        note.className = "note";
        noteCount++;

        const deleteNoteButton = document.createElement("span");
        deleteNoteButton.className = "delete-note-button";
        deleteNoteButton.innerHTML = "X";

        deleteNoteButton.addEventListener("click", () => {
            notesContainer.removeChild(note);
            noteCount--;
        });

        const noteContent = document.createElement("div");
        noteContent.className = "note-content";
        const reminderInput = document.createElement("input");
        reminderInput.type = "text";
        reminderInput.placeholder = "Enter a reminder";

        const addReminderButton = document.createElement("button");
        addReminderButton.innerHTML = "Add Reminder";

        addReminderButton.addEventListener("click", () => {
            const reminderText = reminderInput.value.trim();
            if (reminderText !== "") {
                const reminder = document.createElement("div");
                reminder.innerHTML = `<input type="checkbox" class="checkbox"> ${reminderText}`;
                noteContent.appendChild(reminder);
                reminderInput.value = "";
            }
        });

        noteContent.appendChild(reminderInput);
        noteContent.appendChild(addReminderButton);

        note.appendChild(deleteNoteButton);
        note.appendChild(noteContent);

        notesContainer.appendChild(note);
    }

    addNoteButton.addEventListener("click", createNote);
});
