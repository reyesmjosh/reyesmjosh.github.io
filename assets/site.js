const controls = document.querySelector('.archive-controls');
if (controls) {
  controls.hidden = false;
  const search = document.querySelector('#project-search');
  const category = document.querySelector('#project-category');
  const rows = [...document.querySelectorAll('.archive-row')];
  function filterProjects() {
    const query = search.value.trim().toLowerCase();
    let count = 0;
    for (const row of rows) {
      const matches = row.dataset.search.includes(query) && (category.value === 'all' || row.dataset.category === category.value);
      row.hidden = !matches;
      if (matches) count++;
    }
    document.querySelector('#result-count').textContent = `${count} of ${rows.length} projects`;
    document.querySelector('#empty-results').hidden = count !== 0;
  }
  search.addEventListener('input', filterProjects);
  category.addEventListener('change', filterProjects);
  filterProjects();
}
