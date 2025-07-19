import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdMessage } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className={`
          ${
            scrolled
              ? "bg-white/30 backdrop-blur-lg shadow-lg text-gray-900 fixed top-4 left-0 right-0 mx-6 rounded-lg z-50 transition-all duration-500 border border-gray-500"
              : "bg-background border-b border-border px-6 py-4 sticky top-0 w-full z-50 transition-all duration-500"
          } py-2 px-4 sm:py-4 sm:px-6 select-none caret-transparent
        `}
        style={
          scrolled
            ? {
                maxWidth: "calc(100vw - 3rem)",
                marginLeft: "auto",
                marginRight: "auto",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          {!scrolled && (
            <div className="flex items-center gap-2">
              <MdMessage className="text-2xl text-primary" />
            </div>
          )}

          {/* Navigation */}
          <nav className={`hidden md:flex items-center gap-8 ${scrolled ? 'mx-auto' : ''}`}>
            <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary transition-colors`}>Home</a>
            <div className="relative group">
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary transition-colors flex items-center gap-1`}>
                Our Course <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary transition-colors flex items-center gap-1`}>
                Pages <ChevronDown className="w-4 h-4" />
              </a>
            </div>
            <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary transition-colors`}>Mentors</a>
            <a href="#" className={`${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary transition-colors`}>Resources</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <IoSearch className={`text-xl ${scrolled ? 'text-gray-900' : 'text-foreground'} hover:text-primary cursor-pointer`} />
            <div className={`w-px h-6 ${scrolled ? 'bg-gray-300' : 'bg-border'}`}></div>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-bg px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-badge-bg text-badge-text px-4 py-2 rounded-full text-sm font-medium">
                #1 LMS FOR TRAINING SUCCESS
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-hero-text leading-tight">
                Flexible & Scalable.
                <br />
                Your Platform for High
                <br />
                Value training.
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                taking just seconds. Import users, assign training, and enjoy 
                seamless L&D management from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cta-primary hover:bg-cta-primary/90 text-primary-foreground px-8 py-3 text-base">
                  Start Free Trial →
                </Button>
                <Button variant="outline" className="flex items-center gap-2 px-8 py-3 text-base">
                  <div className="w-8 h-8 rounded-full bg-cta-secondary flex items-center justify-center">
                    <FaPlay className="text-white text-sm ml-0.5" />
                  </div>
                  How it Work
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative">
                {/* Placeholder for people images */}
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <MdMessage className="text-2xl text-primary" />
                    </div>
                    <p className="text-muted-foreground">Hero Image Placeholder</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Skillful Talking!
                </div>
                
                <div className="absolute bottom-4 right-8 bg-background shadow-lg rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>John Doe</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Mike Taylor</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Angela Taylor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-section-dark px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center">
                <div className="text-2xl font-bold text-primary">D</div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Find Best Course: Connecting
                <br />
                Mentor With{" "}
                <span className="text-highlight">Opportunity.</span>
              </h2>
            </div>

            {/* Right Content */}
            <div className="relative">
              {/* Placeholder for mentor images */}
              <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MdMessage className="text-2xl text-white" />
                  </div>
                  <p className="text-white/70">Mentor Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="mt-16 bg-white rounded-lg p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Search For Job</label>
                <Input placeholder="Search For Job" className="h-12" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Dhaka, Bangladesh" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dhaka">Dhaka, Bangladesh</SelectItem>
                    <SelectItem value="chittagong">Chittagong, Bangladesh</SelectItem>
                    <SelectItem value="sylhet">Sylhet, Bangladesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Job Level</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Job Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Department</label>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button className="bg-highlight hover:bg-highlight/90 text-primary px-12 py-3 text-base font-medium">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;