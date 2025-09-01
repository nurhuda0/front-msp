import { ArrowRight, Code, Palette, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#265ad0]">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Logoipsum
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                James Dean
              </a>
            </div>
          </nav>
        </div>

        <main className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl font-bold text-white/90 mb-2 max-w-2xl mx-auto">
              Blog genzet
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Journal : Design Resources, Interviews, and Industry News
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your daily dose of design insights!
            </p>

            <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
              <select
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg 
                  transition-colors focus:outline-none w-full sm:w-auto pr-12"
              >
                <option value="">Select category</option>
                <option value="1">Option A</option>
                <option value="2">Option B</option>
                <option value="3">Option C</option>
              </select>

              <input
                    type="text"
                    placeholder="Search articles..."
                    className="bg-white border border-gray-300 rounded-lg px-4 py-3 w-full sm:w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
          </div>
        </main>
      </div>
        

      <div className="bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              Built with Modern Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Next.js 15</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  App Router with SSR & CSR support
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Tailwind CSS</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Utility-first CSS framework
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">TypeScript</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Type-safe JavaScript development
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Shadcn/ui</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Beautiful, accessible components
                </p>
              </div>
            </div>
          </div>
      </div>

      
        <footer className="container mx-auto px-4 py-8 border-t border-slate-200 dark:border-slate-700">
          <div className="text-center text-slate-600 dark:text-slate-300">
            <p>&copy; 2024 Front MSP. Built with modern web technologies.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
