document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM queries
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    // Select all nav links for active state highlighting (Donate style handled by CSS)
    const navAnchors = document.querySelectorAll('.nav-links a');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    // Throttle scroll event
    let scrollTimeout;
    
    // Mobile Navigation with performance optimization
    hamburger?.addEventListener('click', () => {
        requestAnimationFrame(() => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    });

    // Close menu when clicking overlay
    navOverlay?.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        body.classList.remove('menu-open');
    });

    // Close menu when clicking links
    navLinks?.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu on resize if screen becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Optimized smooth scrolling
    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only prevent default and scroll smoothly for internal links (starting with #)
            if (href && href.startsWith('#')) { 
                e.preventDefault();
                const targetElement = document.querySelector(href);
                const headerElement = document.querySelector('.main-nav'); // Assuming .main-nav is the fixed header
                
                if (targetElement) {
                    const headerHeight = headerElement ? headerElement.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    // Subtract header height AND an extra 15px for visual padding below header
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 65; 

                    window.scrollTo({
                         top: offsetPosition,
                         behavior: 'smooth'
                    });
                }
            } 
            // For external links (like volunteer.html), let the browser handle the navigation normally.
        });
    });

    // Optimized scroll handler with throttling
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(() => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navAnchors.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href').includes(current));
            });
        });
    });

    // Lazy load images (Removed - Handled by Lightbox2)
    // const lazyLoadImages = () => {
    //     const imageObserver = new IntersectionObserver((entries, observer) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 const img = entry.target;
    //                 img.style.backgroundImage = `url('${img.dataset.src}')`;
    //                 observer.unobserve(img);
    //             }
    //         });
    //     });
    //
    //     document.querySelectorAll('.gallery-item[data-src]').forEach(img => {
    //         imageObserver.observe(img);
    //     });
    // };
    //
    // // Initialize lazy loading (Removed)
    // if ('IntersectionObserver' in window) {
    //     lazyLoadImages();
    // }
});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');

  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks?.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-nav]') && navLinks?.classList.contains('active')) {
      navToggle?.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  navLinks?.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navToggle?.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
