import { useEffect, useState } from "react";

export default function useDevice() {
  const [device, SetDevice] = useState({
    isTablet: false,
    isDesktop: true,
    isPhone: false,
  });

  useEffect(() => {
    const handleChangeSize = () => {
      SetDevice({
        isDesktop: window.innerWidth > 1024,
        isTablet: window.innerWidth <= 1024 && window.innerWidth > 768,
        isPhone: window.innerWidth <= 768,
      });
    };

    // instantly checking the size of device
    handleChangeSize();

    window.addEventListener("resize", handleChangeSize);
    return () => window.removeEventListener("resize", handleChangeSize);
  }, []);

  return {
    isTablet: device.isTablet,
    isDesktop: device.isDesktop,
    isPhone: device.isPhone,
  };
}
