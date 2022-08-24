const themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("click", (evt) => {
  document.body.classList.toggle("dark-theme");
});

const form = document.querySelector(".github-card-form");
const input = document.querySelector(".github-card-input");
const img = document.querySelector(".github-card-img");
const userName = document.querySelector(".github-card-username");
const userNameLink = document.querySelector(".github-card-username-link");
const dateJoined = document.querySelector(".github-card-joined");
const bioInfo = document.querySelector(".github-card-user-bio");
const repoCount = document.querySelector(".github-card-repos");
const followerCount = document.querySelector(".github-card-followers");
const followingCount = document.querySelector(".github-card-following");
const locationUser = document.querySelector(".github-card-link-location");
const twitter = document.querySelector(".github-card-link-twitter");
const github = document.querySelector(".github-card-link-github");
const company = document.querySelector(".github-card-link-company");
const linkArr = [company, github, twitter, locationUser];
const emptyMessage = "Not Available";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

async function updateUser(url) {
  let response = await fetch(url);
  let data = await response.json();

  if (response.status >= 400) {
    form.classList.add("error");
    return;
  }

  let date = new Date(data.created_at);
  let str = `Joined ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  dateJoined.textContent = str
  img.style.backgroundImage = `url(${data.avatar_url})`;
  img.style.backgroundSize = "cover";
  userName.textContent = data.name || data.login;
  userNameLink.textContent = "@" + data.login;
  bioInfo.textContent = data.bio || "This profile has no bio";
  repoCount.textContent = data.public_repos;
  followerCount.textContent = data.followers;
  followingCount.textContent = data.following;

  locationUser.textContent = data.location || emptyMessage;
  twitter.textContent = data.twitter || emptyMessage;
  twitter.setAttribute("href", data.twitter);
  github.textContent = data.blog || emptyMessage;
  github.setAttribute("href", data.blog);
  company.textContent = data.company || emptyMessage;
  company.setAttribute(
    "href",
    "https://github.com/" + data.company?.slice(1)
  ) || emptyMessage;
  console.log(data);

  linkArr.forEach((link) => {
    link.classList.remove("low-opacity");
    if (link.innerText === emptyMessage) {
      link.classList.add("low-opacity");
    }
  });
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  form.classList.remove("error");
  updateUser(`https://api.github.com/users/${input.value}`);
});

window.addEventListener("load", (evt) => {
  updateUser(`https://api.github.com/users/octocat`);
});
