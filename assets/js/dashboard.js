document.addEventListener('DOMContentLoaded', function() {
    // Kullanıcı tipini kontrol et
    const userType = localStorage.getItem('userType');
    const urlParams = new URLSearchParams(window.location.search);
    const allowedSchool = urlParams.get('school');

    // Eğer URL'de parametre yoksa ama kullanıcı okul kullanıcısıysa yönlendir
    if (!allowedSchool && userType && userType !== 'all') {
        window.location.href = `dashboard.html?school=${userType}`;
        return;
    }

    // Filtreleme işlemi
    document.querySelectorAll('.school-card').forEach(card => {
        card.style.display = (allowedSchool && card.dataset.school !== allowedSchool) 
            ? 'none' 
            : 'block';
    });

    // Tarih bilgisi
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('tr-TR', options);
    document.getElementById('last-updated').textContent = new Date().toLocaleDateString('tr-TR');

    // Diğer kodlar...
});