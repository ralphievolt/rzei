export default function Loading() {
  return (
    <div className="hero min-h-screen bg-base-200 content-start ">
      <div className="hero-content text-center">
        <div className="flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-fuchsia-200 rounded-full"></div>
          <div className="w-8 h-8 bg-fuchsia-400 rounded-full"></div>
          <div className="w-8 h-8 bg-fuchsia-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
