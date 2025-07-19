import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-accent to-accent-light text-accent-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-background/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">Stay in Style</h3>
          <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, design tips, and the latest trends in home decor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-background border-border"
            />
            <Button className="bg-secondary hover:bg-secondary-light text-secondary-foreground">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-display font-bold">QHome</span>
            </div>
            <p className="text-accent-foreground/80">
              Premium home & lifestyle products that transform your space into a sanctuary of style and comfort.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@qhome.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Design Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop?category=living" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Living Room</Link></li>
              <li><Link to="/shop?category=bedroom" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Bedroom</Link></li>
              <li><Link to="/shop?category=kitchen" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Kitchen & Dining</Link></li>
              <li><Link to="/shop?category=decor" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Home Decor</Link></li>
              <li><Link to="/shop?category=lighting" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Lighting</Link></li>
              <li><Link to="/shop" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Size Guide</Link></li>
              <li><Link to="/care" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Care Instructions</Link></li>
              <li><Link to="/faq" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">About QHome</Link></li>
              <li><Link to="/blog" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Design Blog</Link></li>
              <li><Link to="/careers" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Careers</Link></li>
              <li><Link to="/sustainability" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-accent-foreground/80 hover:text-accent-foreground">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-accent-foreground/80 text-sm">
            © 2024 QHome. All rights reserved. | Designed with ❤️ for beautiful homes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;