// Menambahkan fungsionalitas untuk tombol Call to Action (CTA)
const ctaButton = document.querySelector('.hero button');

ctaButton.addEventListener('click', () => {
    alert('Terima kasih telah tertarik! Kami akan segera menghubungi Anda.');
});

// Menambahkan efek hover untuk produk yang lebih interaktif
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
