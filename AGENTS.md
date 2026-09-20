# Louis Arvor — AI Agent Handoff

## Goal and identity
This portfolio belongs to Louis Arvor. The commissioning person's biography must never be inserted into Louis's profile. Existing project text, portrait and phone are placeholders. Ask Louis for factual replacements. Do not infer personal experience from the commissioning person's background.

## Repository structure
- Deploy ONLY `website/`; it is a static HTML/CSS/JavaScript site with bundled Three.js/GSAP rendering, not a React or Next.js app.
- `website/index.html`: homepage, About/Contact, loading gate and postcard markup.
- `website/project.html` + `project-detail.js`: detailed project pages and all six projects' data.
- `website/project-postcards.js`: China/France homepage postcard project data. Update both data locations when replacing project names/images/descriptions.
- `website/archive-style.css`: authoritative font families, text colors and reading scale. Additional structural CSS: styles.css, chapter-study.css, project-detail.css.
- `website/navigation.css` / navigation.js: glass navigation, uppercase labels, active-section tracking and 560ms shape pulse.
- `website/view-cursor.*`: oval View cursor and native project links.
- `website/stamp-*` / project-postcards.*: stamp/pocket, paper animation and material effects.
- `website/loading-page.js` + src/loading-page-core.mjs: readiness gate; navigation stays hidden until loader fully disappears.
- `development/script.js` and development/src/cat-preview.js: true homepage rendering entry. The old `website/script.js` is a legacy file, NOT the source for home.bundle.js.
- `development/src/louis-scroll-dissolve.mjs`, louis-dissolve-state.mjs: wordmark dissolve.
- `development/src/paw-ascii-*`: ASCII background source.
- `website/src/` contains current runtime modules loaded directly; modify them there. Historical counterparts under development/src may be unused by build; do not overwrite newer website modules wholesale.
- Build from development with npm ci && npm run build. This produces four bundles in website/assets; it does not deploy. Do not manually edit minified bundles.

## Approved appearance
Dark grain, archival/worn atmosphere, existing stamp/letter art. Powell Antique headings; Maranatha body, captions and controls; original Cut the crap LOUIS mark. Shared --font-ui aliases --font-reading. Navigation uppercase14px,13px at<=360px. Keep heading/body/label scale coherent. Respect the owner's new instructions over these defaults.

## Practical safeguards
Avoid generic redesigns or framework migrations for small edits. Preserve model scale, stamp paths, assets and accepted motion unless requested. Do not add decorative arrows or underlined selection states by default. Keep native links, keyboard focus and reduced-motion handling. JS changes need syntax checks; visual changes need actual browser review at desktop and narrow mobile widths. Check loader visibility, projects/anchors, postcard selection and no horizontal overflow.

## Publishing
Local changes first. Deploy only when authorized by the receiving owner. Root Directory must be website (or run CLI inside website). Use their Vercel account and verify the target before production deploy. This package intentionally contains no .vercel/project.json. For the existing URL complete the transfer described in 线上项目转交.md, then link to the transferred project. Preserve font and dependency license notices. Do not claim to own third-party font/model/image copyrights.
