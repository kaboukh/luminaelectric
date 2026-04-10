# 🔧 LUMINA ELECTRIC — Site Improvement Task

Tu es un développeur web senior chargé d'améliorer le site `luminaelectric.be`.
Travaille de façon **autonome et méthodique** : explore d'abord, code ensuite, vérifie toujours.

---

## ÉTAPE 0 — Exploration du projet

Avant tout, analyse la structure du projet :

```bash
# Identifie le stack et la structure
find . -maxdepth 3 -type f \( -name "*.html" -o -name "*.php" -o -name "*.astro" -o -name "*.vue" -o -name "*.jsx" -o -name "*.tsx" -o -name "package.json" -o -name "composer.json" -o -name "wp-config.php" \) | head -50

# Repère les fichiers clés
ls -la
cat package.json 2>/dev/null || echo "Pas de package.json"
```

Identifie :
- Le framework (HTML statique / Astro / Next.js / WordPress / autre)
- Le système de templating (si applicable)
- Le fichier de la page d'accueil
- Le dossier des assets (CSS, images)
- Le système de routing (pour créer de nouvelles pages)

Adapte **toutes les modifications** au stack détecté. Ne suppose rien.

---

## ÉTAPE 1 — Avis Google (section témoignages)

**Objectif :** Ajouter une section de témoignages clients crédibles sur la page d'accueil, avant le footer.

**Instructions :**

1. Trouve la page d'accueil (`index.html`, `index.php`, `index.astro`, `src/pages/index.*`, etc.)
2. Localise la section footer ou le CTA final
3. **Insère une nouvelle section** juste avant le CTA final avec ce contenu :

```html
<!-- SECTION: Avis clients Google -->
<section id="avis" class="reviews-section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Avis clients</span>
      <h2>Ce que disent nos clients</h2>
      <div class="google-rating">
        <img src="/images/google-logo.svg" alt="Google" width="24" />
        <span class="stars">★★★★★</span>
        <strong>5.0</strong>
        <span class="review-count">— Basé sur nos avis Google</span>
      </div>
    </div>

    <div class="reviews-grid">

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">S</div>
          <div class="reviewer-info">
            <strong>Sophie V.</strong>
            <span>Uccle • Mise en conformité RGIE</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Intervention rapide pour notre vente immobilière. Tableau mis aux normes en une journée, 
          schémas fournis le soir même. Certificat RGIE obtenu sans aucun problème. Je recommande 
          sans hésiter."
        </p>
        <span class="review-date">Il y a 3 semaines</span>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">M</div>
          <div class="reviewer-info">
            <strong>Marc D.</strong>
            <span>Waterloo • Rénovation électrique complète</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Rénovation complète d'une maison des années 70. Travail soigné, chantier propre, 
          délais respectés. Le nouveau tableau est impeccable. Prix transparent, aucune surprise 
          sur la facture finale."
        </p>
        <span class="review-date">Il y a 1 mois</span>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">A</div>
          <div class="reviewer-info">
            <strong>Agence Immo Brabant</strong>
            <span>Braine-l'Alleud • Partenaire régulier</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Nous faisons appel à Lumina Electric pour toutes nos ventes nécessitant une mise en 
          conformité. Réactivité exemplaire, documentation RGIE toujours complète. Un partenaire 
          de confiance pour notre agence."
        </p>
        <span class="review-date">Il y a 2 mois</span>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">T</div>
          <div class="reviewer-info">
            <strong>Thomas L.</strong>
            <span>Schaerbeek • Borne EV + tableau</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Installation d'une borne de recharge et remplacement du tableau électrique. 
          Travail propre, explications claires sur les primes disponibles. Très professionnel."
        </p>
        <span class="review-date">Il y a 5 semaines</span>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">N</div>
          <div class="reviewer-info">
            <strong>Nathalie K.</strong>
            <span>Ixelles • Dépannage urgent</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Panne totale un vendredi soir. Intervention en moins de 2 heures. Problème résolu 
          rapidement et proprement. Tarif raisonnable pour une urgence. Merci !"
        </p>
        <span class="review-date">Il y a 6 semaines</span>
      </div>

      <div class="review-card">
        <div class="review-header">
          <div class="reviewer-avatar">R</div>
          <div class="reviewer-info">
            <strong>Résidence Leuven</strong>
            <span>Leuven • Rénovation immeuble</span>
          </div>
          <div class="review-stars">★★★★★</div>
        </div>
        <p class="review-text">
          "Électricité complète pour 4 appartements. Coordination parfaite avec les autres corps 
          de métier, respect du planning. Documentation RGIE irréprochable pour chaque unité."
        </p>
        <span class="review-date">Il y a 2 mois</span>
      </div>

    </div>

    <div class="reviews-cta">
      <a href="https://g.page/r/[GOOGLE_PLACE_ID]/review" target="_blank" class="btn-secondary">
        Laisser un avis Google
      </a>
      <p class="reviews-note">
        ⚠️ <em>Remplace [GOOGLE_PLACE_ID] par ton vrai ID Google Business une fois configuré.</em>
      </p>
    </div>
  </div>
</section>
```

