# ✅ AJOUT SECTION DÉPANNAGE FAQ (23 Février 2026 12:00)

## 🎯 Objectif
Ajouter une section "Dépannage" dans la FAQ avec 6 questions/réponses pertinentes sur les 3 langues (FR/NL/EN).

---

## 📋 Nouveau bouton de catégorie

### FR
- **Icône** : fas fa-exclamation-triangle
- **Titre** : Dépannage
- **ID** : #depannage

### NL
- **Icône** : fas fa-exclamation-triangle
- **Titre** : Storing
- **ID** : #storing

### EN
- **Icône** : fas fa-exclamation-triangle
- **Titre** : Troubleshooting
- **ID** : #troubleshooting

---

## 📝 Questions/Réponses créées (6 par langue)

### 1. Service d'urgence 7/7
**FR** : "Intervenez-vous en urgence 7j/7 ?"  
**NL** : "Komen jullie in noodgevallen 7/7 langs?"  
**EN** : "Do you provide emergency service 7/7?"

**Contenu** :
- Disponibilité 7j/7
- Délai d'intervention : 2-4h
- Diagnostic sur place
- Réparation immédiate ou solution temporaire
- Numéro d'urgence : +32 485 16 66 35

---

### 2. Panne totale de courant
**FR** : "Que faire en cas de panne totale de courant ?"  
**NL** : "Wat te doen bij een totale stroomstoring?"  
**EN** : "What to do in case of a complete power outage?"

**Contenu** :
- Vérifications préalables (tableau, compteur, voisins)
- Instructions sécurité
- Quand appeler l'électricien
- Distinction panne personnelle vs réseau

---

### 3. Pannes les plus fréquentes
**FR** : "Quelles sont les pannes électriques les plus fréquentes ?"  
**NL** : "Wat zijn de meest voorkomende elektrische storingen?"  
**EN** : "What are the most common electrical faults?"

**Contenu** :
- Court-circuit
- Surcharge
- Prise/interrupteur défectueux
- Tableau défaillant
- Problème de terre

---

### 4. Coût d'un dépannage
**FR** : "Combien coûte un dépannage électrique ?"  
**NL** : "Hoeveel kost een elektrische storing oplossen?"  
**EN** : "How much does electrical troubleshooting cost?"

**Contenu** :
- Facteurs de coût (déplacement, main d'œuvre, matériel, urgence)
- Transparence garantie
- Devis clair avant intervention
- Pas de frais cachés

---

### 5. Différentiel qui saute
**FR** : "Mon différentiel saute sans cesse, que faire ?"  
**NL** : "Mijn aardlekschakelaar schakelt voortdurend uit, wat te doen?"  
**EN** : "My RCD keeps tripping, what should I do?"

**Contenu** :
- Causes possibles (appareil défectueux, humidité, câble endommagé)
- Notre méthode d'intervention
- Tests et mesures
- Localisation précise du défaut
- Importance de ne jamais désactiver le différentiel

---

### 6. Réparations DIY
**FR** : "Puis-je faire moi-même de petites réparations électriques ?"  
**NL** : "Kan ik zelf kleine elektrische reparaties uitvoeren?"  
**EN** : "Can I do small electrical repairs myself?"

**Contenu** :
- Ce que vous pouvez faire (ampoule, réenclencher disjoncteur)
- Ce qui nécessite un professionnel (prises, câbles, tableau)
- Risques encourus (électrocution, incendie, assurance)
- Recommandation : appeler un pro

---

## 📊 Positionnement dans la FAQ

**Ordre des catégories (identique FR/NL/EN)** :
1. Conformité RGIE / AREI
2. Travaux & Rénovation
3. Tableaux électriques
4. Borne de recharge / Laadpaal / EV Charging
5. **🆕 Dépannage / Storing / Troubleshooting** ← NOUVEAU
6. Processus & Zones
7. Questions techniques

---

## ✅ Tests effectués

| Page | Taille | Temps | Questions | Erreurs | Statut |
|------|--------|-------|-----------|---------|--------|
| `faq.html` (FR) | +6 Q/R | 10.00s | 6 | 0 | ✅ OK |
| `nl/faq.html` (NL) | +6 Q/R | 10.42s | 6 | 0 | ✅ OK |
| `en/faq.html` (EN) | +6 Q/R | 9.47s | 6 | 0 | ✅ OK |

---

## 📁 Fichiers modifiés

1. **faq.html** (FR)
   - Ligne 106 : Bouton catégorie ajouté
   - Ligne 368+ : Section complète avec 6 Q/R
   
2. **nl/faq.html** (NL)
   - Ligne 106 : Bouton catégorie ajouté
   - Ligne 368+ : Section complète avec 6 Q/R (traductions NL)
   
3. **en/faq.html** (EN)
   - Ligne 106 : Bouton catégorie ajouté
   - Ligne 368+ : Section complète avec 6 Q/R (traductions EN)

---

## 🎨 Design et structure

### Bouton catégorie
```html
<a href="#depannage" class="category-link">
    <i class="fas fa-exclamation-triangle"></i>
    Dépannage
</a>
```

### Section FAQ
```html
<div id="depannage" class="faq-category">
    <div class="faq-category-header">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Dépannage électrique</h2>
    </div>
    
    <div class="faq-item">
        <button class="faq-question">
            <span>Question...</span>
            <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer">
            <p>Réponse...</p>
        </div>
    </div>
    ...
</div>
```

---

## 📋 Checklist finale

### Structure
- [✅] Bouton catégorie ajouté (FR/NL/EN)
- [✅] Section FAQ créée (FR/NL/EN)
- [✅] 6 Q/R par langue
- [✅] Ancres fonctionnelles (#depannage, #storing, #troubleshooting)

### Contenu
- [✅] Service urgence 7/7
- [✅] Panne totale courant
- [✅] Pannes fréquentes
- [✅] Coûts dépannage
- [✅] Différentiel qui saute
- [✅] Réparations DIY

### Traductions
- [✅] FR : Complet et naturel
- [✅] NL : Complet et naturel
- [✅] EN : Complet et naturel
- [✅] Terminologie technique correcte

### Tests
- [✅] 0 erreur console (3/3 pages)
- [✅] Chargement < 11s (3/3 pages)
- [✅] Accordéons fonctionnels
- [✅] Navigation anchor links OK

---

## 🎯 Mots-clés SEO couverts

- Dépannage électrique urgence
- Panne courant Bruxelles
- Électricien 7/7
- Court-circuit réparation
- Différentiel qui saute
- Intervention rapide électricien
- Coût dépannage électrique

---

## 🎉 RÉSULTAT

✅ **Section Dépannage complète ajoutée sur les 3 langues**  
✅ **6 questions/réponses pertinentes et détaillées**  
✅ **Traductions professionnelles FR/NL/EN**  
✅ **Navigation et design uniformes**  
✅ **0 erreur technique**

---

**Date** : 23 Février 2026 12:00  
**Version** : 1.8  
**Statut** : ✅ **PRODUCTION-READY**

---

**Lumina Electric** 🚀  
Service dépannage : +32 485 16 66 35 (7j/7)
