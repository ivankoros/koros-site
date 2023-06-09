import React from 'react';
import useColorMode from '../hooks/useColorMode';

function DarkLightModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        />
        <div className="w-16 h-8 bg-gray-200 rounded-full peer dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[9px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all duration-150 dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default DarkLightModeToggle;
