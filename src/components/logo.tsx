const Websitelogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/cavalo vetorizada.png"
        alt="BRUTE HORSE Logo"
        className="w-16 h-16 object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          BRUTE HORSE
        </h1>
        <p className="text-xs text-gray-500 font-medium tracking-wide">
          PREMIUM SUPPLEMENTS
        </p>
      </div>
    </div>
  );
};

export default Websitelogo;
