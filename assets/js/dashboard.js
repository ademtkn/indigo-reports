document.addEventListener('DOMContentLoaded', function() {
    // Tarih bilgisini güncelle
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('tr-TR', options);
    
    // Son güncelleme tarihi (manuel olarak güncelleyebilirsiniz)
    document.getElementById('last-updated').textContent = '15 Mart 2024';
});

function applyFilters() {
    const searchTerm = document.getElementById('school-search').value.toLowerCase();
    const rangeValue = document.getElementById('student-range').value;
    
    document.querySelectorAll('.school-card').forEach(card => {
        const schoolName = card.querySelector('h2').textContent.toLowerCase();
        const totalStudents = parseInt(card.querySelector('.stat-value').textContent);
        
        // Arama filtresi
        const nameMatch = schoolName.includes(searchTerm);
        
        // Aralık filtresi
        let rangeMatch = true;
        if (rangeValue !== 'all') {
            const [min, max] = rangeValue.split('-').map(Number);
            if (max) {
                rangeMatch = totalStudents >= min && totalStudents <= max;
            } else {
                rangeMatch = totalStudents >= min;
            }
        }
        
        // Görünürlüğü ayarla
        card.classList.toggle('filtered', !(nameMatch && rangeMatch));
        card.classList.toggle('highlight', nameMatch && searchTerm.length > 0);
    });
}

// Event listener'lar
document.getElementById('school-search').addEventListener('input', applyFilters);
document.getElementById('student-range').addEventListener('change', applyFilters);