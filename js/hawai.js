document.addEventListener('load', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // ヘッダーのアニメーション
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    // 各セクションのアニメーション
    gsap.utils.toArray(".heritage").forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: i * 0.2
        });
    });

    // 画像のホバーエフェクト
    const images = document.querySelectorAll('.heritage-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            gsap.to(img, {duration: 0.3, scale: 1.1, boxShadow: "0 0 20px rgba(0,0,0,0.3)"});
        });
        img.addEventListener('mouseleave', () => {
            gsap.to(img, {duration: 0.3, scale: 1, boxShadow: "none"});
        });
    });

    // フッターのフェードイン
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
});