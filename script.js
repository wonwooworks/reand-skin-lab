const PROGRAMS = [

    {
        id: "resurfacing", en: "Resurfacing", ko: "피부도로공사", title: "리앤 피부도로공사",
        lead: "비우고, 정돈하고, 채우는 리앤의 피부장벽 환생 프로그램입니다. 데콜테부터 얼굴, 두피까지 함께 관리합니다.",
        items: [
            { name: "피부도로공사 1회", time: "", price: "150,000원", sub: "", desc: "" },
            { name: "피부도로공사 10회", time: "", price: "1,200,000원", sub: "1회당 120,000원", desc: "" }
        ]
    },
    {
        id: "acne", en: "Acne Care", ko: "여드름", title: "리앤 여드름 관리",
        lead: "나이와 피부 상태에 맞춰 사춘기 여드름과 성인 여드름 관리를 나누어 진행합니다.",
        items: [
            { group: "사춘기 여드름 관리", groupNote: "70분 | 압출 + 진정", name: "1회 관리", time: "", price: "100,000원", sub: "", desc: "" },
            { group: "사춘기 여드름 관리", name: "5회 집중관리", time: "", price: "450,000원", sub: "1회당 90,000원", desc: "" },
            { group: "성인 여드름 관리", groupNote: "90분 | 압출 + 순환 + 진정·재생", name: "1회 관리", time: "", price: "130,000원", sub: "", desc: "" },
            { group: "성인 여드름 관리", name: "5회 집중관리", time: "", price: "600,000원", sub: "1회당 120,000원", desc: "" }
        ]
    },
    {
        id: "jection", en: "Super Jection", ko: "슈퍼젝션", title: "리앤 슈퍼젝션",
        lead: "보습, 탄력, 재생 등 고민별로 맞춘 앰플로 집중 케어합니다.",
        items: [
            { name: "슈퍼젝션 5회", time: "스타더스트", price: "2,200,000원", sub: "1회당 440,000원", desc: "" },
            { name: "히알젝션", time: "집중보습", price: "450,000원", sub: "1회", desc: "" },
            { name: "레티놀젝션", time: "집중탄력", price: "600,000원", sub: "1회", desc: "" },
            { name: "엑소좀젝션", time: "집중재생", price: "600,000원", sub: "1회", desc: "" },
            { name: "니코티노이드젝션", time: "집중노화", price: "600,000원", sub: "1회", desc: "" }
        ]
    },
    {
        id: "membership", en: "Membership", ko: "멤버십", title: "리앤 멤버십",
        lead: "꾸준히 관리받는 분들을 위한 멤버십입니다. 등급별 혜택은 상담 시 안내해 드립니다.",
        items: [
            { name: "Re& 프리미엄", time: "VVIP 가족회원", price: "10,000,000원", sub: "", desc: "" },
            { name: "Re& 시그니처", time: "", price: "5,000,000원", sub: "", desc: "" },
            { name: "Re& 베이직", time: "", price: "2,000,000원", sub: "", desc: "" }
        ]
    }
];

const REVIEWS = [
    {
        rating: 5, visit: "1번째 방문", date: "2026.10.14", keys: ["시술이 꼼꼼해요", "상담이 자세해요", "분위기가 편안해요", "맞춤 케어를 잘해줘요", "매장이 청결해요"],
        text: "원장님께서 시술전 피부상태를 체크하고, 상담도 자세하게 해주셨어요. 그리고 관리도 너무 만족스러웠어요. 너무 꼼꼼하게 케어해주셔서 피부도 한결 가볍고 부드러워진것같아요!"
    },
    {
        featured: true, rating: 5, visit: "1번째 방문", date: "2026.10.8", keys: ["관리 효과가 좋아요", "맞춤 케어를 잘해줘요", "시술이 꼼꼼해요", "상담이 자세해요", "관리법을 잘 알려줘요"],
        text: "피부가 거칠고 블랙헤드랑 요철이 많이 생겨서 방문했어요. 첫상담도 자세하게 잘해주시고 원장님이 직접 1대 1로 케어 해주시는데 너무 정성껏 해주시는게 느껴졌어요. 피부도로공사 이름이 신기했는데 피부가 진짜 공사가 된거같아요 ㅋ"
    },
    {
        rating: 5, visit: "1번째 방문", date: "2026.10.8", keys: ["관리 효과가 좋아요", "시술이 꼼꼼해요", "친절해요", "매장이 청결해요"],
        text: "오픈이벤트로 받으러왔다가 당일티켓팅 혜택있어서 10회 등록하고 왔어요. 매장 너무 깔끔하고 프라이빗하게 관리 받을수있어서 좋아요. 이마에 뾰루지가 하나 올라왔었는데 금방 압출까지 해주셨는데 하나도 안아파서 놀랐어요."
    }
];