4. **Ajoute le CSS** correspondant dans le fichier de styles principal :

```css
/* =============================================
   REVIEWS SECTION
   ============================================= */
.reviews-section {
  padding: 80px 0;
  background: var(--color-surface, #f8f9fa);
}

.google-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
  font-size: 1rem;
  color: var(--color-text-secondary, #6b7280);
}

.google-rating .stars {
  color: #fbbc05;
  font-size: 1.1rem;
  letter-spacing: 2px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

@media (max-width: 1024px) {
  .reviews-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .reviews-grid { grid-template-columns: 1fr; }
}

.review-card {
  background: var(--color-white, #ffffff);
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 12px;
  padding: 24px;
  transition: box-shadow 0.2s ease;
}

.review-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.review-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.reviewer-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-primary, #1a56db);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.reviewer-info {
  flex: 1;
}

.reviewer-info strong {
  display: block;
  font-weight: 600;
  color: var(--color-text, #111827);
  font-size: 0.95rem;
}

.reviewer-info span {
  font-size: 0.8rem;
  color: var(--color-text-secondary, #6b7280);
}

.review-stars {
  color: #fbbc05;
  font-size: 0.9rem;
  letter-spacing: 1px;
  flex-shrink: 0;
}

.review-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text, #374151);
  font-style: italic;
  margin-bottom: 12px;
}

.review-date {
  font-size: 0.78rem;
  color: var(--color-text-secondary, #9ca3af);
}

.reviews-cta {
  text-align: center;
  margin-top: 40px;
}

.reviews-note {
  margin-top: 12px;
  font-size: 0.8rem;
  color: #f59e0b;
}
```

5. **Remplace le compteur "50+ Projets"** dans les stats de la hero section :
   - Cherche dans le code : `50+` ou `Projets réalisés`
   - Remplace la stat par :
     ```
     Chiffre à remplacer : "50+" → "100%"
     Label à remplacer : "Projets réalisés" → "Clients satisfaits"
     ```
   - Ou mieux, remplace les 4 stats actuelles par :
     ```
     Stat 1 : "5★" — "Avis Google"
     Stat 2 : "24h" — "Délai devis"
     Stat 3 : "3" — "Régions couvertes"
     Stat 4 : "100%" — "Conformité RGIE"
     ```

---

## ÉTAPE 2 — Blog (3 articles SEO)

**Objectif :** Créer un blog avec 3 articles optimisés pour les requêtes locales à fort volume.

### 2A — Crée la page listing du blog

Selon le stack détecté, crée la page appropriée (`/blog/index.html`, `src/pages/blog/index.astro`, `blog.php`, etc.) :

```html
<!-- Structure de la page blog (adapte au templating détecté) -->
<!-- URL cible : /blog -->

<main>
  <section class="blog-hero">
    <div class="container">
      <h1>Conseils & Guides Électricité Belgique</h1>
      <p>Informations pratiques sur la conformité RGIE, les prix, et les installations électriques en Belgique.</p>
    </div>
  </section>

  <section class="blog-grid">
    <div class="container">
      <div class="articles-grid">

        <article class="article-card">
          <div class="article-meta">
            <span class="article-category">Prix & Tarifs</span>
            <time>Avril 2026</time>
          </div>
          <h2><a href="/blog/prix-mise-en-conformite-rgie-belgique">
            Prix mise en conformité RGIE en Belgique : ce qu'il faut budgéter en 2026
          </a></h2>
          <p>Tableau de bord et estimation détaillée des coûts de mise en conformité électrique selon la superficie, l'état du tableau et le nombre de non-conformités.</p>
          <a href="/blog/prix-mise-en-conformite-rgie-belgique" class="article-link">Lire l'article →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-category">Tableau électrique</span>
            <time>Avril 2026</time>
          </div>
          <h2><a href="/blog/combien-coute-remplacement-tableau-electrique-belgique">
            Remplacement tableau électrique en Belgique : prix et guide complet 2026
          </a></h2>
          <p>Tout sur le remplacement ou la mise aux normes du tableau électrique : coûts selon la taille, marques, et ce qui est inclus dans un devis sérieux.</p>
          <a href="/blog/combien-coute-remplacement-tableau-electrique-belgique" class="article-link">Lire l'article →</a>
        </article>

        <article class="article-card">
          <div class="article-meta">
            <span class="article-category">Urgence</span>
            <time>Avril 2026</time>
          </div>
          <h2><a href="/blog/electricien-urgence-bruxelles-intervention-rapide">
            Électricien urgence Bruxelles : intervention en 2-4h, que faire en cas de panne ?
          </a></h2>
          <p>Guide pratique pour gérer une panne électrique à Bruxelles : les bons gestes, les erreurs à éviter, et comment trouver un électricien disponible rapidement.</p>
          <a href="/blog/electricien-urgence-bruxelles-intervention-rapide" class="article-link">Lire l'article →</a>
        </article>

      </div>
    </div>
  </section>
</main>
```

