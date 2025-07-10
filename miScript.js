document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('line1')) {
    const lines = [
      "¡Hola!",
      "Soy Belén, Docente en Competencias Digitales.",
      "Entra en las aulas y conoce mi trabajo y mis proyectos.",
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




});