import {
  mainPalette,
  borderPalette,
  buttonPalette,
  fgPalette,
  inputPalette,
  menuItemPalette,
  menuPalette,
  bgPalette,
  tablePalette,
  statusColors,
} from "../constants/colors";
import {
  cardRadius,
  inputHeight,
  inputRadius,
  pad,
  space,
} from "../constants/dimensions";
import { fontSize, fontFamily } from "../constants/typography";
import { Box, createTheme, responsiveFontSizes } from "@mui/material";
import { CaretDownIcon } from "@phosphor-icons/react";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: mainPalette.primary,
    },
    secondary: {
      main: mainPalette.secondary
    },
    error: {
      main: mainPalette.error,
    },
    base: {
      main: bgPalette.tertiary,
      light: bgPalette.secondary,
      dark: bgPalette.primary,
      customMain: fgPalette.secondary,
      customDark: fgPalette.primary
    }
  },
  typography: {
    fontFamily: fontFamily.primary,
    body1: {
      fontSize: fontSize.base,
    },
    body2: {
      fontSize: fontSize.caption,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: fontSize.base,
          color: fgPalette.primary,
        },
        body: {
          color: fgPalette.primary,
          fontSize: fontSize.base,
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "transparent !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          outline: "none",
          textTransform: "unset",
          minWidth: "fit-content",
          fontFamily: fontFamily.secondary,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.1), inset 0 1px 2px #ffffff8f",
          borderRadius: "0.7rem",
          fontWeight: 500,
          "&.round-full": {
            borderRadius: "999px",
          },
          "&.MuiButton-sizeLarge": {
            padding: "0.75rem 1.5rem",
            fontSize: "15px",
            lineHeight: 1,
            "& > *": {
              fontSize: "15px !important",
            },
          },
          "&.MuiButton-sizeLarge.icon": {
            padding: "0.75rem 0.75rem",
            lineHeight: 1,
          },
          "&.MuiButton-sizeMedium": {
            padding: "0.75rem 1.5rem",
            fontSize: "13px !important",
            lineHeight: 1,
            "& > *": {
              fontSize: "13px !important",
            },
          },
          "&.MuiButton-sizeMedium.icon": {
            padding: "0.75rem 0.75rem",
            lineHeight: 1,
          },
          "&.MuiButton-sizeSmall": {
            padding: "0.75rem 1.5rem",
            fontSize: "12px !important",
            lineHeight: 1,
            "& > *": {
              fontSize: "12px !important",
            },
          },
          "&.MuiButton-sizeSmall.icon": {
            padding: "0.75rem 0.75rem",
            lineHeight: 1,
          },
          "&.rect": {
            minWidth: "127px",
          },
          "&:hover": {
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.1), inset 0 1px 3px #ffffff",
          },
          "&.MuiButton-contained.MuiButton-colorPrimary": {
            border: `1px solid ${buttonPalette["primary"]["default"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["primary"]["default"]["bg"]["normal"],
            color: buttonPalette["primary"]["default"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["primary"]["default"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["primary"]["default"]["bg"]["hover"],
              color: buttonPalette["primary"]["default"]["fg"]["hover"],
            },
          },
          "&.MuiButton-text.MuiButton-colorPrimary": {
            border: `1px solid ${buttonPalette["primary"]["bare"]["border"]["normal"]}`,
            backgroundColor: buttonPalette["primary"]["bare"]["bg"]["normal"],
            color: buttonPalette["primary"]["bare"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["primary"]["bare"]["border"]["hover"]}`,
              backgroundColor: buttonPalette["primary"]["bare"]["bg"]["hover"],
              color: buttonPalette["primary"]["bare"]["fg"]["hover"],
            },
          },
          "&.MuiButton-outlined.MuiButton-colorPrimary": {
            border: `1px solid ${buttonPalette["primary"]["outline"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["primary"]["outline"]["bg"]["normal"],
            color: buttonPalette["primary"]["outline"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["primary"]["outline"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["primary"]["outline"]["bg"]["hover"],
              color: buttonPalette["primary"]["outline"]["fg"]["hover"],
            },
          },
          "&.MuiButton-colorPrimary.Mui-disabled": {
            border: `1px solid ${buttonPalette["primary"]["ghost"]["border"]["normal"]}`,
            backgroundColor: buttonPalette["primary"]["ghost"]["bg"]["normal"],
            color: buttonPalette["primary"]["ghost"]["fg"]["normal"],
          },
          "&.MuiButton-contained.MuiButton-colorSecondary": {
            border: `1px solid ${buttonPalette["secondary"]["default"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["secondary"]["default"]["bg"]["normal"],
            color: buttonPalette["secondary"]["default"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["secondary"]["default"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["secondary"]["default"]["bg"]["hover"],
              color: buttonPalette["secondary"]["default"]["fg"]["hover"],
            },
          },
          "&.MuiButton-text.MuiButton-colorSecondary": {
            border: `1px solid ${buttonPalette["secondary"]["bare"]["border"]["normal"]}`,
            backgroundColor: buttonPalette["secondary"]["bare"]["bg"]["normal"],
            color: buttonPalette["secondary"]["bare"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["secondary"]["bare"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["secondary"]["bare"]["bg"]["hover"],
              color: buttonPalette["secondary"]["bare"]["fg"]["hover"],
            },
          },
          "&.MuiButton-outlined.MuiButton-colorSecondary": {
            border: `1px solid ${buttonPalette["secondary"]["outline"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["secondary"]["outline"]["bg"]["normal"],
            color: buttonPalette["secondary"]["outline"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["secondary"]["outline"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["secondary"]["outline"]["bg"]["hover"],
              color: buttonPalette["secondary"]["outline"]["fg"]["hover"],
            },
          },
          "&.MuiButton-colorSecondary.Mui-disabled": {
            border: `1px solid ${buttonPalette["secondary"]["ghost"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["secondary"]["ghost"]["bg"]["normal"],
            color: buttonPalette["secondary"]["ghost"]["fg"]["normal"],
          },
          "&.MuiButton-colorSecondary": {
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px #ffffff",
          },
          "&.MuiButton-colorSecondary:hover": {
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1), inset 0 1px 2px #ffffff",
          },
          "&.MuiButton-colorSecondary.secondary": {
            backgroundColor: `${bgPalette.secondary} !important`,
            border: `1px solid ${bgPalette.secondary} !important`,
          },
          "&.MuiButton-contained.MuiButton-colorError": {
            border: `1px solid ${buttonPalette["destructive"]["default"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["destructive"]["default"]["bg"]["normal"],
            color: buttonPalette["destructive"]["default"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["destructive"]["default"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["destructive"]["default"]["bg"]["hover"],
              color: buttonPalette["destructive"]["default"]["fg"]["hover"],
            },
          },
          "&.MuiButton-text.MuiButton-colorError": {
            border: `1px solid ${buttonPalette["destructive"]["bare"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["destructive"]["bare"]["bg"]["normal"],
            color: buttonPalette["destructive"]["bare"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["destructive"]["bare"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["destructive"]["bare"]["bg"]["hover"],
              color: buttonPalette["destructive"]["bare"]["fg"]["hover"],
            },
          },
          "&.MuiButton-outlined.MuiButton-colorError": {
            border: `1px solid ${buttonPalette["destructive"]["outline"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["destructive"]["outline"]["bg"]["normal"],
            color: buttonPalette["destructive"]["outline"]["fg"]["normal"],
            "&:hover": {
              border: `1px solid ${buttonPalette["destructive"]["outline"]["border"]["hover"]}`,
              backgroundColor:
                buttonPalette["destructive"]["outline"]["bg"]["hover"],
              color: buttonPalette["destructive"]["outline"]["fg"]["hover"],
            },
          },
          "&.MuiButton-colorError.Mui-disabled": {
            border: `1px solid ${buttonPalette["destructive"]["ghost"]["border"]["normal"]}`,
            backgroundColor:
              buttonPalette["destructive"]["ghost"]["bg"]["normal"],
            color: buttonPalette["destructive"]["ghost"]["fg"]["normal"],
          },
          "&.MuiButton-loading": {
            "&.MuiButton-sizeMedium": {
              paddingRight: "31px !important",
            },
            "&.MuiButton-sizeLarge": {
              paddingRight: "31px !important",
            },
            "&.MuiButton-sizeSmall": {
              paddingRight: "28px !important",
            },
            "& .MuiButton-icon": {
              display: "none",
            },
            "& .MuiButton-loadingWrapper .MuiButton-loadingIndicator": {
              position: "absolute",
              right: 0,
              paddingRight: "8px",
              paddingLeft: "8px",
            },
          },
        },
      },
      defaultProps: {
        variant: "contained",
        loadingPosition: "end",
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: CaretDownIcon,
        variant: "filled",
      },
      styleOverrides: {
        root: {
          fontSize: fontSize.base,
          borderRadius: inputRadius.sm,
          boxSizing: "border-box",
          padding: "0px 12px",
          height: inputHeight,
        },
        outlined: {
          color: inputPalette["outlined"]["default"]["fg"],
          "& fieldset": {
            borderColor: inputPalette["outlined"]["default"]["border"],
          },
          "&.MuiSelect-root:hover fieldset": {
            color: inputPalette["outlined"]["default"]["fg"],
            borderColor: mainPalette.primary,
          },
          "&.MuiSelect-root.Mui-focused fieldset": {
            color: inputPalette["outlined"]["default"]["fg"],
            borderColor: mainPalette.primary,
            borderWidth: "1px",
          },
          "&.Mui-disabled": {
            color: inputPalette["outlined"]["disabled"]["fg"],
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: inputPalette["outlined"]["disabled"]["border"],
            },
          },
        },
        filled: {
          color: inputPalette["filled"]["default"]["fg"],
          backgroundColor: inputPalette["filled"]["default"]["bg"],
          "&:hover": {
            color: inputPalette["filled"]["default"]["fg"],
            backgroundColor: inputPalette["filled"]["default"]["bg"],
          },
          "&.Mui-focused": {
            color: inputPalette["filled"]["default"]["fg"],
            backgroundColor: inputPalette["filled"]["default"]["bg"],
            borderWidth: 0,
          },
          "&.Mui-disabled": {
            color: inputPalette["filled"]["disabled"]["fg"],
            backgroundColor: inputPalette["filled"]["disabled"]["bg"],
          },
        },
        icon: {
          color: inputPalette["filled"]["default"]["fg"],
          "&.Mui-disabled": {
            color: inputPalette["filled"]["disabled"]["fg"],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: fontSize.base,
          borderRadius: inputRadius.sm,
          boxSizing: "border-box",
          color: inputPalette["outlined"]["default"]["fg"],
          height: inputHeight,
          "&.MuiInputBase-multiline": {
            height: "auto",
            padding: "18px",
          },
          "& fieldset": {
            borderColor: inputPalette["outlined"]["default"]["border"],
          },
          "&.MuiOutlinedInput-root:hover fieldset": {
            borderColor: mainPalette.primary,
          },
          "&.MuiOutlinedInput-root.Mui-focused fieldset": {
            borderColor: mainPalette.primary,
            borderWidth: "1px",
          },
          "&.Mui-error": {
            backgroundColor: inputPalette.outlined.error.bg,
            color: inputPalette.outlined.error.fg,
          },
          "&.Mui-error fieldset.MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${inputPalette.outlined.error.border}`,
          },
          "&.Mui-disabled": {
            color: inputPalette["outlined"]["disabled"]["fg"],
            backgroundColor: inputPalette["outlined"]["disabled"]["bg"],
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: inputPalette["outlined"]["disabled"]["border"],
            },
            "& .MuiInputBase-input": {
              color: inputPalette["outlined"]["disabled"]["fg"],
              "-webkit-text-fill-color": {
                color: inputPalette["outlined"]["disabled"]["fg"],
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: inputPalette["outlined"]["disabled"]["placeholder"],
              opacity: 1,
            },
          },
        },
        input: {
          background: "transparent",
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          fontSize: fontSize.base,
          borderRadius: inputRadius.sm,
          boxSizing: "border-box",
          color: inputPalette["filled"]["default"]["fg"],
          padding: "0px 12px",
          height: inputHeight,
          "&.MuiInputBase-multiline": {
            height: "auto",
            padding: "18px",
          },
          backgroundColor: inputPalette["filled"]["default"]["bg"],
          border: `1px solid ${inputPalette["filled"]["default"]["border"]}`,
          "&:hover": {
            borderColor: mainPalette.primary,
            backgroundColor: inputPalette["filled"]["default"]["bg"],
          },
          "&.Mui-focused": {
            borderColor: mainPalette.primary,
            borderWidth: "1px",
            backgroundColor: inputPalette["filled"]["default"]["bg"],
          },
          "&.Mui-error": {
            border: `1px solid ${inputPalette.outlined.error.border}`,
            backgroundColor: inputPalette.filled.error.bg,
            color: inputPalette.filled.error.fg,
          },
          "&.Mui-disabled": {
            color: inputPalette["filled"]["disabled"]["fg"],
            backgroundColor: inputPalette["filled"]["disabled"]["bg"],
            border: `1px solid ${inputPalette["filled"]["disabled"]["border"]}`,
            "& .MuiInputBase-input": {
              color: inputPalette["filled"]["disabled"]["fg"],
              "-webkit-text-fill-color": {
                color: inputPalette["filled"]["disabled"]["fg"],
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: inputPalette["filled"]["disabled"]["placeholder"],
              opacity: 1,
            },
          },
        },
        input: {
          background: "transparent !important",
          margin: "0 !important",
          padding: "0 !important",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          "&.MuiCheckbox-root": {
            color: inputPalette.outlined.default.border,
          },
          "&.Mui-checked": {
            color: mainPalette.primary,
          },
          padding: 0,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          color: inputPalette.outlined.default.border,
          "&.Mui-checked": {
            color: mainPalette.primary,
          },
          "&:hover": {
            color: mainPalette.primary,
          },
          padding: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          gap: space.md,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "&.MuiFormControlLabel-root": {
            margin: 0,
            "& .MuiFormControlLabel-label": {
              fontWeight: 400,
              lineHeight: 1,
              marginLeft: space.md,
              color: fgPalette.primary,
              fontSize: "13px",
            },
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          "&.MuiFormGroup-root": {
            gap: space.lg,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          fontWeight: 500,
          color: fgPalette.primary,
          "&.secondary": {
            color: "#73757C",
          },
          "& .MuiFormLabel-asterisk": {
            color: "#EB5757",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          fontWeight: 600,
          color: fgPalette.primary,
          "&.secondary": {
            color: fgPalette.secondary,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
          color: fgPalette.primary,
          fontWeight: 500,
          "&.center": {
            textAlign: "center",
          },
          "&.Mui-error": {
            fontWeight: 600,
            color: inputPalette.outlined.error.fg,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          "& .MuiMenu-paper": {
            backgroundColor: menuPalette.bg,
            border: `1px solid ${menuPalette.border}`,
            color: fgPalette.primary,
            borderRadius: cardRadius.md,
            boxShadow: "none",
          },
          "& .MuiMenu-list.MuiList-padding.MuiList-root": {
            padding: 0,
          },
          "& .MuiBackdrop-root.MuiBackdrop-invisible.MuiModal-backdrop": {
            backdropFilter: "none",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: fontSize.base,
          backgroundColor: menuItemPalette["default"]["bg"],
          color: menuItemPalette["default"]["fg"],
          padding: "14px 18px",
          borderBottom: "none",
          "&:hover": {
            backgroundColor: menuItemPalette["hover"]["bg"],
            color: menuItemPalette["hover"]["fg"],
          },
          "&.Mui-selected": {
            backgroundColor: menuItemPalette["selected"]["bg"],
            color: menuItemPalette["selected"]["fg"],
          },
          "&.Mui-selected:hover": {
            backgroundColor: menuItemPalette["hover"]["bg"],
            color: menuItemPalette["hover"]["fg"],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: bgPalette.secondary,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.1), inset 0 1px 2px #ffffff",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: cardRadius.xl,
          position: "relative",
          "&.visible": {
            overflow: "visible",
          },
          "&.fade": {
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "40px",
              height: "100%",
              pointerEvents: "none",
              zIndex: 10,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: "40px",
              height: "100%",
              pointerEvents: "none",
              zIndex: 10,
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: `${pad.md} !important`,
          margin: 0,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        clickable: false,
      },
      styleOverrides: {
        root: {
          width: "fit-content",
          height: "22px",
          lineHeight: 1,
          fontWeight: 600,
          borderRadius: "6px",
          "& .MuiChip-icon": {
            fontSize: "18px",
            lineHeight: 1,
          },
          "&.MuiChip-outlined": {
            border: "none",
          },

          // SUCCESS
          [`&.MuiChip-colorSuccess`]: {
            backgroundColor: statusColors.success.bg,
            color: statusColors.success.main,
          },
          [`&.MuiChip-colorSuccess.MuiChip-outlined`]: {
            backgroundColor: "rgba(0, 149, 18, 0.08)",
            color: statusColors.success.main,
            border: `1px solid ${statusColors.success.border}`,
          },

          // ERROR
          [`&.MuiChip-colorError`]: {
            backgroundColor: statusColors.error.bg,
            color: statusColors.error.main,
          },
          [`&.MuiChip-colorError.MuiChip-outlined`]: {
            backgroundColor: "rgba(234, 75, 72, 0.08)",
            color: statusColors.error.main,
            border: `1px solid ${statusColors.error.border}`,
          },

          // WARNING
          [`&.MuiChip-colorWarning`]: {
            backgroundColor: statusColors.warning.bg,
            color: statusColors.warning.main,
          },
          [`&.MuiChip-colorWarning.MuiChip-outlined`]: {
            backgroundColor: "rgba(255, 177, 120, 0.1)",
            color: statusColors.warning.main,
            border: `1px solid ${statusColors.warning.border}`,
          },

          // INFO
          [`&.MuiChip-colorInfo`]: {
            backgroundColor: statusColors.info.bg,
            color: statusColors.info.main,
          },
          [`&.MuiChip-colorInfo.MuiChip-outlined`]: {
            backgroundColor: "rgba(21, 101, 192, 0.08)",
            color: statusColors.info.main,
            border: `1px solid ${statusColors.info.border}`,
          },

          // PRIMARY
          [`&.MuiChip-colorPrimary`]: {
            backgroundColor: statusColors.primary.bg,
            color: statusColors.primary.main,
          },
          [`&.MuiChip-colorPrimary.MuiChip-outlined`]: {
            backgroundColor: "rgba(78, 168, 222, 0.08)",
            color: statusColors.primary.main,
            border: `1px solid ${statusColors.primary.border}`,
          },

          // NEUTRAL
          [`&.MuiChip-colorDefault`]: {
            backgroundColor: statusColors.neutral.bg,
            color: statusColors.neutral.main,
          },
          [`&.MuiChip-colorDefault.MuiChip-outlined`]: {
            backgroundColor: "rgba(68, 74, 87, 0.08)",
            color: statusColors.neutral.main,
            border: `1px solid ${statusColors.neutral.border}`,
          },
        },
      },
    },
    MuiTableContainer: {
      defaultProps: {
        component: Box,
      },
      styleOverrides: {
        root: {
          margin: 0,
          borderRadius: cardRadius.lg,
          isolation: "isolate",
          zIndex: 0,
          boxShadow: "0 0 4px rgba(61, 61, 61, 0.1)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            boxShadow: "inset 0 1px 2px #ffffff",
            pointerEvents: "none",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: "none",
          whiteSpace: "nowrap",
          padding: `12px ${pad.md}`,
        },
        body: {
          backgroundColor: tablePalette.cell.body.bg.normal,
          color: tablePalette.cell.body.fg.normal,
          borderBottom: `1px solid ${borderPalette.tertiary}`,
        },
        head: {
          padding: `14px ${pad.md}`,
          backgroundColor: tablePalette.cell.header.bg.normal,
          borderBottom: `1px solid ${borderPalette.secondary}`,
          lineHeight: 1,
          fontSize: "10px",
          whiteSpace: "nowrap",
          textTransform: "uppercase",
          color: tablePalette.cell.header.fg.normal,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-of-type td, &:last-of-type th": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderBottomWidth: "1px",
          borderBottomColor: borderPalette.secondary,
          "&.dotted": {
            borderStyle: "solid",
          },
          "&.thin": {
            borderBottomWidth: "1px",
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "hsla(0, 0%, 65%, 0.60)",
          backdropFilter: "none",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: cardRadius.lg,
          backgroundColor: "rgb(218, 218, 218)",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: bgPalette.tertiary,
          padding: pad.md,
          borderRadius: cardRadius.md,
          maxWidth: "220px",
          color: fgPalette.primary,
          fontSize: fontSize.caption,
        },
        arrow: {
          color: bgPalette.tertiary,
        },
      },
      defaultProps: {
        arrow: true,
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
