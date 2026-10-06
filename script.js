const header=document.querySelector('.header'),menuBtn=document.querySelector('.menu-btn'),menu=document.querySelector('.menu');
function updateHeader(){header.classList.toggle('scrolled',window.scrollY>18)} updateHeader(); window.addEventListener('scroll',updateHeader,{passive:true});
menuBtn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')}));
