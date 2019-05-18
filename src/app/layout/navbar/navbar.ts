import "./navbar.scss";
import { navigate } from "app/router";

import { bigLogo, smallFacebook, smallInstagram, rigthMenuArrow } from "assets/index";

import navbarLayout from "./navbar.handlebars";

const context = {
  bigLogo,
  smallFacebook,
  smallInstagram,
  rigthMenuArrow
};

export const navbar = document.createElement("nav");

function toggleNavbar() {
  toggleOverlay();
  navbar.classList.toggle("is-active");
  navbar.querySelectorAll("a").forEach(el => (el.tabIndex = el.tabIndex === 1 ? -1 : 1));
  const toggle = navbar.querySelector<HTMLElement>("#menu-trigger");
  toggle.toggleAttribute("aria-expanded");
  toggle.classList.toggle("is-active");
}

function initializeNavbar() {
  navbar.classList.add("navbar");
  navbar.id = "navbar";
  navbar.setAttribute("aria-label", "main navigation");
  const toggle = navbar.querySelector<HTMLElement>("#menu-trigger");
  addButtonlikeListeners(toggle);
}

function toggleOverlay() {
  const body = document.body;
  let overlay = document.getElementById("navbar__overlay");
  if (body.contains(overlay)) {
    body.removeChild(overlay);
  } else {
    createOverlay();
  }
}

function createOverlay() {
  const body = document.body;
  const overlay = document.createElement("div");
  overlay.id = "navbar__overlay";
  overlay.classList.add("navbar__overlay");
  addButtonlikeListeners(overlay);
  body.appendChild(overlay);
}

function addNavigationListeners() {
  const innerLinks = <HTMLCollectionOf<HTMLLinkElement>>document.getElementsByClassName("inner-link");
  for (const link of innerLinks) {
    link.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      manageNavigation(href, link);
    });
  }
}

function manageNavigation(destination: string, element: HTMLLinkElement) {
  if (destination !== null) {
    navigate(destination);
    toggleNavbar();
  } else {
    toggleSubmenu(element);
  }
}

function toggleSubmenu(element: HTMLLinkElement) {
  const submenu = element.parentNode.querySelector(".submenu");
  if (submenu !== null) submenu.classList.toggle("is-active");
}

function addButtonlikeListeners(element: HTMLElement) {
  element.addEventListener("click", function() {
    window.requestAnimationFrame(() => toggleNavbar());
  });
  element.addEventListener("keydown", function(e) {
    if (e.key === "Enter") window.requestAnimationFrame(() => toggleNavbar());
    if (e.key === "Escape" && navbar.classList.contains("is-active")) {
      window.requestAnimationFrame(() => toggleNavbar());
    }
  });
}

navbar.innerHTML = navbarLayout(context);
initializeNavbar();
window.requestAnimationFrame(() => addNavigationListeners());
