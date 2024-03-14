// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Toggle Active Class on Navigation Links
  const navLinks = document.querySelectorAll('.NavLink');
  
  function toggleActiveLink() {
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      const sectionTop = section.offsetTop - 64; // Adjust for sticky header height
      const sectionBottom = sectionTop + section.offsetHeight;
      const currentScroll = window.pageYOffset;
  
      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        link.classList.add('NavLinkActive');
      } else {
        link.classList.remove('NavLinkActive');
      }
    });
  }
  
  window.addEventListener('scroll', toggleActiveLink);
  
  // Background Blob Animation
  const blob = document.querySelector('#blob');
  
  document.addEventListener('mousemove', e => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
  
    blob.style.left = `${x * 30}vw`;
    blob.style.top = `${y * 30}vh`;
  });


  // Scrolling Animation

  window.addEventListener('scroll', function() {
    const aboutDescriptions = document.querySelectorAll('.AboutDescription');
    const aboutSection = document.querySelector('.SectionAbout');
    const sectionTop = aboutSection.offsetTop - window.innerHeight * 0.8;
    const sectionBottom = sectionTop + aboutSection.offsetHeight;
    const currentScroll = window.pageYOffset;
  
    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      aboutDescriptions.forEach((description, index) => {
        const delay = index * 0.3; // Adjust the delay between paragraphs
        setTimeout(() => {
          description.classList.add('visible');
        }, delay * 1000);
      });
    } else {
      aboutDescriptions.forEach(description => {
        description.classList.remove('visible');
      });
    }
  });