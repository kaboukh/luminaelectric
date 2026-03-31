# ⚡ Configuration Netlify - GUIDE SIMPLE

## 🎯 CE QUE VOUS DEVEZ FAIRE

---

## ✅ ÉTAPE 1 : Déployer sur Netlify (5 minutes)

### **Allez sur Netlify** :
🔗 https://app.netlify.com/signup

### **Connectez-vous avec GitHub** :
- Cliquez sur "Sign up with GitHub"
- Autorisez Netlify

### **Importez votre site** :
1. Cliquez sur **"Add new site"**
2. Choisissez **"Import an existing project"**
3. Cliquez sur **"Deploy with GitHub"**
4. Sélectionnez votre repo **"kaboukh/luminaelectric"**
5. Laissez tout par défaut
6. Cliquez sur **"Deploy site"**

⏱️ **Attendez 2 minutes** → ✅ Site déployé !

Vous aurez une URL comme : `https://luminaelectric-xyz.netlify.app`

---

## ✅ ÉTAPE 2 : Configuration DNS Name.com (10 minutes)

### **Sur Netlify** :

1. Dans votre site → **"Domain settings"**
2. Cliquez sur **"Add domain"**
3. Entrez : `luminaelectric.be`
4. Cliquez sur **"Verify"**
5. Cliquez sur **"Use Netlify DNS"**
6. **NOTEZ les 4 nameservers** affichés, exemple :
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```

### **Sur Name.com** :

1. Allez sur 🔗 https://www.name.com/
2. Cliquez sur **"My Domains"** → **"luminaelectric.be"**
3. Allez dans l'onglet **"Nameservers"**
4. Cliquez sur **"Change Nameservers"**
5. **Remplacez** les 4 nameservers par ceux de Netlify
6. Cliquez sur **"Save"**

⏱️ **Attendez 2-6 heures** (propagation DNS)

---

## ✅ ÉTAPE 3 : Activer HTTPS (automatique)

Une fois le DNS propagé (2-6h) :

1. **Dans Netlify** → **"Domain settings"** → **"HTTPS"**
2. Netlify génèrera automatiquement un certificat SSL gratuit
3. Cochez **"Force HTTPS"**

✅ **C'est tout !**

---

## ✅ ÉTAPE 4 : Pusher les fichiers modifiés sur GitHub

Les 3 formulaires de contact ont été modifiés pour utiliser **Netlify Forms**.

### **Via GitHub Desktop** :

1. Ouvrez GitHub Desktop
2. Vous verrez 3 fichiers modifiés :
   - `contact.html`
   - `nl/contact.html`
   - `en/contact.html`
3. En bas, écrivez : **"Formulaires Netlify (réparation)"**
4. Cliquez sur **"Commit to main"**
5. Cliquez sur **"Push origin"**

⏱️ **Netlify redéploiera automatiquement en 30 secondes !** ✅

---

## ✅ ÉTAPE 5 : Tester le formulaire

1. Allez sur votre site : `https://luminaelectric.be/contact.html`
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vous serez redirigé vers une page de confirmation Netlify ✅

### **Pour voir les messages reçus** :

1. Dans Netlify → **"Forms"** (menu de gauche)
2. Vous verrez tous les messages ! 📧

### **Pour recevoir les emails** :

1. Dans **"Forms"** → **"Form notifications"**
2. Cliquez sur **"Add notification"** → **"Email notification"**
3. Entrez : `info@luminaelectric.be`
4. ✅ Vous recevrez un email à chaque soumission !

---

## 📊 RÉCAPITULATIF

| Étape | Durée | Statut |
|-------|-------|--------|
| 1. Déployer sur Netlify | 5 min | ⏳ À faire |
| 2. Configurer DNS | 10 min + 2-6h | ⏳ À faire |
| 3. HTTPS auto | Automatique | ⏳ Auto |
| 4. Push fichiers modifiés | 2 min | ⏳ À faire |
| 5. Tester formulaire | 2 min | ⏳ À faire |

**Temps actif total** : ~20 minutes  
**Temps d'attente DNS** : 2-6 heures

---

## 🎁 CE QUE VOUS AUREZ À LA FIN

✅ Site en ligne sur **https://luminaelectric.be**  
✅ HTTPS/SSL automatique 🔒  
✅ Formulaire de contact fonctionnel 📧  
✅ 100 soumissions/mois gratuites  
✅ Déploiement automatique à chaque push GitHub  
✅ CDN ultra-rapide mondial  
✅ Notifications email pour chaque contact  

---

## ❓ QUESTIONS FRÉQUENTES

### **Combien ça coûte ?**
💰 **GRATUIT !** (Plan Netlify Starter)

### **Combien de temps pour déployer ?**
⏱️ **30 secondes** après chaque push GitHub

### **Combien de formulaires puis-je recevoir ?**
📧 **100 par mois** (gratuit), ensuite 19$/mois pour 1000

### **Puis-je revenir à GitHub Pages ?**
✅ Oui, mais vous perdrez les formulaires

### **Le formulaire fonctionne avec les photos ?**
⚠️ **Attention** : Netlify Forms accepte les uploads de fichiers **UNIQUEMENT sur les plans payants** (19$/mois).  
**Solution gratuite** : Demandez aux clients d'envoyer les photos par email séparément.

---

## 🚀 ALLEZ, C'EST PARTI !

Commencez par l'**ÉTAPE 1** et suivez le guide pas à pas ! 💪

**Bonne chance !** 😊

---

**Créé le** : 31 mars 2026  
**Pour** : Lumina Electric
