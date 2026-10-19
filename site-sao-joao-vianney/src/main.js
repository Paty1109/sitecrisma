import './style.css'
import { content } from './content.js'

const app = document.querySelector('#app')
const imageFrame = (image, className = '') => `<div class="image-frame ${className}">${image.src ? `<img src="${image.src}" alt="${image.alt}" />` : `<span>${image.label}</span>`}</div>`
const timelineItems = content.timeline.map((event, index) => `<article class="timeline-item reveal"><div class="timeline-marker"><span>${String(index + 1).padStart(2, '0')}</span></div><div class="timeline-card"><p class="eyebrow">${event.date}</p><h3>${event.title}</h3><p>${event.description}</p>${event.image.src ? imageFrame(event.image, 'timeline-image') : ''}</div></article>`).join('')
const curiosityItems = content.devotion.curiosities.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span>${item}</li>`).join('')
const quoteItems = content.devotion.quotes.map((quote) => `<blockquote>“${quote}”</blockquote>`).join('')

app.innerHTML = `
  <header class="site-header"><a class="brand" href="#inicio" aria-label="Ir para o início"><span class="brand-mark" aria-hidden="true"><i></i></span><span>${content.navigation.brand}</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation"><span></span><span></span><span></span><span class="sr-only">${content.navigation.menuLabel}</span></button><nav id="main-navigation" class="main-navigation" aria-label="Navegação principal">${content.navigation.links.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}</nav></header>
  <main>
    <section id="inicio" class="hero-section"><div class="hero-content reveal"><p class="section-kicker">${content.home.kicker}</p><h1>${content.home.title}</h1><div class="ornament" aria-hidden="true"><span></span><i></i><span></span></div><p class="hero-quote">${content.home.subtitle}</p><a class="button button-primary" href="#biografia">${content.home.buttonText}<span aria-hidden="true">↓</span></a></div>${imageFrame(content.home.image, 'hero-image reveal')}<a class="scroll-hint" href="#biografia"><span></span>${content.home.scrollHint}</a></section>
    <section id="biografia" class="content-section biography-section"><div class="section-heading reveal"><p class="section-kicker">${content.biography.kicker}</p><h2>${content.biography.title}</h2><div class="heading-line"></div></div><div class="biography-grid">${imageFrame(content.biography.image, 'biography-image reveal')}<div class="biography-copy reveal"><p>${content.biography.text}</p><div class="highlight-card"><span class="card-symbol" aria-hidden="true">✦</span><p>${content.biography.highlight}</p></div></div></div></section>
    <section id="linha-do-tempo" class="content-section timeline-section"><div class="section-heading centered reveal"><p class="section-kicker">${content.timelineHeading.kicker}</p><h2>${content.timelineHeading.title}</h2><p>${content.timelineHeading.description}</p></div><div class="timeline">${timelineItems}</div></section>
    <section id="conteudos" class="content-section devotion-section"><div class="section-heading centered reveal"><p class="section-kicker">${content.devotion.kicker}</p><h2>${content.devotion.title}</h2></div><div class="devotion-grid"><article class="devotion-card reveal"><p class="card-label">${content.devotion.curiositiesTitle}</p><ul>${curiosityItems}</ul></article><article class="devotion-card quotes-card reveal"><p class="card-label">${content.devotion.quotesTitle}</p>${quoteItems}</article><article class="devotion-card detail-card reveal"><p class="card-label">${content.devotion.detailsTitle}</p><dl><div><dt>${content.devotion.patronLabel}</dt><dd>${content.devotion.patron}</dd></div><div><dt>${content.devotion.feastDayLabel}</dt><dd>${content.devotion.feastDay}</dd></div></dl></article></div></section>
  </main>
  <footer class="site-footer"><div><span class="brand-mark small" aria-hidden="true"><i></i></span><p>${content.footer.credit}</p></div><p>${content.footer.additionalInfo}</p></footer><button class="back-to-top" type="button" aria-label="${content.navigation.backToTopLabel}">↑</button>`

document.title = content.home.title
const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.main-navigation')
menuToggle.addEventListener('click', () => { const isOpen = navigation.classList.toggle('is-open'); menuToggle.classList.toggle('is-open', isOpen); menuToggle.setAttribute('aria-expanded', String(isOpen)) })
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { navigation.classList.remove('is-open'); menuToggle.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false') }))
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible') }), { threshold: 0.12 })
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => backToTop.classList.toggle('is-visible', window.scrollY > 500), { passive: true })
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
