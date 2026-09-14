/**
 * PREMIUM ENGAGEMENT CELEBRATION - SCRIPT ENGINE
 * Powered by GSAP, ScrollTrigger, Swiper.js, Web Audio & Canvas Particles
 */

/* ==========================================================================
   1. DATA-DRIVEN GALLERY REPOSITORY
   Easily replace, add, or customize images for the couple's celebration.
   ========================================================================== */
const GALLERY_DATA = [
  // Morning Memories
  {
    id: 1,
    category: 'morning',
    title: 'Morning Glow & Adornments',
    src: 'images/morning/morning-01.jpg',
    caption: 'Soft sunlight, fragrant floral jasmine gajra, and joyous morning smiles.',
    colClass: 'col-8 tall'
  },
  {
    id: 2,
    category: 'morning',
    title: 'The Bride’s Radiant Smile',
    src: 'images/morning/morning-02.jpg',
    caption: 'Delicate pastel jewelry and anticipation of the beautiful moments ahead.',
    colClass: 'col-4'
  },
  {
    id: 3,
    category: 'morning',
    title: 'The Groom’s Excitement',
    src: 'images/morning/morning-03.jpg',
    caption: 'Dressed in fine champagne hues, ready for the journey of a lifetime.',
    colClass: 'col-4'
  },

  // Vidhi Ceremony
  {
    id: 4,
    category: 'vidhi',
    title: 'The Sacred Vidhi Pooja',
    src: 'images/vidhi/vidhi-01.jpg',
    caption: 'Surrounded by family blessings, marigold garlands, and the holy flame.',
    colClass: 'col-6'
  },
  {
    id: 5,
    category: 'vidhi',
    title: 'Traditions & Blessings',
    src: 'images/vidhi/vidhi-02.jpg',
    caption: 'Hands joined in reverence as ancient rituals sanctify new promises.',
    colClass: 'col-6'
  },
  {
    id: 6,
    category: 'vidhi',
    title: 'Sacred Deepak & Offerings',
    src: 'images/vidhi/vidhi-03.jpg',
    caption: 'Warm golden glow of brass lamps spreading warmth and auspicious energy.',
    colClass: 'col-4'
  },

  // Afternoon Vibes
  {
    id: 7,
    category: 'afternoon',
    title: 'Afternoon Laughter & Cheerful Moments',
    src: 'images/afternoon/afternoon-01.jpg',
    caption: 'Under the peach and lavender canopy, shared laughs with beloved guests.',
    colClass: 'col-8'
  },
  {
    id: 8,
    category: 'afternoon',
    title: 'Family Celebrations & Joy',
    src: 'images/afternoon/afternoon-02.jpg',
    caption: 'Vibrant colors, hugs, and endless heartfelt conversations.',
    colClass: 'col-4 tall'
  },

  // Engagement Ceremony
  {
    id: 9,
    category: 'engagement',
    title: 'The Moment We Said Yes ❤️',
    src: 'images/engagement/engagement-01.jpg',
    caption: 'Two souls, one destiny. The unforgettable moment of eternal promise.',
    colClass: 'col-8 tall'
  },
  {
    id: 10,
    category: 'engagement',
    title: 'The Sparkling Diamond Promise',
    src: 'images/engagement/sparkling-ring.jpg',
    caption: 'One ring. One promise. One forever.',
    colClass: 'col-4'
  },
  {
    id: 11,
    category: 'engagement',
    title: 'Golden Sunset Celebrations',
    src: 'images/engagement/engagement-03.jpg',
    caption: 'Holding hands as fairy lights shimmer into the twilight.',
    colClass: 'col-4'
  },

  // Couple Portraits
  {
    id: 12,
    category: 'couple',
    title: 'Just Us - Hearts in Harmony',
    src: 'images/couple/couple-01.jpg',
    caption: 'In each other’s eyes, finding everything we ever searched for.',
    colClass: 'col-6'
  },
  {
    id: 13,
    category: 'couple',
    title: 'Viral’s Pure Happiness',
    src: 'images/couple/couple-02.jpg',
    caption: 'Grace, charm, and a heart full of romance.',
    colClass: 'col-6'
  },
  {
    id: 14,
    category: 'couple',
    title: 'Jaydip’s Vow of Love',
    src: 'images/couple/couple-03.jpg',
    caption: 'A smile that speaks of devotion, protection, and eternal love.',
    colClass: 'col-4'
  },

  // Outdoor Memories
  {
    id: 15,
    category: 'outdoor',
    title: 'Golden Hour Walk in the Garden',
    src: 'images/outdoor/outdoor-01.jpg',
    caption: 'Strolling through blossoms as the sun casts an amber glow.',
    colClass: 'col-8'
  },
  {
    id: 16,
    category: 'outdoor',
    title: 'Candid Smiles Beyond the Stage',
    src: 'images/outdoor/outdoor-02.jpg',
    caption: 'Unscripted, genuine laughter as the celebration continued.',
    colClass: 'col-4'
  },
  {
    id: 17,
    category: 'outdoor',
    title: 'Sunset Magic & Everlasting Warmth',
    src: 'images/outdoor/outdoor-03.jpg',
    caption: 'Watching the twilight together, counting blessings under the open sky.',
    colClass: 'col-6'
  }
];

