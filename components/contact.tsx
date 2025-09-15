export function Contact() {
  return (
    <section className="pt-20 pb-4 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-4">That's all for now.</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-2">
            Got a project in mind?
          </h2>
          <h3 className="text-5xl font-bold text-gray-900">Let's talk</h3>
        </div>

        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div>
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="text-gray-900">its.ashwin.23@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Phone</p>
            <p className="text-gray-900">(+91) 8248669086</p>
          </div>
          <button className="w-24 h-24 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
