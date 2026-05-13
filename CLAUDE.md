# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Where to look first

- `.github/copilot-instructions.md` — tech stack, build, CI, known pitfalls. **Read before any non-trivial change.**
- `.github/instructions/*.instructions.md` — per-file-type rules (YAML, Liquid, BibTeX, Markdown, JS). Match the file you're editing.
- `.github/GIT_WORKFLOW.md` — commit format `<type>: <subject>` (`feat|fix|docs|style|config|chore`); stage files explicitly.

For local dev / prettier / `url`+`baseurl` coupling, see `AGENTS.md` and `.github/copilot-instructions.md` — don't restate here.

## This repo's state

- Project site: `url: https://vanyason.github.io`, `baseurl: /al-folio` (in `_config.yml`).
- Typical edit targets: `_pages/about.md`, `_bibliography/papers.bib`, `_news/*.md`, `_data/*.yml`.

## Architecture (non-obvious bits)

Jekyll 4 academic theme. The site is composed by plugins assembling collections — no application code to run.

- `_pages/` and `_scripts/` are only picked up because they're listed in `include:` in `_config.yml` (Jekyll's defaults don't include either).
- `_news/` is `output: false` — entries render inline on about, not as standalone pages.
- Publications come from `_bibliography/papers.bib` via `jekyll-scholar`, rendered with `_layouts/bib.liquid`. Custom BibTeX keys (`pdf`, `code`, `preview`, `selected`, `bibtex_show`, …) only work if listed under `filtered_bibtex_keywords` in `_config.yml`.
- `_plugins/*.rb` are site-local Ruby extensions on top of gem plugins: `cache-bust-override`, `details`, `file-exists`, `hide-custom-bibtex`, `remove-accents`.
- `jekyll-imagemagick` generates responsive WebP at widths 480/800/1400 for `assets/img/`. Requires ImageMagick (provided by the Docker image).
- Feature flags live in `_config.yml`: `enable_darkmode`, `enable_math`, `enable_masonry`, `enable_medium_zoom`, `enable_progressbar`, `enable_publication_badges`, `enable_publication_thumbnails`.

## CI gotchas

- `.github/workflows/deploy.yml` has a `paths:` filter that excludes pure edits to `CONTRIBUTING.md`/`CUSTOMIZE.md`/`FAQ.md`/`INSTALL.md`/`README.md` — those won't trigger a deploy.
- Prettier runs in a separate workflow, not in the build. Format before pushing or that workflow fails independently.
