/* ==========================================================================
   Mod Squad Academy - Shared Component Engine
   ========================================================================== */

// 1. Unified Navigation Header Component
class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sticky-nav-container">
                <header>
                
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="MOD Logo">
                        </a>
                    </div>

                    <input type="checkbox" id="menu-toggle">
                    
                    <label for="menu-toggle" class="hamburger-label">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <nav>
                        <ul>
                            <li><a href="/" class="nav-home">Home</a></li>
                            <li><a href="/create" class="nav-create">Create</a></li>
                            <li><a href="/explore" class="nav-explore">Explore</a></li>
                            <li><a href="/featured" class="nav-featured">Featured</a></li>
                            <li><a href="/library" class="nav-library">Asset Library</a></li>
                            <li><a href="/about" class="nav-about">About</a></li>
                            <li><a href="/contact" class="nav-contact">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <div class="construction-ribbon">
                    ⚠️ This Site Is Under Construction ⚠️
                </div>
            </div>
        `;

        // Smart Highlight Feature: Automatically marks the link matching the current page file active
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        if (currentPage === "index.html") {
            const homeLink = this.querySelector('.nav-home');
            if (homeLink) homeLink.classList.add('active');
        }
        // You can add conditions here later for create.html, explore.html, etc.
    }
}

// Register our custom HTML tag with the browser
customElements.define('shared-header', SharedHeader);


// 2. Unified Footer Component
class SharedFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <img src="/images/logo.png" alt="MOD SQUAD ACADEMY Logo">
                        </div>
                        <p class="footer-tagline">Coding to never seen before new worlds.</p>
                    </div>
                    
                    <div class="footer-links-group">
                        <div class="footer-column">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="/index.html">Home</a></li>
                                <li><a href="/create">Create</a></li>
                                <li><a href="#">Explore</a></li>
                                <li><a href="#">Featured</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Asset Library</a></li>
                                <li><a href="https://scratch.mit.edu/users/ModSquadAcademy/" target="_blank" rel="noopener noreferrer">Scratch Profile</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/policies">Policies</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>Mod Squad Academy &bull; Empowering Next-Gen Creators</p>
                    <p class="footer-credit">© 2026 Mod. Squad Academy</p>
                </div>
            </footer>
        `;
    }
}

// Register our custom HTML tag with the browser
customElements.define('shared-footer', SharedFooter);