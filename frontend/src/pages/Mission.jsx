import missionLogo from "../assets/images/missionLogo.png"; //Adjust path as needed

function Mission() {
  return (
    <section className="select-none caret:transaparent max-w-5xl mx-auto px-4 py-20 text-gray-800">
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src={missionLogo}
          alt="HERSO Logo"
          className="w-40 md:w-52 object-contain"
        />
      </div>

      {/* Mission */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-red-800 mb-4">MISSION</h2>
        <p className="text-justify italic text-base leading-relaxed text-gray-700">
          The society is with targeted mission to improve the quality,
          efficiency and effectiveness of education, research and training
          systems in India and across the globe. This will in turn be a vantage
          point for us to encourage and improve Higher Educational Institutions’
          contribution to society and nation. Consequently, it will be a
          stimulating factor to create and foster an Indian area of higher
          education and it will empower the excellence and improve the
          visibility of higher educational activities focused on services to
          society and nation.
        </p>
      </div>

      {/* Vision */}
      <div>
        <h2 className="text-3xl font-bold text-red-800 mb-4">VISION</h2>
        <p className="text-justify italic text-base leading-relaxed text-gray-700">
          To be one of the best non-governmental organizations across the globe
          making education significantly research oriented and practical in
          learning.
        </p>
        
      </div>
    </section>
  );
}

export default Mission;
