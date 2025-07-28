import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  const notifyContainer = document.getElementById("notifyContainer");
  const addButton = document.getElementById("addNotify");

  let counter = 1;

  addButton?.addEventListener("click", function () {
    addNotify(`${counter++} notify`, `This is the ${counter} notify`);
  });

  setTimeout(() => {
    addNotify("Welcome notify!", "Some text for notify demo");
  }, 500);

  function addNotify(title: string, message: string) {
    const notify = document.createElement("div");
    notify.className = "notify enter";
    notify.innerHTML = `
                    <div class="notify-title">${title}</div>
                    <div class="notify-message">${message}</div>
                    <div class="notify-progress"></div>
                `;

    notifyContainer?.appendChild(notify);

    requestAnimationFrame(() => {
      notify.classList.add("enter-active");
      notify.classList.remove("enter");

      setTimeout(() => {
        notify.classList.add("progress-active");
      }, 50);
    });

    setTimeout(() => {
      removeNotify(notify);
    }, 5000);
  }

  function removeNotify(notify: HTMLElement) {
    notify.classList.add("exit");
    notify.classList.remove("enter-active", "progress-active");

    requestAnimationFrame(() => {
      notify.classList.add("exit-active");
      notify.classList.remove("exit");

      notify.addEventListener("transitionend", function () {
        notify.remove();
      });
    });
  }
});
