// ✨ Modern SaaS Palette — Electric Violet + Sunset Coral

export const mainPalette = {
  primary: "#C057F3", // Electric Violet (Primary Brand Color)
  secondary: '#f9fafb',
  error: "#FF6A88", // Sunset Coral (Warm Accent / Error tone)
};

export const buttonPalette = {
  secondary: {
    outline: {
      bg: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      border: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      fg: { normal: "#1C1C1C", hover: "#0F0F0F", focus: "#7A7A7A" },
    },
    default: {
      bg: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      border: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      fg: { normal: "#1C1C1C", hover: "#0F0F0F", focus: "#7A7A7A" },
    },
    bare: {
      bg: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      border: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      fg: { normal: "#1C1C1C", hover: "#0F0F0F", focus: "#7A7A7A" },
    },
    ghost: {
      bg: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      border: { normal: "#FFFFFF", hover: "#FFFFFF", focus: "#FFFFFF" },
      fg: { normal: "#1C1C1C", hover: "#0F0F0F", focus: "#7A7A7A" },
    },
  },
  primary: {
    default: {
      bg: {
        normal: "#C057F3",
        hover: "#D46CFF",
        focus: "#B44BE5",
      },
      border: {
        normal: "#C057F3",
        hover: "#D46CFF",
        focus: "#B44BE5",
      },
      fg: {
        normal: "#FFFFFF",
        hover: "#FFFFFF",
        focus: "#FFFFFF",
      },
    },
    outline: {
      bg: {
        normal: "transparent",
        hover: "rgba(192, 87, 243, 0.08)",
        focus: "rgba(192, 87, 243, 0.16)",
      },
      border: {
        normal: "#C057F3",
        hover: "#D46CFF",
        focus: "#B44BE5",
      },
      fg: {
        normal: "#C057F3",
        hover: "#B44BE5",
        focus: "#A843E0",
      },
    },
    bare: {
      bg: {
        normal: "transparent",
        hover: "rgba(192, 87, 243, 0.08)",
        focus: "rgba(192, 87, 243, 0.16)",
      },
      border: {
        normal: "transparent",
        hover: "transparent",
        focus: "transparent",
      },
      fg: {
        normal: "#C057F3",
        hover: "#A843E0",
        focus: "#8B3BC0",
      },
    },
    ghost: {
      bg: {
        normal: "rgba(192, 87, 243, 0.08)",
        hover: "rgba(192, 87, 243, 0.16)",
        focus: "rgba(192, 87, 243, 0.24)",
      },
      border: {
        normal: "rgba(192, 87, 243, 0.08)",
        hover: "rgba(192, 87, 243, 0.16)",
        focus: "rgba(192, 87, 243, 0.24)",
      },
      fg: {
        normal: "#C057F3",
        hover: "#A843E0",
        focus: "#8B3BC0",
      },
    },
  },

  destructive: {
    default: {
      bg: {
        normal: "#FF6A88",
        hover: "#FF5675",
        focus: "#E95070",
      },
      border: {
        normal: "#FF6A88",
        hover: "#FF5675",
        focus: "#E95070",
      },
      fg: {
        normal: "#FFFFFF",
        hover: "#FFFFFF",
        focus: "#FFFFFF",
      },
    },
    outline: {
      bg: {
        normal: "transparent",
        hover: "#FF6A88",
        focus: "#FF5675",
      },
      border: {
        normal: "#FF6A88",
        hover: "#FF5675",
        focus: "#E95070",
      },
      fg: {
        normal: "#FF6A88",
        hover: "#FFFFFF",
        focus: "#FFFFFF",
      },
    },
    bare: {
      bg: {
        normal: "transparent",
        hover: "rgba(255, 106, 136, 0.08)",
        focus: "rgba(255, 106, 136, 0.16)",
      },
      border: {
        normal: "transparent",
        hover: "transparent",
        focus: "transparent",
      },
      fg: {
        normal: "#FF6A88",
        hover: "#FF5675",
        focus: "#E95070",
      },
    },
    ghost: {
      bg: {
        normal: "rgba(255, 106, 136, 0.08)",
        hover: "rgba(255, 106, 136, 0.16)",
        focus: "rgba(255, 106, 136, 0.24)",
      },
      border: {
        normal: "rgba(255, 106, 136, 0.08)",
        hover: "rgba(255, 106, 136, 0.16)",
        focus: "rgba(255, 106, 136, 0.24)",
      },
      fg: {
        normal: "#FF6A88",
        hover: "#FF5675",
        focus: "#E95070",
      },
    },
  },
};

