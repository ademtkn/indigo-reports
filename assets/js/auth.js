const users = {
    "admin": {
        password: "2025",
        school: "all"
    },
    "sapat_user": {
        password: "sapat",
        school: "sapat"
    },
    "asylkech_user": {
        password: "asylkech",
        school: "asylkech"
    },
    "international_user": {
        password: "international",
        school: "international"
    },
    "prime_user": {
        password: "prime",
        school: "prime"
    }
};

// Şifre göster/gizle fonksiyonu
function setupPasswordToggle() {
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const password = document.getElementById('password');
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    }
}

// Giriş kontrol fonksiyonu
function setupLogin() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (users[username] && users[username].password === password) {
                const schoolCode = users[username].school;
                // Kullanıcı tipini localStorage'a kaydet
                localStorage.setItem('userType', schoolCode);
                
                window.location.href = schoolCode === "all" 
                    ? "dashboard.html" 
                    : `dashboard.html?school=${schoolCode}`;
            } else {
                alert("Hatalı kullanıcı adı veya şifre!");
                document.getElementById('password').value = '';
            }
        });
    }
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordToggle();
    setupLogin();
});