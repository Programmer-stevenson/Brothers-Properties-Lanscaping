import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Leaf, Trees, Droplet, Scissors, Check, 
  Star, Award, Users, Calendar, ArrowRight, Sparkles, TrendingUp,
  Shield, Clock, ChevronDown, Quote, Zap
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Lawn Mowing & Maintenance",
      description: "Professional care that keeps your lawn lush, healthy, and perfectly manicured year-round.",
      features: ["Weekly Service", "Edge Trimming", "Debris Removal"],
      gradient: "from-emerald-400 to-green-600"
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Landscape Design & Installation",
      description: "Custom designs that transform your vision into a stunning outdoor masterpiece.",
      features: ["3D Design", "Plant Selection", "Hardscaping"],
      gradient: "from-green-400 to-emerald-700"
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Irrigation & Sprinkler Systems",
      description: "Smart watering solutions that save water, time, and ensure optimal plant health.",
      features: ["Smart Controllers", "Zone Planning", "Maintenance"],
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Seasonal Cleanup & Mulching",
      description: "Comprehensive seasonal care that protects your landscape investment.",
      features: ["Leaf Removal", "Bed Prep", "Fresh Mulch"],
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users /> },
    { number: "15+", label: "Years Experience", icon: <Award /> },
    { number: "10k+", label: "Lawns Serviced", icon: <TrendingUp /> },
    { number: "98%", label: "Satisfaction Rate", icon: <Star /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Salt Lake City",
      text: "Brothers Property transformed our neglected backyard into a stunning oasis. Mike's team is professional, punctual, and their attention to detail is unmatched. Best investment we've made!",
      rating: 5,
      service: "Full Landscape Redesign"
    },
    {
      name: "David Martinez",
      location: "Provo",
      text: "Three years of exceptional service! Our lawn has never looked better, and the pricing is incredibly fair. They go above and beyond every single time.",
      rating: 5,
      service: "Weekly Maintenance"
    },
    {
      name: "Jennifer Clark",
      location: "Ogden",
      text: "Mike doesn't just mow lawns—he cares for every detail of your landscape. The irrigation system they installed has saved us so much on water bills. Highly recommend!",
      rating: 5,
      service: "Irrigation Installation"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Free Consultation",
      description: "We visit your property, discuss your vision, and provide expert recommendations.",
      icon: <Calendar />
    },
    {
      step: "02",
      title: "Custom Proposal",
      description: "Receive a detailed quote with transparent pricing and timeline—no hidden fees.",
      icon: <Sparkles />
    },
    {
      step: "03",
      title: "Expert Execution",
      description: "Our skilled team brings your vision to life with precision and care.",
      icon: <Zap />
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Enjoy continued maintenance and support to keep your landscape pristine.",
      icon: <Shield />
    }
  ];

  const guarantees = [
    { icon: <Shield />, text: "100% Satisfaction Guaranteed" },
    { icon: <Award />, text: "Licensed & Fully Insured" },
    { icon: <Clock />, text: "On-Time Service Promise" },
    { icon: <Star />, text: "Quality Workmanship" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Animated Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <Leaf className={`w-10 h-10 transition-all duration-500 ${
                  scrolled ? 'text-[#1B5E20]' : 'text-white'
                } group-hover:rotate-12 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-[#81C784] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-500 ${
                  scrolled ? 'text-[#1B5E20]' : 'text-white'
                }`}>
                  Brothers Property Landscaping
                </h1>
                <p className={`text-sm transition-colors duration-500 ${
                  scrolled ? 'text-[#6D4C41]' : 'text-white/90'
                }`}>
                  Excellence
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative font-medium transition-colors duration-300 group ${
                    scrolled ? 'text-[#6D4C41] hover:text-[#1B5E20]' : 'text-white hover:text-[#A8E6CF]'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#81C784] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="relative bg-gradient-to-r from-[#1B5E20] to-[#81C784] text-white px-8 py-3 rounded-full font-semibold overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#81C784] to-[#1B5E20] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? 'text-[#1B5E20]' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 animate-fadeIn">
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-[#6D4C41] hover:text-[#1B5E20] py-2 font-medium transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-gradient-to-r from-[#1B5E20] to-[#81C784] text-white px-6 py-3 rounded-full text-center font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced with Parallax Effect */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#81C784]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#A8E6CF] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-[#81C784] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#66BB6A] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-slideInLeft">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Trusted by 500+ Homeowners</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-[#A8E6CF] to-[#81C784] bg-clip-text text-transparent">
                  Outdoor Paradise
                </span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                Premium landscaping services that turn ordinary yards into extraordinary living spaces. 
                <span className="font-semibold text-[#A8E6CF]"> Your dream landscape starts here.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="group relative bg-white text-[#1B5E20] px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A8E6CF] to-[#81C784] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>

                <a
                  href="tel:8010000000"
                  className="group relative bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white hover:text-[#1B5E20] transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call: 801-000-0000
                  </span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {guarantees.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white/90">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image with Floating Effect */}
            <div className="relative animate-slideInRight">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&q=80"
                  alt="Beautiful landscaped yard"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent"></div>
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl animate-float">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.slice(0, 3).map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-[#1B5E20]">{stat.number}</div>
                        <div className="text-xs text-[#6D4C41] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#81C784] rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A8E6CF] rounded-full blur-2xl opacity-60 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden" id="stats">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-110 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1B5E20] to-[#81C784] rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-500">
                  {React.cloneElement(stat.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div className="text-4xl font-bold text-[#1B5E20] mb-2">{stat.number}</div>
                <div className="text-[#6D4C41] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B5E20' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#A8E6CF] px-4 py-2 rounded-full text-[#1B5E20] mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold">Premium Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1B5E20] mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-[#6D4C41] max-w-3xl mx-auto">
              Comprehensive landscaping solutions designed to exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Animated Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    {React.cloneElement(service.icon, { className: "w-12 h-12 text-white" })}
                  </div>
                  <div className="absolute inset-0 bg-[#81C784] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>

                <h3 className="text-xl font-bold text-[#1B5E20] mb-3 group-hover:text-[#2E7D32] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6D4C41] mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#6D4C41]">
                      <Check className="w-4 h-4 text-[#81C784] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className="w-6 h-6 text-[#1B5E20]" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#81C784]"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8E6CF] rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>
            <div className="relative p-12 md:p-16 text-center text-white">
              <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Property?</h3>
              <p className="text-xl mb-8 opacity-90">Get a personalized quote in under 24 hours</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1B5E20] px-10 py-5 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - New */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1B5E20] mb-6">Our Simple Process</h2>
            <p className="text-xl text-[#6D4C41] max-w-2xl mx-auto">
              From consultation to completion, we make it effortless
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#81C784] to-transparent"></div>
                )}

                <div className="group text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] to-[#81C784] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-[#A8E6CF] mb-2">{step.step}</span>
                      <div className="p-3 bg-gradient-to-br from-[#1B5E20] to-[#81C784] rounded-full">
                        {React.cloneElement(step.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B5E20] mb-3">{step.title}</h3>
                  <p className="text-[#6D4C41]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&q=80"
                      alt="Landscaping work"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent"></div>
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80"
                      alt="Beautiful lawn"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80"
                      alt="Garden design"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent"></div>
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80"
                      alt="Irrigation system"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/50 to-transparent"></div>
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#1B5E20] to-[#81C784] rounded-3xl p-8 shadow-2xl animate-float">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-[#A8E6CF] px-4 py-2 rounded-full text-[#1B5E20] mb-4">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">Award-Winning Service</span>
                </div>
                <h2 className="text-5xl font-bold text-[#1B5E20] mb-6">
                  Your Trusted Landscaping Partner
                </h2>
                <p className="text-xl text-[#6D4C41] leading-relaxed">
                  For over 15 years, Brothers Property Landscaping has been transforming outdoor spaces across Utah. 
                  Our commitment to quality, integrity, and customer satisfaction sets us apart.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield />,
                    title: "Licensed & Insured",
                    description: "Full liability coverage and proper licensing for your peace of mind"
                  },
                  {
                    icon: <Award />,
                    title: "Quality Craftsmanship",
                    description: "Meticulous attention to detail in every project we undertake"
                  },
                  {
                    icon: <Users />,
                    title: "Expert Team",
                    description: "Certified professionals with extensive landscaping expertise"
                  },
                  {
                    icon: <Clock />,
                    title: "Reliable Service",
                    description: "On-time arrivals and project completion you can depend on"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-br from-[#1B5E20] to-[#81C784] rounded-xl group-hover:rotate-12 transition-transform duration-500">
                      {React.cloneElement(item.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B5E20] text-lg mb-1">{item.title}</h4>
                      <p className="text-[#6D4C41]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="py-24 bg-[#1B5E20] relative overflow-hidden" id="testimonials">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#A8E6CF] rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#81C784] rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-4">
              <Star className="w-5 h-5" />
              <span className="text-sm font-semibold">98% Satisfaction Rate</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied customers
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 relative">
              <Quote className="absolute top-8 left-8 w-16 h-16 text-[#A8E6CF]/30" />
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-[#FFD700] fill-current" />
                  ))}
                </div>

                <p className="text-2xl text-white mb-8 leading-relaxed italic">
                  "{testimonials[activeTestimonial].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-xl">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-[#A8E6CF]">
                      {testimonials[activeTestimonial].location}
                    </div>
                    <div className="text-white/70 text-sm mt-1">
                      {testimonials[activeTestimonial].service}
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeTestimonial
                            ? 'bg-white w-8'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Users />, stat: "500+", label: "Happy Clients" },
              { icon: <Star />, stat: "4.9/5", label: "Average Rating" },
              { icon: <Award />, stat: "100%", label: "Satisfaction" },
              { icon: <TrendingUp />, stat: "10k+", label: "Projects Done" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex p-3 bg-[#A8E6CF] rounded-xl mb-3">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-[#1B5E20]" })}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-[#A8E6CF] text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#A8E6CF] px-4 py-2 rounded-full text-[#1B5E20] mb-4">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-semibold">Get Your Free Quote Today</span>
            </div>
            <h2 className="text-5xl font-bold text-[#1B5E20] mb-6">Let's Start Your Project</h2>
            <p className="text-xl text-[#6D4C41] max-w-2xl mx-auto">
              Ready to transform your outdoor space? Contact us for a free consultation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                <h3 className="text-3xl font-bold text-[#1B5E20] mb-8">Request Your Free Quote</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-[#1B5E20] font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#1B5E20] outline-none transition-all duration-300 group-hover:border-[#81C784]"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[#1B5E20] font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#1B5E20] outline-none transition-all duration-300 group-hover:border-[#81C784]"
                        placeholder="801-000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[#1B5E20] font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#1B5E20] outline-none transition-all duration-300 group-hover:border-[#81C784]"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-[#1B5E20] font-semibold mb-2">Service Needed *</label>
                    <select className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#1B5E20] outline-none transition-all duration-300 group-hover:border-[#81C784]" required>
                      <option value="">Select a service...</option>
                      <option>Lawn Mowing & Maintenance</option>
                      <option>Landscape Design & Installation</option>
                      <option>Irrigation & Sprinkler Systems</option>
                      <option>Seasonal Cleanup & Mulching</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-[#1B5E20] font-semibold mb-2">Project Details</label>
                    <textarea
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#1B5E20] outline-none h-32 transition-all duration-300 group-hover:border-[#81C784]"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1B5E20] to-[#81C784] text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get My Free Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>

                  <p className="text-sm text-[#6D4C41] text-center">
                    * We'll respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6">
              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-3xl p-8 text-white shadow-2xl">
                <h4 className="text-2xl font-bold mb-6">Contact Mike Directly</h4>
                <div className="space-y-4">
                  <a
                    href="tel:8010000000"
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Call or Text</div>
                      <div className="text-xl font-bold">801-000-0000</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@brotherslandscaping.com"
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Email Us</div>
                      <div className="text-lg font-semibold">info@brotherslandscaping.com</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md rounded-xl">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-80">Service Area</div>
                      <div className="text-lg font-semibold">Greater Utah</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-[#1B5E20] mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Business Hours
                </h4>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-[#6D4C41] font-medium">{item.day}</span>
                      <span className="font-bold text-[#1B5E20]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-[#A8E6CF] rounded-3xl p-8">
                <h4 className="text-2xl font-bold text-[#1B5E20] mb-6">Our Promise</h4>
                <div className="space-y-4">
                  {guarantees.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-[#1B5E20] rounded-lg">
                        {React.cloneElement(item.icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <span className="text-[#1B5E20] font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-[#1B5E20] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A8E6CF] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="w-10 h-10" />
                <div>
                  <h3 className="text-2xl font-bold">Brothers Property</h3>
                  <p className="text-sm text-[#A8E6CF]">Landscaping Excellence</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transforming outdoor spaces across Utah for over 15 years. Your dream landscape is our passion.
              </p>
              <div className="flex space-x-4">
                {guarantees.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="p-1.5 bg-white/20 rounded">
                      {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                    </div>
                    <span className="text-white/90">{item.text.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-3 text-white/80">
                <p className="hover:text-white transition-colors duration-300">
                  <a href="tel:8010000000">801-000-0000</a>
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  <a href="mailto:info@brotherslandscaping.com">info@brotherslandscaping.com</a>
                </p>
                <p>Utah, USA</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; 2025 Brothers Property Landscaping. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Made with ❤️ in Utah
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button */}
      <a
        href="tel:8010000000"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#1B5E20] to-[#81C784] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-40 group animate-pulse-slow"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Call Now
        </span>
      </a>
    </div>
  );
}