(function () {

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement("script");
            s.src = src;
            s.onload = resolve;
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }

    async function init() {
        try {
            await loadScript("https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js");
            await loadScript("https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js");

            dayjs.extend(dayjs_plugin_customParseFormat);
            processDates();

        } catch (err) {
            console.error("KT-Date: load error", err);
        }
    }

    function processDates() {
        const elements = document.querySelectorAll("[kt-date-original]");

        elements.forEach(el => {
            const originalFormat = el.getAttribute("kt-date-original");
            const locale = el.getAttribute("kt-date-locale") || "pt-BR";
            const targetFormat = el.getAttribute("kt-date-target");
            const originalText = el.textContent.trim();

            const formatted = formatDate(originalText, originalFormat, locale, targetFormat);
            el.textContent = formatted;
        });
    }

    function formatDate(originalText, originalFormat, locale, targetFormat) {
        const parsed = dayjs(originalText, originalFormat);

        if (!parsed.isValid()) {
            console.error("KT-Date: invalid date", {
                text: originalText,
                before: originalFormat
            });
            return originalText;
        }

        const jsDate = parsed.toDate();

        const monthLong = new Intl.DateTimeFormat(locale, { month: "long" }).format(jsDate);
        const monthShort = new Intl.DateTimeFormat(locale, { month: "short" }).format(jsDate);
        const weekdayLong = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(jsDate);
        const weekdayShort = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(jsDate);

        const tokens = {
            D: parsed.format("D"),
            DD: parsed.format("DD"),
            M: parsed.format("M"),
            MM: parsed.format("MM"),
            MMM: monthShort,
            MMMM: monthLong,
            ddd: weekdayShort,
            dddd: weekdayLong,
            YY: parsed.format("YY"),
            YYYY: parsed.format("YYYY")
        };

        let output = targetFormat;
        const ordered = Object.keys(tokens).sort((a, b) => b.length - a.length);

        ordered.forEach(token => {
            output = output.replace(token, tokens[token]);
        });

        return output;
    }

    document.addEventListener("DOMContentLoaded", init);

})();