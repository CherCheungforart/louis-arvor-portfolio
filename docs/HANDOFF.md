# Project handoff — 2026-09-20

## Current state
- Repository: https://github.com/CherCheungforart/louis-arvor-portfolio (private), branch `main`.
- Initial source import: `06e9e46cd48ef8b4cfed33594b1414392573637d`.
- Production: https://louis-arvor-portfolio.vercel.app/ . GitHub import does not change or transfer the Vercel project.
- Code and ordinary assets are in Git. Complete original delivery: [Release](https://github.com/CherCheungforart/louis-arvor-portfolio/releases/tag/handoff-2026-09-20). See root README for checksum and large-file recovery.
- 178 imported files were byte-checked against the local handoff package. Two repository-specific files were added in the initial import: README.md and LARGE-ASSETS.json.

## Confirmed constraints and decisions
These are a concise handoff, not a complete transcript. The complete historical assistant conversation has not been exported into this repository. Do not treat this summary as a substitute for that history or invent missing discussions.

- Louis Arvor is the recipient; the commissioning user's own biography must not be used. User wording: “louis网站不是给我自己做的，严禁用我已有的信息经历直接来写。”
- User wanted a worn, mysterious, visually coherent portfolio; references were inspiration rather than wholesale copies. Typography went through several experiments. The current font choices and motion are documented in AGENTS.md; prior experiments are not claims of current approval.
- Navigation is uppercase; it remains hidden on the eyes loading screen and appears on other pages. Project links open detail pages.
- Existing examples, portrait and phone remain placeholders. Do not fabricate Louis's experience. Current supplied contact email is hanyi.arvor@icloud.com.
- On 2026-09-20 the user requested uploading this finance-oriented vibe-coding project's assets and content to GitHub, then explicitly selected a new private louis-arvor-portfolio repository.
- Original filenames, license documents, source assets and manifests are preserved. Asset possession is not proof of exclusive copyright.

## Resume on another computer
1. Clone the private repository with an authorized GitHub account. Check `git status` and the remote branch before editing; preserve local changes.
2. Read ../AGENTS.md and ../README.md, then use the existing Chinese handoff documents for build, asset and Vercel details.
3. Download the full Release ZIP when editing the three large Blender sources. Extract into a separate directory or restore the paths listed in LARGE-ASSETS.json. Do not commit files above GitHub's normal file limit.
4. Serve `website/` locally; rebuild only when changing development sources. Deploy only `website/` to the intended Vercel project.
5. Save relevant decisions and progress here, commit and push authorized changes. GitHub contains project context, not the complete Codex conversation history.

## Remaining work
- Replace demonstration project text, portrait and phone only with facts supplied by Louis.
- Vercel ownership transfer and Git integration are separate from this upload and have not been performed.
- Verify third-party licensing for the intended use using the included license documentation.
