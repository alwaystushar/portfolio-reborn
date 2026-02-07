"use client";

import { useState, useRef, useEffect } from "react";
import TextReveal from "@/app/component/TextReveal";
import TransitionLink from "@/app/component/TransitionLink";
import { ArrowUpRight, Send, ChevronDown } from "lucide-react";

const projectOptions = [
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "branding", label: "Brand Design" },
  { value: "web-dev", label: "Website Development" },
  { value: "product", label: "Product Design" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Something Else" },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = projectOptions.find(
    (opt) => opt.value === formData.project,
  )?.label;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b84d6eab-f5e8-43a1-8dc5-8d84bf630dfc",

          name: formData.name,
          email: formData.email, // user email (keep this)

          from_name: "Portfolio Contact",
          from_email: "connect@alwaystushar.fyi", // MUST be your domain email

          subject: `New inquiry from ${formData.name}`,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Project: ${selectedLabel || formData.project}

Message:
${formData.message}
  `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", project: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch (error) {
      alert("Failed to send message. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f2f3f4] text-black">
      <div className="grid girder w-full px-[4vw] lg:pt-[12vw] pt-[30vw] pb-[10vw]">
        {/* Hero Section */}
        <div className="col-span-12 lg:col-span-8">
          <TextReveal
            className="text-[10vw] leading-[1] lg:text-[4.5vw]"
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.2}
          >
            Let's make something
          </TextReveal>
          <TextReveal
            className="text-[10vw] leading-[1] lg:text-[4.5vw] italic"
            triggerOnScroll={false}
            waitForPageTransition={true}
            duration={1.2}
            delay={0.1}
          >
            unforgettable together.
          </TextReveal>
          <TextReveal
            className="mt-[4vw] max-w-[90vw] text-[3.5vw] text-black/60 lg:max-w-[32vw] lg:text-[0.9vw] lg:mt-[2vw]"
            triggerOnScroll={false}
            waitForPageTransition={true}
            delay={0.3}
          >
            Whether you have a project in mind, a wild idea that needs shaping,
            or just want to say hi—I'm all ears. Great things start with a
            conversation.
          </TextReveal>
        </div>

        {/* CTA Section */}
        <div className="col-span-12 lg:col-span-6 mt-[12vw] lg:mt-[8vw]">
          <TextReveal
            className="text-[3vw] uppercase tracking-[0.3vw] text-black/40 lg:text-[0.7vw] mb-[2vw] lg:mb-[1vw]"
            triggerOnScroll={false}
            waitForPageTransition={true}
            delay={0.4}
          >
            Drop me a line
          </TextReveal>

          <a
            href="mailto:connect@alwaystushar.fyi"
            className="group inline-flex items-center gap-[2vw] lg:gap-[1vw]"
          >
            <TextReveal
              className="text-[6vw] lg:text-[2.5vw] font-normal hover:text-black/70 transition-colors"
              triggerOnScroll={false}
              waitForPageTransition={true}
              delay={0.5}
            >
              connect@alwaystushar.fyi
            </TextReveal>
            <ArrowUpRight className="w-[6vw] h-[6vw] lg:w-[2vw] lg:h-[2vw] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="col-span-12 mt-[16vw] lg:mt-[10vw]">
          <TextReveal
            className="text-[6vw] lg:text-[2vw] mb-[6vw] lg:mb-[3vw]"
            triggerOnScroll={true}
            waitForPageTransition={true}
          >
            Or fill this out
          </TextReveal>

          <form
            onSubmit={handleSubmit}
            className="grid lg:grid-cols-2 gap-[6vw] lg:gap-[2vw]"
          >
            {/* Name Field */}
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-[3vw] lg:text-[0.7vw] uppercase tracking-[0.2vw] text-black/40 mb-[2vw] lg:mb-[0.8vw]"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-transparent border-b-[1px] border-black/20 pb-[2vw] lg:pb-[0.8vw] text-[4vw] lg:text-[1vw] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-[3vw] lg:text-[0.7vw] uppercase tracking-[0.2vw] text-black/40 mb-[2vw] lg:mb-[0.8vw]"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-transparent border-b-[1px] border-black/20 pb-[2vw] lg:pb-[0.8vw] text-[4vw] lg:text-[1vw] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Project Type Field - Custom Dropdown */}
            <div className="relative lg:col-span-2" ref={dropdownRef}>
              <label className="block text-[3vw] lg:text-[0.7vw] uppercase tracking-[0.2vw] text-black/40 mb-[2vw] lg:mb-[0.8vw]">
                Project Type
              </label>

              {/* Dropdown Trigger */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full flex items-center justify-between bg-transparent border-b-[1px] pb-[2vw] lg:pb-[0.8vw] text-[4vw] lg:text-[1vw] text-left cursor-pointer transition-colors ${
                  isDropdownOpen ? "border-black" : "border-black/20"
                }`}
              >
                <span
                  className={selectedLabel ? "text-black" : "text-black/30"}
                >
                  {selectedLabel || "Select a project type"}
                </span>
                <ChevronDown
                  className={`w-[4vw] h-[4vw] lg:w-[1.2vw] lg:h-[1.2vw] text-black/40 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 right-0 top-full mt-[1vw] lg:mt-[0.4vw] bg-white border border-black/10 shadow-lg z-50 overflow-hidden transition-all duration-300 origin-top ${
                  isDropdownOpen
                    ? "opacity-100 scale-y-100 translate-y-0"
                    : "opacity-0 scale-y-95 -translate-y-[1vw] pointer-events-none"
                }`}
              >
                {projectOptions.map((option, index) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, project: option.value });
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-[4vw] py-[3vw] lg:px-[1vw] lg:py-[0.7vw] text-[4vw] lg:text-[0.9vw] transition-all duration-200 hover:bg-black hover:text-white ${
                      formData.project === option.value
                        ? "bg-black/5 text-black"
                        : "text-black/70"
                    }`}
                    style={{
                      transitionDelay: isDropdownOpen
                        ? `${index * 30}ms`
                        : "0ms",
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Hidden input for form validation */}
              <input
                type="hidden"
                name="project"
                value={formData.project}
                required
              />
            </div>

            {/* Message Field */}
            <div className="relative lg:col-span-2">
              <label
                htmlFor="message"
                className="block text-[3vw] lg:text-[0.7vw] uppercase tracking-[0.2vw] text-black/40 mb-[2vw] lg:mb-[0.8vw]"
              >
                Tell me about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="I have this crazy idea..."
                className="w-full bg-transparent border-b-[1px] border-black/20 pb-[2vw] lg:pb-[0.8vw] text-[4vw] lg:text-[1vw] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2 mt-[4vw] lg:mt-[2vw]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center gap-[2vw] lg:gap-[0.8vw] bg-black text-white px-[6vw] py-[3vw] lg:px-[2vw] lg:py-[1vw] text-[4vw] lg:text-[0.9vw] hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                    <span className="text-green-400">✓</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-[4vw] h-[4vw] lg:w-[1vw] lg:h-[1vw] group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="col-span-12 grid lg:grid-cols-3 gap-[8vw] lg:gap-[4vw] mt-[16vw] lg:mt-[10vw]">
          <div>
            <TextReveal
              className="text-[3vw] uppercase tracking-[0.3vw] text-black/40 lg:text-[0.7vw] mb-[3vw] lg:mb-[1vw]"
              triggerOnScroll={true}
              waitForPageTransition={true}
            >
              Prefer a quick chat?
            </TextReveal>
            <TransitionLink
              href="https://wa.me/8171839997"
              target="_blank"
              rel="noreferrer"
              className="text-[4vw] lg:text-[1.1vw] hover:text-black/70 transition-colors inline-flex items-center gap-[1vw]"
            >
              <TextReveal triggerOnScroll={true} waitForPageTransition={true}>
                Message on WhatsApp
              </TextReveal>
              <ArrowUpRight className="w-[4vw] h-[4vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
            </TransitionLink>
          </div>

          <div>
            <TextReveal
              className="text-[3vw] uppercase tracking-[0.3vw] text-black/40 lg:text-[0.7vw] mb-[3vw] lg:mb-[1vw]"
              triggerOnScroll={true}
              waitForPageTransition={true}
            >
              See my journey
            </TextReveal>
            <TransitionLink
              href="https://www.linkedin.com/in/tusharux/"
              target="_blank"
              rel="noreferrer"
              className="text-[4vw] lg:text-[1.1vw] hover:text-black/70 transition-colors inline-flex items-center gap-[1vw]"
            >
              <TextReveal triggerOnScroll={true} waitForPageTransition={true}>
                Connect on LinkedIn
              </TextReveal>
              <ArrowUpRight className="w-[4vw] h-[4vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
            </TransitionLink>
          </div>

          <div>
            <TextReveal
              className="text-[3vw] uppercase tracking-[0.3vw] text-black/40 lg:text-[0.7vw] mb-[3vw] lg:mb-[1vw]"
              triggerOnScroll={true}
              waitForPageTransition={true}
            >
              Follow the chaos
            </TextReveal>
            <TransitionLink
              href="https://www.instagram.com/alwaystushar/"
              target="_blank"
              rel="noreferrer"
              className="text-[4vw] lg:text-[1.1vw] hover:text-black/70 transition-colors inline-flex items-center gap-[1vw]"
            >
              <TextReveal triggerOnScroll={true} waitForPageTransition={true}>
                Follow on Instagram
              </TextReveal>
              <ArrowUpRight className="w-[4vw] h-[4vw] lg:w-[1.2vw] lg:h-[1.2vw]" />
            </TransitionLink>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="col-span-12 mt-[20vw] lg:mt-[14vw]">
          <TextReveal
            className="text-[5vw] lg:text-[1.8vw] text-black/30 italic"
            triggerOnScroll={true}
            waitForPageTransition={true}
          >
            "I don't just design interfaces. I design how people feel."
          </TextReveal>
          <TextReveal
            className="mt-[2vw] lg:mt-[0.8vw] text-[3vw] lg:text-[0.8vw] text-black/40"
            triggerOnScroll={true}
            waitForPageTransition={true}
          >
            — Based in Delhi, India. Available worldwide.
          </TextReveal>
        </div>
      </div>
    </section>
  );
}
