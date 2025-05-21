const currentPage = location.pathname.split('/').pop(); // 例: project1.html

fetch('../assets/date/project.json') 
  .then(res => res.json())
  .then(projects => {
    const currentProject = projects.find(p => p.url.endsWith(currentPage));
    if (!currentProject) return;

    const relatedProjects = projects.filter(p => currentProject.related.includes(p.id));
    const container = document.getElementById('other-projects');

    relatedProjects.forEach(project => {
      const div = document.createElement('div');
      div.innerHTML = `
        <a href="${project.url}" style="text-align:center; text-decoration:none; color:inherit;">
          <img src="${project.thumbnail}" alt="${project.title}" style="width:150px; border-radius: 8px;" />
          <p style="margin-top:0.5rem;">${project.title}</p>
        </a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Failed to load project.json", err));
