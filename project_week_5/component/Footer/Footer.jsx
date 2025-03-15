
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    <div class="about">
                        <h3>About Us</h3>
                        <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                        <div class="email-subscription">
                            <input type="email" placeholder="Enter your email" class="email-input" />
                            <button class="send-button">Send</button>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <img className='w-30 h-30 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Bm99hG-hNfSrRS3CLH3VEQiihTRw8EwKjg&s" alt="Chefify Logo" class="footer-logo"/>
                            <div class="footer-logo">Chefify</div>
                            <div class="footer-rights">© 2023 Chefify Company | <a href="#">Terms of Service</a> | <a href="#">Privacy
                                Policy</a></div>
                    </div>

                </div>
                <div class="learn">
                    <h3>Learn More</h3>
                    <ul>
                        <li><a href="#">Our Cooks</a></li>
                        <li><a href="#">See Our Features</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                    <h3 id="h3">Shop</h3>
                    <ul>
                        <li><a href="#">Thanksgiving</a></li>
                        <li><a href="#">Halloween</a></li>
                    </ul>
                </div>
                <div class="recipes">
                    <h3>Recipes</h3>
                    <ul>
                        <li><a href="#">What to Cook This Week</a></li>
                        <li><a href="#">Pasta</a></li>
                        <li><a href="#">Dinner</a></li>
                        <li><a href="#">Healthy</a></li>
                        <li><a href="#">Vegetarian</a></li>
                        <li><a href="#">Vegan</a></li>
                        <li><a href="#">Christmas</a></li>
                    </ul>

                </div>

            </footer>
        </>
    )
}