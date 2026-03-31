# 📱 GUIDE DE TEST MOBILE - Lumina Electric

## 🎯 Comment tester le site sur smartphone

### Méthode 1 : Chrome DevTools (PC/Mac)

1. **Ouvrir Chrome** et charger une page du site
2. **Appuyer sur F12** ou clic droit > "Inspecter"
3. **Cliquer sur l'icône mobile** (📱) en haut à gauche
4. **Sélectionner un appareil** :
   - iPhone SE (375px) - Petit écran
   - iPhone 12/13 Pro (390px) - Standard
   - iPhone 14 Pro Max (430px) - Grand écran
   - Samsung Galaxy S20 (360px) - Android standard

5. **Vérifier ces éléments** :

#### ✅ Header
- [ ] Logo visible et proportionnel
- [ ] Boutons "Appeler" et "Devis gratuit" complets (texte non coupé)
- [ ] Menu hamburger (☰) cliquable
- [ ] Barre supérieure (téléphone/email) sur une ligne
- [ ] Hauteur header ~65-70px

#### ✅ Contenu principal
- [ ] **Carte rouge urgence** :
  - Pas de débordement horizontal
  - Titre "Urgence électrique" lisible
  - Bouton téléphone cliquable (≥44px)
  - Padding uniforme

- [ ] **Info-boxes bleues** :
  - Largeur 100% du container
  - Texte lisible
  - Pas de scroll horizontal

- [ ] **Cartes de services** :
  - 1 seule colonne
  - Icônes ~56px
  - Texte lisible (≥0.9375rem)
  - Espacement cohérent

#### ✅ Breadcrumb
- [ ] Texte visible et lisible
- [ ] Séparateur "/" visible
- [ ] Pas de coupure

#### ✅ Boutons & liens
- [ ] Tous les boutons ≥44px de hauteur
- [ ] Texte complet (pas de "...")
- [ ] Boutons CTA en pleine largeur dans le contenu

#### ✅ Footer
- [ ] Empilé verticalement (1 colonne)
- [ ] Logo ~100px
- [ ] Liens cliquables
- [ ] Informations lisibles

---

### Méthode 2 : Test sur vrai smartphone

1. **Publier le site** ou utiliser un serveur local
2. **Scanner le QR code** ou entrer l'URL
3. **Tester la navigation** :
   - Cliquer sur le menu hamburger
   - Tester les boutons "Appeler" et "Devis"
   - Scroller verticalement (pas de scroll horizontal !)
   - Cliquer sur les cartes de service
   - Tester le formulaire de contact

---

## 🔍 Pages prioritaires à tester

### Français
1. **index.html** (Page d'accueil)
2. **services/depannage.html** (Urgence - carte rouge)
3. **services/conformite-rgie.html** (Info-boxes bleues)
4. **services/borne-recharge.html** (Grille de services)
5. **contact.html** (Formulaire)
6. **faq.html** (Accordéons)

### Néerlandais
1. **nl/index.html**
2. **nl/diensten/storing.html** (Dépannage)
3. **nl/diensten/arei-conformiteit.html** (RGIE)
4. **nl/contact.html**

### Anglais
1. **en/index.html**
2. **en/services/alarm-surveillance.html**
3. **en/contact.html**

---

## 🐛 Problèmes courants à vérifier

### ❌ Débordements horizontaux
**Symptôme** : Scroll horizontal apparaît  
**Solution** : Vérifier que mobile.css est bien lié  
**Vérification** : Ouvrir DevTools > Elements > <head> > chercher "mobile.css"

### ❌ Texte trop petit
**Symptôme** : Texte illisible sur smartphone  
**Solution** : CSS mobile définit tailles minimales (0.9375rem = ~15px)  
**Vérification** : Zoomer avec les doigts fonctionne ?

### ❌ Boutons coupés
**Symptôme** : "Devis grat..." au lieu de "Devis gratuit"  
**Solution** : Déjà corrigé dans header-cta (0.875rem, nowrap)  
**Vérification** : Largeur écran <360px → Icônes seuls OK

### ❌ Carte rouge déborde
**Symptôme** : Carte urgence dépasse sur les côtés  
**Solution** : Déjà corrigé avec calc(100vw - 2rem)  
**Vérification** : Inspecter la carte → max-width doit être présent

---

## 📊 Résolutions à tester

| Appareil | Largeur | Hauteur | Notes |
|----------|---------|---------|-------|
| **iPhone SE** | 375px | 667px | Écran étroit, test critique |
| **iPhone 12/13 Pro** | 390px | 844px | Standard iOS |
| **iPhone 14 Pro Max** | 430px | 932px | Grand écran iOS |
| **Samsung S20** | 360px | 800px | Android standard |
| **Galaxy S8+** | 360px | 740px | Android ancien |
| **Pixel 5** | 393px | 851px | Android moderne |
| **iPad Mini** | 768px | 1024px | Tablette portrait |

**Priorité** : Tester d'abord 360px (plus petit) et 430px (plus grand)

---

## 🎨 Breakpoints CSS

```css
/* Mobile par défaut */
@media (max-width: 768px) { ... }

/* Très petits écrans */
@media (max-width: 360px) { 
    /* Texte des boutons masqué, icônes seuls */
}

/* Tablettes portrait */
@media (min-width: 768px) and (max-width: 1024px) { ... }
```

---

## ✅ Checklist rapide (5 minutes)

1. [ ] Ouvrir Chrome DevTools (F12)
2. [ ] Activer mode mobile (icône 📱)
3. [ ] Sélectionner iPhone SE (375px)
4. [ ] Charger services/depannage.html
5. [ ] Vérifier :
   - [ ] Pas de scroll horizontal
   - [ ] Carte rouge visible entièrement
   - [ ] Bouton téléphone cliquable
   - [ ] Menu hamburger fonctionne
6. [ ] Changer pour Samsung S20 (360px)
7. [ ] Répéter vérifications
8. [ ] Tester 2-3 autres pages

**Temps total** : ~5 minutes par langue

---

## 🚀 Test avancé (optionnel)

### Lighthouse (Google)
1. DevTools > Onglet "Lighthouse"
2. Cocher "Mobile"
3. Cliquer "Generate report"
4. **Objectif** : Score ≥90/100 pour :
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Responsive Design Checker (en ligne)
- Outil : responsivedesignchecker.com
- Entrer l'URL du site
- Tester automatiquement 20+ appareils

---

## 📞 En cas de problème

Si vous constatez un bug mobile :

1. **Noter** :
   - Page concernée (URL)
   - Appareil/résolution (ex: iPhone 12, 390px)
   - Description du problème
   - Screenshot si possible

2. **Vérifier** :
   - mobile.css est bien lié dans le <head>
   - Console ne montre pas d'erreur (F12 > Console)
   - Cache navigateur vidé (Ctrl+Shift+R)

3. **Contacter** :
   - Email : info@luminaelectric.be
   - Téléphone : +32 485 16 66 35

---

## 📚 Ressources

- **Documentation complète** : `CORRECTIONS-CADRES-MOBILE-22FEV.md`
- **Résumé rapide** : `RESUME-CORRECTIONS-MOBILE.md`
- **Guide mobile** : `OPTIMISATION-MOBILE.md`
- **README principal** : `README.md`

---

**✅ Site optimisé pour 100% des smartphones** 📱✨

**Dernière mise à jour** : 22 février 2026  
**Version** : 1.1 (Mobile-ready)
