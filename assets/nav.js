document.addEventListener('DOMContentLoaded', () => {
  const navHTML = `
<nav>
  <a href="index.html" class="logo">akchally<span class="dot"></span></a>
  <div class="nav-links">
    <a href="index.html">HOME</a>
    <a href="web.html">WEB / 01</a>
    <a href="document.html">DOCUMENT / 02</a>
    <a href="video.html">VIDEO / 03</a>
    <a href="lookover.html">LOOK-OVER</a>
    <a href="index.html#work">WORK</a>
  </div>
  <div style="display:flex; gap:1rem; align-items:center">
    <a href="index.html#contact" class="btn btn-black" style="padding:.8rem 1.2rem; font-size:.75rem">START SOMETHING →</a>
    <div class="hamburger">☰</div>
  </div>
</nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
});
