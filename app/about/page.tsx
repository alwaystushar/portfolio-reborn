import TransitionLink from '@/app/component/TransitionLink';

export default function About() {
  return (
    <section 
      data-section="about1"
      data-bgcolor="#f0f0f0"
      data-textcolor="#000000"
      className="min-h-screen flex items-center justify-center 0"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-8">This is the about section</p>
        
        <TransitionLink 
          href="/"
          className=""
        >
          ← Back to Home
        </TransitionLink>
      </div>
    </section>
  );
}
