import { Circle } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Circle color="#FE8D2A" fill="#FE8D2A" />

              {/* Enable👇 when you want "Logo" and "Text" */}
              {/* <div className="w-10 h-10 bg-gradient-to-br from-[#D87620] to-[#FE8D2A] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">L</span>
              </div> */}
              {/* <span className="font-medium text-xl">LiveLifeSuccessfull</span> */}
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Simple, science-backed systems to help you rebuild discipline, focus, and habits—one day at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  System
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:livelifesuccessfulll@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:livelifesuccessfulll@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors"
                >
                  General Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} LiveLifeSuccessfull. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-[#FE8D2A] transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
