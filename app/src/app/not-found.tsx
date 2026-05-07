export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="px-6 py-3 bg-[#1a5c38] text-white rounded-lg hover:bg-[#124027] transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}