/* ==========================================================================
   2. DOM READY & INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initAmbientCanvas();
  initAudioPlayer();
  initNavigation();
  initSwiperSlider();
  initTimelineProgress();
  initGSAPScrollAnimations();
  initAlbumGallery();
  initLightbox();
  initCelebrationWishes();
});

/* ==========================================================================
   3. PRELOADER LOGIC
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressFill = document.querySelector('.loader-progress-fill');
  const statusText = document.querySelector('.loader-status');
  
  if (!preloader) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 18) + 12;
    if (progress > 100) progress = 100;
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (statusText) statusText.textContent = `Gathering sweet memories... ${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('loaded');
        triggerHeroEntrance();
        if (typeof ScrollTrigger !== 'undefined') {
          setTimeout(() => ScrollTrigger.refresh(), 300);
        }
      }, 400);
    }
  }, 120);
}

/* ==========================================================================
   4. FLOATING PETALS & SPARKLES CANVAS
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const petalCount = window.innerWidth < 768 ? 16 : 28;
  const colors = [
    'rgba(255, 181, 160, 0.45)', // Peach
    'rgba(244, 124, 136, 0.45)', // Rose
    'rgba(254, 214, 219, 0.55)', // Blush
    'rgba(212, 175, 55, 0.5)'    // Gold Sparkle
  ];

  for (let i = 0; i < petalCount; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.8 + 0.35,
      speedX: Math.random() * 0.6 - 0.3,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 0.03,
      color: colors[Math.floor(Math.random() * colors.length)],
      isSparkle: Math.random() > 0.75
    });
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);

    if (p.isSparkle) {
      // Golden Sparkle
      ctx.fillStyle = 'rgba(244, 226, 149, 0.75)';
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.35, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Rose / Peach Petal shape
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.size, -p.size * 0.5, -p.size, p.size * 0.8, 0, p.size * 1.4);
      ctx.bezierCurveTo(p.size, p.size * 0.8, p.size, -p.size * 0.5, 0, 0);
      ctx.fill();
    }
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let p of petals) {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.005) * 0.5 + p.speedX;
      p.angle += p.spin;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      drawPetal(p);
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   5. AMBIENT ROMANTIC AUDIO PLAYER (WEB AUDIO SYNTHESIZER + AUDIO HOOK)
   Guaranteed serene ambient romantic piano chords & chimes without CORS/404!
   ========================================================================== */
