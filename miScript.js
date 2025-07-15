document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('line1')) {
    const lines = [
      "¡Hola!",
      "Soy Belén, docente en Competencias Digitales y Desarrollo Web.",
      "Haz click en los post-it y descubre que puedo aportarte.",
      "¡Gracias por tu visita!, Si estas interesado, no dudes en contactarme."
    ];
    const ids = ['line1', 'line2', 'line3', 'line4'];
    const speed = 75; // ms entre carácter y carácter

    function typeLine(el, text) {
      return new Promise(resolve => {
        let i = 0;
        el.classList.add('typing');
        function tick() {
          if (i < text.length) {
            el.textContent += text.charAt(i++);
            setTimeout(tick, speed);
          } else {
            el.classList.remove('typing');
            resolve();
          }
        }
        tick();
      });
    }

    // Ejecuta cada línea en cadena
    (async function run() {
      for (let j = 0; j < lines.length; j++) {
        const el = document.getElementById(ids[j]);
        await typeLine(el, lines[j]);
        // espera un pelín antes de la siguiente línea
        await new Promise(r => setTimeout(r, 500));
      }
    })();

  }
  const items = document.querySelectorAll('#listaTrabajos li');
  const container = document.querySelector('.info-panels');

  items.forEach(li => {
    li.addEventListener('mouseenter', () => {
      const targetId = li.getAttribute('data-panel');
      container.querySelectorAll('.info-panel')
        .forEach(p => p.classList.remove('active'));
      // mostramos el seleccionado
      const panel = document.getElementById(targetId);
      panel && panel.classList.add('active');

      container.classList.add('visible');
    });

    li.addEventListener('mouseleave', () => {
      const panel = document.getElementById(li.dataset.panel);
      if (panel) panel.classList.remove('active');
    });
  });








  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeBtn = document.querySelector('.close');

  const posts = document.querySelectorAll('.post');
  posts.forEach(post => {

    post.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = post.getAttribute('data-title');
      const description = post.getAttribute('data-description');
      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modal.style.display = 'block';
    });
  });

  // Cerrar modal al hacer clic en la X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });















});