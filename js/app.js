const copy = {
  ja: {
    nav: [
      { label: 'ホーム', v: 'home' },
      { label: 'サービス', v: 'services' },
      { label: '実績', v: 'work' },
      { label: 'お問い合わせ', v: 'contact' },
    ],
    cta: 'プロジェクトを始める',
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
      phone: '+81 76 000 0000', loc: '富山、日本 — リモートでどこでも対応',
      name: '名前', namePh: 'お名前', email: 'メールアドレス', emailPh: 'you@company.com', service: 'サービス',
      opts: [{ label: 'ウェブデザイン', value: 'design' }, { label: '開発', value: 'dev' }, { label: '保守 & IT', value: 'maint' }],
      details: 'プロジェクト内容', detailsPh: '一言で構いません',
      updates: 'アップデートを時々お送りします。スパムはありません。', send: 'メッセージを送る',
      sentTitle: '送信しました。', sentDesc: '1営業日以内にご連絡します。',
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
      phone: '+81 76 000 0000', loc: 'Toyama, Japan — working remotely with clients everywhere',
      name: 'Name', namePh: 'Your name', email: 'Email', emailPh: 'you@company.com', service: 'Service',
      opts: [{ label: 'Web design', value: 'design' }, { label: 'Development', value: 'dev' }, { label: 'Maintenance & IT', value: 'maint' }],
      details: 'Project details', detailsPh: 'A sentence or two is fine',
      updates: 'Send me occasional updates, no spam', send: 'Send message',
      sentTitle: 'Message sent.', sentDesc: "We'll get back to you within a day.",
    },
  },
};

const state = { screen: 'home', lang: 'ja' };
const root = document.getElementById('root');

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function renderNav() {
  const t = copy[state.lang];
  const links = t.nav.map(l =>
    `<button class="nav-link${state.screen === l.v ? ' active' : ''}" data-nav="${l.v}">${esc(l.label)}</button>`
  ).join('');
  return `
  <div class="nav">
    <div class="nav-inner">
      <button class="wordmark" data-nav="home">夜船</button>
      <div class="nav-links">
        ${links}
        <button class="lang-toggle" data-lang-toggle>
          <span class="${state.lang === 'ja' ? 'on' : ''}">日本語</span>
          <span class="${state.lang === 'en' ? 'on' : ''}">EN</span>
        </button>
        <button class="btn btn-primary btn-sm" data-nav="contact">${esc(t.cta)}</button>
      </div>
    </div>
  </div>`;
}

function renderFooter() {
  const t = copy[state.lang];
  return `
  <div class="footer">
    <div class="footer-inner">
      <div class="footer-wordmark">夜船</div>
      <div class="footer-tag">${esc(t.footerTag)}</div>
      <div class="footer-contact"><span>hello@yofune.co</span><span>・</span><span>${esc(t.footerLoc)}</span></div>
    </div>
  </div>`;
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
          <button class="btn btn-primary btn-lg" data-nav="contact">${esc(t.cta1)}</button>
          <button class="btn btn-secondary btn-lg" data-nav="work">${esc(t.cta2)}</button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">${esc(t.whatTitle)}</div>
      <div class="grid-3">
        ${t.services.map(s => `<div class="card"><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join('')}
      </div>
    </div>
    <div class="section-sunken">
      <div class="section-sunken-inner">
        <div class="row-between">
          <div>
            <div class="eyebrow">${esc(t.workEyebrow)}</div>
            <div class="section-title" style="margin-bottom:0">${esc(t.workTitle)}</div>
          </div>
          <button class="btn btn-ghost" data-nav="work">${esc(t.viewAll)}</button>
        </div>
        ${workCard}
      </div>
    </div>
    <div class="quote-block">
      <div class="quote">${esc(t.quote)}</div>
      <div class="quote-by">${esc(t.quoteBy)}</div>
    </div>`;
}

function renderServices() {
  const t = copy[state.lang].services;
  return `
    <div class="section">
      <div class="eyebrow">${esc(t.eyebrow)}</div>
      <div class="section-title">${esc(t.title)}</div>
      <div class="services-list">
        ${t.list.map(s => `
          <div class="service-row">
            <div>
              <span class="badge">${esc(s.badge)}</span>
              <div class="service-title">${esc(s.t)}</div>
            </div>
            <div>
              <div class="service-desc">${esc(s.d)}</div>
              <div class="service-items">
                ${s.items.map(it => `<div class="service-item"><span class="dot">・</span>${esc(it)}</div>`).join('')}
              </div>
            </div>
          </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:64px;">
        <button class="btn btn-primary btn-lg" data-nav="contact">${esc(t.cta)}</button>
      </div>
    </div>`;
}

function renderWork() {
  const t = copy[state.lang].work;
  return `
    <div class="section">
      <div class="eyebrow">${esc(t.eyebrow)}</div>
      <div class="section-title">${esc(t.title)}</div>
      <div class="work-featured">
        <div class="card">
          <img src="assets/gakuenza-logo.svg" alt="Gakuenza logo" width="96" height="96" />
          <h3>${esc(t.featuredName)}</h3>
          <p>${esc(t.featuredDesc)}</p>
        </div>
      </div>
    </div>`;
}

function renderContact() {
  const t = copy[state.lang].contact;
  return `
    <div class="contact-grid">
      <div>
        <div class="eyebrow">${esc(t.eyebrow)}</div>
        <div class="section-title" style="margin-bottom:20px">${esc(t.title)}</div>
        <p style="font-size:15px;color:var(--text-secondary);line-height:var(--leading-body);margin-bottom:32px;max-width:420px;">${esc(t.desc)}</p>
        <div class="contact-info">
          <div>hello@yofune.co</div>
          <div>${esc(t.phone)}</div>
          <div class="muted">${esc(t.loc)}</div>
        </div>
      </div>
      <div class="contact-panel">
        <form class="contact-form" data-contact-form>
          <label class="field"><span>${esc(t.name)}</span><input type="text" placeholder="${esc(t.namePh)}" required /></label>
          <label class="field"><span>${esc(t.email)}</span><input type="email" placeholder="${esc(t.emailPh)}" required /></label>
          <label class="field"><span>${esc(t.service)}</span>
            <select>${t.opts.map(o => `<option value="${o.value}">${esc(o.label)}</option>`).join('')}</select>
          </label>
          <label class="field"><span>${esc(t.details)}</span><input type="text" placeholder="${esc(t.detailsPh)}" /></label>
          <label class="checkbox"><input type="checkbox" checked />${esc(t.updates)}</label>
          <button type="submit" class="btn btn-primary btn-lg">${esc(t.send)}</button>
        </form>
        <div class="sent" data-contact-sent hidden>
          <h3>${esc(t.sentTitle)}</h3>
          <p>${esc(t.sentDesc)}</p>
        </div>
      </div>
    </div>`;
}

const screens = { home: renderHome, services: renderServices, work: renderWork, contact: renderContact };

function render() {
  root.innerHTML = renderNav() + screens[state.screen]() + renderFooter();
  window.scrollTo(0, 0);
  bind();
}

function bind() {
  root.querySelectorAll('[data-nav]').forEach(el =>
    el.addEventListener('click', () => { state.screen = el.dataset.nav; render(); })
  );
  const langToggle = root.querySelector('[data-lang-toggle]');
  if (langToggle) langToggle.addEventListener('click', () => {
    state.lang = state.lang === 'ja' ? 'en' : 'ja';
    render();
  });
  const form = root.querySelector('[data-contact-form]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    form.hidden = true;
    root.querySelector('[data-contact-sent]').hidden = false;
  });
}

render();