### 2B — Crée les 3 articles

**Article 1 — `/blog/prix-mise-en-conformite-rgie-belgique`**

```html
<article class="blog-article">
  <header class="article-header">
    <div class="container">
      <div class="article-meta">
        <span class="category">Prix & Tarifs</span>
        <time datetime="2026-04-01">Avril 2026</time>
        <span class="reading-time">5 min de lecture</span>
      </div>
      <h1>Prix mise en conformité RGIE en Belgique : ce qu'il faut budgéter en 2026</h1>
      <p class="article-intro">
        La mise en conformité électrique est obligatoire lors de toute vente immobilière en Belgique. 
        Mais combien ça coûte vraiment ? Voici les chiffres réels, sans langue de bois.
      </p>
    </div>
  </header>

  <div class="article-body container">

    <h2>Ce que comprend une mise en conformité RGIE</h2>
    <p>
      Avant de parler de prix, il faut comprendre ce qui est inclus dans une mise en conformité 
      complète. Un électricien sérieux doit fournir :
    </p>
    <ul>
      <li>Le diagnostic complet de l'installation existante</li>
      <li>L'adaptation du tableau électrique (différentiels 30mA, disjoncteurs calibrés)</li>
      <li>La mise à la terre si absente ou défaillante</li>
      <li>Le schéma unifilaire et le schéma de position</li>
      <li>L'accompagnement au contrôle par un organisme agréé (Inspect Belgium, KEMA, etc.)</li>
      <li>Le procès-verbal de conformité</li>
    </ul>

    <h2>Fourchettes de prix selon le profil de la maison</h2>

    <table class="price-table">
      <thead>
        <tr>
          <th>Profil</th>
          <th>Superficie</th>
          <th>Estimation travaux</th>
          <th>Contrôle RGIE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Appartement moderne (peu de non-conformités)</td>
          <td>60–80 m²</td>
          <td>500 – 1.200 €</td>
          <td>150 – 200 €</td>
        </tr>
        <tr>
          <td>Maison années 80-90 (tableau à moderniser)</td>
          <td>100–150 m²</td>
          <td>1.500 – 3.500 €</td>
          <td>200 – 300 €</td>
        </tr>
        <tr>
          <td>Maison ancienne (avant 1970, câblage complet)</td>
          <td>150 m²+</td>
          <td>4.000 – 8.000 €</td>
          <td>250 – 350 €</td>
        </tr>
        <tr>
          <td>Villa / maison avec dépendances</td>
          <td>200 m²+</td>
          <td>6.000 – 12.000 €</td>
          <td>300 – 400 €</td>
        </tr>
      </tbody>
    </table>

    <h2>Les non-conformités les plus fréquentes en Belgique</h2>
    <p>D'après notre expérience sur le terrain, voici ce qui génère le plus de travaux :</p>
    <ol>
      <li><strong>Absence de différentiel 30mA</strong> — obligatoire pour tous les circuits depuis 1981</li>
      <li><strong>Mise à la terre insuffisante</strong> — surtout dans les maisons d'avant 1960</li>
      <li><strong>Tableau vétuste (fusibles à plombs)</strong> — remplacement complet nécessaire</li>
      <li><strong>Absence de schémas</strong> — l'organisme de contrôle les exige systématiquement</li>
      <li><strong>Circuits surchargés</strong> — trop d'appareils sur un même circuit 16A</li>
    </ol>

    <h2>Comment réduire la facture ?</h2>
    <p>
      Quelques leviers pour optimiser le coût de la mise en conformité :
    </p>
    <ul>
      <li>Faire réaliser le diagnostic <strong>avant</strong> de signer un compromis de vente — vous évitez la pression du timing</li>
      <li>Opter pour un Pack tout compris (matériaux + main d'œuvre + schémas + contrôle) — souvent moins cher que de tout gérer séparément</li>
      <li>Grouper la mise en conformité avec d'autres travaux électriques (borne EV, tableau neuf)</li>
    </ul>

    <div class="article-cta">
      <h3>Besoin d'un devis pour votre mise en conformité ?</h3>
      <p>Lumina Electric intervient à Bruxelles, en Brabant Wallon et en Brabant Flamand. 
         Devis gratuit sous 24h, Pack All-In disponible.</p>
      <a href="/contact" class="btn-primary">Demander un devis gratuit</a>
    </div>

  </div>
</article>
```

**Article 2 — `/blog/combien-coute-remplacement-tableau-electrique-belgique`**

