import { Circle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';

// type Theme = 'light' | 'dark' | 'system';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [theme, setTheme] = useState<Theme>('system');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

 /* { useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('system');
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', newTheme === 'dark');
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setThemeDropdownOpen(false);
  };
  */

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2"
            >
              <Circle color="#FE8D2A" fill="#FE8D2A"/>

              {/* Uncomment👇 when you want "Logo" with "Text"*/}
              {/* <div className="w-8 h-8 bg-gradient-to-br from-[#D87620] to-[#FE8D2A] rounded-lg flex items-center justify-center">
                <span className="text-white">L</span>
              </div>
              <span className="font-medium hidden sm:block tracking-tight">LiveLifeSuccessfull</span> */}
              
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A] transition-colors">
              System
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A] transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A] transition-colors">
              FAQ
            </button>

            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {/* {theme === 'light' && <Sun className="w-5 h-5" />}
                {theme === 'dark' && <Moon className="w-5 h-5" />}
                {theme === 'system' && <Monitor className="w-5 h-5" />} */}
              </button>

              {/* {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
                  <button
                    // onClick={() => handleThemeChange('light')}
                    className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Sun className="w-4 h-4" />
                    <span>Light</span>
                  </button>
                  <button
                    // onClick={() => handleThemeChange('dark')}
                    className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Moon className="w-4 h-4" />
                    <span>Dark</span>
                  </button>
                  <button
                    // onClick={() => handleThemeChange('system')}
                    className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>System</span>
                  </button>
                </div>
              )} */}
            </div>

            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {/* {theme === 'light' && <Sun className="w-5 h-5" />}
              {theme === 'dark' && <Moon className="w-5 h-5" />}
              {theme === 'system' && <Monitor className="w-5 h-5" />} */}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('solution')} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A]">
                System
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A]">
                About
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A]">
                Pricing
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#FE8D2A]">
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-6 py-2 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-colors text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}

        {/* Mobile Theme Dropdown */}
        {/* {themeDropdownOpen && (
          <div className="md:hidden absolute right-4 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2">
            <button
              // onClick={() => handleThemeChange('light')}
              className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Sun className="w-4 h-4" />
              <span>Light</span>
            </button>
            <button
              // onClick={() => handleThemeChange('dark')}
              className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Moon className="w-4 h-4" />
              <span>Dark</span>
            </button>
            <button
              // onClick={() => handleThemeChange('system')}
              className="w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Monitor className="w-4 h-4" />
              <span>System</span>
            </button>
          </div>
        )} */}
      </nav>
    </header>
  );
}
