document.querySelectorAll('.nav-links a').forEach((anchor) =>
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  })
);

// Contact
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    displayMessageNotification();
    displayThankYouMessage();
  });
});

// menampilkan notifikasi
const displayMessageNotification = () => {
  const notification = document.createElement('p');
  notification.textContent = 'New message received.';
  Object.assign(notification.style, {
    color: '#28a745',
    textAlign: 'center',
    marginTop: '20px',
  });

  document.querySelector('.contact').appendChild(notification);
  setTimeout(() => notification.remove(), 5000);
};

// menampilkan makasih
const displayThankYouMessage = () => {
  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Terima kasih, pesanan segera di proses!';
  Object.assign(thankYouMessage.style, {
    color: '#007bff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '20px',
  });

  const contactSection = document.querySelector('.contact');
  contactSection.insertBefore(thankYouMessage, contactSection.firstChild);

  setTimeout(() => thankYouMessage.remove(), 5000);
};
