import { useRef, useEffect } from 'react';

type TSetIsOpen = (isOpen: boolean) => void;

export const useClickOutside = (isOpen: boolean, setIsOpen: TSetIsOpen) => {
  const buttonElement = useRef<HTMLDivElement>(null);
  const dropdownElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const closeDropdown = (e: Event): void => {
      const target = e.target as HTMLDivElement;
      debugger;
      if (
        dropdownElement.current &&
        !dropdownElement.current.contains(target) &&
        buttonElement.current &&
        !buttonElement.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      debugger;
      document.addEventListener('click', closeDropdown, true);
    }
    return () => {
      document.removeEventListener('click', closeDropdown, true);
    };
  }, [isOpen, setIsOpen]);
  return { buttonElement, dropdownElement };
};
