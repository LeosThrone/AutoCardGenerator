function compactNumber(num) {
  if (num < 1000) {
    return num;
  } else if (num >= 1000 && num < 1_000_000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num >= 1_000_000 && num < 1_000_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000_000_000 && num < 1_000_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  } else if (num >= 1_000_000_000_000 && num < 1_000_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(1) + "T";
  }
}

const title = document.getElementById("title");
const cName = document.getElementById("cName");
const views = document.getElementById("views");
const monthsOld = document.getElementById("monthsOld");
const duration = document.getElementById("duration");
const thumbnail = document.getElementById("thumbnail");

function resetFields(){
  title.value = "";
  cName.value = "";
  views.value = "";
  monthsOld.value = "";
  duration.value = "";
  thumbnail.value = "";
}

function createCard(){
  let html = `<div class="temp">
                <div class="imgcont">
                    <img src="${thumbnail.value}">
                    <div class="duration">${duration.value}</div>
                </div>
                <ul>
                    <li>
                        <div class="title">${title.value}</div>
                    </li>
                    <li>
                        <div class="details">
                            <ul class="content flex">
                                <li>${cName.value}</li>
                                <li>• ${compactNumber(views.value)} •</li>
                                <li>${monthsOld.value} months ago</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>`
  document.getElementById("cardsContainer").insertAdjacentHTML("afterend", html)

  resetFields();
}
