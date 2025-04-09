// App.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  const Button = ({ children, className = "", ...props }) => (
    <button
      className={`px-4 py-2 rounded font-medium transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="font-sans min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <div className="text-pink-500 font-bold text-xl">🍽️ Chefify</div>
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="ml-4 px-4 py-1 border rounded-full w-64 text-sm"
          />
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-pink-500">
            What to cook
          </a>
          <a href="#" className="hover:text-pink-500">
            Recipes
          </a>
          <a href="#" className="hover:text-pink-500">
            Ingredients
          </a>
          <a href="#" className="hover:text-pink-500">
            Occasions
          </a>
          <a href="#" className="hover:text-pink-500">
            About Us
          </a>
        </nav>
        <div className="flex gap-2">
          <Button className="border border-pink-500 text-pink-500 hover:bg-pink-50">
            Login
          </Button>
          <Button className="bg-pink-500 text-white hover:bg-pink-600">
            Subscribe
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />

        {/* Recipe Card */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-xl w-80 p-6 z-10">
          <div className="bg-yellow-400 text-white text-xs px-3 py-1 inline-block rounded mb-2 font-semibold">
            Recipe of the day
          </div>
          <h2 className="text-lg font-bold text-pink-600">Salad Caprese</h2>
          <p className="text-sm text-gray-700 my-3 leading-relaxed">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <div className="text-xs text-gray-500 mb-2">Salad Caprese</div>
          <Button className="bg-pink-500 text-white w-full hover:bg-pink-600 text-sm">
            View now →
          </Button>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
          <Button className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2">
            <ChevronLeft size={20} />
          </Button>
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
          <Button className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2">
            <ChevronRight size={20} />
          </Button>
        </div>
      </section>
{/* Section: This Summer Recipes */}
<section className="mb-16">
  <h2 className="text-3xl font-bold text-pink-600 text-center mb-2">
    This Summer Recipes
  </h2>
  <p className="text-gray-600 text-center mb-8">
    We have all your Independence Day sweets covered.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        title: "Italian-style tomato salad",
        time: "14 minutes",
        image:
          "https://images.unsplash.com/photo-1607305387299-bb7ae8a4518e?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Spaghetti with vegetables and shrimp",
        time: "15 minutes",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f2e3b4b3a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lotus delight salad",
        time: "20 minutes",
        image:
          "https://images.unsplash.com/photo-1608737106331-9b2255c8cf2b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Snack cakes",
        time: "21 minutes",
        image:
          "https://images.unsplash.com/photo-1605478372311-16c3c13bd6b1?auto=format&fit=crop&w=800&q=80",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow p-3 hover:shadow-md transition"
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-32 object-cover rounded-lg mb-2"
        />
        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="text-pink-500 font-medium">{item.time}</span>
          <button className="hover:text-pink-500 transition">
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Section: Recipes With Videos */}
<section>
  <h2 className="text-3xl font-bold text-pink-600 text-center mb-2">
    Recipes With Videos
  </h2>
  <p className="text-gray-600 text-center mb-8">
    Cooking Up Culinary Creations with Step-by-Step Videos
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
    {[
      {
        title: "Salad with cabbage and shrimp",
        time: "32 minutes",
        image:
          "https://images.unsplash.com/photo-1613145999830-8cc4291aa429?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Salad of cove beans, shrimp and potatoes",
        time: "20 minutes",
        image:
          "https://images.unsplash.com/photo-1612197593473-99fdb1ce637c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sunny-side up fried egg",
        time: "15 minutes",
        image:
          "https://images.unsplash.com/photo-1625940558791-c3c19151e77f?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Lotus delight salad",
        time: "20 minutes",
        image:
          "https://images.unsplash.com/photo-1617135179022-3092cd15f6a1?auto=format&fit=crop&w=800&q=80",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl shadow p-3 hover:shadow-md transition"
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-32 object-cover rounded-lg mb-2"
        />
        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="text-pink-500 font-medium">{item.time}</span>
          <button className="hover:text-pink-500 transition">
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="py-16">
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-2">
          Editor's pick
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="flex gap-4 bg-white shadow-md p-4 rounded-xl">
            <img
              src="https://i.ibb.co/4W5BJ0f/sticky-rice-ball.jpg"
              alt="Sticky Rice Ball"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Stuffed sticky rice ball</h3>
                <button className="text-gray-400 hover:text-pink-500">♡</button>
              </div>
              <p className="text-sm text-gray-500 mb-1">34 minutes</p>
              <div className="flex items-center text-sm text-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Chef"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Jennifer King</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                A delightful Asian treat with chewy rice and flavorful surprise filling...
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 bg-white shadow-md p-4 rounded-xl">
            <img
              src="https://i.ibb.co/6s0cT7v/strawberry-smoothie.jpg"
              alt="Strawberry Smoothie"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Strawberry smoothie</h3>
                <button className="text-gray-400 hover:text-pink-500">♡</button>
              </div>
              <p className="text-sm text-gray-500 mb-1">40 minutes</p>
              <div className="flex items-center text-sm text-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/men/53.jpg"
                  alt="Chef"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Matthew Martinez</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Made with ripe strawberries, this creamy blend offers a refreshing delight...
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-4 bg-white shadow-md p-4 rounded-xl">
            <img
              src="https://i.ibb.co/DfMb3xt/latte-art.jpg"
              alt="Latte Art"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Latte Art</h3>
                <button className="text-gray-400 hover:text-pink-500">♡</button>
              </div>
              <p className="text-sm text-gray-500 mb-1">19 minutes</p>
              <div className="flex items-center text-sm text-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/women/63.jpg"
                  alt="Chef"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Sarah Hill</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                The skillful craft of creating captivating designs on the surface of a latte...
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex gap-4 bg-white shadow-md p-4 rounded-xl">
            <img
              src="https://i.ibb.co/jM4dJD5/butter-noodles.jpg"
              alt="Butter Fried Noodles"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Butter fried noodles</h3>
                <button className="text-gray-400 hover:text-pink-500">♡</button>
              </div>
              <p className="text-sm text-gray-500 mb-1">16 minutes</p>
              <div className="flex items-center text-sm text-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/women/89.jpg"
                  alt="Chef"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>Julia Lopez</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Savory noodles cooked in butter for a delicious and satisfying meal...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <p className="text-sm mb-4">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-md w-full text-black bg-amber-50"
              />
              <button className="bg-pink-500 p-2 rounded-r-md">Send</button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Learn More</h3>
            <ul className="text-sm space-y-1">
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Shop</h3>
            <ul className="text-sm space-y-1">
              <li>Gift Subscription</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Recipes</h3>
            <ul className="text-sm space-y-1">
              <li>What to Cook This Week</li>
              <li>Pasta</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-gray-400">
          <p>© 2023 Cheffify Company</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}
