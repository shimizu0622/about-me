document.addEventListener('load', (event) => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームのバリデーション
        let isValid = true;
        const name = document.getElementById('name').value;
        const tel = document.getElementById('tel').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || tel.trim() === '' || email.trim() === '' || message.trim() === '') {
            isValid = false;
        }

        if (!isValid) {
            formMessage.textContent = '全ての項目を入力してください。';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'red';
            return;
        }

        // 電話番号のバリデーション（簡易的な例）
        const telRegex = /^\d{10,11}$/;
        if (!telRegex.test(tel)) {
            formMessage.textContent = '有効な電話番号を入力してください。';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'red';
            return;
        }

        // メールアドレスのバリデーション
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = '有効なメールアドレスを入力してください。';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'red';
            return;
        }

        // フォーム送信の処理（ここではダミーの処理）
        setTimeout(() => {
            formMessage.textContent = 'お問い合わせありがとうございます。メッセージを送信しました。';
            formMessage.classList.remove('hidden');
            formMessage.style.color = 'green';
            form.reset();
        }, 1000);
    });

    // 入力フィールドのフォーカス時のエフェクト
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
});