(function () {
    const tabs = document.getElementById("progTabs");
    const panels = document.getElementById("progPanels");
    PROGRAMS.forEach((p, i) => {
        const t = document.createElement("button");
        t.className = "prog-tab"; t.type = "button"; t.role = "tab"; t.id = "tab-" + p.id;
        t.setAttribute("aria-controls", "panel-" + p.id);
        t.setAttribute("aria-selected", i === 0 ? "true" : "false");
        t.tabIndex = i === 0 ? 0 : -1;
        t.innerHTML = '<span class="latin">' + p.en + '</span><small>' + p.ko + '</small>';
        tabs.appendChild(t);

        const s = document.createElement("div");
        s.className = "prog-panel"; s.id = "panel-" + p.id; s.role = "tabpanel";
        s.setAttribute("aria-labelledby", "tab-" + p.id); s.hidden = i !== 0;
        const won = v => v.replace(/원$/, '<span class="won">원</span>');
        let lastGroup = "";
        const rows = p.items.map(it => {
            let g = "";
            if (it.group && it.group !== lastGroup) {
                lastGroup = it.group;
                g = '<li class="prog-group"><h4>' + it.group + '</h4>' + (it.groupNote ? '<span>' + it.groupNote + '</span>' : '') + '</li>';
            }
            return g + '<li class="prog-item"><h4>' + it.name + (it.time ? '<small>' + it.time + '</small>' : '') + '</h4>' +
                '<div class="prog-price">' + won(it.price) + (it.sub ? '<small>' + it.sub + '</small>' : '') + '</div>' +
                (it.desc ? '<p>' + it.desc + '</p>' : '') + '</li>';
        }).join("");
        s.innerHTML =
            '<div class="prog-intro"><span class="latin">' + p.en + '</span><h3>' + p.title + '</h3><p>' + p.lead + '</p></div>' +
            '<div><ul class="prog-menu">' + rows + '</ul>' +
            '<p class="prog-note">상담 후 피부 상태에 따라 관리 구성과 횟수는 달라질 수 있습니다.</p></div>';
        panels.appendChild(s);
    });
    const all = [...tabs.querySelectorAll(".prog-tab")];
    function select(t) {
        all.forEach(x => {
            const on = x === t; x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1;
            document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
        });
        t.focus(); t.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
    tabs.addEventListener("click", e => { const t = e.target.closest(".prog-tab"); if (t) select(t) });
    tabs.addEventListener("keydown", e => {
        const i = all.indexOf(document.activeElement); if (i < 0) return;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select(all[(i + 1) % all.length]); }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select(all[(i - 1 + all.length) % all.length]); }
    });
})();

(function () {
    const track = document.getElementById("rvTrack");

    const card = r => '<article class="rv-card' + (r.featured ? ' is-feature' : '') + '">' +
        '<div class="rv-head"><span class="rv-rating"><span class="rv-star" aria-hidden="true">★</span><span class="sr-only">별점</span>' + r.rating + '</span><span class="rv-visit">' + r.visit + '</span></div>' +
        '<blockquote>' + r.text + '</blockquote>' +
        (r.keys && r.keys.length ? '<ul class="rv-keys" aria-label="선택한 키워드">' + r.keys.map(k => '<li>' + k + '</li>').join("") + '</ul>' : '') +
        '<div class="rv-meta"><span>네이버 방문자 리뷰</span><time>' + r.date + '</time></div></article>';
    const html = REVIEWS.map(card).join("");
    const hidden = html.replace(/<article/g, '<article aria-hidden="true"');
    const repeat = Math.max(1, Math.ceil(6 / REVIEWS.length));
    track.innerHTML = html + hidden.repeat(repeat - 1) + hidden.repeat(repeat);
    const btn = document.getElementById("rvPause"), sec = document.getElementById("review");
    btn.addEventListener("click", () => {
        const p = sec.classList.toggle("is-paused");
        btn.setAttribute("aria-pressed", p); btn.textContent = p ? "자동 넘김 재생" : "자동 넘김 멈춤";
    });
})();

document.querySelectorAll(".ba").forEach(ba => {
    const r = ba.querySelector(".ba-range");
    r.addEventListener("input", () => { ba.classList.remove("is-hinting"); ba.style.setProperty("--pos", r.value + "%") });
});

if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => {
        es.forEach(e => {
            if (!e.isIntersecting) return; io.unobserve(e.target);
            const ba = e.target; ba.classList.add("is-hinting");
            setTimeout(() => ba.style.setProperty("--pos", "68%"), 200);
            setTimeout(() => ba.style.setProperty("--pos", "50%"), 1150);
            setTimeout(() => ba.classList.remove("is-hinting"), 2100);
        });
    }, { threshold: .6 });
    document.querySelectorAll(".ba").forEach(b => io.observe(b));
}