function initAudioPlayer() {
  const musicBtn = document.getElementById('musicToggleBtn');
  if (!musicBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let synthTimer = null;

  // Romantic chord progressions in C / F / Am (frequencies in Hz)
  const CHORDS = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
    [220.00, 261.63, 329.63, 440.00], // Am7   (A3, C4, E4, A4)
    [174.61, 261.63, 329.63, 392.00], // Fmaj7 (F3, C4, E4, G4)
    [196.00, 246.94, 293.66, 392.00]  // G6    (G3, B3, D4, G4)
  ];

  let currentChordIndex = 0;

  function playAmbientRomanticChord() {
    if (!audioCtx || !isPlaying) return;

    const chord = CHORDS[currentChordIndex];
    currentChordIndex = (currentChordIndex + 1) % CHORDS.length;

    chord.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Soft warm sine/triangle wave
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      // Smooth attack & long romantic decay
      const now = audioCtx.currentTime;
      const noteDelay = i * 0.18; // Staggered arpeggio
      const startTime = now + noteDelay;

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.045, startTime + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 4.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(startTime);
      osc.stop(startTime + 4.8);
    });

    // Occasional high chime
    if (Math.random() > 0.4) {
      setTimeout(() => {
        if (!isPlaying || !audioCtx) return;
        const chimeOsc = audioCtx.createOscillator();
        const chimeGain = audioCtx.createGain();
        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(chord[2] * 2, audioCtx.currentTime);
        chimeGain.gain.setValueAtTime(0.02, audioCtx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.2);
        chimeOsc.connect(chimeGain);
        chimeGain.connect(audioCtx.destination);
        chimeOsc.start();
        chimeOsc.stop(audioCtx.currentTime + 2.4);
      }, 1200);
    }
  }

  musicBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = !isPlaying;

    if (isPlaying) {
      musicBtn.classList.add('playing');
      const textEl = musicBtn.querySelector('.btn-text');
      if (textEl) textEl.textContent = 'Music Playing';
      playAmbientRomanticChord();
      synthTimer = setInterval(playAmbientRomanticChord, 3800);
    } else {
      musicBtn.classList.remove('playing');
      const textEl = musicBtn.querySelector('.btn-text');
      if (textEl) textEl.textContent = 'Play Music';
      clearInterval(synthTimer);
    }
  });
}

/* ==========================================================================
   6. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const navbar = document.querySelector('.floating-navbar');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.nav-link');

  // Shrink and glassmorphic blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('open');
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('open');
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   7. SWIPER SLIDER (ENGAGEMENT CEREMONY)
   ========================================================================== */
function initSwiperSlider() {
  if (typeof Swiper === 'undefined') return;

  new Swiper('.engagementSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true
    }
  });
}

/* ==========================================================================
   8. TIMELINE PROGRESS SCROLLBAR
   ========================================================================== */
function initTimelineProgress() {
  const timelineSection = document.getElementById('story');
  const progressLine = document.querySelector('.timeline-progress');
  if (!timelineSection || !progressLine) return;

  window.addEventListener('scroll', () => {
    const rect = timelineSection.getBoundingClientRect();
    const sectionHeight = timelineSection.offsetHeight;
    const scrollPos = window.innerHeight - rect.top;

    if (scrollPos > 0 && rect.top < window.innerHeight) {
      let percent = (scrollPos / (sectionHeight + window.innerHeight * 0.4)) * 100;
      percent = Math.min(100, Math.max(0, percent));
      progressLine.style.height = `${percent}%`;
    }
  });
}

/* ==========================================================================
   9. GSAP & SCROLLTRIGGER ANIMATIONS
   ========================================================================== */
