import { FiDownload, FiExternalLink, FiArrowRight } from "react-icons/fi";

function TestTheme() {
  return (
    <section className="max-w-6xl mx-auto p-6 md:p-12 bg-neutral text-gray-800 space-y-12 select-none caret-transparent">
      
      {/* Main Title */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-primary tracking-wide">
          Test Your Color Theme
        </h1>
        <p className="text-lg text-secondary">
          A modern layout with reusable UI components.
        </p>
      </div>

      {/* Buttons Test */}
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <button className="bg-primary text-white py-2 px-4 rounded-xl hover:bg-primary/90 transition">
          Primary Button
        </button>
        <button className="border-2 border-secondary text-secondary py-2 px-4 rounded-xl hover:bg-secondary hover:text-white transition">
          Secondary Outline
        </button>
        <button className="bg-accent text-black py-2 px-4 rounded-xl hover:bg-accent/80 transition">
          Accent Call
        </button>
        <button className="py-2 px-4 text-sm text-gray-600 underline hover:text-primary transition">
          Text Link
        </button>
      </div>

      {/* Icons + Interactions */}
      <div className="flex gap-6 flex-wrap justify-center">
        <button className="flex items-center gap-2 bg-secondary text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 transition">
          <FiDownload className="text-lg" /> Download PDF
        </button>

        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:text-primary hover:border-primary transition"
        >
          Visit Site <FiExternalLink />
        </a>

        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
          Click Me <FiArrowRight />
        </button>
      </div>

      {/* Typography Showcase */}
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold text-primary">Heading Level 2</h2>
        <h3 className="text-xl font-semibold text-secondary">Subheading Level 3</h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis. Nullam sit amet odio eu est aliquet euismod a a urna. Suspendisse potenti.
        </p>
        <p className="italic text-gray-500">* This is italic meta text.</p>
      </div>

      {/* Fake Card Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-200"
          >
            <h4 className="text-lg font-semibold text-primary mb-2">Card Title {n}</h4>
            <p className="text-sm text-gray-600">
              This is a simple card element to test how your color palette works with elevation and contrast.
            </p>
            <a href="#" className="mt-4 inline-block text-sm text-accent hover:underline">
              Learn more
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-xl text-center space-y-3">
        <h3 className="text-xl font-bold text-primary">Ready to finalize the theme?</h3>
        <p className="text-gray-600">
          Select your preferred color palette and see it in action on real UI components.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition">
          Save Theme
        </button>
      </div>
    </section>
  );
}

export default TestTheme;