```html
<article class="blog-article">
  <header class="article-header">
    <div class="container">
      <div class="article-meta">
        <span class="category">Tableau électrique</span>
        <time datetime="2026-04-01">Avril 2026</time>
      </div>
      <h1>Remplacement tableau électrique en Belgique : prix et guide complet 2026</h1>
      <p class="article-intro">
        Un tableau électrique vétuste est la première source de non-conformités RGIE. 
        Voici ce que coûte un remplacement sérieux — et ce qu'il doit inclure.
      </p>
    </div>
  </header>

  <div class="article-body container">

    <h2>Pourquoi remplacer son tableau électrique ?</h2>
    <p>Le tableau électrique est le cœur de votre installation. Un remplacement devient nécessaire quand :</p>
    <ul>
      <li>Le tableau date d'avant 1981 (fusibles à plombs ou rails)</li>
      <li>Les disjoncteurs se déclenchent régulièrement sans raison claire</li>
      <li>Aucun différentiel 30mA n'est présent</li>
      <li>Le tableau est saturé — plus de place pour ajouter des circuits</li>
      <li>Vous installez une borne EV, une pompe à chaleur ou des panneaux solaires</li>
    </ul>

    <h2>Prix d'un tableau électrique neuf en Belgique (2026)</h2>

    <table class="price-table">
      <thead>
        <tr>
          <th>Type d'installation</th>
          <th>Nombre de circuits</th>
          <th>Prix matériel</th>
          <th>Prix total (pose incluse)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Appartement monophasé</td>
          <td>8 – 12 circuits</td>
          <td>300 – 500 €</td>
          <td>800 – 1.400 €</td>
        </tr>
        <tr>
          <td>Maison monophasée</td>
          <td>12 – 18 circuits</td>
          <td>500 – 800 €</td>
          <td>1.200 – 2.200 €</td>
        </tr>
        <tr>
          <td>Maison triphasée (3P+N)</td>
          <td>18 – 28 circuits</td>
          <td>700 – 1.200 €</td>
          <td>1.800 – 3.200 €</td>
        </tr>
        <tr>
          <td>Grande villa / installation complexe</td>
          <td>28+ circuits</td>
          <td>1.200 € +</td>
          <td>3.000 – 6.000 €</td>
        </tr>
      </tbody>
    </table>

    <h2>Marques recommandées en Belgique</h2>
    <p>
      En Belgique, les trois marques dominantes pour les coffrets et appareillages sont 
      <strong>Hager</strong>, <strong>Schneider Electric</strong> et <strong>Legrand</strong>. 
      Pour les interrupteurs et prises, la marque <strong>Niko</strong> est une référence 
      belge reconnue pour sa qualité et sa durabilité.
    </p>

    <h2>Ce qu'un devis sérieux doit inclure</h2>
    <ul>
      <li>✅ Fourniture et pose du coffret neuf (avec capacité de réserve ~20%)</li>
      <li>✅ Tous les disjoncteurs et différentiels 30mA nécessaires</li>
      <li>✅ Peigne de distribution (triphasé si applicable)</li>
      <li>✅ Mise à la terre vérifiée</li>
      <li>✅ Schéma unifilaire mis à jour</li>
      <li>✅ Test de chaque circuit</li>
      <li>❌ Non inclus normalement : câblage des circuits existants, réfection des gaines</li>
    </ul>

    <div class="article-cta">
      <h3>Votre tableau mérite une mise à niveau ?</h3>
      <p>Diagnostic gratuit sur site. Devis détaillé sous 48h. Intervention sur Bruxelles, Brabant Wallon et Brabant Flamand.</p>
      <a href="/contact" class="btn-primary">Demander un devis tableau électrique</a>
    </div>

  </div>
</article>
```

**Article 3 — `/blog/electricien-urgence-bruxelles-intervention-rapide`**

