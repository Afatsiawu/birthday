// Global variables
let currentStep = 1;
let userName = 'Gloria';
let galleryCreated = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Add magical cursor trail effect
    createMagicalCursor();
    
    // Add floating sparkles
    createFloatingSparkles();
    
    // Add button ripple effects
    addRippleEffect();
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        // Initialize particles.js with better visibility
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 120,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#ff6b9d', '#c44569', '#f8b5d3', '#ffffff', '#ff9ff3']
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        }
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.3,
                            sync: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ff6b9d',
                        opacity: 0.6,
                        width: 2
                    },
                    move: {
                        enable: true,
                        speed: 8,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'bounce',
                        bounce: true,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        } else {
            console.log('particlesJS not loaded');
        }
    }, 100);

    // Create animated balloons
    createBalloons();

    // Add ripple effects to buttons
    addRippleEffect();

    // Initial animations
    gsap.from('.glass-card', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Add heartbeat animation to title
    gsap.to('.heartbeat-text', {
        scale: 1.1,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Add magical text reveal animations
    animateTextElements();
});

// Function to create magical cursor trail
function createMagicalCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'magical-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255, 107, 157, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Add sparkle trail
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) {
            createSparkleTrail(e.clientX, e.clientY);
        }
    });
}

// Function to create sparkle trail
function createSparkleTrail(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 16px;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleTrail 1s ease-out forwards;
        color: #ff6b9d;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Function to create floating sparkles
function createFloatingSparkles() {
    const sparkles = ['✨', '🌟', '💫', '⭐', '🎀', '🎈'];
    const numSparkles = 20;
    
    for (let i = 0; i < numSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = sparkles[i % sparkles.length];
        sparkle.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${1 + Math.random() * 1.5}rem;
            pointer-events: none;
            z-index: 2;
            animation: floatingSparkle ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: 0.7;
            color: ${['#ff6b9d', '#c44569', '#f8b5d3', '#ff9ff3', '#f368e0'][i % 5]};
        `;
        document.body.appendChild(sparkle);
    }
}

// Add button ripple effect
function addRippleEffect() {
    const buttons = document.querySelectorAll('.glow-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Function to create animated balloons
function createBalloons() {
    const balloonColors = ['#ff6b9d', '#c44569', '#f8b5d3', '#ff9ff3', '#f368e0'];
    const numBalloons = 15;
    
    for (let i = 0; i < numBalloons; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.cssText = `
            position: fixed;
            width: 60px;
            height: 80px;
            background: ${balloonColors[i % balloonColors.length]};
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            left: ${Math.random() * 100}%;
            top: 100vh;
            z-index: 5;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            animation: floatBalloon ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        // Add balloon string
        const string = document.createElement('div');
        string.style.cssText = `
            position: absolute;
            bottom: -20px;
            left: 50%;
            width: 2px;
            height: 30px;
            background: rgba(255, 255, 255, 0.6);
            transform: translateX(-50%);
        `;
        
        balloon.appendChild(string);
        document.body.appendChild(balloon);
        
        // Add click interaction
        balloon.addEventListener('click', function() {
            // Pop effect
            gsap.to(this, {
                scale: 1.5,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    this.remove();
                }
            });
            
            // Create sparkles
            for (let j = 0; j < 8; j++) {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.cssText = `
                    position: absolute;
                    left: ${this.offsetLeft + this.offsetWidth / 2}px;
                    top: ${this.offsetTop + this.offsetHeight / 2}px;
                    font-size: 20px;
                    pointer-events: none;
                    z-index: 1000;
                    animation: sparkle 1s ease-out forwards;
                `;
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        });
    }
}

// Add balloon animation CSS
const balloonStyle = document.createElement('style');
balloonStyle.textContent = `
    @keyframes floatBalloon {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        25% {
            transform: translateY(-20px) rotate(2deg);
        }
        50% {
            transform: translateY(-40px) rotate(0deg);
        }
        75% {
            transform: translateY(-20px) rotate(-2deg);
        }
    }
    
    .balloon:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;
document.head.appendChild(balloonStyle);

// Function to move to next step
function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
    const nextStepElement = document.getElementById(`step${currentStep + 1}`);

    if (!currentStepElement) return;
    if (!nextStepElement) {
        restart();
        return;
    }

    // Hide current step
    currentStepElement.classList.remove('active');
    // Show next step
    nextStepElement.classList.add('active');

    // Step-specific animations (only if needed, no GSAP)
    switch (currentStep + 1) {
        case 2:
            animateWishes();
            break;
        case 3:
            animateHeart();
            break;
        case 4:
            animateFireworks();
            break;
        case 5:
            // Final step - no additional animations needed
            break;
    }
    currentStep++;
}

// Enhanced error message display
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 107, 107, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.5s ease-out;
    `;
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        gsap.to(errorDiv, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            onComplete: () => errorDiv.remove()
        });
    }, 3000);
}

