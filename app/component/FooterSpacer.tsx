export default function FooterSpacer() {
    return (
      <div 
        data-section="section4"
        data-bgcolor="#ffffff"
        className="relative z-20 bg-white h-screen sticky top-0 -mb-[100vh]"
      >
        {/* This section sticks and reveals the footer behind it */}
        <div className="h-full flex items-center justify-center text-black">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Final Section</h2>
            <p className="text-xl text-gray-700">Keep scrolling to reveal the footer</p>
          </div>
        </div>
      </div>
    );
  }
  