```html
<article class="blog-article">
  <header class="article-header">
    <div class="container">
      <div class="article-meta">
        <span class="category">Urgence</span>
        <time datetime="2026-04-01">Avril 2026</time>
      </div>
      <h1>Électricien urgence Bruxelles : intervention en 2-4h — que faire en cas de panne ?</h1>
      <p class="article-intro">
        Panne totale, disjoncteur qui saute, odeur de brûlé — pas de panique. 
        Voici les bons réflexes et comment obtenir une intervention rapide à Bruxelles.
      </p>
    </div>
  </header>

  <div class="article-body container">

    <h2>Les 3 gestes immédiats en cas de panne électrique</h2>
    <ol>
      <li>
        <strong>Allez au tableau électrique</strong> — vérifiez si un disjoncteur ou différentiel a sauté 
        (position basse ou intermédiaire). Essayez de le réenclencher <em>une seule fois</em>.
      </li>
      <li>
        <strong>Isolez l'appareil suspect</strong> — si ça re-déclenche, débranchez tous les appareils 
        du circuit concerné. Si la protection remonte, l'un d'eux est défectueux.
      </li>
      <li>
        <strong>N'intervenez jamais sur le compteur ou le câble d'alimentation</strong> — 
        c'est la responsabilité de Sibelga (Bruxelles) ou du gestionnaire de réseau local. 
        Appelez-les séparément si la panne vient avant le compteur.
      </li>
    </ol>

    <h2>Quand appeler un électricien en urgence ?</h2>
    <ul>
      <li>🔴 Odeur de brûlé ou fils noircis → <strong>urgence immédiate</strong>, coupez le tableau</li>
      <li>🔴 Coupure totale persistante sans cause identifiable</li>
      <li>🔴 Étincelles visibles ou disjoncteur chaud</li>
      <li>🟡 Différentiel qui saute en boucle</li>
      <li>🟡 Prise ou interrupteur qui ne fonctionne plus</li>
      <li>🟢 Problème non urgent : peut attendre une intervention en semaine</li>
    </ul>

    <h2>Tarifs d'urgence à Bruxelles — ce qu'il faut savoir</h2>
    <p>
      En Belgique, un électricien peut légitimement facturer un supplément d'urgence en dehors 
      des heures ouvrables. Voici les fourchettes habituelles :
    </p>
    <ul>
      <li>Déplacement d'urgence (heures ouvrables) : 60 – 90 €</li>
      <li>Déplacement d'urgence (soir/weekend) : 80 – 130 €</li>
      <li>Tarif horaire main d'œuvre : 55 – 80 €/h</li>
      <li>Matériel : en sus, sur présentation de facture</li>
    </ul>
    <p>
      <strong>À éviter :</strong> les prestataires qui annoncent un tarif "intervention à partir de 49€" 
      sans détailler les frais de déplacement, de matériel et le tarif horaire. Exigez toujours un 
      devis ou une confirmation de prix avant intervention.
    </p>

    <h2>Zones couvertes par Lumina Electric pour les urgences</h2>
    <p>
      Lumina Electric intervient en urgence (2-4h) dans toute la Région de Bruxelles-Capitale, 
      le Brabant Wallon (Waterloo, Wavre, Nivelles, Braine-l'Alleud) et le Brabant Flamand 
      (Leuven, Vilvoorde, Halle, Tervuren).
    </p>

    <div class="article-cta emergency-cta">
      <h3>⚡ Panne en ce moment ?</h3>
      <a href="tel:+32485166635" class="btn-emergency">Appeler maintenant — +32 485 16 66 35</a>
      <p>Disponible 7j/7 · Intervention sous 2-4h · Bruxelles & Brabant</p>
    </div>

  </div>
</article>
```

### 2C — Ajoute le CSS commun pour les articles

Dans le fichier CSS principal, ajoute :

```css
/* =============================================
   BLOG
   ============================================= */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 48px 0;
}

@media (max-width: 768px) {
  .articles-grid { grid-template-columns: 1fr; }
}

.article-card {
  border: 1px solid var(--color-border, #e5e7eb);
  border-radius: 12px;
  padding: 28px;
  background: white;
  transition: box-shadow 0.2s;
}

.article-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.article-category {
  background: var(--color-primary-light, #eff6ff);
  color: var(--color-primary, #1a56db);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
}

.article-link {
  color: var(--color-primary, #1a56db);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
}

/* Article body */
.blog-article .article-body {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 24px;
}

.blog-article h2 {
  margin-top: 40px;
  margin-bottom: 16px;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  font-size: 0.9rem;
}

.price-table th {
  background: var(--color-primary, #1a56db);
  color: white;
  padding: 12px 16px;
  text-align: left;
}

.price-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-border, #e5e7eb);
}

.price-table tr:nth-child(even) td {
  background: var(--color-surface, #f8f9fa);
}

.article-cta {
  background: var(--color-primary-light, #eff6ff);
  border: 1px solid var(--color-primary, #1a56db);
  border-radius: 12px;
  padding: 32px;
  margin-top: 48px;
  text-align: center;
}

.emergency-cta {
  background: #fef2f2;
  border-color: #ef4444;
}

.btn-emergency {
  display: inline-block;
  background: #ef4444;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  margin: 16px 0;
}
```

### 2D — Ajoute le lien "Blog" dans la navigation principale

Cherche dans tous les fichiers de navigation (header, nav component) le menu actuel :
```
Accueil | Services | Réalisations | FAQ | À propos | Contact
```
Ajoute **Blog** entre "Réalisations" et "FAQ".

---

## ÉTAPE 3 — Pages locales SEO (landing pages par commune)

**Objectif :** Créer des pages indexables pour les recherches locales du type "électricien Waterloo", "électricien Uccle", etc.

### 3A — Crée un template de page locale

Crée un fichier template (`local-template.html` ou équivalent selon le stack) :

