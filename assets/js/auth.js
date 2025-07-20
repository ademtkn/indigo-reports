const users = {
    // Admin (Tüm okulları görür)
    "admin": {
        password: "2025",
        school: "all"
    },
    
    // Okul Kullanıcıları (Sadece kendi okulunu görür)
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
    // Diğer okullar için bu formatta ekle
};
function checkLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kullanıcı var mı kontrolü
    if (users[username] && users[username].password === password) {
        const schoolCode = users[username].school;
        if (schoolCode === "all") {
            window.location.href = "dashboard.html";
        } else {
            window.location.href = `dashboard.html?school=${schoolCode}`;
        }
    } else {
        alert("Hatalı giriş!");
    }
}