(function () {
    const sec = document.getElementById("difference");
    const track = document.getElementById("hzTrack");
    const bar = document.getElementById("hzBar");
    const mq = matchMedia("(max-width:900px), (prefers-reduced-motion: reduce)");
    let ticking = false;
    function update() {
        ticking = false;
        if (mq.matches) { track.style.transform = ""; return; }
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - innerHeight;
        const p = Math.min(1, Math.max(0, -rect.top / total));
        const max = track.scrollWidth - innerWidth;
        track.style.transform = "translate3d(" + (-p * max) + "px,0,0)";
        bar.style.setProperty("--p", p);
    }
    function req() { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    addEventListener("scroll", req, { passive: true });
    addEventListener("resize", req);
    mq.addEventListener("change", update);

    track.addEventListener("scroll", () => {
        if (!mq.matches) return;
        const m = track.scrollWidth - track.clientWidth;
        bar.style.setProperty("--p", m > 0 ? track.scrollLeft / m : 0);
    }, { passive: true });
    update();
})();

(function () {
    const steps = document.querySelector(".steps");
    steps.querySelectorAll(".step").forEach((s, i) => s.style.setProperty("--i", i));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
        steps.classList.add("is-in"); return;
    }

    const targets = [".sec-head", ".story-portrait", ".story-quote", ".story-body p", ".story-pull",
        ".sig-top > *", ".sig-road", ".sig-flow li", ".sig-bottom > *", ".ba", ".ba-note", ".prog-tabs",
        ".step", ".rv-viewport", ".faq-list details", ".loc-grid > *", ".closing .wrap > *"];
    const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { threshold: .15, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(sel => document.querySelectorAll(sel).forEach(el => {
        const sibs = [...el.parentElement.children].filter(c => c.matches(sel));
        el.style.setProperty("--d", Math.min(sibs.indexOf(el), 5) * 100 + "ms");
        el.classList.add("reveal"); io.observe(el);
    }));

    const io2 = new IntersectionObserver(es => {
        if (es[0].isIntersecting) { steps.classList.add("is-in"); io2.disconnect(); }
    }, { threshold: .45 });
    io2.observe(steps);
})();

const header = document.getElementById("header");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 40), { passive: true });
requestAnimationFrame(() => document.body.classList.add("is-loaded"));

(function () {
    const els = document.querySelectorAll("[data-open-now]");
    if (!els.length) return;
    const HOURS = { 1: [10, 20], 2: [10, 20], 3: [10, 20], 4: [10, 20], 5: [10, 20], 6: [10, 17] };
    const CLOSED = [
        "2026-12-25",
        "2027-01-01", "2027-02-06", "2027-02-07", "2027-02-08", "2027-02-09", "2027-03-01",
        "2027-05-01", "2027-05-03", "2027-05-05", "2027-05-13", "2027-06-06", "2027-07-17", "2027-07-19",
        "2027-08-15", "2027-08-16", "2027-09-14", "2027-09-15", "2027-09-16", "2027-10-03", "2027-10-04",
        "2027-10-09", "2027-10-11", "2027-12-25", "2027-12-27"
    ];
    const DAY = ["일", "월", "화", "수", "목", "금", "토"];
    const hoursOf = d => CLOSED.includes(d.toISOString().slice(0, 10)) ? null : HOURS[d.getUTCDay()] || null;
    const fmt = h => (h < 12 ? "오전 " + h : "오후 " + (h === 12 ? 12 : h - 12)) + "시";
    function render() {
        const k = new Date(Date.now() + 9 * 3600000);
        const t = k.getUTCHours() + k.getUTCMinutes() / 60;
        const today = hoursOf(k);
        let state = "closed", long, short;
        if (today && t >= today[0] && t < today[1]) {
            state = "open";
            long = "지금 영업 중 · " + fmt(today[1]) + "까지";
            short = "영업 중 · " + fmt(today[1]) + "까지";
        } else if (today && t < today[0]) {
            state = "soon";
            long = "오늘 " + fmt(today[0]) + "에 문을 열어요";
            short = "오늘 " + fmt(today[0]) + " 오픈";
        } else {
            let next = "";
            for (let i = 1; i <= 14; i++) {
                const d = new Date(k.getTime() + i * 86400000);
                const h = hoursOf(d);
                if (h) { next = (i === 1 ? "내일" : DAY[d.getUTCDay()] + "요일") + " " + fmt(h[0]) + " 오픈"; break; }
            }
            long = (today ? "오늘 영업이 끝났어요" : "오늘은 휴무입니다") + (next ? " · " + next : "");
            short = today ? "영업 종료" : "오늘 휴무";
        }
        els.forEach(el => {
            el.textContent = el.dataset.openNow === "short" ? short : long;
            el.dataset.state = state;
        });
    }
    render();
    setInterval(render, 60000);
})();

(function () {
    const btn = document.getElementById("routeBtn");
    if (!btn) return;
    const LAT = 37.623388, LNG = 127.151453, NAME = "리앤피부연구소";
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    btn.addEventListener("click", e => {
        if (!mobile) return;
        e.preventDefault();
        const fallback = btn.href;
        const timer = setTimeout(() => { if (!document.hidden) location.href = fallback; }, 1500);
        document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(timer); }, { once: true });
        location.href = "nmap://route/public?dlat=" + LAT + "&dlng=" + LNG + "&dname=" + encodeURIComponent(NAME) + "&appname=" + encodeURIComponent(location.hostname || "reand");
    });
})();