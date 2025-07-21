---
layout: page
permalink: /publications/
title: publications
description: > #publications by categories
sections:
  - bibquery: "@article"
    text: "Papers"
  - bibquery: "@misc"
    text: "Talks"
  - bibquery: "@inproceedings"
    text: "Posters"
years: [2025,2024,2023, 2022, 2021]
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<style>
#pub-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: var(--global-bg-color);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  max-width: 350px;
}
#pub-controls label {
  font-weight: 500;
  color: var(--global-text-color);
  margin-right: 0.5rem;
}
#sort-mode {
  padding: 0.4rem 1.2rem 0.4rem 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--global-divider-color);
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 1rem;
  transition: border-color 0.2s;
}
#sort-mode:focus {
  outline: none;
  border-color: var(--global-theme-color);
}
#publications-list {
  margin-top: 1.5rem;
}
.publication {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 1.2rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.publication:hover {
  border-color: var(--global-theme-color);
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
.publication .pub-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 0.2rem;
  display: block;
}
.publication .pub-authors {
  color: var(--global-text-color-light);
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  display: block;
}
.publication .pub-year {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin-right: 1.2rem;
}
.publication .pub-topic {
  font-size: 0.95rem;
  color: var(--global-theme-color);
  background: rgba(180,9,172,0.07);
  border-radius: 4px;
  padding: 0.1rem 0.5rem;
  margin-left: 0.5rem;
}
@media (max-width: 600px) {
  #pub-controls {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.5rem;
    max-width: 100%;
  }
  .publication {
    padding: 1rem 0.7rem;
  }
}
#publications-list h3 {
  color: var(--global-theme-color);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}
</style>

<div id="pub-controls">
  <label for="sort-mode">Sort by:</label>
  <select id="sort-mode">
    <option value="chronological">Chronological</option>
    <option value="topic">Topic</option>
  </select>
</div>

<div id="publications-list">
  {% bibliography --template publications %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('sort-mode');
  const pubs = Array.from(document.querySelectorAll('.publication'));
  const pubList = document.getElementById('publications-list');

  function renderChronological() {
    pubs.sort((a, b) => b.dataset.year.localeCompare(a.dataset.year));
    pubList.innerHTML = '';
    pubs.forEach(pub => pubList.appendChild(pub));
  }

  function renderByTopic() {
    // Group by topic
    const topics = {};
    pubs.forEach(pub => {
      const topic = pub.dataset.topic || 'Other';
      if (!topics[topic]) topics[topic] = [];
      topics[topic].push(pub);
    });
    // Sort topics alphabetically, and pubs within by year
    pubList.innerHTML = '';
    Object.keys(topics).sort().forEach(topic => {
      const header = document.createElement('h3');
      header.textContent = topic;
      pubList.appendChild(header);
      topics[topic].sort((a, b) => b.dataset.year.localeCompare(a.dataset.year));
      topics[topic].forEach(pub => pubList.appendChild(pub));
    });
  }

  select.addEventListener('change', function() {
    if (select.value === 'chronological') {
      renderChronological();
    } else {
      renderByTopic();
    }
  });

  // Initial render
  renderChronological();
});
</script>
