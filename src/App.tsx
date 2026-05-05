import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Compass, Camera, Phone, Mail, ArrowRight, ChevronRight, Check, Facebook, Instagram, Twitter, ChevronUp, Play, Share2 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-50 py-2 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center gap-2 z-50">
          <Compass className={`w-8 h-8 ${isScrolled ? 'text-brand-green' : 'text-stone-50'}`} />
          <span className={`font-serif text-xl md:text-2xl font-semibold uppercase tracking-widest ${isScrolled ? 'text-stone-900' : 'text-stone-50'}`}>
            Africa Safari <span className="block text-xs lowercase font-sans tracking-[0.2em] opacity-80 mt-1">Discovery</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
          <a href="#destinations" className="hover:text-brand-rust transition-colors hover:-translate-y-0.5 transform duration-200">Destinations</a>
          <a href="#tours" className="hover:text-brand-rust transition-colors hover:-translate-y-0.5 transform duration-200">Tours</a>
          <a href="#about" className="hover:text-brand-rust transition-colors hover:-translate-y-0.5 transform duration-200">About Us</a>
          <a href="#contact" className="hover:text-brand-rust transition-colors hover:-translate-y-0.5 transform duration-200">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a href="#contact" className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all ${isScrolled ? 'bg-brand-green text-stone-50 hover:bg-brand-olive' : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-stone-900'}`}>
            Plan Your Trip
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? 
            <X className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-stone-50'}`} /> : 
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-stone-50'}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-stone-900/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center gap-8 px-4">
          <nav className="flex flex-col gap-6 text-center text-xl uppercase tracking-widest text-stone-200 font-serif w-full max-w-xs">
            <a href="#destinations" className="py-2 border-b border-stone-800/60" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
            <a href="#tours" className="py-2 border-b border-stone-800/60" onClick={() => setMobileMenuOpen(false)}>Tours</a>
            <a href="#about" className="py-2 border-b border-stone-800/60" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#contact" className="py-2 border-b border-stone-800/60" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-4 w-full max-w-xs text-center rounded-full text-sm uppercase tracking-wider font-semibold transition-all bg-brand-green text-stone-50 hover:bg-brand-olive mt-4">
            Plan Your Trip
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const images = [
    "https://i.imgur.com/y0uDq0K.jpeg",
    "https://i.imgur.com/gMHJRCF.jpeg",
    "https://i.imgur.com/X4N6WK0.jpeg",
    "https://i.imgur.com/NmfxR2X.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-stone-900" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        {images.map((img, index) => (
          <img 
            key={img}
            src={img} 
            alt={`Safari Background ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          />
        ))}
        <div className="absolute inset-0 bg-stone-900/40 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="block text-brand-sand text-sm uppercase tracking-[0.3em] font-semibold mb-6">Discover The Wild</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] mb-8 font-light italic">
          Experience <span className="block mt-2 font-normal not-italic">East Africa</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Adventure safaris, travel consultancy, and unforgettable vacations tailored for the explorer in you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
          <a href="#tours" className="w-full sm:w-auto px-8 py-4 bg-brand-rust text-white rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-rust/20">
            Explore Tours <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-stone-900/40 backdrop-blur-sm border border-white/50 text-white rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-stone-900 transition-colors flex justify-center items-center">
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-stone-50 bg-texture relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-brand-olive uppercase tracking-[0.2em] text-xs font-semibold">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 mb-6 leading-tight">
                Crafting Authentic <br/><span className="italic text-brand-olive">Safari Experiences</span>
              </h2>
              <p className="text-stone-600 leading-relaxed font-light text-lg">
                We are an all-rounded operator handling your safaris, ticketing, hotel reservations, and transfer services for groups, families, and individuals on business travel or vacations.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-rust" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1 text-stone-900">Local Experts</h3>
                  <p className="text-sm text-stone-500 line-clamp-2">Deep knowledge of East Africa's hidden gems.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-brand-rust" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-1 text-stone-900">Tailored Trips</h3>
                  <p className="text-sm text-stone-500 line-clamp-2">Customized itineraries for your unique style.</p>
                </div>
              </div>
            </div>
            
            <div>
               <a href="#tours" className="inline-flex items-center gap-2 text-brand-rust uppercase tracking-wider text-sm font-semibold hover:gap-4 transition-all">
                  More About Us <ArrowRight className="w-4 h-4" />
               </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img 
                src="https://i.imgur.com/y0uDq0K.jpeg" 
                alt="Giraffes in the wild" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden md:block">
              <p className="font-serif text-4xl text-brand-green mb-2">15+</p>
              <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Years of guiding adventures in Africa</p>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-sand rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<{url: string, title: string} | null>(null);
  const [preferences, setPreferences] = useState<string[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const tours = [
    {
      title: "Best of Kenya & Tanzania",
      duration: "10 Days",
      image: "https://i.imgur.com/NmfxR2X.jpeg",
      description: "Experience the ultimate migration path across the Mara and Serengeti.",
      details: "Highlights: Masai Mara, Serengeti National Park, Ngorongoro Crater, Lake Nakuru. Includes all luxury park lodges, private 4x4 Land Cruiser with expert guides, and park entry fees.",
      itinerary: ["Day 1-2: Nairobi to Masai Mara", "Day 3-4: Serengeti plains tracking", "Day 5: Ngorongoro Crater descent", "Day 6-10: Luxury lodges & continuous migration viewing"],
      includedServices: ["Luxury park lodges", "Private 4x4 Land Cruiser", "Expert local guides", "All park entry fees"],
      videoThumbnail: "https://i.imgur.com/NmfxR2X.jpeg",
      videoUrl: "https://www.youtube.com/embed/P6aAh1V6w2Y",
      videoDescription: "Giraffes roaming the golden plains of the Serengeti.",
      tags: ["wildlife", "safari", "luxury"]
    },
    {
      title: "Gorillas & Golden Monkeys",
      duration: "5 Days",
      image: "https://i.imgur.com/P7v47V4.jpeg",
      description: "Trek through the misty mountains of Rwanda and Uganda.",
      details: "Highlights: Bwindi Impenetrable Forest, Volcanoes National Park tracking. Includes highly sought-after gorilla tracking permits, luxury eco-lodge stays, and cultural community visits.",
      itinerary: ["Day 1: Arrival in Kigali", "Day 2: Transfer to Bwindi/Volcanoes", "Day 3: Gorilla Trekking", "Day 4: Golden Monkey Tracking", "Day 5: Cultural Tour & Departure"],
      includedServices: ["Gorilla tracking permits", "Luxury eco-lodge stays", "Local transfers & guided tours", "Community visits"],
      videoThumbnail: "https://i.imgur.com/P7v47V4.jpeg",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      videoDescription: "A glimpse into the lush, wild mountain gorilla habitats.",
      tags: ["trekking", "adventure", "wildlife"]
    },
    {
      title: "Discover Diani Beach",
      duration: "7 Days",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Relax on pristine white sands after your thrilling safari.",
      details: "Highlights: Wasini Island Swahili tour, Snorkeling, Sunset Dhow Cruise. Includes 5-star beachfront resort, all-inclusive meals, and stress-free airport transfers.",
      itinerary: ["Day 1: Arrival at Diani Beach", "Day 2: Beachfront relaxation", "Day 3: Wasini Island & Snorkeling", "Day 4-6: Sunset cruises and resorts", "Day 7: Departure"],
      includedServices: ["5-star beachfront resort", "All-inclusive meals", "Airport transfers", "Snorkeling gear & cruise tickets"],
      videoThumbnail: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
      videoDescription: "Unwind on the pristine, sunny shores of Diani Beach.",
      tags: ["beach", "relaxation", "luxury"]
    }
  ];

  const availableTags = [
    { id: "wildlife", label: "Wildlife" },
    { id: "safari", label: "Safari" },
    { id: "luxury", label: "Luxury" },
    { id: "trekking", label: "Trekking" },
    { id: "adventure", label: "Adventure" },
    { id: "beach", label: "Beach" },
    { id: "relaxation", label: "Relaxation" },
  ];

  const togglePreference = (tagId: string) => {
    setPreferences(prev => 
      prev.includes(tagId) ? prev.filter(p => p !== tagId) : [...prev, tagId]
    );
  };

  const getRecommendedTours = () => {
    if (preferences.length === 0) return tours;
    return tours
      .map(tour => ({
        ...tour,
        matchScore: tour.tags.filter(tag => preferences.includes(tag)).length
      }))
      .filter(tour => tour.matchScore > 0)
      .sort((a, b) => b.matchScore - a.matchScore);
  };

  const displayedTours = showRecommendations ? getRecommendedTours() : tours;

  return (
    <section className="py-24 bg-stone-900 text-stone-50" id="tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-sand uppercase tracking-[0.2em] text-xs font-semibold">Curated Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 leading-tight">Featured <span className="italic text-brand-rust">Adventures</span></h2>
          </div>
        </div>

        {/* Recommendation Engine / Preferences Quiz */}
        <div className="bg-stone-800 p-8 rounded-3xl border border-stone-700/50 mb-16 shadow-lg">
          <h3 className="text-2xl font-serif mb-4 flex items-center gap-2">
            <Compass className="w-6 h-6 text-brand-rust" /> 
            Find Your Perfect Safari
          </h3>
          <p className="text-stone-400 font-light mb-6">Select your interests to get personalized tour recommendations.</p>
          <div className="flex flex-wrap gap-3 mb-6">
            {availableTags.map(tag => (
              <button
                key={tag.id}
                onClick={() => togglePreference(tag.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all uppercase tracking-wider ${
                  preferences.includes(tag.id) 
                    ? 'bg-brand-rust text-white border-brand-rust' 
                    : 'bg-transparent border border-stone-600 text-stone-400 hover:text-white hover:border-stone-500'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowRecommendations(preferences.length > 0)}
            disabled={preferences.length === 0}
            className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider font-semibold transition-all ${
              preferences.length > 0 
                ? 'bg-brand-olive text-stone-50 hover:bg-opacity-90' 
                : 'bg-stone-700 text-stone-500 cursor-not-allowed'
            }`}
          >
            Show Recommendations
          </button>
          
          {showRecommendations && preferences.length > 0 && displayedTours.length > 0 && (
            <p className="mt-4 text-brand-sand text-sm font-semibold tracking-wider uppercase">
              Found {displayedTours.length} tour(s) matching your interests.
            </p>
          )}
          {showRecommendations && preferences.length > 0 && displayedTours.length === 0 && (
             <p className="mt-4 text-stone-400 text-sm font-light">
              No tours match your current selections. Try selecting fewer interests.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {displayedTours.map((tour, idx) => (
            <div key={idx} className="group flex flex-col bg-stone-800 rounded-3xl overflow-hidden border border-stone-700/50 hover:border-stone-600 transition-colors relative">
              {showRecommendations && (tour as any).matchScore && (
                 <div className="absolute top-4 left-4 z-30 bg-brand-olive text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg">
                    {Math.round(((tour as any).matchScore / preferences.length) * 100)}% Match
                 </div>
              )}
              <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[3/4] overflow-hidden cursor-pointer" onClick={() => setSelectedTour(idx)}>
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-all z-10 duration-500"></div>
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                  <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-brand-rust transition-colors" onClick={(e) => { e.stopPropagation(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank'); }} aria-label="Share on Facebook">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-brand-rust transition-colors" onClick={(e) => { e.stopPropagation(); window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out this amazing safari tour!')}`, '_blank'); }} aria-label="Share on Twitter">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center hover:bg-brand-rust transition-colors" onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/?text=${encodeURIComponent('Check out this amazing safari tour: ' + window.location.href)}`, '_blank'); }} aria-label="Share via WhatsApp">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-white inline-block">
                    {tour.duration}
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl mb-2 group-hover:text-brand-sand transition-colors cursor-pointer" onClick={() => setSelectedTour(idx)}>{tour.title}</h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed mb-6 flex-grow">{tour.description}</p>
                
                {/* Video gallery thumbnail for the tour */}
                <div className="mb-6 pt-4 border-t border-stone-700/50">
                  <p className="text-xs uppercase tracking-widest text-brand-sand mb-3 font-semibold">Video Gallery</p>
                  <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer" onClick={() => setActiveVideo({ url: tour.videoUrl, title: tour.title })}>
                    <img src={tour.videoThumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center hover:bg-stone-900/20 transition-colors">
                      <div className="w-10 h-10 bg-brand-rust/90 backdrop-blur rounded-full flex items-center justify-center text-white shadow-lg">
                        <Play className="w-4 h-4 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-2 font-light">{tour.videoDescription}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tour.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-stone-700/50 text-stone-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <button onClick={() => setSelectedTour(idx)} className="text-white bg-brand-rust/10 border border-brand-rust/30 hover:bg-brand-rust hover:border-brand-rust px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all text-center w-full mt-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-brand-rust transition-colors p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 bg-stone-900 text-white flex justify-between items-center border-b border-stone-800">
               <h3 className="font-serif text-xl">{activeVideo.title} Experience</h3>
            </div>
            <div className="aspect-video w-full bg-stone-800 flex items-center justify-center relative">
               <iframe 
                width="100%" 
                height="100%" 
                src={`${activeVideo.url}?autoplay=1&mute=1`} 
                title={activeVideo.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Tour Details Modal */}
      {selectedTour !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-stone-900/80 backdrop-blur-sm" onClick={() => setSelectedTour(null)}>
          <div className="bg-stone-50 text-stone-900 w-full max-w-3xl rounded-[2rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="relative h-48 md:h-72 shrink-0">
              <img src={displayedTours[selectedTour].image} alt={displayedTours[selectedTour].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              <button 
                className="absolute top-4 right-4 bg-black/40 backdrop-blur text-white rounded-full p-2 hover:bg-black/60 transition-colors"
                onClick={() => setSelectedTour(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 flex flex-col gap-2">
                <div className="bg-brand-rust px-4 py-1.5 rounded-full text-[10px] md:text-xs uppercase tracking-widest text-white inline-block font-semibold w-fit">
                  {displayedTours[selectedTour].duration}
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-white drop-shadow-lg pr-4 leading-tight">{displayedTours[selectedTour].title}</h3>
              </div>
            </div>
            
            <div className="p-8 overflow-y-auto">
              <p className="text-stone-600 mb-8 font-light text-lg leading-relaxed">{displayedTours[selectedTour].description}</p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <h4 className="font-serif text-2xl mb-4 text-stone-800 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-rust" /> Itinerary Highlights
                  </h4>
                  <ul className="space-y-3 font-light text-stone-600">
                    {displayedTours[selectedTour].itinerary.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="w-4 h-4 text-brand-olive shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <h4 className="font-serif text-2xl mb-4 text-stone-800 flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-rust" /> Included Services
                  </h4>
                  <ul className="space-y-3 font-light text-stone-600">
                    {displayedTours[selectedTour].includedServices.map((service, i) => (
                      <li key={i} className="flex gap-3 items-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-sand shrink-0"></div>
                         <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-stone-200">
                <a href="#contact" onClick={() => setSelectedTour(null)} className="px-8 py-4 bg-transparent border border-stone-300 text-stone-700 rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-stone-100 transition-all text-center">
                  Request a Quote
                </a>
                <a href="#contact" onClick={() => setSelectedTour(null)} className="px-8 py-4 bg-brand-rust text-white rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg text-center">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Destinations = () => {
  return (
    <section className="py-24 bg-stone-50" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-olive uppercase tracking-[0.2em] text-xs font-semibold">Magnificent East Africa</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-4 leading-tight">Key <span className="italic text-brand-rust">Destinations</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <a href="#tours" className="group relative h-80 md:h-96 rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/40 transition-colors z-10 duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Masai Mara, Kenya" 
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="relative p-8 z-20">
              <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-brand-sand transition-colors">Masai Mara, Kenya</h3>
              <p className="text-stone-200 text-sm font-light max-w-sm mb-4">Home to the spectacular Great Migration and abundant wildlife. A classic safari experience.</p>
              <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-wider font-semibold group-hover:text-brand-sand transition-colors">
                Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
          
          <a href="#tours" className="group relative h-80 md:h-96 rounded-3xl overflow-hidden flex flex-col justify-end">
            <div className="absolute inset-0 bg-stone-900/30 group-hover:bg-stone-900/40 transition-colors z-10 duration-500"></div>
            <img 
              src="https://i.imgur.com/GXWUufD.jpeg" 
              alt="Serengeti, Tanzania" 
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="relative p-8 z-20">
              <h3 className="font-serif text-3xl text-white mb-2 group-hover:text-brand-sand transition-colors">Serengeti, Tanzania</h3>
              <p className="text-stone-200 text-sm font-light max-w-sm mb-4">Endless plains teeming with lions, leopards, and millions of traversing wildebeest.</p>
              <span className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-wider font-semibold group-hover:text-brand-sand transition-colors">
                Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "Africa Safari Discovery orchestrated the trip of a lifetime. From navigating the bustling streets of Nairobi to the majestic silence of the Serengeti, every detail was perfect.",
      name: "Sarah & James T.",
      date: "Travelled September 2024"
    },
    {
      text: "Seeing a pride of lions up close was surreal! Our guide was incredibly knowledgeable. Everything from the lodge booking to the daily drives was seamless and luxurious.",
      name: "Michael R.",
      date: "Travelled January 2025"
    },
    {
      text: "The gorilla trek in Rwanda was the most profound experience of my life. Africa Safari Discovery handled every detail with utmost professionalism and care.",
      name: "Emma W.",
      date: "Travelled November 2024"
    }
  ];

  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Camera className="w-8 h-8 mx-auto text-brand-rust mb-6 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 italic">Traveler <span className="text-brand-olive not-italic">Stories</span></h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <p className="text-stone-600 mb-8 font-light italic leading-relaxed text-lg">"{review.text}"</p>
              <div className="border-t border-stone-100 pt-6">
                <p className="uppercase tracking-[0.2em] text-sm font-semibold text-stone-900">{review.name}</p>
                <p className="text-stone-500 text-sm mt-1">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <footer className="bg-stone-950 pt-20 pb-10 text-stone-400" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 border-b border-stone-800 pb-16">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Compass className="w-6 h-6 text-brand-olive" />
              <span className="font-serif text-xl font-semibold uppercase tracking-widest text-stone-200">
                Africa Safari
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6 pe-4">
              Adventure safaris and travel consultancy services across the magnificent East Africa. Experiences that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:text-white cursor-pointer transition-colors text-stone-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:text-white cursor-pointer transition-colors text-stone-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-stone-800 hover:text-white cursor-pointer transition-colors text-stone-400">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-stone-200 uppercase tracking-widest text-xs font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 shrink-0 text-brand-rust mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 shrink-0 text-brand-rust mt-0.5" />
                <span>+256 758230915</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 shrink-0 text-brand-rust mt-0.5" />
                <span>info@africasafaridiscovery.com</span>
              </li>
            </ul>
            <div className="h-40 w-full rounded-xl overflow-hidden border border-stone-800 bg-stone-900 pointer-events-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.1717385966.8290372336!2d36.74431267876127!3d-1.3031933722513904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1714088921105!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nairobi, Kenya"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-stone-200 uppercase tracking-widest text-xs font-semibold mb-6">Send an Inquiry</h4>
            {isSubmitted ? (
              <div className="bg-brand-olive/20 border border-brand-olive text-stone-200 px-6 py-8 rounded-xl text-center flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-brand-olive rounded-full flex items-center justify-center text-white mb-2">
                  <Check className="w-6 h-6" />
                </div>
                <h5 className="font-serif text-xl text-white">Inquiry Sent</h5>
                <p className="text-sm font-light">Thank you for reaching out! Our safari experts will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="bg-stone-900 border border-stone-800 px-4 py-3 text-sm focus:outline-none focus:border-brand-olive w-full rounded-md text-white" required />
                  <input type="email" placeholder="Email Address" className="bg-stone-900 border border-stone-800 px-4 py-3 text-sm focus:outline-none focus:border-brand-olive w-full rounded-md text-white" required />
                </div>
                <input type="text" placeholder="Subject / Safari Interest" className="bg-stone-900 border border-stone-800 px-4 py-3 text-sm focus:outline-none focus:border-brand-olive w-full rounded-md text-white" required />
                <textarea placeholder="Your Message or Itinerary Ideas" rows={4} className="bg-stone-900 border border-stone-800 px-4 py-3 text-sm focus:outline-none focus:border-brand-olive w-full rounded-md resize-none text-white" required></textarea>
                <button type="submit" className="bg-brand-olive text-stone-50 px-6 py-3 rounded-md hover:bg-opacity-90 transition-all font-semibold uppercase tracking-wider text-xs w-full sm:w-auto">Submit Inquiry</button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Africa Safari Discovery. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="w-12 h-12 bg-brand-rust text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-orange-700 hover:-translate-y-1 focus:outline-none"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-brand-rust selection:text-white relative">
      <Header />
      <main>
        <Hero />
        <Features />
        <Tours />
        <Destinations />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
