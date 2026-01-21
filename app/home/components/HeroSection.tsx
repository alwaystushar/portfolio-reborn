import TransitionLink from '@/app/component/TransitionLink';

export default function HeroSection() {
  return (
    <section 
      data-section="section1"
      data-bgcolor="#ffffff"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome</h1>
        <p className="text-xl mb-8">Short section</p>
        
        <TransitionLink 
          href="/about"
          className="inline-block px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300 font-medium"
        >
          Learn More About Us
        </TransitionLink>
      </div>
    </section>
  );
}
