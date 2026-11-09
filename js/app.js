const copy = {
  ja: {
    nav: [
      { label: 'ホーム', v: 'home' },
      { label: 'サービス', v: 'services' },
      { label: '実績', v: 'work' },
      { label: 'お問い合わせ', v: 'contact' },
    ],
    cta: 'プロジェクトを始める',
    langLabel: '言語を切り替える',
    meta: {
      title: '夜船 — 富山のウェブデザイン & IT',
      description: '夜船は富山のウェブデザイン・ITスタジオです。放っておいても大丈夫なウェブサイトを設計し、構築し、維持します。',
    },
    footerTag: '夜船が制作し、夜船が運用しています。',
    footerLoc: '富山 / リモート',
    home: {
      h1: '眠っている間も、\n動き続けるサイトを。',
      sub: '私たちは、放っておいても大丈夫なウェブサイトを設計し、\n構築し、維持します。',
      cta1: 'プロジェクトを始める', cta2: '実績を見る',
      whatTitle: '三つのことを、丁寧に。',
      services: [
        { t: 'ウェブデザイン', d: 'テンプレートではなく、事業の実態に合わせて設計されたサイト。' },
        { t: '開発', d: '5年後も動き続ける、シンプルな技術で。' },
        { t: '保守', d: '公開後も私たちが運用します。更新、監視、サポート。' },
      ],
      workEyebrow: '実績', workTitle: '最近手がけたサイト', viewAll: 'すべての実績を見る',
      quote: '「サイトを公開した日から、私たちはそのことを考えなくなりました。それが目的でした。」',
      quoteBy: '— Kurabu Coffee, 大阪',
    },
    services: {
      eyebrow: 'サービス', title: 'デザイン。開発。運用。', cta: 'プロジェクトを始める',
      list: [
        { t: 'ウェブデザイン', badge: 'デザイン', d: 'テンプレートではなく、事業の実態に基づいて設計します。ワイヤーフレーム、ビジュアルデザイン、コピーの方向性まで。', items: ['情報設計', 'ビジュアルデザインシステム', 'コピーライティングの方向性', 'モバイルファーストのレスポンシブレイアウト'] },
        { t: '開発', badge: '開発', d: '5年後も動き続ける、シンプルで保守しやすい技術を使って、素早く構築します。', items: ['ノーコードに頼らないフロントエンド開発', '必要な場合のみCMS導入', 'パフォーマンスとアクセシビリティの調整', '通常14日で納品'] },
        { t: '保守 & IT', badge: '運用', d: '公開後も稼働し続けるよう、サイトだけでなく周辺のITも私たちが管理します。', items: ['稼働監視とバックアップ', 'セキュリティパッチ適用', 'ドメイン・メール・ホスティング管理', '月次レポート'] },
      ],
    },
    work: {
      eyebrow: '実績', title: '最初のプロジェクトに取りかかっています。',
      featuredName: 'Gakuenza', featuredDesc: '夜船が制作を手がける最初のプロジェクト。',
    },
    contact: {
      eyebrow: 'お問い合わせ', title: 'ご要望をお聞かせください。',
      desc: '1営業日以内にご返信します。マッチする場合は、1週間以内に簡単な提案書をお送りします。',
      contactName: '金佐　作夢', phone: '080-4007-7701', loc: '富山、日本 — リモートでどこでも対応',
      name: '名前', namePh: 'お名前', email: 'メールアドレス', emailPh: 'you@company.com', service: 'サービス',
      opts: [{ label: 'ウェブデザイン', value: 'design' }, { label: '開発', value: 'dev' }, { label: '保守 & IT', value: 'maint' }],
      details: 'プロジェクト内容', detailsPh: '一言で構いません',
      updates: 'アップデートを時々お送りします。スパムはありません。', send: 'メッセージを送る',
      subject: '夜船へのお問い合わせ',
      sentTitle: 'メールアプリが開きます。', sentDesc: 'メールが開かない場合は、info@yobune.net まで直接ご連絡ください。1営業日以内にご返信します。',
      sentAgain: '別のメッセージを送る',
    },
  },
  en: {
    nav: [
      { label: 'Home', v: 'home' },
      { label: 'Services', v: 'services' },
      { label: 'Work', v: 'work' },
      { label: 'Contact', v: 'contact' },
    ],
    cta: 'Start a project',
    langLabel: 'Switch language',
    meta: {
      title: '夜船 — Web design & IT, Toyama',
      description: '夜船 is a web design and IT studio in Toyama, Japan. We design, build, and maintain the web presence behind businesses that need it done right, and left alone.',
    },
    footerTag: 'Built by 夜船. Maintained by 夜船.',
    footerLoc: 'Toyama / Remote',
    home: {
      h1: 'Sites that work while you sleep.',
      sub: 'We design, build, and maintain the web presence behind businesses that need it done right, and left alone.',
      cta1: 'Start a project', cta2: 'See our work',
      whatTitle: 'Three things, done well.',
      services: [
        { t: 'Web design', d: 'Custom-built sites, designed around what your business actually does.' },
        { t: 'Development', d: 'Fast, maintainable builds. No page-builder debt.' },
        { t: 'Maintenance', d: 'We keep it running after launch. Updates, monitoring, support.' },
      ],
      workEyebrow: 'Our work', workTitle: 'A few recent sites.', viewAll: 'View all work',
      quote: '"We stopped thinking about the website the day it launched. That was the point."',
      quoteBy: '— Kurabu Coffee, Osaka',
    },
    services: {
      eyebrow: 'Services', title: 'Design. Build. Maintain.', cta: 'Start a project',
      list: [
        { t: 'Web design', badge: 'Design', d: 'A site designed around what your business actually does, not a template. Wireframes, visual design, and copy direction.', items: ['Information architecture', 'Visual design system', 'Copywriting direction', 'Mobile-first responsive layout'] },
        { t: 'Development', badge: 'Build', d: 'Fast, maintainable builds using plain, boring technology that will still work in five years.', items: ['Hand-built front end, no page-builder debt', 'CMS setup where it earns its keep', 'Performance and accessibility passes', '14-day typical turnaround'] },
        { t: 'Maintenance & IT', badge: 'Run', d: 'We keep it running after launch — and handle the IT around it, not just the site.', items: ['Uptime monitoring & backups', 'Security patching', 'Domain, email & hosting management', 'Monthly check-in report'] },
      ],
    },
    work: {
      eyebrow: 'Our work', title: "We're working on our first project.",
      featuredName: 'Gakuenza', featuredDesc: "夜船's first project as a studio.",
    },
    contact: {
      eyebrow: 'Contact', title: 'Tell us what you need.',
      desc: "We reply within a day. If it's a fit, we'll send a short proposal within a week.",
      contactName: 'Samuel Kincer', phone: '080-4007-7701', loc: 'Toyama, Japan — working remotely with clients everywhere',
      name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@company.com', service: 'Service',
      opts: [{ label: 'Web design', value: 'design' }, { label: 'Development', value: 'dev' }, { label: 'Maintenance & IT', value: 'maint' }],
      details: 'Project details', detailsPh: 'A sentence or two is fine',
      updates: 'Send me occasional updates, no spam', send: 'Send message',
      subject: 'Project enquiry for 夜船',
      sentTitle: 'Your email app should open.', sentDesc: "If it didn't, email us directly at info@yobune.net. We'll get back to you within a day.",
      sentAgain: 'Send another message',
    },
  },
};

