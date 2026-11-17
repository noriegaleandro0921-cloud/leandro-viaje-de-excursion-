document.addEventListener('DOMContentLoaded', () => {
  const visitorCount = document.querySelector('#visitor-count');
  if (visitorCount) {
    const visitsKey = 'bariloche-guide-visitors';
    const sessionKey = 'bariloche-guide-visited-this-session';
    let visits = Number(localStorage.getItem(visitsKey)) || 0;

    if (!sessionStorage.getItem(sessionKey)) {
      visits += 1;
      localStorage.setItem(visitsKey, String(visits));
      sessionStorage.setItem(sessionKey, 'true');
    }

    visitorCount.textContent = String(visits);
  }

  document.querySelectorAll('.interest-button').forEach((button) => {
    button.addEventListener('click', () => {
      const activity = button.dataset.activity;
      window.alert(`¡Buena elección! Te interesa ${activity}.`);
    });
  });

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const toastElement = document.querySelector('#form-toast');
      bootstrap.Toast.getOrCreateInstance(toastElement).show();
      contactForm.reset();
    });
  }

  const estimateForm = document.querySelector('#estimate-form');
  if (estimateForm) {
    estimateForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const people = Number(document.querySelector('#people').value);
      const nights = Number(document.querySelector('#nights').value);
      const total = people * nights * 35000;
      const formattedTotal = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
      }).format(total);
      document.querySelector('#estimate-result').textContent = `Estimación: ${formattedTotal} en total.`;
    });
  }
});
