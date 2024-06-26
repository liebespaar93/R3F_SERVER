/**
 * @type keycode
 * @note 키 종류에 대한 코드번호를 입력해 주어야 한다
 * @url https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 * @url https://unicodelookup.com/
 */
type keycodeWeb = {
  /**
   * @note ASCII key
   */
  Digits1: 49,
  Digits2: 50,
  Digits3: 51,
  Digits4: 52,
  Digits5: 53,
  Digits6: 54,
  Digits7: 55,
  Digits8: 56,
  Digits9: 57,
  Digits0: 48,
  KeyA: 65,
  KeyB: 66,
  KeyC: 67,
  KeyD: 68,
  KeyE: 69,
  KeyF: 70,
  KeyG: 71,
  KeyH: 72,
  KeyI: 73,
  KeyJ: 74,
  KeyK: 75,
  KeyL: 76,
  KeyM: 77,
  KeyN: 78,
  KeyO: 79,
  KeyP: 80,
  KeyQ: 81,
  KeyR: 82,
  KeyS: 83,
  KeyT: 84,
  KeyU: 85,
  KeyV: 86,
  KeyW: 87,
  KeyX: 88,
  KeyY: 89,
  KeyZ: 90,

  Comma: 188,
  Period: 190,
  Semicolon: 186,
  Quote: 222,
  BracketLeft: 219,
  BracketRight: 221,
  Backquote: 192,
  Backslash: 220,
  Minus: 189,
  Equal: 187,
  IntlRo: 193,
  IntlYen: 255,

  /**
   * @note Non-printable key
   */
  AltLeft: 18,
  AltRight: 18,
  CapsLock: 20,
  ControlLeft: 17,
  ControlRight: 17,
  MetaLeft: 91,
  MetaRight: 92,
  ShiftLeft: 16,
  ShiftRight: 16,

  ContextMenu: 93,
  Enter: 13,
  Space: 32,
  Tab: 9,
  Delete: 46,
  End: 35,
  Help: undefined,
  Home: 36,
  Insert: 45,
  PageDown: 22,
  PageUp: 21,
  ArrowDown: 28,
  ArrowLeft: 25,
  ArrowRight: 27,
  ArrowUp: 26,
  Escape: 27,
  PrintScreen: 44,
  ScrollLock: 145,
  Pause: 19,

  /**
   * @note Funtionkey
   */
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  F13: 124,
  F14: 125,
  F15: 126,
  F16: 127,
  F17: 128,
  F18: 129,
  F19: 130,
  F20: 131,
  F21: 132,
  F22: 133,
  F23: 134,
  F24: 135,

  /**
   * Numpad Keys
   */
  NumLock: 144,
  Numpad0: 96,
  Numpad1: 97,
  Numpad2: 98,
  Numpad3: 99,
  Numpad4: 100,
  Numpad5: 101,
  Numpad6: 102,
  Numpad7: 103,
  Numpad8: 104,
  Numpad9: 105,
  NumpadAdd: 107,
  NumpadComma: 194,
  NumpadDecimal: 110,
  NumpadDivide: 111,
  NumpadEnter: 13,
  NumpadEqual: 12,
  NumpadMultiply: 106,
  NumpadSubtract: 109,

  /**
   * Numberpad NumLock
   */
  Numpad0_Insert: 45,
  Numpad1_End: 35,
  Numpad2_ArrowDown: 40,
  Numpad3_PageDown: 34,
  Numpad4_ArrowLeft: 37,
  Numpad5_Lock: 12,
  Numpad6_ArrowRight: 39,
  Numpad7_Home: 36,
  Numpad8_ArrowUp: 38,
  Numpad9_PageUp: 33,
  NumpadDeciaml_Delete: 46,
}


/**
 * mac의 시스템 keycode 입니다
 */