const EMAIL = 'info@yobune.net';
const PHONE_TEL = '+818040077701';
const LANG_KEY = 'yobune-lang';
const DEFAULT_SCREEN = 'home';

function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && copy[saved]) return saved;
  } catch (e) { /* storage unavailable */ }
  return 'ja';
}

function saveLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }
}

function screenFromHash() {
  const h = location.hash.replace(/^#\/?/, '');
  return screens[h] ? h : DEFAULT_SCREEN;
}

const state = { screen: DEFAULT_SCREEN, lang: loadLang() };
const root = document.getElementById('root');

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ESC[c]);
}

function renderNav() {
  const t = copy[state.lang];
  const links = t.nav.map(l => {
    const active = state.screen === l.v;
    return `<a class="nav-link${active ? ' active' : ''}" href="#${l.v}"${active ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`;
  }).join('');
  return `
  <header class="nav">
    <nav class="nav-inner" aria-label="Main">
      <a class="wordmark" href="#home" aria-label="夜船 — ${esc(t.nav[0].label)}">夜船</a>
      <div class="nav-links">
        ${links}
        <button type="button" class="lang-toggle" data-lang-toggle aria-label="${esc(t.langLabel)}">
          <span class="${state.lang === 'ja' ? 'on' : ''}" lang="ja">日本語</span>
          <span class="${state.lang === 'en' ? 'on' : ''}" lang="en">EN</span>
        </button>
        <a class="btn btn-primary btn-sm" href="#contact">${esc(t.cta)}</a>
      </div>
    </nav>
  </header>`;
}

