---
sidebar_position: 2
---

# Giriş
**Kullanıcı Girişi**

Sisteme ve Sisteme bağlı uygulamalara erişebilmek için kullanıcı adı ,eposta ,şifre olarak tanımlanan alanları
giriş ekranında gelen Kullanıcı ve Şifre kısımlarına girerek sisteme erişim sağlanır.


```js
http://auth.unlemcloud.com/sign-in
```
- Kullanıcı Adı
- Şifre

**Şifremi Unuttum**

- Şifremi Unuttum

Sistemde Tanımlı Kullanıcı adına üretilmiş şifrenin unutulması durumunda sistem kayıtlı e-posta adresine yeni şifre üretilerek gönderilecektir.


```js
http://auth.unlemcloud.com/password-reset
```

**Kayıt Olma**

:::tip
- Kayıt Olma
Kullanıcı değilseniz Sisteme ilk defa giriş yapacaksanız kullanıcı bilgilerinizle kayıt olabilirsiniz.
:::


```js
http://auth.unlemcloud.com/sign-up
```

![Docusaurus Plushie](./Login.png)