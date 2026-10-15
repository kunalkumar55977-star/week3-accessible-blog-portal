// Mobile navigation and article search. Uses native controls and clear status feedback.
(() => {
  "use strict";
  const menuButton = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const searchForm = document.querySelector("#search-form");
  const searchInput = document.querySelector("#search-input");
  const status = document.querySelector("#search-status");
  const emptyState = document.querySelector("#empty-state");
  const cards = Array.from(document.querySelectorAll(".article-card"));
  const year = document.querySelector("#year");

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && nav) {
    const setMenuOpen = open => {
      menuButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };
    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 620) setMenuOpen(false);
    });
  } else {
    console.warn("Navigation toggle was not initialised: required elements are missing.");
  }

  if (searchForm && searchInput && status && emptyState && cards.length) {
    const filterCards = () => {
      const rawQuery = searchInput.value.trim();
      const query = rawQuery.toLocaleLowerCase();
      let count = 0;
      cards.forEach(card => {
        const text = (card.textContent + " " + (card.dataset.keywords || "")).toLocaleLowerCase();
        const matches = text.includes(query);
        card.hidden = !matches;
        if (matches) count += 1;
      });
      status.textContent = query
        ? `${count} ${count === 1 ? "article" : "articles"} found for "${rawQuery}".`
        : `Showing all ${count} articles.`;
      emptyState.hidden = count !== 0;
    };
    searchForm.addEventListener("submit", event => {
      event.preventDefault();
      filterCards();
    });
    searchInput.addEventListener("input", filterCards);
    document.querySelectorAll("[data-query]").forEach(link => {
      link.addEventListener("click", () => {
        searchInput.value = link.dataset.query || "";
        filterCards();
      });
    });
  } else {
    console.warn("Article search was not initialised: required elements are missing.");
  }
})();
