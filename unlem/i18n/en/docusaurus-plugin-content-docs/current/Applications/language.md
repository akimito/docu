---
sidebar_position: 2
---

# Language

**Language i18n**

Internationalization (i18n) is the process of preparing software to support local languages and cultural settings for other markets. An internationalized product supports the requirements of local markets worldwide, functioning more appropriately based on local norms, and better meeting in-country user expectations.

**Complete solution**
Most frameworks leave it to you how translations are being loaded. You are responsible to detect the user language, to load the translations and push them into the framework.
i18next takes care of these issues for you. We provide you with plugins to:
- detect the user language
- load the translations
- optionally cache the translations
- extension, by using post-processing - e.g. to enable sprintf support

***Flexibility**
i18next comes with strong defaults but it is flexible enough to fulfill custom needs.

- Use moment.js over intl for date formatting?
- Prefer different pre- and suffixes for interpolation?
- Like gettext style keys better?