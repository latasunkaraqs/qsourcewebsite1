export const setNavigation = () => {
  document.querySelectorAll(".navlinks button").forEach((nav) => {
    nav.addEventListener("click", function () {
      window.location.href = "/";
    });
  });
};

export const isMobileView = () => {
  return window.innerWidth <= 768;
};
