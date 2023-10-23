import {
  TOGGLE_DRAWER_OPEN,
  TOGGLE_DARK_MODE,
  DISPLAY_SNACKBAR,
  RESET_SNACKBAR,
} from "./uiTypes";

export function toggleDrawerOpen() {
  return {
    type: TOGGLE_DRAWER_OPEN,
  };
}

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  };
}

export function snackbarError(message) {
  return {
    type: DISPLAY_SNACKBAR,
    message,
    snackbarType: "error",
  };
}

export function resetSnackbar() {
  return {
    type: RESET_SNACKBAR,
  };
}

export function snackbarSuccess(message) {
  return {
    type: DISPLAY_SNACKBAR,
    message,
    snackbarType: "success",
  };
}
