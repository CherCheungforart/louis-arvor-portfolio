(() => {
  const groups = [{key:'china',name:'China',categories:['Research / Concept','Material / Process','Idea / Experiment']},{key:'france',name:'France',categories:['Research / Concept','Form / Exploration','Process / Outcome']}];
  const params = new URLSearchParams(location.search);
  const group = groups.find(g => g.key === params.get('collection')) || groups[0];
  const value = Number(params.get('project'));
  const index = Number.isInteger(value) && value >= 0 && value < 3 ? value : 0;
  const names = ['Project A','Project B','Project C'];
  const url = (g,i) => `project.html?collection=${g.key}&project=${i}`;
  document.title = `${names[index]} / ${group.name} — Louis Arvor`;
  document.querySelector('#project-name').textContent = names[index];
  document.querySelector('#project-no').textContent = `0${index+1}`;
  document.querySelector('#collection').textContent = `${group.name.toUpperCase()} / SELECTED WORK`;
  document.querySelector('#discipline').textContent = group.categories[index];
  const list = document.querySelector('#project-list');
  for (const g of groups) {
    const section = document.createElement('div'); section.className = 'nav-group';
    const label = document.createElement('p'); label.className = 'group-label'; label.textContent = g.name.toUpperCase(); section.append(label);
    names.forEach((name,i) => {
      const link = document.createElement('a'); link.className = 'project-link'; link.href = url(g,i); link.setAttribute('aria-label',`${g.name} — ${name}`);
      const number = document.createElement('span'); number.textContent = `0${i+1}`; link.append(number,document.createTextNode(name));
      if(g === group && i === index) link.setAttribute('aria-current','page');
      section.append(link);
    }); list.append(section);
  }
  const nextIndex = (index+1)%3, nextGroup = index === 2 ? groups[(groups.indexOf(group)+1)%groups.length] : group;
  document.querySelector('#next-project').href = url(nextGroup,nextIndex);
  document.querySelector('#next-name').textContent = names[nextIndex];
  const mobile = matchMedia('(max-width: 650px)');
  function showCurrentProject() {
    if (!mobile.matches) return;
    const current = list.querySelector('[aria-current="page"]');
    if (!current || list.scrollWidth <= list.clientWidth) return;
    const viewport = list.getBoundingClientRect(), item = current.getBoundingClientRect();
    const inset = 8;
    // Move only the collection index, preserving the reader's page position.
    if (item.left < viewport.left + inset) list.scrollLeft += item.left - viewport.left - inset;
    else if (item.right > viewport.right - inset) list.scrollLeft += item.right - viewport.right + inset;
  }
  requestAnimationFrame(showCurrentProject);
  document.fonts.ready.then(showCurrentProject);
  mobile.addEventListener('change', () => requestAnimationFrame(showCurrentProject));
})();