export const priorityColors = {
  high: mainPalette.error,
  medium: mainPalette.primary,
  low: "#FFC857",
};

export const statusColors = {
  primary: {
    main: "#C057F3",
    bg: "rgba(192, 87, 243, 0.15)",
    border: "rgba(192, 87, 243, 0.3)",
  },
  success: {
    main: "#3cd46fff",
    bg: "rgba(67, 233, 123, 0.15)",
    border: "rgba(67, 233, 123, 0.3)",
  },
  error: {
    main: "#FF6A88",
    bg: "rgba(255, 106, 136, 0.15)",
    border: "rgba(255, 106, 136, 0.3)",
  },
  warning: {
    main: "#FFB178",
    bg: "rgba(255, 177, 120, 0.18)",
    border: "rgba(255, 177, 120, 0.3)",
  },
  info: {
    main: "#A76CFF",
    bg: "rgba(167, 108, 255, 0.15)",
    border: "rgba(167, 108, 255, 0.3)",
  },
  neutral: {
    main: "#4B4B57",
    bg: "rgba(75, 75, 87, 0.12)",
    border: "rgba(75, 75, 87, 0.25)",
  },
};

export const fgPalette = {
  primary: "hsla(0, 0%, 5%, 1.00)",
  secondary: "hsla(0, 0%, 30%, 1.00)",
  tertiary: "hsla(0, 0%, 60%, 1.00)",
  theme: mainPalette.primary,
  disabled: "hsla(0, 0%, 70%, 1.00)",
};

export const bgPalette = {
  primary: "hsla(0, 0%, 90%, 1.00)",
  secondary: "hsla(0, 0%, 95%, 1.00)",
  tertiary: "hsla(0, 0%, 100%, 1.00)",
};

export const borderPalette = {
  primary: "hsla(0, 0%, 85%, 1.00)",
  secondary: "hsla(0, 0%, 90%, 1.00)",
  tertiary: "hsla(0, 0%, 95%, 1.00)",
};

export const inputPalette = {
  outlined: {
    default: {
      fg: fgPalette.primary,
      placeholder: fgPalette.secondary,
      bg: "transparent",
      border: borderPalette.secondary,
    },
    error: {
      fg: "#FF6A88",
      placeholder: "#FF8FA6",
      bg: "rgba(255, 106, 136, 0.15)",
      border: "#FF6A88",
    },
    disabled: {
      fg: fgPalette.disabled,
      placeholder: fgPalette.disabled,
      bg: "transparent",
      border: borderPalette.secondary,
    },
  },
  filled: {
    default: {
      fg: fgPalette.primary,
      placeholder: fgPalette.secondary,
      bg: bgPalette.tertiary,
      border: borderPalette.secondary,
    },
    error: {
      fg: "#FF6A88",
      placeholder: "#FF8FA6",
      bg: "rgba(255, 106, 136, 0.15)",
      border: "#FF6A88",
    },
    disabled: {
      fg: fgPalette.disabled,
      placeholder: fgPalette.disabled,
      bg: bgPalette.tertiary,
      border: borderPalette.secondary,
    },
  },
};

export const menuPalette = {
  bg: bgPalette.tertiary,
  fg: fgPalette.secondary,
  border: borderPalette.secondary,
};

export const menuItemPalette = {
  default: {
    bg: bgPalette.tertiary,
    fg: fgPalette.secondary,
  },
  selected: {
    bg: mainPalette.primary,
    fg: "#ffffff",
  },
  hover: {
    bg: mainPalette.primary,
    fg: "#FFFFFF",
  },
};

export const tablePalette = {
  cell: {
    header: {
      bg: {
        normal: bgPalette.secondary,
        hover: bgPalette.secondary,
      },
      fg: {
        normal: fgPalette.secondary,
      },
    },
    body: {
      bg: {
        normal: bgPalette.tertiary,
        hover: bgPalette.tertiary,
      },
      fg: {
        normal: fgPalette.primary,
      },
    },
  },
};