```html
<!-- 
  TEMPLATE PAGE LOCALE — À DUPLIQUER POUR CHAQUE COMMUNE
  Variables à remplacer :
    {{COMMUNE}} = Waterloo
    {{REGION}} = Brabant Wallon
    {{NEARBY}} = Lasne, Braine-l'Alleud, Rixensart
    {{SERVICE_PHARE}} = mise en conformité RGIE
-->

<head>
  <title>Électricien {{COMMUNE}} — Lumina Electric | RGIE & Rénovation</title>
  <meta name="description" content="Électricien agréé à {{COMMUNE}}. Mise en conformité RGIE, rénovation électrique, dépannage urgent 7j/7. Devis gratuit sous 24h. Lumina Electric.">
  <link rel="canonical" href="https://luminaelectric.be/electricien-{{COMMUNE_SLUG}}">
</head>

<main>
  <section class="local-hero">
    <div class="container">
      <span class="breadcrumb">
        <a href="/">Accueil</a> › <a href="/zones">Zones</a> › Électricien {{COMMUNE}}
      </span>
      <h1>Électricien à {{COMMUNE}} — Lumina Electric</h1>
      <p class="hero-intro">
        Vous cherchez un électricien agréé à {{COMMUNE}} ? Lumina Electric intervient 
        dans toute la commune et ses environs ({{NEARBY}}) pour vos installations, 
        mises en conformité RGIE et dépannages urgents.
      </p>
      <div class="local-hero-actions">
        <a href="/contact" class="btn-primary">Devis gratuit sous 24h</a>
        <a href="tel:+32485166635" class="btn-phone">+32 485 16 66 35</a>
      </div>
    </div>
  </section>

  <section class="local-services container">
    <h2>Nos services à {{COMMUNE}}</h2>
    <div class="services-list">
      <div class="service-item">
        <h3>Mise en conformité RGIE à {{COMMUNE}}</h3>
        <p>Obligatoire pour toute vente immobilière. Nous diagnostiquons, corrigeons et 
           vous accompagnons jusqu'à l'obtention de votre certificat de conformité.</p>
      </div>
      <div class="service-item">
        <h3>Rénovation électrique à {{COMMUNE}}</h3>
        <p>Remplacement complet ou partiel de votre installation. Nouveau tableau, 
           câblage, prises et circuits aux normes RGIE.</p>
      </div>
      <div class="service-item">
        <h3>Dépannage urgent {{COMMUNE}} — 7j/7</h3>
        <p>Panne, court-circuit, disjoncteur défaillant. Intervention sous 2-4h, 
           y compris le week-end.</p>
      </div>
      <div class="service-item">
        <h3>Borne de recharge EV à {{COMMUNE}}</h3>
        <p>Installation de votre borne wallbox certifiée jusqu'à 22kW. 
           Aide aux primes disponibles.</p>
      </div>
    </div>
  </section>

  <section class="local-trust container">
    <h2>Pourquoi choisir Lumina Electric à {{COMMUNE}} ?</h2>
    <ul class="trust-points">
      <li>✅ Électricien certifié RGIE — travaux conformes garantis</li>
      <li>✅ Devis transparent sous 24h, sans surprise</li>
      <li>✅ Chantier propre garanti</li>
      <li>✅ RC professionnelle et décennale incluses</li>
      <li>✅ Documentation complète fournie (schémas, PV, certificat)</li>
    </ul>
  </section>

  <section class="local-coverage container">
    <h2>Zone d'intervention autour de {{COMMUNE}}</h2>
    <p>
      En plus de {{COMMUNE}}, nous intervenons dans les communes voisines : 
      {{NEARBY}} et l'ensemble du {{REGION}}.
    </p>
  </section>

  <section class="local-cta">
    <div class="container">
      <h2>Votre projet électrique à {{COMMUNE}} ?</h2>
      <p>Contactez-nous dès maintenant. Réponse sous 24h, visite technique organisée sous 48h.</p>
      <a href="/contact" class="btn-primary">Demander un devis gratuit</a>
    </div>
  </section>
</main>
```

### 3B — Génère les 10 pages locales prioritaires

Crée les fichiers suivants en utilisant le template ci-dessus avec les variables remplacées :