// Success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.5s ease-out;
    `;
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        gsap.to(successDiv, {
            opacity: 0,
            x: 100,
            duration: 0.5,
            onComplete: () => successDiv.remove()
        });
    }, 3000);
}

// Add CSS for slide-in animation
const slideAnimationCSS = document.createElement('style');
slideAnimationCSS.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(slideAnimationCSS);

// Function to save name and proceed (Gloria only)
function saveName() {
    console.log('👤 saveName called - Setting name to Gloria');
    
    // Set Gloria as the name
    userName = 'Gloria';
    
    // Update display names with animation
    const userNameDisplay = document.getElementById('userNameDisplay');
    const finalUserName = document.getElementById('finalUserName');
    
    if (userNameDisplay) {
        gsap.to(userNameDisplay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                userNameDisplay.textContent = 'Gloria';
                gsap.to(userNameDisplay, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }
    
    if (finalUserName) {
        gsap.to(finalUserName, {
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
            onComplete: () => {
                finalUserName.textContent = 'Gloria';
                gsap.to(finalUserName, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }
    
    // Show success message
    showSuccessMessage('Welcome, Gloria! 💖');
    
    // Continue to next step after a short delay
    setTimeout(() => {
        console.log('🚀 Proceeding to next step');
        nextStep();
        
        // Create gallery in the background
        setTimeout(() => {
            // createGloriaGallery(); // This line is removed
        }, 200);
    }, 800);
}

// Helper function to shake an element
function shakeElement(element) {
    gsap.to(element, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

// Function to animate wishes
function animateWishes() {
    const wishes = document.querySelectorAll('.wish-item');
    
    gsap.fromTo(wishes, 
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        }
    );
}

// Function to animate heart
function animateHeart() {
    const heart = document.querySelector('.heart');
    
    gsap.to(heart, {
        scale: 1.2,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
}

// Function to animate fireworks
function animateFireworks() {
    const fireworks = document.querySelectorAll('.firework');
    
    fireworks.forEach((firework, index) => {
        gsap.to(firework, {
            y: -100,
            scale: 0,
            opacity: 0,
            duration: 2,
            delay: index * 0.5,
            repeat: -1,
            ease: 'power2.out'
        });
    });
}

// Function to create Gloria's gallery
// This function is no longer needed as gallery is handled in HTML
// function createGloriaGallery() {
//     if (galleryCreated) return;
    
//     const gallery = document.getElementById('gloria-gallery');
//     const photoUrls = [
//         'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
//     ];
    
//     // Create photo elements
//     photoUrls.forEach((url, index) => {
//         const photo = document.createElement('img');
//         photo.src = url;
//         photo.alt = 'Gloria';
//         photo.className = 'gallery-photo';
        
//         // Position photos in a line across the screen
//         const leftPosition = (index * 15) + 5; // Spread across screen
//         const topPosition = 20 + (index % 3) * 25; // 3 rows
        
//         photo.style.left = leftPosition + '%';
//         photo.style.top = topPosition + '%';
//         photo.style.setProperty('--delay', (index * 0.2) + 's');
//         photo.style.animationDelay = (index * 0.2) + 's'; // Staggered animation
        
//         // Add click interaction
//         photo.addEventListener('click', function() {
//             createPhotoEffect(this);
//         });
        
//         gallery.appendChild(photo);
        
//         // Add continuous animation after entrance
//         setTimeout(() => {
//             photo.classList.add('animated');
//         }, 2000 + (index * 200));
//     });
    
//     // Show gallery permanently
//     gallery.classList.add('active');
//     gallery.style.opacity = '1';
//     gallery.style.visibility = 'visible';
//     gallery.style.display = 'block';
    
//     // Set permanent visibility
//     galleryCreated = true;
// }

// Function to create special photo effects when clicked
// This function is no longer needed as gallery is handled in HTML
// function createPhotoEffect(photo) {
//     // Only add a pulse effect (no burst or sparkles)
//     photo.classList.add('pulse-photo');
//     setTimeout(() => photo.classList.remove('pulse-photo'), 300);
// }

// Function to animate text elements
function animateTextElements() {
    const textElements = document.querySelectorAll('.subtitle, .message-text, .special-message, .final-message');
    textElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        }, index * 200);
    });
}

// Function to restart the experience
function restart() {
    currentStep = 1;
    userName = 'Gloria';
    galleryCreated = false;

    // Reset all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    // Show first step
    document.getElementById('step1').classList.add('active');

    // Hide gallery completely
    const gallery = document.getElementById('gloria-gallery');
    gallery.classList.remove('active');
    gallery.style.opacity = '0';
    gallery.style.visibility = 'hidden';
    gallery.innerHTML = '';
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (currentStep === 2) {
            saveName();
        } else {
            nextStep();
        }
    }
});

// Add touch/click effects to buttons
document.querySelectorAll('.glow-button').forEach(button => {
    button.addEventListener('click', function() {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
