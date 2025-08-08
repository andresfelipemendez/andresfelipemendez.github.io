/*
 * Simple JavaScript helper functions for the personal website.
 *
 * On the projects page this script fetches public repositories from
 * GitHub and renders them into the projects container. It sorts
 * repositories by stargazers count, hides forks and archives, and
 * displays key metadata like language and description.
 */

async function loadProjects() {
  const container = document.getElementById('projects');
  if (!container) return; // Only run on projects page

  try {
    const response = await fetch('https://api.github.com/users/andresfelipemendez/repos?per_page=100');
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    // Filter out forks and archived repositories
    const filtered = repos.filter(repo => !repo.fork && !repo.archived);
    // Sort by stargazers count descending
    filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);
    // Render each repository into the DOM
    filtered.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const title = document.createElement('h3');
      title.textContent = repo.name;
      card.appendChild(title);
      if (repo.description) {
        const desc = document.createElement('p');
        desc.textContent = repo.description;
        card.appendChild(desc);
      }
      const meta = document.createElement('p');
      meta.innerHTML = `Language: <strong>${repo.language || 'N/A'}</strong><br />⭐ ${repo.stargazers_count}`;
      card.appendChild(meta);
      const link = document.createElement('a');
      link.href = repo.html_url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'View on GitHub';
      card.appendChild(link);
      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Unable to load projects at this time.';
    container.appendChild(errorMsg);
  }
}

// Run the loader when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});