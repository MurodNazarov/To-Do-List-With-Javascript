window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      alert("Please fill in the");
      return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("tasks");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delate_el = document.createElement("button");
    task_delate_el.classList.add("delate");
    task_delate_el.innerHTML = "Delate";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delate_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    //Buttons Function
    //Edit Button
    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerHTML.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute = "readonly";
        task_edit_el.innerText = "Edit";
      }
    });

    //Delate Button
    task_delate_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
