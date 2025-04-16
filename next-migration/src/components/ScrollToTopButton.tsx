"use client";

import { IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <IconButton
          aria-label="Scroll to top"
          position="fixed"
          bottom="20px"
          right="20px"
          borderRadius="full"
          bg="teal.500"
          color="white"
          _hover={{ bg: 'teal.600' }}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </IconButton>
      )}
    </>
  );
};

export default ScrollToTopButton; 