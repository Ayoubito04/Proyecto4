export const linkPage = (page, id) => {
  const link = document.getElementById(id);
  if (link) {
  link.addEventListener('click', () => {
  page();
  });
  } else {
  console.warn(`linkPage: Element with ID '${id}' not found`);
  }
  };
  