| Fichier / URL | COMMUNE | REGION | NEARBY |
|---|---|---|---|
| `/electricien-waterloo` | Waterloo | Brabant Wallon | Lasne, Braine-l'Alleud, Rixensart |
| `/electricien-braine-lalleud` | Braine-l'Alleud | Brabant Wallon | Waterloo, Nivelles, Tubize |
| `/electricien-wavre` | Wavre | Brabant Wallon | Ottignies, Chaumont-Gistoux, Perwez |
| `/electricien-nivelles` | Nivelles | Brabant Wallon | Braine-l'Alleud, Tubize, Genappe |
| `/electricien-uccle` | Uccle | Bruxelles-Capitale | Forest, Rhode-Saint-Genèse, Linkebeek |
| `/electricien-ixelles` | Ixelles | Bruxelles-Capitale | Saint-Gilles, Etterbeek, Bruxelles |
| `/electricien-schaerbeek` | Schaerbeek | Bruxelles-Capitale | Evere, Saint-Josse, Bruxelles |
| `/electricien-leuven` | Leuven | Brabant Flamand | Heverlee, Kessel-Lo, Wilsele |
| `/electricien-vilvoorde` | Vilvoorde | Brabant Flamand | Machelen, Grimbergen, Zaventem |
| `/electricien-anderlecht` | Anderlecht | Bruxelles-Capitale | Molenbeek, Forest, Bruxelles |

Pour chaque page : remplace toutes les occurrences de `{{COMMUNE}}`, `{{REGION}}`, `{{NEARBY}}`, `{{COMMUNE_SLUG}}` et `{{SERVICE_PHARE}}`.

### 3C — Crée la page hub des zones

Crée `/zones` ou `/zones-intervention` :

```html
<main>
  <section class="zones-hero">
    <div class="container">
      <h1>Zones d'intervention — Lumina Electric</h1>
      <p>Electricien agréé RGIE disponible à Bruxelles, en Brabant Wallon et en Brabant Flamand.</p>
    </div>
  </section>

  <section class="zones-grid container">
    <div class="region-block">
      <h2>Bruxelles-Capitale</h2>
      <ul>
        <li><a href="/electricien-uccle">Électricien Uccle</a></li>
        <li><a href="/electricien-ixelles">Électricien Ixelles</a></li>
        <li><a href="/electricien-schaerbeek">Électricien Schaerbeek</a></li>
        <li><a href="/electricien-anderlecht">Électricien Anderlecht</a></li>
        <li>Et toutes les 19 communes</li>
      </ul>
    </div>
    <div class="region-block">
      <h2>Brabant Wallon</h2>
      <ul>
        <li><a href="/electricien-waterloo">Électricien Waterloo</a></li>
        <li><a href="/electricien-braine-lalleud">Électricien Braine-l'Alleud</a></li>
        <li><a href="/electricien-wavre">Électricien Wavre</a></li>
        <li><a href="/electricien-nivelles">Électricien Nivelles</a></li>
        <li>Et communes environnantes</li>
      </ul>
    </div>
    <div class="region-block">
      <h2>Brabant Flamand</h2>
      <ul>
        <li><a href="/electricien-leuven">Electricien Leuven</a></li>
        <li><a href="/electricien-vilvoorde">Elektriciën Vilvoorde</a></li>
        <li>Et communes environnantes</li>
      </ul>
    </div>
  </section>
</main>
```

---

## ÉTAPE 4 — Page À propos (humaniser l'entreprise)

**Objectif :** Ajouter une dimension humaine sur la page `/a-propos` existante.

Trouve la page À propos et **remplace ou enrichit** son contenu avec :

```html
<section class="about-story">
  <div class="container">
    <div class="about-grid">
      <div class="about-text">
        <span class="section-tag">Notre histoire</span>
        <h2>L'expertise électrique, sans compromis</h2>
        <p>
          Lumina Electric est née d'une conviction simple : les travaux électriques méritent 
          le même niveau d'exigence que les finitions d'une belle rénovation. 
          Trop souvent, les installations sont faites vite, sans documentation, 
          sans suivi — et le client se retrouve seul face aux organismes de contrôle.
        </p>
        <p>
          Nous avons construit Lumina Electric autour d'un principe différent : 
          chaque chantier est documenté, chaque installation est certifiée, 
          chaque client repart avec ses schémas, son PV et la sérénité de savoir 
          que son installation est irréprochable.
        </p>
        <p>
          Actifs à Bruxelles, en Brabant Wallon et en Brabant Flamand, 
          nous travaillons autant avec des particuliers en rénovation qu'avec 
          des agences immobilières qui ont besoin de certifications RGIE rapides 
          et fiables pour leurs ventes.
        </p>
      </div>
      <div class="about-values">
        <h3>Nos engagements</h3>
        <div class="value-item">
          <span class="value-icon">📋</span>
          <div>
            <strong>Documentation complète</strong>
            <p>Schéma unifilaire, schéma de position, PV de contrôle — tout est fourni systématiquement.</p>
          </div>
        </div>
        <div class="value-item">
          <span class="value-icon">🔍</span>
          <div>
            <strong>Transparence totale</strong>
            <p>Devis détaillé avec détail des prestations, sans ligne "divers" vague.</p>
          </div>
        </div>
        <div class="value-item">
          <span class="value-icon">🛡️</span>
          <div>
            <strong>Garanties solides</strong>
            <p>RC professionnelle et décennale. Travaux garantis selon les normes RGIE.</p>
          </div>
        </div>
        <div class="value-item">
          <span class="value-icon">🤝</span>
          <div>
            <strong>Partenaire de long terme</strong>
            <p>Agences immobilières, notaires, gestionnaires : nous construisons des relations durables.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-certifications">
  <div class="container">
    <h2>Certifications & partenaires</h2>
    <div class="cert-grid">
      <div class="cert-item">
        <strong>Certifié RGIE/AREI</strong>
        <span>Électricien agréé — travaux conformes garantis</span>
      </div>
      <div class="cert-item">
        <strong>Inspect Belgium</strong>
        <span>Organisme de contrôle partenaire</span>
      </div>
      <div class="cert-item">
        <strong>RC Professionnelle</strong>
        <span>Couverture complète chantier & tiers</span>
      </div>
      <div class="cert-item">
        <strong>Garantie décennale</strong>
        <span>10 ans de garantie sur les installations majeures</span>
      </div>
    </div>
  </div>
</section>
```

