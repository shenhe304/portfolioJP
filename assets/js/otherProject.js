const currentPage = location.pathname.split('/').pop();

fetch('../assets/data/project.json')
  .then(res => res.json())
  .then(projects => {
    const currentProject = projects.find(p => p.url.endsWith(currentPage));
    if (!currentProject) return;

    const relatedProjects = projects.filter(p => currentProject.related.includes(p.id));
    const container = document.querySelector('.p-others__list');

    relatedProjects.forEach(project => {
      const div = document.createElement('div');
      div.classList.add('p-others__card');
      div.innerHTML = `
        <a href="${project.url}" class="p-others__link">
          <img src="${project.thumbnail}" alt="${project.title}" class="p-others__thumbnail" />
          <p class="p-others__project-title">${project.title}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load project.json", err));
