const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

/*----------------------------------------------------------------------------------------*/

const btn_daily = document.getElementById("btn_daily");
const btn_weekly = document.getElementById("btn_weekly");
const btn_monthly = document.getElementById("btn_monthly");

const text_image0 = document.getElementById("text_image0");
const title0 = document.getElementById("title0");
const last_week0 = document.getElementById("last_week0");

const text_image1 = document.getElementById("text_image1");
const title1 = document.getElementById("title1");
const last_week1 = document.getElementById("last_week1");

const text_image2 = document.getElementById("text_image2");
const title2 = document.getElementById("title2");
const last_week2 = document.getElementById("last_week2");

const text_image3 = document.getElementById("text_image3");
const title3 = document.getElementById("title3");
const last_week3 = document.getElementById("last_week3");

const text_image4 = document.getElementById("text_image4");
const title4 = document.getElementById("title4");
const last_week4 = document.getElementById("last_week4");

const text_image5 = document.getElementById("text_image5");
const title5 = document.getElementById("title5");
const last_week5 = document.getElementById("last_week5");

const text_image = [
  text_image0,
  text_image1,
  text_image2,
  text_image3,
  text_image4,
  text_image5,
];
const title = [title0, title1, title2, title3, title4, title5];
const last_week = [
  last_week0,
  last_week1,
  last_week2,
  last_week3,
  last_week4,
  last_week5,
];

/*----------------------------------------------------------------------------------------*/

btn_daily.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    text_image[i].innerText = data[i].title;
    title[i].innerText = data[i].timeframes.daily.current + "hrs";
    last_week[i].innerText =
      "Last Day-" + data[i].timeframes.daily.previous + "hrs";
  }
  btn_daily.style.color = "white";
  btn_weekly.style.color = "var(--PaleBlue)";
  btn_monthly.style.color = "var(--PaleBlue)";
});
btn_weekly.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    text_image[i].innerText = data[i].title;
    title[i].innerText = data[i].timeframes.weekly.current + "hrs";
    last_week[i].innerText =
      "Last Day-" + data[i].timeframes.weekly.previous + "hrs";
  }
  btn_daily.style.color = "var(--PaleBlue)";
  btn_weekly.style.color = "white";
  btn_monthly.style.color = "var(--PaleBlue)";
});
btn_monthly.addEventListener("click", () => {
  for (let i = 0; i < data.length; i++) {
    text_image[i].innerText = data[i].title;
    title[i].innerText = data[i].timeframes.monthly.current + "hrs";
    last_week[i].innerText =
      "Last Day-" + data[i].timeframes.monthly.previous + "hrs";
  }
  btn_daily.style.color = "var(--PaleBlue)";
  btn_weekly.style.color = "var(--PaleBlue)";
  btn_monthly.style.color = "white";
});

/*----------------------------------------------------------------------------------------*/

for (let i = 0; i < data.length; i++) {
  text_image[i].innerText = data[i].title;
  title[i].innerText = data[i].timeframes.daily.current + "hrs";
  last_week[i].innerText =
    "Last Day-" + data[i].timeframes.daily.previous + "hrs";
}
btn_daily.style.color = "white";
btn_weekly.style.color = "var(--PaleBlue)";
btn_monthly.style.color = "var(--PaleBlue)";
