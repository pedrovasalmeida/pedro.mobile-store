export const colorsLight = {
  defaultText: 'text-zinc-900',
  defaultBackground: 'bg-zinc-50',
  defaultBorder: 'border-zinc-900',
};

export const colorsDark = {
  defaultText: 'text-zinc-50',
  defaultBackground: 'bg-zinc-900',
  defaultBorder: 'border-zinc-50',
};

const isDarkMode = true;

export const colors = isDarkMode ? colorsDark : colorsLight;
