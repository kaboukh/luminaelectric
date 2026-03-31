# 🌐 Configuration DNS Name.com pour Netlify

## 📅 Date : 31 mars 2026

---

## 🎯 OBJECTIF

Faire pointer le domaine **luminaelectric.be** vers votre site Netlify.

---

## 📋 CONFIGURATION DNS (2 OPTIONS)

### **OPTION 1 : Nameservers Netlify** ⭐ RECOMMANDÉE

C'est la méthode **la plus simple et la plus fiable**.

#### **Étape 1 : Sur Netlify**

1. Allez dans votre site Netlify
2. **Domain settings** → **Add domain**
3. Entrez : `luminaelectric.be`
4. Cliquez sur **Verify**
5. Cliquez sur **Use Netlify DNS**
6. Netlify vous donnera **4 nameservers**, exemple :

```
dns1.p03.nsone.net
dns2.p03.nsone.net
dns3.p03.nsone.net
dns4.p03.nsone.net
```

**⚠️ IMPORTANT** : Les vôtres seront différents ! Notez-les exactement.

#### **Étape 2 : Sur Name.com**

1. Allez sur https://www.name.com/
2. **My Domains** → Cliquez sur **luminaelectric.be**
3. Allez dans l'onglet **"Nameservers"**
4. Cliquez sur **"Change Nameservers"**
5. **Remplacez** les nameservers actuels par les **4 nameservers Netlify**
6. Cliquez sur **"Save"**

#### **Attendez la propagation**

