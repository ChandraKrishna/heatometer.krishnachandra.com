# HeatoMeter Website

The official product website and privacy policy for **HeatoMeter**, an Android
utility for battery-temperature monitoring, screen-time awareness, and
on-device phone-health insights.

Live site: <https://chandrakrishna.github.io/HeatoMeterWebsite/>

## Site contents

- Product overview, feature details, and app screenshots
- Google Play and subscription disclosures
- Privacy policy for the Android package `com.app.heatometer`
- Responsive navigation, screenshot gallery, and FAQ interactions

## Technology

This is a dependency-free static site built with HTML, CSS, and vanilla
JavaScript. It can be served directly from the repository root by GitHub Pages.

## Publish with GitHub Pages

1. Push the `main` branch to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

GitHub will publish the site at the live-site address above. Updates pushed to
`main` will be published automatically.

## Local preview

You may open `index.html` directly, or run a local static server from the
repository root. For example, with Python installed:

```sh
python -m http.server 8000
```

Then visit <http://localhost:8000/>.

## Ownership and contributions

This is a personal project owned and maintained solely by Krishna Chandra.
External contributions are not being accepted. Issues and pull requests may be
closed without review.

## License

Copyright © 2026 Krishna Chandra. All rights reserved. This is proprietary
software and content; see [LICENSE](LICENSE) for the full terms.