function renderFooter() {
  const t = copy[state.lang];
  return `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-wordmark">夜船</div>
      <div class="footer-tag">${esc(t.footerTag)}</div>
      <div class="footer-contact"><a href="mailto:${EMAIL}">${EMAIL}</a><span aria-hidden="true">・</span><span>${esc(t.footerLoc)}</span></div>
    </div>
  </footer>`;
}

function renderHome() {
  const t = copy[state.lang].home;
  const workCard = `
    <div class="work-featured">
      <div class="card">
        <img src="assets/gakuenza-logo.svg" alt="Gakuenza logo" width="96" height="96" />
        <h3>${esc(copy[state.lang].work.featuredName)}</h3>
        <p>${esc(copy[state.lang].work.featuredDesc)}</p>
      </div>
    </div>`;
  return `
    <div class="hero">
      <div class="hero-inner">
        <h1>${esc(t.h1)}</h1>
        <p>${esc(t.sub)}</p>
        <div class="hero-ctas">
          <a class="btn btn-primary btn-lg" href="#contact">${esc(t.cta1)}</a>
          <a class="btn btn-secondary btn-lg" href="#work">${esc(t.cta2)}</a>
        </div>
      </div>
    </div>
    <section class="section">
      <h2 class="section-title">${esc(t.whatTitle)}</h2>
      <div class="grid-3">
        ${t.services.map(s => `<div class="card"><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join('')}
      </div>
    </section>
    <section class="section-sunken">
      <div class="section-sunken-inner">
        <div class="row-between">
          <div>
            <div class="eyebrow">${esc(t.workEyebrow)}</div>
            <h2 class="section-title tight">${esc(t.workTitle)}</h2>
          </div>
          <a class="btn btn-ghost btn-md" href="#work">${esc(t.viewAll)}</a>
        </div>
        ${workCard}
      </div>
    </section>
    <section class="quote-block">
      <blockquote class="quote">${esc(t.quote)}</blockquote>
      <div class="quote-by">${esc(t.quoteBy)}</div>
    </section>`;
}

function renderServices() {
  const t = copy[state.lang].services;
  return `
    <section class="section">
      <div class="eyebrow">${esc(t.eyebrow)}</div>
      <h2 class="section-title">${esc(t.title)}</h2>
      <div class="services-list">
        ${t.list.map(s => `
          <div class="service-row">
            <div>
              <span class="badge">${esc(s.badge)}</span>
              <h3 class="service-title">${esc(s.t)}</h3>
            </div>
            <div>
              <p class="service-desc">${esc(s.d)}</p>
              <ul class="service-items">
                ${s.items.map(it => `<li class="service-item"><span class="dot" aria-hidden="true">・</span>${esc(it)}</li>`).join('')}
              </ul>
            </div>
          </div>`).join('')}
      </div>
      <div class="section-cta">
        <a class="btn btn-primary btn-lg" href="#contact">${esc(t.cta)}</a>
      </div>
    </section>`;
}

function renderWork() {
  const t = copy[state.lang].work;
  return `
    <section class="section">
      <div class="eyebrow">${esc(t.eyebrow)}</div>
      <h2 class="section-title">${esc(t.title)}</h2>
      <div class="work-featured">
        <div class="card">
          <img src="assets/gakuenza-logo.svg" alt="Gakuenza logo" width="96" height="96" />
          <h3>${esc(t.featuredName)}</h3>
          <p>${esc(t.featuredDesc)}</p>
        </div>
      </div>
    </section>`;
}

function renderContact() {
  const t = copy[state.lang].contact;
  return `
    <section class="contact-grid">
      <div>
        <div class="eyebrow">${esc(t.eyebrow)}</div>
        <h2 class="section-title mb-20">${esc(t.title)}</h2>
        <p class="section-lead">${esc(t.desc)}</p>
        <address class="contact-info" style="font-style:normal">
          <div>${esc(t.contactName)}</div>
          <div><a href="mailto:${EMAIL}">${EMAIL}</a></div>
          <div><a href="tel:${PHONE_TEL}">${esc(t.phone)}</a></div>
          <div class="muted">${esc(t.loc)}</div>
        </address>
      </div>
      <div class="contact-panel">
        <form class="contact-form" data-contact-form>
          <label class="field"><span>${esc(t.name)}</span><input type="text" name="name" autocomplete="name" placeholder="${esc(t.namePh)}" required /></label>
          <label class="field"><span>${esc(t.email)}</span><input type="email" name="email" autocomplete="email" placeholder="${esc(t.emailPh)}" required /></label>
          <label class="field"><span>${esc(t.service)}</span>
            <select name="service">${t.opts.map(o => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('')}</select>
          </label>
          <label class="field"><span>${esc(t.details)}</span><input type="text" name="details" placeholder="${esc(t.detailsPh)}" /></label>
          <label class="checkbox"><input type="checkbox" name="updates" />${esc(t.updates)}</label>
          <button type="submit" class="btn btn-primary btn-lg">${esc(t.send)}</button>
        </form>
        <div class="sent" data-contact-sent hidden role="status">
          <h3>${esc(t.sentTitle)}</h3>
          <p>${esc(t.sentDesc)}</p>
          <p style="margin-top:16px"><button type="button" class="btn btn-secondary btn-md" data-contact-reset>${esc(t.sentAgain)}</button></p>
        </div>
      </div>
    </section>`;
}

const screens = { home: renderHome, services: renderServices, work: renderWork, contact: renderContact };

function updateDocumentMeta() {
  const t = copy[state.lang];
  document.documentElement.lang = state.lang;
  document.title = t.meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.meta.description);
}

function render({ scrollTop = true } = {}) {
  const y = window.scrollY;
  updateDocumentMeta();
  root.innerHTML = renderNav() + `<main id="main">${screens[state.screen]()}</main>` + renderFooter();
  bind();
  window.scrollTo(0, scrollTop ? 0 : y);
}

function buildMailto(form, t) {
  const data = new FormData(form);
  const serviceLabel = (t.opts.find(o => o.value === data.get('service')) || {}).label || '';
  const lines = [
    `${t.name}: ${data.get('name') || ''}`,
    `${t.email}: ${data.get('email') || ''}`,
    `${t.service}: ${serviceLabel}`,
    `${t.details}: ${data.get('details') || ''}`,
    `${t.updates}: ${data.get('updates') ? 'Yes' : 'No'}`,
  ];
  return `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

function bind() {
  const langToggle = root.querySelector('[data-lang-toggle]');
  if (langToggle) langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ja' ? 'en' : 'ja';
    saveLang(state.lang);
    render({ scrollTop: false });
  });

  // Clicking a link to the screen we're already on doesn't fire hashchange;
  // re-render so the page still scrolls to the top.
  root.querySelectorAll('a[href^="#"]').forEach(a =>
    a.addEventListener('click', () => {
      if (a.getAttribute('href') === `#${state.screen}`) render();
    })
  );

  const form = root.querySelector('[data-contact-form]');
  const sent = root.querySelector('[data-contact-sent]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const t = copy[state.lang].contact;
    window.location.href = buildMailto(form, t);
    form.hidden = true;
    sent.hidden = false;
  });
  const reset = root.querySelector('[data-contact-reset]');
  if (reset) reset.addEventListener('click', () => {
    form.reset();
    sent.hidden = true;
    form.hidden = false;
    form.querySelector('input').focus();
  });
}

function route() {
  state.screen = screenFromHash();
  render();
}

window.addEventListener('hashchange', route);
route();
