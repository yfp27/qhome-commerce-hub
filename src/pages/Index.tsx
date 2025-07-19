import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Headphones, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import heroImage from "@/assets/hero-living-room.jpg";
import bedroomImage from "@/assets/product-bedroom.jpg";
import kitchenImage from "@/assets/product-kitchen.jpg";
import decorImage from "@/assets/product-decor.jpg";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Mock product data
  const featuredProducts = [
    {
      id: "1",
      name: "Modern Sectional Sofa - Cloud Collection",
      price: 1299.99,
      originalPrice: 1599.99,
      image: heroImage,
      category: "Living Room",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isOnSale: true,
    },
    {
      id: "2",
      name: "Scandinavian Platform Bed",
      price: 899.99,
      image: bedroomImage,
      category: "Bedroom",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isNew: true,
    },
    {
      id: "3",
      name: "Contemporary Kitchen Bar Stools",
      price: 299.99,
      originalPrice: 399.99,
      image: kitchenImage,
      category: "Kitchen",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isOnSale: true,
    },
    {
      id: "4",
      name: "Artisan Ceramic Vase Collection",
      price: 89.99,
      image: decorImage,
      category: "Decor",
      rating: 4.6,
      reviews: 67,
      inStock: true,
    },
  ];

  const categories = [
    { name: "Living Room", image: heroImage, link: "/shop?category=living" },
    { name: "Bedroom", image: bedroomImage, link: "/shop?category=bedroom" },
    { name: "Kitchen", image: kitchenImage, link: "/shop?category=kitchen" },
    { name: "Home Decor", image: decorImage, link: "/shop?category=decor" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "QHome transformed my living space completely! The quality is exceptional and the delivery was seamless.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Outstanding customer service and beautiful furniture. My bedroom has never looked better!",
      location: "San Francisco, CA"
    },
    {
      name: "Emma Williams",
      rating: 5,
      text: "Love the modern designs and attention to detail. QHome is now my go-to for all home decor needs.",
      location: "Austin, TX"
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Transform Your
            <span className="block text-gradient-primary bg-gradient-to-r from-primary-glow to-secondary bg-clip-text text-transparent">
              Living Space
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Discover premium furniture and decor that brings comfort, style, and elegance to every corner of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <Link to="/shop">
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="btn-outline-primary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              View Lookbook
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $299" },
              { icon: Shield, title: "Quality Guarantee", desc: "Premium materials only" },
              { icon: Headphones, title: "24/7 Support", desc: "Expert design advice" },
              { icon: RotateCcw, title: "30-Day Returns", desc: "Hassle-free exchanges" },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Shop by Room</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect pieces for every space in your home with our curated collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                  <span className="text-white/80 text-sm">Explore Collection</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked favorites that combine style, comfort, and exceptional quality.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-secondary">
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real stories from real homes transformed by QHome.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="card-premium p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
              <blockquote className="text-xl mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].location}</div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have created their dream spaces with QHome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              <Link to="/shop">Start Shopping</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4">
              <Link to="/contact">Get Design Help</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
