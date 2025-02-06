import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(value: string): string {
  // Удаляем все нецифровые символы
  const phoneNumber = value.replace(/\D/g, '');

  // Если номер пустой, возвращаем пустую строку
  if (!phoneNumber) return '';

  // Форматируем номер в виде +7 (XXX) XXX-XX-XX
  if (phoneNumber.length <= 1) return `+7`;
  if (phoneNumber.length <= 4) return `+7 (${phoneNumber.slice(1)}`;
  if (phoneNumber.length <= 7)
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
  if (phoneNumber.length <= 9)
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7)}`;
  return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
    4,
    7
  )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
}

export function validatePhoneNumber(phone: string): boolean {
  // Удаляем все нецифровые символы
  const cleanPhone = phone.replace(/\D/g, '');

  // Проверяем, что номер начинается с 7 и содержит 11 цифр
  return /^7\d{10}$/.test(cleanPhone);
}
