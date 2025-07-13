
function Home() {
  return (
    <>
      <main className="flex-grow">
        <div className="py-20 px-4 bg-gray-800 text-center text-gray-600 space-y-10">
          {[...Array(20)].map((_, i) => (
            <p key={i} className="text-lg">
              This is sample scroll content line #{i + 1}.
            </p>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
