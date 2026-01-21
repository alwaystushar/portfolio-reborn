export default function ServicesSection() {
  return (
    <section 
      data-section="section2"
      data-bgcolor="#000000"
      className="min-h-[150vh] flex items-center justify-center px-8"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-xl mb-6">Tall section - 150vh with more content</p>
        <div className="space-y-4">
          <p>More content here...</p>
          <p>This section is taller than viewport</p>
          <p>Background changes smoothly regardless of height</p>
        </div>
      </div>
    </section>
  );
}
