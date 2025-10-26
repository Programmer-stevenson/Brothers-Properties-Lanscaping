import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Leaf, Trees, Droplet, Scissors, Check } from 'lucide-react';

export default function BrothersLandscaping() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Lawn Mowing & Maintenance",
      description: "Regular mowing, edging, and trimming to keep your lawn looking pristine all season long."
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Landscape Design & Installation",
      description: "Transform your outdoor space with custom landscape designs, plantings, and hardscaping."
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Irrigation & Sprinkler Systems",
      description: "Professional installation and maintenance of efficient watering systems for healthy landscapes."
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Seasonal Cleanup & Mulching",
      description: "Spring and fall cleanup services, mulching, and leaf removal to maintain your property."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Brothers Property Landscaping transformed our backyard into an oasis. Mike and his team are professional, reliable, and do exceptional work!",
      rating: 5
    },
    {
      name: "David Martinez",
      text: "We've been using their services for 3 years now. Always on time, fair pricing, and our lawn has never looked better.",
      rating: 5
    },
    {
      name: "Jennifer Clark",
      text: "Mike's attention to detail is outstanding. They don't just mow - they care for every aspect of our landscape. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Leaf className="w-10 h-10 text-[#1B5E20]" />
              <div>
                <h1 className="text-2xl font-bold text-[#1B5E20]">Brothers Property</h1>
                <p className="text-sm text-[#6D4C41]">Landscaping</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[#6D4C41] hover:text-[#1B5E20] transition-colors font-medium">Home</a>
              <a href="#services" className="text-[#6D4C41] hover:text-[#1B5E20] transition-colors font-medium">Services</a>
              <a href="#about" className="text-[#6D4C41] hover:text-[#1B5E20] transition-colors font-medium">About</a>
              <a href="#contact" className="bg-[#1B5E20] text-white px-6 py-3 rounded-lg hover:bg-[#81C784] transition-colors font-medium">Contact Us</a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#1B5E20]"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#home" className="block text-[#6D4C41] hover:text-[#1B5E20] py-2">Home</a>
              <a href="#services" className="block text-[#6D4C41] hover:text-[#1B5E20] py-2">Services</a>
              <a href="#about" className="block text-[#6D4C41] hover:text-[#1B5E20] py-2">About</a>
              <a href="#contact" className="block bg-[#1B5E20] text-white px-6 py-3 rounded-lg text-center">Contact Us</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[#A8E6CF] to-[#81C784]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-[#1B5E20] leading-tight">
                Your Lawn's Best Friend
              </h2>
              <p className="text-xl text-[#6D4C41]">
                Professional landscaping services that transform ordinary yards into extraordinary outdoor living spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#1B5E20] text-white px-8 py-4 rounded-lg hover:bg-[#6D4C41] transition-colors font-semibold text-center">
                  Get Free Quote
                </a>
                <a href="tel:8010000000" className="bg-white text-[#1B5E20] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center border-2 border-[#1B5E20]">
                  Call: 801-000-0000
                </a>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-6 h-6 text-[#1B5E20]" />
                  <span className="text-[#6D4C41] font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-6 h-6 text-[#1B5E20]" />
                  <span className="text-[#6D4C41] font-medium">Free Estimates</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80" 
                alt="Beautiful landscaped yard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Our Services</h2>
            <p className="text-xl text-[#6D4C41] max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to your property's unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#A8E6CF] rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-[#1B5E20] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B5E20] mb-3">{service.title}</h3>
                <p className="text-[#6D4C41]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#1B5E20] to-[#81C784] rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Complete Property Maintenance Packages Available</h3>
            <p className="text-lg mb-6 opacity-90">Save time and money with our seasonal maintenance programs</p>
            <a href="#contact" className="bg-white text-[#1B5E20] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#EFEBE9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80" 
                alt="Professional landscaping team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20]">Why Choose Brothers Property Landscaping?</h2>
              <p className="text-lg text-[#6D4C41]">
                With years of experience serving the community, we're committed to delivering exceptional landscaping services that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#1B5E20] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1B5E20] text-lg">Expert Team</h4>
                    <p className="text-[#6D4C41]">Trained professionals with extensive landscaping knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#1B5E20] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1B5E20] text-lg">Quality Guaranteed</h4>
                    <p className="text-[#6D4C41]">We stand behind our work with 100% satisfaction guarantee</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#1B5E20] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1B5E20] text-lg">Reliable Service</h4>
                    <p className="text-[#6D4C41]">Consistent, on-time service you can depend on</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#1B5E20] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1B5E20] text-lg">Competitive Pricing</h4>
                    <p className="text-[#6D4C41]">Fair, transparent pricing with no hidden fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-[#1B5E20] text-center mb-12">What Our Clients Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#81C784] text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-[#6D4C41] mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-[#1B5E20]">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-4">Get In Touch</h2>
            <p className="text-xl text-[#6D4C41]">Ready to transform your outdoor space? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#A8E6CF] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1B5E20] mb-6">Request a Free Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#1B5E20] font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#81C784] focus:border-[#1B5E20] outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#1B5E20] font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#81C784] focus:border-[#1B5E20] outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1B5E20] font-semibold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#81C784] focus:border-[#1B5E20] outline-none"
                    placeholder="801-000-0000"
                  />
                </div>
                <div>
                  <label className="block text-[#1B5E20] font-semibold mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-lg border-2 border-[#81C784] focus:border-[#1B5E20] outline-none">
                    <option>Lawn Mowing & Maintenance</option>
                    <option>Landscape Design & Installation</option>
                    <option>Irrigation & Sprinkler Systems</option>
                    <option>Seasonal Cleanup & Mulching</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1B5E20] font-semibold mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#81C784] focus:border-[#1B5E20] outline-none h-32"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#1B5E20] text-white px-8 py-4 rounded-lg hover:bg-[#6D4C41] transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#1B5E20] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#1B5E20] mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1B5E20] mb-1">Phone</h4>
                      <a href="tel:8010000000" className="text-[#6D4C41] hover:text-[#1B5E20] text-lg">
                        801-000-0000
                      </a>
                      <p className="text-sm text-[#6D4C41] mt-1">Call Mike directly for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#1B5E20] mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1B5E20] mb-1">Email</h4>
                      <a href="mailto:info@brotherslandscaping.com" className="text-[#6D4C41] hover:text-[#1B5E20]">
                        info@brotherslandscaping.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#1B5E20] mt-1" />
                    <div>
                      <h4 className="font-bold text-[#1B5E20] mb-1">Service Area</h4>
                      <p className="text-[#6D4C41]">Serving the greater Utah area</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EFEBE9] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#1B5E20] mb-4">Business Hours</h4>
                <div className="space-y-2 text-[#6D4C41]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80" 
                  alt="Beautiful garden landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B5E20] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-bold">Brothers Property</h3>
                  <p className="text-sm text-[#A8E6CF]">Landscaping</p>
                </div>
              </div>
              <p className="text-[#A8E6CF]">
                Professional landscaping services to beautify your outdoor spaces.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-[#A8E6CF] hover:text-white transition-colors">Home</a>
                <a href="#services" className="block text-[#A8E6CF] hover:text-white transition-colors">Services</a>
                <a href="#about" className="block text-[#A8E6CF] hover:text-white transition-colors">About</a>
                <a href="#contact" className="block text-[#A8E6CF] hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Mike</h4>
              <div className="space-y-2 text-[#A8E6CF]">
                <p>Phone: 801-000-0000</p>
                <p>Email: info@brotherslandscaping.com</p>
                <p>Utah, USA</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#81C784] pt-8 text-center text-[#A8E6CF]">
            <p>&copy; 2025 Brothers Property Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}