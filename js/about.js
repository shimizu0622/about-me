document.addEventListener('load', (event) => {
    // ページ要素のアニメーション
    gsap.from("h1", {duration: 1, y: -50, opacity: 0, ease: "power3.out"});
    gsap.from(".profile-card", {duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5});
    
    // プロフィールセクションのアニメーション
    gsap.from(".profile-section", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1
    });

    // フッターのアニメーション
    gsap.from(".footer", {duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 1.5});

    // プロフィールセクションのホバーエフェクト
    document.querySelectorAll('.profile-section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            gsap.to(section, {duration: 0.3, scale: 1.05, backgroundColor: "rgba(255, 228, 196, 0.2)"});
        });
        section.addEventListener('mouseleave', () => {
            gsap.to(section, {duration: 0.3, scale: 1, backgroundColor: "transparent"});
        });
    });

    // メニューリンクのホバーエフェクト
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {duration: 0.3, y: -3, color: "#ff6b6b"});
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {duration: 0.3, y: 0, color: "#333"});
        });
    });
});