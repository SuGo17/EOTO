//---------------------------------------------------signup-login-------------------------------------------------

const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");
const signupLogin = document.querySelector(".signup-login");
const signupTitle = document.querySelector(".signup-title");
const loginTitle = document.querySelector(".login-title");
const overlay = document.querySelector(".overlay");
const slCloseBtn = document.querySelector(".sl-close");

const signupChange = () => {
  signupTitle.classList.remove("sl-active");
  signupTitle.classList.add("sl-active");
  loginTitle.classList.remove("sl-active");
  signupLogin.style.display = "block";
  signupForm.style.display = "flex";
  loginForm.style.display = "none";
};
signup?.addEventListener("click", (e) => {
  e.preventDefault();
  signupChange();
  overlay.style.display = "block";
  slCloseBtn.style.display = "block";
});
signupTitle?.addEventListener("click", signupChange);
const loginChange = () => {
  loginTitle.classList.remove("sl-active");
  loginTitle.classList.add("sl-active");
  signupTitle.classList.remove("sl-active");
  signupLogin.style.display = "block";
  loginForm.style.display = "flex";
  signupForm.style.display = "none";
  signupLogin.style.maxHeight = "500px";
  signupLogin.style.height = "70%";
};
login?.addEventListener("click", (e) => {
  e.preventDefault();
  loginChange();
  overlay.style.display = "block";
  slCloseBtn.style.display = "block";
});
loginTitle?.addEventListener("click", loginChange);
const closeSL = () => {
  signupLogin.style.display = "none";
  slCloseBtn.style.display = "none";
  overlay.style.display = "none";
};
slCloseBtn?.addEventListener("click", closeSL);
// -------------------------------------------------learn-teach------------------------------------------------
const learnBtn = document.querySelector(".learn-btn");
const teachBtn = document.querySelector(".teach-btn");
const learnTeach = document.querySelector(".learn-teach");
const learnForm = document.querySelector(".learn-form");
const teachForm = document.querySelector(".teach-form");
const teachTitle = document.querySelector(".teach-form-title");
const learnTitle = document.querySelector(".learn-form-title");
const learnCloseBtn = document.querySelector(".lt-close");
//prettier-ignore
const learnChange = () => {
  if (
    !learnBtn || !teachBtn || !learnTeach || !learnForm || !teachForm || !teachTitle || !learnTitle || !learnCloseBtn
  )
    return;
  learnTitle.classList.remove("lt-active");
  learnTitle.classList.add("lt-active");
  teachTitle.classList.remove("lt-active");
  learnTeach.style.display = "block";
  learnForm.style.display = "flex";
  teachForm.style.display = "none";
};
const teachChange = () => {
  //prettier-ignore
  if (
    !learnBtn || !teachBtn || !learnTeach || !learnForm || !teachForm || !teachTitle || !learnTitle || !learnCloseBtn
  )
    return;
  teachTitle.classList.remove("lt-active");
  teachTitle.classList.add("lt-active");
  learnTitle.classList.remove("lt-active");
  learnTeach.style.display = "block";
  teachForm.style.display = "flex";
  learnForm.style.display = "none";
};
teachBtn?.addEventListener("click", () => {
  teachChange();
  overlay.style.display = "block";
  learnCloseBtn.style.display = "block";
});
learnBtn?.addEventListener("click", () => {
  learnChange();
  overlay.style.display = "block";
  learnCloseBtn.style.display = "block";
});

const closeLT = () => {
  overlay.style.display = "none";
  if (!learnTeach || !learnCloseBtn) return;
  learnTeach.style.display = "none";
  learnCloseBtn.style.display = "none";
};

learnTitle?.addEventListener("click", learnChange);
teachTitle?.addEventListener("click", teachChange);
learnCloseBtn?.addEventListener("click", closeLT);

// ------------------------------------thank-you----------------------------------------------------------

const learnSubmit = document.querySelector(".learn-form-btn");
const teachSubmit = document.querySelector(".teach-form-btn");
const thanks = document.querySelector(".reg-thanks");
const tCLoseBtn = document.querySelector(".thanks-close");
const soi = document.querySelector("#soi");
const soe = document.querySelector("#soe");
const mol = document.querySelector("#mol");
const mot = document.querySelector("#mot");
const lLocation = document.querySelector("#l-location");
const tLocation = document.querySelector("#t-location");

const displayThanks = (e) => {
  //prettier-ignore
  if (
    !learnSubmit || !teachSubmit || !thanks || !tCLoseBtn || !soi || !soe || !mol || !mot || !lLocation ||!tLocation
  )
    return;
  e.preventDefault();
  learnTeach.style.display = "none";
  thanks.style.display = "flex";
  learnCloseBtn.style.display = "none";
  tCLoseBtn.style.display = "block";
  soi.value =
    soe.value =
    mol.value =
    mot.value =
    lLocation.value =
    tLocation.value =
      "";
};

learnSubmit?.addEventListener("click", (e) => {
  displayThanks(e);
});
const thanksClose = () => {
  overlay.style.display = "none";
  if (!thanks || !tCLoseBtn) return;
  tCLoseBtn.style.display = "none";
  thanks.style.display = "none";
};
overlay?.addEventListener("click", () => {
  thanksClose();
  closeSL();
  closeLT();
});
tCLoseBtn?.addEventListener("click", () => {
  thanksClose();
});

teachSubmit?.addEventListener("click", (e) => {
  displayThanks(e);
});