function triggerHeroEntrance() {
  if (typeof gsap === 'undefined') return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero-tag', { opacity: 0, y: -25, duration: 0.8 })
    .from('.hero-pretitle', { opacity: 0, y: 20, duration: 0.8 }, '-=0.4')
    .from('.hero-names', { opacity: 0, scale: 0.94, y: 30, duration: 1.1 }, '-=0.5')
    .from('.hero-tagline', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
    .from('.hero-date-badge', { opacity: 0, scale: 0.85, duration: 0.8 }, '-=0.5')
    .from('.hero-scroll-indicator', { opacity: 0, y: 15, duration: 0.8 }, '-=0.4');
}

function initGSAPScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Couple Introduction Cards
  gsap.from('.couple-card', {
    scrollTrigger: {
      trigger: '.couple-intro-section',
      start: 'top 85%'
    },
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.25,
    ease: 'power3.out'
  });

  gsap.from('.connector-heart-badge', {
    scrollTrigger: {
      trigger: '.couple-intro-section',
      start: 'top 80%'
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.8)'
  });

  // Timeline Items reveal
  gsap.utils.toArray('.timeline-item').forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%'
      },
      x: item.classList.contains('timeline-item-odd') ? -35 : 35,
      opacity: 0,
      duration: 0.85,
      ease: 'power2.out'
    });
  });

  // Morning Memories Masonry Reveal
  gsap.from('.morning-section .masonry-item', {
    scrollTrigger: {
      trigger: '.morning-section',
      start: 'top 85%'
    },
    y: 35,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
  });

  // Vidhi Ceremony Cards
  gsap.from('.vidhi-spotlight-card', {
    scrollTrigger: {
      trigger: '.vidhi-section',
      start: 'top 85%'
    },
    scale: 0.95,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out'
  });

  gsap.from('.polaroid-card', {
    scrollTrigger: {
      trigger: '.vidhi-section',
      start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Ring Exchange 3D Card
  gsap.from('.ring-card-3d', {
    scrollTrigger: {
      trigger: '.ring-exchange-section',
      start: 'top 85%'
    },
    y: 45,
    opacity: 0,
    scale: 0.96,
    duration: 1,
    ease: 'power3.out'
  });

  // Tilted Polaroid Cards ("Just Us")
  gsap.from('.tilted-card', {
    scrollTrigger: {
      trigger: '.couple-gallery-section',
      start: 'top 85%'
    },
    y: 40,
    opacity: 0,
    duration: 0.85,
    stagger: 0.2,
    ease: 'power2.out'
  });

  // Love Quotes Cards
  gsap.from('.quote-card', {
    scrollTrigger: {
      trigger: '.quotes-section',
      start: 'top 85%'
    },
    y: 30,
    opacity: 0,
    duration: 0.75,
    stagger: 0.18,
    ease: 'power2.out'
  });

  // Ambient Orbs gentle parallax
  gsap.utils.toArray('.bg-ambient-orb').forEach(orb => {
    gsap.to(orb, {
      scrollTrigger: {
        trigger: orb.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      y: 60,
      ease: 'none'
    });
  });

  // Refresh ScrollTrigger after assets settle
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 1000);
}

/* ==========================================================================
   10. FULL PHOTO ALBUM & DYNAMIC FILTERING
   ========================================================================== */
function initAlbumGallery() {
  const albumGrid = document.getElementById('albumGrid');
  const filterBtns = document.querySelectorAll('.album-filter-tabs .filter-btn');
  if (!albumGrid) return;

  // Render album cards dynamically from GALLERY_DATA
  albumGrid.innerHTML = GALLERY_DATA.map((item, index) => `
    <div class="album-item" data-category="${item.category}" data-index="${index}">
      <div class="album-item-img">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="gallery-hover-overlay">
          <div class="overlay-heart-btn"><i class="fa-solid fa-heart"></i></div>
          <span class="overlay-tag">${item.category}</span>
          <h4 class="overlay-title">${item.title}</h4>
          <p class="overlay-caption">${item.caption}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const items = albumGrid.querySelectorAll('.album-item');

      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.classList.remove('hidden');
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   11. LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (!lightbox) return;

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const item = GALLERY_DATA[currentIndex];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(GALLERY_DATA.length).padStart(2, '0')}`;
    lightboxTitle.textContent = item.title;
    lightboxCaption.textContent = item.caption;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % GALLERY_DATA.length;
    updateLightboxContent();
  }

  // Bind click listeners for all gallery elements across page
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-lightbox-index], .album-item');
    if (card) {
      const index = parseInt(card.getAttribute('data-lightbox-index') || card.getAttribute('data-index'), 10);
      if (!isNaN(index)) {
        openLightbox(index);
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  // Click outside image box to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Touch Swipe for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
      showNext(); // Swiped left -> next
    } else if (touchEndX > touchStartX + 50) {
      showPrev(); // Swiped right -> prev
    }
  }, { passive: true });
}

/* ==========================================================================
   12. CELEBRATION & BLESSINGS CONFETTI
   ========================================================================== */
function initCelebrationWishes() {
  const celebrateBtn = document.getElementById('celebrateBtn');
  const countEl = document.getElementById('blessingsCount');
  if (!celebrateBtn) return;

  let blessings = 524;

  celebrateBtn.addEventListener('click', () => {
    blessings += 1;
    if (countEl) countEl.textContent = blessings;

    // Trigger romantic confetti burst using canvas-confetti
    if (typeof confetti !== 'undefined') {
      // Golden stars and rose hearts explosion
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F47C88', '#FFB5A0', '#D4AF37', '#FFFDF9', '#CBB4F5'],
        shapes: ['circle', 'square'],
        scalar: 1.2
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#D4AF37', '#F47C88', '#FFB5A0']
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#D4AF37', '#F47C88', '#FFB5A0']
        });
      }, 250);
    }

    celebrateBtn.innerHTML = `<i class="fa-solid fa-heart"></i> Blessings Sent With Love! ❤️`;
    setTimeout(() => {
      celebrateBtn.innerHTML = `<i class="fa-solid fa-heart"></i> Send More Love & Blessings`;
    }, 2800);
  });
}
