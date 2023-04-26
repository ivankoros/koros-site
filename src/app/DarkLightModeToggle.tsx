import React from 'react';
import useColorMode from './hooks/useColorMode';

function DarkLightModeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="h-10 w-24">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        />
        <div className="w-14 h-7 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all duration-150 dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default DarkLightModeToggle;
