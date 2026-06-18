# lunote-code.github.io

GitHub Pages site for [Lunote](https://github.com/lunote-code/lunote)—local-first Markdown notes with wiki links.

**Live:** https://lunote-code.github.io/

## Structure

```text
├── index.html              # Product landing page
├── blog/
│   ├── index.html          # Blog listing with article intros
│   └── */index.html        # Individual articles
├── assets/
│   ├── site.css            # Shared styles (light/dark, carousel)
│   └── favicon.svg
├── feed.xml                # RSS
├── sitemap.xml
├── robots.txt
└── 404.html
```

Static HTML + CSS only—no build step, no JavaScript.

## Local preview

```bash
cd lunote-code.github.io-main
python3 -m http.server 8080
# open http://localhost:8080
```

## Links

- **Download:** https://github.com/lunote-code/lunote/releases
- **Docs:** https://github.com/lunote-code/lunote/tree/main/docs/guide
- **Blog RSS:** https://lunote-code.github.io/feed.xml
