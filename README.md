# README.md

A lightweight browser library to parse, translate, and reformat dates using **Day.js**, **customParseFormat**, and the native **Intl API**.

KT-Date is ideal for environments like **Webflow**, where CMS dates are delivered exclusively in English and must be translated and reformatted on the client side.

<div align="center">

![License](https://img.shields.io/badge/license-MIT-green)
![CDN](https://img.shields.io/badge/CDN-jsDelivr-blue)
![Status](https://img.shields.io/badge/status-stable-brightgreen)
![Javascript](https://img.shields.io/badge/language-javascript-yellow)

</div>

---

## 🚀 Features

- Automatically loads **Day.js** and **customParseFormat** at runtime  
- Parses any date string using a provided input format  
- Translates months and weekdays using **Intl**  
- Supports **custom output formats** with friendly tokens  
- Works using **simple HTML attributes**  
- No imports needed — works **100% via CDN**  
- Super lightweight & browser-friendly  

---

## 📦 Installation (CDN)

### Latest version
```html
<!-- KT-Date -->
<script src="https://cdn.jsdelivr.net/gh/weslleycabral/kt-date/dist/kt-date.min.js"></script>
```

---

## 🧩 Usage

Add attributes to any element containing a date string:

```html
<div
  kt-date-original="MMMM D, YYYY"
  kt-date-locale="pt-BR"
  kt-date-target="D, MMM YY"
>
  OCTOBER 5, 2025
</div>
```

### Output:

```html
<div
  kt-date-original="MMMM D, YYYY"
  kt-date-locale="pt-BR"
  kt-date-target="D, MMM YY"
>
  OCTOBER 5, 2025
</div>
```

---

## 🔧 Attributes

| Attribute            | Required | Description                               |
| -------------------- | -------- | ----------------------------------------- |
| **kt-date-original** | ✔️ Yes   | Format of the input date string           |
| **kt-date-locale**   | Optional | Locale for translation (default: `pt-BR`) |
| **kt-date-target**   | ✔️ Yes   | Output format you want to generate        |

---

## Supported Tokens

Translated tokens (via Intl API)
| Token | Description                     |
| ----- | ------------------------------- |
| MMM   | Short month name (translated)   |
| MMMM  | Long month name (translated)    |
| ddd   | Short weekday name (translated) |
| dddd  | Long weekday name (translated)  |

---

## Numeric tokens (via Day.js)

| Token | Description       |
| ----- | ----------------- |
| D     | Day number (1–31) |
| DD    | Day, 2 digits     |
| M     | Month number      |
| MM    | Month, 2 digits   |
| YY    | 2-digit year      |
| YYYY  | 4-digit year      |

---

## 🧪 Examples

Full month + padded day
```html
<div
  kt-date-original="MMMM D, YYYY"
  kt-date-locale="pt-BR"
  kt-date-target="MMMM DD, YYYY"
>
  OCTOBER 5, 2025
</div>
```

Output:
```outubro 05, 2025```

---

European format
```html
<div
  kt-date-original="MMMM D, YYYY"
  kt-date-locale="pt-BR"
  kt-date-target="DD/MM/YYYY"
>
  OCTOBER 5, 2025
</div>
```

Output:
```05/10/2025```

---

Weekday + short month
```html
<div
  kt-date-original="MMMM D, YYYY"
  kt-date-locale="pt-BR"
  kt-date-target="dddd, D de MMM"
>
  OCTOBER 5, 2025
</div>
```

Output:
```domingo, 5 de out```

---

## 💛 Support

If you like this project, consider starring ⭐ it on GitHub.
Pull Requests and Issues are welcome!

## 📬 Contact

If you have questions, suggestions, or want to collaborate, feel free to reach out:

- **Email:** contato@kartus.com.br  
- **LinkedIn:** https://www.linkedin.com/in/weslley-cabral-857217143/
