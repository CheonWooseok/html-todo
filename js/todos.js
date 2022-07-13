async function getTodos(id = "") {
  let todos = await fetcher("https://jsonplaceholder.typicode.com/todos/" + id);

  const todosContainer = document.getElementById("todosContainer");

  todos.map((todo) => {
    const todoWrapper = document.createElement("div");
    todoWrapper.className = "todoContainer";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = todo.completed;

    const content = document.createElement("div");
    content.className = "todoContent";
    content.textContent = todo.title;

    todoWrapper.appendChild(check);
    todoWrapper.appendChild(content);

    todosContainer.appendChild(todoWrapper);
  });
}

async function fetcher(url) {
  const res = await fetch(url).then((res) => res.json());

  return res;
}

function dateFormatter() {
  let today = new Date();

  const WEEKS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thirdday",
    "Friday",
    "Saturday",
  ];

  const MONTHES = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dateFormat = `${WEEKS[today.getDay()]}, ${today
    .getFullYear()
    .toString()
    .slice(2)} ${MONTHES[today.getMonth()]}`;
  console.log(dateFormat);
  document.getElementById("today").innerText = dateFormat;
}
