export function Contact() {
  return (
    <section className="px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="py-8 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm text-gray-500 mb-4">That's all for now.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Got a project in mind?
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Let's talk
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 border-t border-gray-200 pt-6 sm:pt-8">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-gray-900 text-sm sm:text-base">
                its.ashwin.23@gmail.com
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="text-gray-900 text-sm sm:text-base">
                (+91) 8248669086
              </p>
            </div>
            <button className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors text-sm sm:text-base">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
