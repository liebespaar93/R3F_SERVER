"use client"

import { Toggle } from "@radix-ui/react-toggle";
import { useEffect, useLayoutEffect, useState } from "react";
import { TiStarHalfOutline, TiWeatherPartlySunny } from "react-icons/ti";


function getTheme() {
  const persistedColorPreference = window.localStorage.getItem('color-theme');
  if (persistedColorPreference) {
    return persistedColorPreference;
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    return 'dark';
  if (window.matchMedia('(prefers-color-scheme: light)').matches)
    return 'light'
  return 'dark'
}

export function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState("")

  const handleToggle = () => {
    if (isDarkMode == 'dark')
      setIsDarkMode('light')
    else
      setIsDarkMode('dark')
  };

  useLayoutEffect(() => {
    if (!isDarkMode)
      setIsDarkMode(getTheme());
    if (isDarkMode == 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      window.localStorage.setItem('color-theme', 'light');
    }
    if (isDarkMode == 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('color-theme', 'dark');
    }
  },[isDarkMode])

  return (
    <Toggle className="m-auto size-6" onClick={handleToggle}>
      {isDarkMode == 'dark' ?
        <TiStarHalfOutline className="text-2xl" /> :
        <TiWeatherPartlySunny />
      }
    </Toggle>
  );
};