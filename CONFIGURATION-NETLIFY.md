# 🚀 Configuration complète Netlify + Domaine luminaelectric.be

## 📅 Date
**31 mars 2026**

---

## 🎯 OBJECTIFS

1. ✅ Déployer le site sur Netlify (plus fiable que GitHub Pages)
2. ✅ Configurer le domaine luminaelectric.be
3. ✅ Activer HTTPS/SSL automatique
4. ✅ Réparer le formulaire de contact (Netlify Forms au lieu de FormSubmit)

---

## 📋 ÉTAPE 1 : Déployer sur Netlify

### **Méthode A : Via GitHub (RECOMMANDÉE)** ⭐

1. **Créez un compte Netlify** :
   - 🔗 https://app.netlify.com/signup
   - Connectez-vous avec votre compte **GitHub**

2. **Ajoutez un nouveau site** :
   - Cliquez sur **"Add new site"** → **"Import an existing project"**
   - Choisissez **"Deploy with GitHub"**

3. **Autorisez Netlify** :
   - Cliquez sur **"Authorize Netlify"**
   - Sélectionnez votre repository **"kaboukh/luminaelectric"**

4. **Configuration du build** :
   ```
   Branch to deploy: main
   Build command: (laisser vide)
   Publish directory: (laisser vide ou mettre "/")
   ```

5. **Cliquez sur "Deploy site"** :
   - ⏱️ Attendez 1-2 minutes
   - ✅ Site déployé !

6. **Notez votre URL Netlify** :
   - Exemple : `https://luminaelectric-kaboukh.netlify.app`

---

### **Méthode B : Drag & Drop (plus rapide)** 🚀

1. **Téléchargez votre site depuis GitHub** :
   - 🔗 https://github.com/kaboukh/luminaelectric
   - Cliquez sur **"Code"** → **"Download ZIP"**
   - Extrayez le ZIP sur votre PC

2. **Allez sur Netlify Drop** :
   - 🔗 https://app.netlify.com/drop

3. **Glissez-déposez le dossier** `luminaelectric` :
   - ⏱️ Attendez 30 secondes
   - ✅ Site en ligne !

4. **Récupérez l'URL** :
   - Exemple : `https://random-name-123456.netlify.app`

---

## 📋 ÉTAPE 2 : Configuration du domaine

### **Option 1 : DNS Netlify (RECOMMANDÉE)** ⭐

#### **A. Sur Netlify** :

1. **Ajoutez votre domaine** :
   - Dans votre site Netlify → **"Domain settings"**
   - Cliquez sur **"Add domain"**
   - Entrez : `luminaelectric.be`
   - Cliquez sur **"Verify"**

2. **Utilisez Netlify DNS** :
   - Cliquez sur **"Use Netlify DNS"**
   - Netlify vous donnera **4 nameservers**, exemple :
     ```
     dns1.p03.nsone.net
     dns2.p03.nsone.net
     dns3.p03.nsone.net
     dns4.p03.nsone.net
     ```
   - **⚠️ NOTEZ-LES** (les vôtres seront différents)

#### **B. Sur Name.com** :

1. **Connectez-vous à Name.com** :
   - 🔗 https://www.name.com/

2. **Allez dans "My Domains"** :
   - Cliquez sur **"luminaelectric.be"**

3. **Changez les Nameservers** :
   - Allez dans l'onglet **"Nameservers"**
   - Cliquez sur **"Change Nameservers"**
   - **Remplacez** les nameservers actuels par les **4 nameservers Netlify**
   - Cliquez sur **"Save"**

#### **C. Attendez la propagation** :

- ⏱️ **Durée : 2-6 heures** (parfois 24h)
- Vérifiez sur : https://www.whatsmydns.net/#NS/luminaelectric.be
- Quand propagé, vous verrez les nameservers Netlify partout

#### **D. De retour sur Netlify** :

