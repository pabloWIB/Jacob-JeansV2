
$(function () {
	setTimeout(function () {
		$("#headerContent").addClass("navBarAnimation");
		$(".mainContent").addClass("mainContentrAnimation");
	}, 2500);
});

$(function () {
	setTimeout(function () {
		$(".footerContent").addClass("mainContentrAnimation");
	}, 2700);
});


// Elementos del DOM
const closeWindow = document.getElementById("closeWindow");
const thankContainer = document.getElementById("thankContainer");
const modal = document.getElementById("exitModal");
const closeBtn = document.querySelector(".close");

// Variables de estado
let formSubmitted = false;
let showModal = true;
let canShowModal = false;

// Función para controlar el scroll del body
function toggleScroll(disable) {
    document.body.style.overflow = disable ? 'hidden' : 'auto';
}

// Funciones para el contenedor de agradecimiento
function showThankYou() {
    thankContainer.classList.remove("Cerrar");
    thankContainer.classList.add("thank-you-container-show");
    toggleScroll(true); // Deshabilitar scroll
}

function hideThankYou() {
    thankContainer.classList.remove("thank-you-container-show");
    thankContainer.classList.add("Cerrar");
    toggleScroll(false); // Habilitar scroll
}

// Funciones para el modal
function showExitModal() {
    modal.style.display = "block";
    toggleScroll(true); // Deshabilitar scroll
}

function hideExitModal() {
    modal.style.display = "none";
    toggleScroll(false); // Habilitar scroll
}

// Temporizador para el modal de salida
setTimeout(() => {
    canShowModal = true;
}, 1500);

// Event Listeners
document.addEventListener("mouseleave", e => {
    if (e.clientY <= 0 && showModal && !formSubmitted && canShowModal) {
        showExitModal();
        showModal = false;
    }
});

closeBtn.onclick = hideExitModal;

window.onclick = e => {
    if (e.target === modal) {
        hideExitModal();
    }
};

closeWindow.addEventListener("click", hideThankYou);

// Cerrar el popup usando ID
document.getElementById('closeAbout').addEventListener('click', function() {
    document.getElementById('overlayAbout').style.display = 'none';
});

// Abrir el popup usando ID
document.getElementById('aboutTitle').addEventListener('click', function () {
    document.getElementById('overlayAbout').style.display = 'block';
});

// Cerrar el popup si se hace clic fuera del contenido
document.getElementById('overlayAbout').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

function openModal() {
	document.getElementById('reviewModal').style.display = 'block';
	document.body.style.overflow = 'hidden';
}

function closeModal() {
	document.getElementById('reviewModal').style.display = 'none';
	document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
	const modal = document.getElementById('reviewModal');
	if (event.target === modal) {
		closeModal();
	}
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		closeModal();
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('reviewModal_xj92');
	const showButton = document.getElementById('showReviews_xj92');
	const closeButton = document.getElementById('closeReviews_xj92');

	function openReviewModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeReviewModal() {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}

	// Show modal button
	showButton.addEventListener('click', openReviewModal);

	// Close button
	closeButton.addEventListener('click', closeReviewModal);

	// Close when clicking outside
	window.addEventListener('click', function(event) {
		if (event.target === modal) {
			closeReviewModal();
		}
	});

	// Close with Escape key
	document.addEventListener('keydown', function(event) {
		if (event.key === 'Escape') {
			closeReviewModal();
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('sliderModal_gx78');
	const showButton = document.getElementById('showSlider_gx78');
	const closeButton = document.getElementById('closeSlider_gx78');
	const slides = document.querySelector('.gx78_slides');
	const prevButton = document.getElementById('prevSlide_gx78');
	const nextButton = document.getElementById('nextSlide_gx78');
	const dotsContainer = document.getElementById('sliderDots_gx78');

	let currentSlide = 0;
	const totalSlides = document.querySelectorAll('.gx78_slide').length;

	// Create dots
	for (let i = 0; i < totalSlides; i++) {
		const dot = document.createElement('button');
		dot.className = 'gx78_dot' + (i === 0 ? ' active' : '');
		dot.addEventListener('click', () => goToSlide(i));
		dotsContainer.appendChild(dot);
	}

	function updateSlidePosition() {
		slides.style.transform = `translateX(-${currentSlide * 100}%)`;
		// Update dots
		document.querySelectorAll('.gx78_dot').forEach((dot, index) => {
			dot.classList.toggle('active', index === currentSlide);
		});
	}

	function goToSlide(index) {
		currentSlide = index;
		updateSlidePosition();
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
		updateSlidePosition();
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
		updateSlidePosition();
	}

	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}

	// Event Listeners
	showButton.addEventListener('click', openModal);
	closeButton.addEventListener('click', closeModal);
	prevButton.addEventListener('click', prevSlide);
	nextButton.addEventListener('click', nextSlide);

	// Close when clicking outside
	modal.addEventListener('click', function(event) {
		if (event.target === modal) {
			closeModal();
		}
	});

	// Keyboard navigation
	document.addEventListener('keydown', function(event) {
		if (modal.style.display === 'block') {
			if (event.key === 'ArrowLeft') {
				prevSlide();
			} else if (event.key === 'ArrowRight') {
				nextSlide();
			} else if (event.key === 'Escape') {
				closeModal();
			}
		}
	});
});