type mac_sys_keycode = {
  // MAC KEYCODE //
  //== ALPHABET LEFT ==//
  KEY_A: 0,
  KEY_S: 1,
  KEY_D: 2,
  KEY_F: 3,
  KEY_H: 4,
  KEY_G: 5,
  KEY_Z: 6,
  KEY_X: 7,
  KEY_C: 8,
  KEY_V: 9,
  //KEY_ : 10,
  KEY_B: 11,
  KEY_Q: 12,
  KEY_W: 13,
  KEY_E: 14,
  KEY_R: 15,
  KEY_Y: 16,
  KEY_T: 17,

  //== NUMBER ==//
  KEY_1: 18,
  KEY_2: 19,
  KEY_3: 20,
  KEY_4: 21,
  KEY_6: 22,
  KEY_5: 23,
  KEY_PLUS: 24,
  KEY_9: 25,
  KEY_7: 26,
  KEY_MINUS: 27,
  KEY_8: 28,
  KEY_0: 29,

  //== ALPHABET LEFT ==//
  KEY_R_BRAKET: 30,
  KEY_O: 31,
  KEY_U: 32,
  KEY_L_BRAKET: 33,
  KEY_I: 34,
  KEY_P: 35,
  KEY_RETURN: 36,
  KEY_L: 37,
  KEY_J: 38,
  KEY_SQUOTES: 39,
  KEY_K: 40,
  KEY_BACKSLASH: 42,
  KEY_COLON: 41,
  KEY_L_A_BRAKET: 43,
  KEY_SLASH: 44,
  KEY_N: 45,
  KEY_M: 46,
  KEY_R_A_BRAKET: 47,

  //== OUTSIZE ==//
  KEY_TAB: 48,
  KEY_SPACE: 49,
  KEY_TILDE: 50,
  KEY_DEL: 51,
  //KEY_      :52,
  KEY_ESC: 53,
  //KEY_      :54,
  KEY_COMMAND: 55,
  //KEY_      :56,
  KEY_L_SHIFT: 57,
  KEY_L_OPTION: 58,
  KEY_CONTROL: 59,
  KEY_R_SHIFT: 60,
  KEY_R_OPTION: 61,
  KEY_FN: 63,

  //== NUMBER PAD ==//
  KEY_P_DOT: 65,
  //KEY_     : 66,
  KEY_P_ASTERISK: 67,
  //KEY_     : 68,
  KEY_P_PLUS: 69,
  //KEY_     : 70,
  KEY_P_CLEAR: 71,
  //KEY_     : 72,
  //KEY_     : 73,
  //KEY_     : 74,
  KEY_P_SLASH: 75,
  KEY_P_ENTER: 76,
  //KEY_     : 77,
  KEY_P_MINUS: 78,
  //KEY_F18  : 79,
  //KEY_F19  : 80,
  KEY_P_EQUAL: 81,
  KEY_P_0: 82,
  KEY_P_1: 83,
  KEY_P_2: 84,
  KEY_P_3: 85,
  KEY_P_4: 86,
  KEY_P_5: 87,
  KEY_P_6: 88,
  KEY_P_7: 89,
  //KEY_F20  : 90,
  KEY_P_8: 91,
  KEY_P_9: 92,

  //== F KEY ==//
  KEY_F17: 64,
  KEY_F18: 79,
  KEY_F19: 80,
  KEY_F20: 90,

  KEY_F5: 96,
  KEY_F6: 97,
  KEY_F7: 98,
  KEY_F3: 99,
  KEY_F8: 100,
  KEY_F9: 101,
  //KEY_ : 102,
  KEY_F11: 103,
  //KEY_ : 104,
  KEY_13: 105,
  KEY_F16: 106,
  KEY_F14: 107,
  //KEY_ : 108,
  KEY_F10: 109,
  KEY_F12: 111,
  //KEY_ : 112,
  KEY_F15: 113,
  //KEY_ : 114,
  KEY_HOME: 115,
  KEY_PAGE_UP: 116,
  KEY_DELETE: 117,
  KEY_F4: 118,
  KEY_END: 119,
  KEY_F2: 120,
  KEY_PAGE_DOWN: 121,
  KEY_F1: 122,

  //== ARROW KEYS ==//
  KEY_ARROW_L: 123,
  KEY_ARROW_R: 124,
  KEY_ARROW_D: 125,
  KEY_ARROW_U: 126,

  //== MORE ==//
  KEY_NEW_L_CONTROL: 256,
  KEY_NEW_L_SHIFT: 257,
  KEY_NEW_R_SHIFT: 258,
  KEY_NEW_L_COMMAND: 259,
  KEY_NEW_R_COMMAND: 260,
  KEY_NEW_L_OPTION: 261,
  KEY_NEW_R_OPTION: 262,
  KEY_NEW_R_CONTROL: 269,
  KEY_NEW_CAPS_LOCK: 272,
  KEY_NEW_FN: 279,
}


type mousecode =
  {
    MOUSE_LEFT_BUTTON: 1,
    MOUSE_RIGHT_BUTTON: 2,
    MOUSE_SCROLL_BUTTON: 3,
    MOUSE_SCROLL_UP: 4,
    MOUSE_SCROLL_DOWN: 5,
  };