- Une fois propagé, Netlify activera automatiquement :
  - ✅ HTTPS/SSL (certificat Let's Encrypt gratuit)
  - ✅ Redirection www → non-www (configurable)
  - ✅ CDN global ultra-rapide

---

### **Option 2 : Conserver Name.com DNS** 

Si vous préférez garder Name.com comme DNS :

#### **Sur Name.com** :

**Supprimez TOUS les anciens enregistrements DNS**, puis ajoutez :

| Type      | Host/Name | Value/Target                           | TTL |
|-----------|-----------|----------------------------------------|-----|
| **A**     | **@**     | **75.2.60.5**                         | 300 |
| **CNAME** | **www**   | **[VOTRE-SITE].netlify.app**          | 300 |

**⚠️ IMPORTANT** :
- Remplacez `[VOTRE-SITE]` par votre URL Netlify exacte
- Exemple : `luminaelectric-kaboukh.netlify.app`

#### **Pour IPv6 (optionnel)** :

| Type      | Host/Name | Value/Target                           | TTL |
|-----------|-----------|----------------------------------------|-----|
| **AAAA**  | **@**     | **2600:4040:a000:4::1**               | 300 |

#### **Attendez** :
- ⏱️ **15-60 minutes**
- Vérifiez :
  - https://www.whatsmydns.net/#A/luminaelectric.be → `75.2.60.5`
  - https://www.whatsmydns.net/#CNAME/www.luminaelectric.be → votre URL Netlify

---

## 📋 ÉTAPE 3 : Activer HTTPS

1. **Dans Netlify** :
   - **"Domain settings"** → **"HTTPS"**

2. **Attendez le provisionnement SSL** :
   - État : "Netlify is provisioning a certificate from Let's Encrypt"
   - ⏱️ **1-5 minutes** après propagation DNS

3. **Activez Force HTTPS** :
   - ✅ Cochez **"Force HTTPS"**
   - Toutes les requêtes HTTP → HTTPS automatiquement

---

## 📋 ÉTAPE 4 : Réparer le formulaire de contact

### **Modification des 3 fichiers de contact**

Les formulaires utilisent actuellement **FormSubmit.co** (qui est down).

On va les remplacer par **Netlify Forms** (gratuit, 100 soumissions/mois).

#### **Changements à faire** :

Pour **chaque fichier de contact** (`contact.html`, `nl/contact.html`, `en/contact.html`) :

**AVANT** (ligne 105 environ) :
```html
<form id="contactForm" action="https://formsubmit.co/info@luminaelectric.be" method="POST" name="contact_form">
    <!-- Champs cachés FormSubmit -->
    <input type="hidden" name="_subject" value="Nouvelle demande de devis - Lumina Electric">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_template" value="table">
```

**APRÈS** :
```html
<form id="contactForm" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <!-- Champs Netlify Forms -->
    <input type="hidden" name="form-name" value="contact">
    <p style="display:none;">
        <label>Ne pas remplir : <input name="bot-field" /></label>
    </p>
```

---

### **Fichiers modifiés à uploader**

Je vais créer les 3 fichiers modifiés dans la prochaine étape.

---

## 📋 ÉTAPE 5 : Tester le site

### **URLs à tester** :

```
http://luminaelectric.be
https://luminaelectric.be
http://www.luminaelectric.be
https://www.luminaelectric.be
```

### **Vérifications** :

- ✅ Toutes redirigent vers **https://luminaelectric.be** (ou www)
- ✅ Design complet affiché
- ✅ Cadenas vert 🔒 (HTTPS)
- ✅ Navigation FR/NL/EN fonctionne
- ✅ Formulaire s'envoie sans erreur

---

## 📋 ÉTAPE 6 : Consulter les messages reçus

### **Sur Netlify** :

1. Allez dans votre site Netlify
2. Cliquez sur **"Forms"** dans le menu de gauche
3. Vous verrez tous les messages reçus via le formulaire ! 📧

### **Notifications email** :

1. Dans **"Forms"** → **"Form notifications"**
2. Ajoutez une notification email :
   - Email : `info@luminaelectric.be`
   - Vous recevrez un email à chaque soumission ! ✅

---

## 📊 RÉCAPITULATIF

| Élément | Statut |
|---------|--------|
| 🚀 Site déployé Netlify | ✅ |
| 🌐 Domaine configuré | ✅ |
| 🔒 HTTPS activé | ✅ |
| 📧 Formulaire réparé | ✅ |
| 📱 Mobile optimisé | ✅ |
| 🇫🇷🇳🇱🇬🇧 Multilingue | ✅ |

---

## 🎁 AVANTAGES NETLIFY vs GITHUB PAGES

| Fonctionnalité | GitHub Pages | Netlify |
|----------------|--------------|---------|
| Hébergement gratuit | ✅ | ✅ |
| HTTPS automatique | ✅ | ✅ |
| CDN global | ✅ | ✅ |
| **Formulaires** | ❌ | ✅ 100/mois |
| **Déploiement continu** | ✅ | ✅ Plus rapide |
| **Redirections** | Limité | ✅ Illimitées |
| **Functions serverless** | ❌ | ✅ |
| **Split testing A/B** | ❌ | ✅ |
| **Analytics** | ❌ | ✅ |
| **Vitesse déploiement** | 2-5 min | 30 sec |

---

## 📞 SUPPORT

### **Documentation Netlify** :
- Forms : https://docs.netlify.com/forms/setup/
- DNS : https://docs.netlify.com/domains-https/custom-domains/
- HTTPS : https://docs.netlify.com/domains-https/https-ssl/

### **Besoin d'aide ?**
Contactez-moi pour toute question sur la configuration ! 😊

---

**Dernière mise à jour** : 31 mars 2026  
**Créé par** : Assistant IA pour Lumina Electric
