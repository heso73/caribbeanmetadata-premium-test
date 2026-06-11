export function renderPremiumPage({ title, content }) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} – Caribwood CMS</title>
  <link rel="stylesheet" href="/styles.css" />
</head>

<body>

<header class="hero">
  <h1>${title}</h1>
  <p class="subtitle">Standard institutionnel – Caribwood CMS</p>
</header>

<main class="container">
  ${content}
</main>

<footer class="footer">
  <p>© Caribwood CMS – Standard institutionnel caribéen</p>
</footer>

</body>
</html>
  `;
}