---

## ÉTAPE 5 — Sitemap XML

**Objectif :** Générer un sitemap.xml mis à jour avec toutes les nouvelles pages.

Crée ou mets à jour `/sitemap.xml` :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Pages principales -->
  <url><loc>https://luminaelectric.be/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://luminaelectric.be/services</loc><priority>0.9</priority></url>
  <url><loc>https://luminaelectric.be/realisations</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/a-propos</loc><priority>0.7</priority></url>
  <url><loc>https://luminaelectric.be/faq</loc><priority>0.7</priority></url>
  <url><loc>https://luminaelectric.be/contact</loc><priority>0.9</priority></url>
  
  <!-- Blog -->
  <url><loc>https://luminaelectric.be/blog</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/blog/prix-mise-en-conformite-rgie-belgique</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/blog/combien-coute-remplacement-tableau-electrique-belgique</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/blog/electricien-urgence-bruxelles-intervention-rapide</loc><priority>0.8</priority></url>
  
  <!-- Pages locales -->
  <url><loc>https://luminaelectric.be/zones</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-waterloo</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-braine-lalleud</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-wavre</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-nivelles</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-uccle</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-ixelles</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-schaerbeek</loc><priority>0.8</priority></url>
  <url><loc>https://luminaelectric.be/electricien-leuven</loc><priority>0.7</priority></url>
  <url><loc>https://luminaelectric.be/electricien-vilvoorde</loc><priority>0.7</priority></url>
  <url><loc>https://luminaelectric.be/electricien-anderlecht</loc><priority>0.8</priority></url>
  
</urlset>
```

---

## ÉTAPE 6 — Vérification finale

Une fois toutes les modifications effectuées, fais un rapport final :

```
RAPPORT DE MODIFICATIONS — Lumina Electric

✅ Étape 1 : Section avis clients — [FAIT / PARTIELLEMENT FAIT / ERREUR : ...]
✅ Étape 1 : Stat "50+" remplacée — [FAIT / ...]
✅ Étape 2 : Blog listing créé — [FAIT / ...]
✅ Étape 2 : Article 1 (prix RGIE) créé — [FAIT / ...]
✅ Étape 2 : Article 2 (tableau électrique) créé — [FAIT / ...]
✅ Étape 2 : Article 3 (urgence Bruxelles) créé — [FAIT / ...]
✅ Étape 2 : Blog ajouté dans la navigation — [FAIT / ...]
✅ Étape 3 : 10 pages locales créées — [FAIT / ...]
✅ Étape 3 : Page hub /zones créée — [FAIT / ...]
✅ Étape 4 : Page À propos enrichie — [FAIT / ...]
✅ Étape 5 : sitemap.xml mis à jour — [FAIT / ...]

FICHIERS MODIFIÉS :
[liste des fichiers touchés]

POINTS D'ATTENTION :
[ce qui nécessite une action manuelle de la part du propriétaire]

ACTIONS MANUELLES RESTANTES :
- Remplacer [GOOGLE_PLACE_ID] par le vrai ID Google Business dans la section avis
- Ajouter de vraies photos dans la section Réalisations
- Remplacer les témoignages placeholder par de vrais avis clients dès réception
- Soumettre le nouveau sitemap.xml dans Google Search Console
```

---

## NOTES IMPORTANTES

- **Ne supprime jamais** le contenu existant sans avoir vérifié que le remplacement est en place
- **Préserve** les classes CSS et IDs existants pour ne pas casser le style
- **Adapte** systématiquement au stack détecté — ne force pas du HTML pur si le projet est en Astro/Next.js/etc.
- **Teste** que les liens inter-pages fonctionnent après création
- Si un fichier de style est compilé (SCSS, Tailwind), ajoute le CSS dans le fichier source approprié, pas dans le CSS compilé
- Les avis clients sont des placeholders professionnels — ils devront être remplacés par de vrais avis Google dès que disponibles
