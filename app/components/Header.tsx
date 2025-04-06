'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MapPin, Phone, Building, Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const cityData = {
  Москва: {
    phone: '+7 (916) 830-58-58',
  },
  Чебоксары: {
    phone: '+7 (916) 830-58-58',
  },
} as const;

const navigation = [
  { name: 'О компании', href: '#about' },
  { name: 'Преимущества', href: '#why-us' },
  { name: 'Как мы работаем', href: '#workflow' },
  { name: 'Сертификаты', href: '#certificates' },
  { name: 'Услуги', href: '#services' },
  { name: 'Контакты', href: '#contacts' },
];

type CityKey = keyof typeof cityData;

interface HeaderProps {
  selectedCity: CityKey;
  onCityChange: (city: CityKey) => void;
}

const Header = ({ selectedCity, onCityChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 w-full border-b bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-700"
            >
              <Building className="h-6 w-6" />
              <div>
                <span className="text-xl font-bold">ЦКЭ</span>
                <span className="block text-sm font-normal text-gray-600">
                  Центр комплексных экспертиз
                </span>
              </div>
            </Link>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>

            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-700 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-2 hover:bg-gray-100"
                  >
                    <MapPin className="h-4 w-4 text-blue-700" />
                    <span>{selectedCity}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => onCityChange('Москва')}
                    className="cursor-pointer"
                  >
                    Москва
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onCityChange('Чебоксары')}
                    className="cursor-pointer"
                  >
                    Чебоксары
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href={`tel:${cityData[selectedCity].phone}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-700"
              >
                <Phone className="h-4 w-4" />
                <span>{cityData[selectedCity].phone}</span>
              </a>

              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => setIsModalOpen(true)}
              >
                Оставить заявку
              </Button>
            </div>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
            }`}
          >
            <nav className="flex flex-col space-y-4 pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-700 transition-colors text-sm py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      <MapPin className="h-4 w-4 text-blue-700 mr-2" />
                      <span>{selectedCity}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => onCityChange('Москва')}
                      className="cursor-pointer"
                    >
                      Москва
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => onCityChange('Чебоксары')}
                      className="cursor-pointer"
                    >
                      Чебоксары
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a
                  href={`tel:${cityData[selectedCity].phone}`}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-700 py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>{cityData[selectedCity].phone}</span>
                </a>

                <Button
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white mt-4"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Оставить заявку
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>
      <div className="h-[72px]" />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
