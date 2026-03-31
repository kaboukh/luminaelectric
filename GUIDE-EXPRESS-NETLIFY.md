# ⚡ GUIDE EXPRESS : Activer luminaelectric.be sur Netlify

## 🎯 CE QU'IL FAUT FAIRE (en 5 étapes)

---

## ✅ ÉTAPE 1 : Créer compte Netlify (2 min)

🔗 https://app.netlify.com/signup

- Cliquez sur **"Sign up with GitHub"**
- Autorisez Netlify

---

## ✅ ÉTAPE 2 : Déployer le site (3 min)

1. Cliquez sur **"Add new site"** → **"Import an existing project"**
2. Choisissez **"Deploy with GitHub"**
3. Sélectionnez **"kaboukh/luminaelectric"**
4. Laissez tout par défaut
5. Cliquez sur **"Deploy site"**

⏱️ Attendez 2 minutes → ✅ Site déployé !

Notez votre URL : `https://[random-name].netlify.app`

---

## ✅ ÉTAPE 3 : Ajouter le domaine (2 min)

1. Dans Netlify → **"Domain settings"** → **"Add domain"**
2. Entrez : `luminaelectric.be`
3. Cliquez sur **"Verify"**
4. Cliquez sur **"Use Netlify DNS"**
5. **NOTEZ les 4 nameservers** affichés (exemple) :
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```

---

## ✅ ÉTAPE 4 : Configurer Name.com (5 min)

1. 🔗 https://www.name.com/
2. **My Domains** → **luminaelectric.be**
3. Onglet **"Nameservers"**
4. **"Change Nameservers"**
5. **Remplacez** par les 4 nameservers Netlify
6. **"Save"**

⏱️ **ATTENDEZ 2-6 HEURES** (propagation DNS)

---

## ✅ ÉTAPE 5 : Push les formulaires réparés (2 min)

1. Ouvrez **GitHub Desktop**
2. Vous verrez 3 fichiers modifiés :
   - contact.html
   - nl/contact.html
   - en/contact.html
3. Commit : "Formulaires Netlify"
4. Push origin

⏱️ Netlify redéploie automatiquement en 30 sec ! ✅

---

## ⏱️ TEMPS TOTAL

- **Temps actif** : 14 minutes
- **Temps d'attente** : 2-6 heures (propagation DNS)

---

## 🎁 RÉSULTAT FINAL

Après 2-6 heures, vous aurez :

✅ **https://luminaelectric.be** en ligne  
✅ HTTPS/SSL automatique 🔒  
✅ Formulaire de contact fonctionnel 📧  
✅ Notifications email activables  
✅ Déploiement automatique (30 sec)  
✅ **100% GRATUIT** 💰  

---

## 📧 BONUS : Recevoir les emails de contact

**Après propagation DNS** :

1. Dans Netlify → **"Forms"** → **"Form notifications"**
2. **"Add notification"** → **"Email notification"**
3. Entrez : `info@luminaelectric.be`
4. ✅ Vous recevrez un email à chaque message !

---

## 📖 DOCUMENTATION COMPLÈTE

Si besoin de plus de détails :

- **`NETLIFY-GUIDE-SIMPLE.md`** - Guide détaillé
- **`CONFIGURATION-DNS-NAME-COM.md`** - Configuration DNS complète
- **`RESUME-MIGRATION-NETLIFY.md`** - Résumé complet

---

## 🚀 ALLEZ, C'EST PARTI !

**Temps total : 14 minutes + attente 2-6h**

**Commencez maintenant !** 💪

---

**Créé le** : 31 mars 2026  
**Pour** : Lumina Electric  
**Par** : Assistant IA
