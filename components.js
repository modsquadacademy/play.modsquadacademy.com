/* ==========================================
   Mod Squad Academy - Shared Component Engine
   ========================================== */

class SharedHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="sticky-nav-container">
                <header>
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo.png" alt="MOD Logo" style="max-height: 38px; width: auto; display: block;">
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
                            <li><a href="index.html" class="nav-home">Home</a></li>
                            <li><a href="https://modsquadacademy.com" target="_blank">Main Site</a></li>
                        </ul>
                    </nav>
                </header>

                <div class="construction-ribbon">
                    🎮 Play Subdomain - Mod Squad Academy 🎮
                </div>
            </div>
        `;
    }
}

customElements.define('shared-header', SharedHeader);

class SharedFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="footer-brand">
                        <div class="footer-logo">
                            <img src="images/logo.png" alt="MOD SQUAD ACADEMY Logo" style="max-height: 35px; width: auto; display: block; filter: invert(1) brightness(2);">
                        </div>
                        <p class="footer-tagline">Coding to never seen before new worlds.</p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>Mod Squad Academy &bull; Empowering Next-Gen Creators</p>
                    <p class="footer-credit">&copy; 2026 Mod. Squad Academy</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('shared-footer', SharedFooter);