⏱️ **Durée** : 2-6 heures (parfois jusqu'à 24h)

**Vérification** :
- 🔗 https://www.whatsmydns.net/#NS/luminaelectric.be
- Vous devriez voir les 4 nameservers Netlify partout

#### **Résultat**

Une fois propagé, Netlify active automatiquement :
- ✅ HTTPS/SSL (certificat Let's Encrypt gratuit)
- ✅ Redirection www → non-www (ou inverse selon votre choix)
- ✅ CDN global ultra-rapide

---

### **OPTION 2 : Enregistrements A et CNAME**

Si vous préférez garder Name.com comme DNS.

#### **Sur Name.com**

1. Allez dans **My Domains** → **luminaelectric.be**
2. Allez dans l'onglet **"DNS Records"**
3. **Supprimez TOUS les anciens enregistrements** (A, CNAME, etc.)
4. **Ajoutez ces nouveaux enregistrements** :

| Type   | Host/Name | Value/Target                    | TTL |
|--------|-----------|--------------------------------|-----|
| A      | @         | 75.2.60.5                     | 300 |
| CNAME  | www       | [VOTRE-SITE].netlify.app      | 300 |

**⚠️ REMPLACEZ** `[VOTRE-SITE]` par votre URL Netlify exacte.

**Exemple** :
```
Type: CNAME
Host: www
Value: luminaelectric-kaboukh.netlify.app
TTL: 300
```

#### **Pour IPv6 (optionnel mais recommandé)** :

| Type   | Host/Name | Value/Target              | TTL |
|--------|-----------|---------------------------|-----|
| AAAA   | @         | 2600:4040:a000:4::1      | 300 |

#### **Attendez la propagation**

⏱️ **Durée** : 15-60 minutes

**Vérification** :
- 🔗 https://www.whatsmydns.net/#A/luminaelectric.be → doit montrer `75.2.60.5`
- 🔗 https://www.whatsmydns.net/#CNAME/www.luminaelectric.be → doit montrer votre URL Netlify

---

## ✅ VÉRIFICATIONS APRÈS PROPAGATION

### **Test 1 : DNS propagé ?**

Dans votre terminal (CMD sur Windows, Terminal sur Mac) :

```bash
# Pour vérifier les nameservers (Option 1)
nslookup -type=NS luminaelectric.be

# Pour vérifier l'IP (Option 2)
nslookup luminaelectric.be
```

### **Test 2 : Site accessible ?**

Ouvrez ces URLs dans votre navigateur :

```
http://luminaelectric.be
https://luminaelectric.be
http://www.luminaelectric.be
https://www.luminaelectric.be
```

**Attendu** :
- ✅ Toutes redirigent vers **https://luminaelectric.be** (ou www)
- ✅ Site s'affiche avec le design complet
- ✅ Cadenas vert 🔒 (HTTPS actif)

### **Test 3 : Certificat SSL actif ?**

1. Dans Netlify → **Domain settings** → **HTTPS**
2. Statut : **"Your site has HTTPS enabled"**
3. Cochez **"Force HTTPS"**

---

## 🔧 CONFIGURATION AVANCÉE NETLIFY (Optionnel)

### **Redirections www → non-www (ou inverse)**

Par défaut, Netlify redirige automatiquement.

**Pour forcer www** :
1. Dans Netlify → **Domain settings**
2. Cliquez sur **"Set as primary domain"** sur `www.luminaelectric.be`

**Pour forcer non-www** :
1. Cliquez sur **"Set as primary domain"** sur `luminaelectric.be`

---

## 📊 COMPARAISON OPTIONS

| Critère | Option 1 : Nameservers | Option 2 : A/CNAME |
|---------|------------------------|-------------------|
| **Simplicité** | ⭐⭐⭐⭐⭐ Très simple | ⭐⭐⭐ Moyen |
| **Fiabilité** | ⭐⭐⭐⭐⭐ Maximum | ⭐⭐⭐⭐ Bonne |
| **Propagation** | 2-6 heures | 15-60 minutes |
| **HTTPS auto** | ✅ Oui | ✅ Oui |
| **Gestion DNS** | Netlify | Name.com |
| **Redirections** | ✅ Auto | ✅ Auto |

**Recommandation** : ⭐ **Option 1** (Nameservers Netlify)

---

## ⏱️ TIMELINE

### **Option 1 : Nameservers**
```
Maintenant → +10 min (config Name.com)
           → +2-6 heures (propagation DNS)
           → +5 min (activation HTTPS)
           → SITE EN LIGNE ✅
```

### **Option 2 : A/CNAME**
```
Maintenant → +10 min (config Name.com)
           → +15-60 min (propagation DNS)
           → +5 min (activation HTTPS)
           → SITE EN LIGNE ✅
```

---

## ❓ FAQ

### **1. Combien de temps dure la propagation DNS ?**
- **Nameservers** : 2-6 heures (parfois 24h)
- **A/CNAME** : 15-60 minutes

### **2. Puis-je utiliser les deux options ?**
❌ Non, choisissez-en une seule.

### **3. Que faire si le DNS ne propage pas ?**
1. Vérifiez que vous avez bien sauvegardé sur Name.com
2. Attendez encore 1-2 heures
3. Videz votre cache DNS local :
   - Windows : `ipconfig /flushdns`
   - Mac : `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

### **4. Mon site affiche "404 - Page Not Found" ?**
- Vérifiez que Netlify a bien déployé le site
- Vérifiez que le domaine est bien ajouté dans Netlify
- Attendez encore quelques minutes

### **5. HTTPS ne s'active pas ?**
- Attendez que le DNS soit complètement propagé
- Netlify génère le certificat SSL automatiquement (peut prendre 5-10 min)
- Si ça bloque, dans Netlify → HTTPS → "Renew certificate"

---

## 🎯 RECOMMANDATION FINALE

**Pour une configuration rapide et sans tracas** :

1. ✅ Utilisez **Option 1 : Nameservers Netlify**
2. ⏱️ Faites-le **maintenant** (10 minutes)
3. 😴 Allez dormir
4. 🌅 Demain matin, votre site sera en ligne avec HTTPS !

---

**Bonne configuration !** 🚀

---

**Dernière mise à jour** : 31 mars 2026  
**Créé par** : Assistant IA  
**Pour** : Lumina Electric
