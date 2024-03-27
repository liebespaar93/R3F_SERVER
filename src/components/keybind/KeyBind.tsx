import styles from '@/components/keybind/keybind.module.css'
import { noteClientLog } from '@/lib/log/client_logger'
import { useState } from 'react'

type keybind = {
  keycode: string[],
  type: string,
  key: string[]
}

export function KeyCap({ keycode }: { keycode: string }) {

  const KeyBind = [
    { keycode: ["27"], type: styles.key_word, key: ['esc'] },
    { keycode: ["112"], type: styles.key_fn, key: ['F1'] },
    { keycode: ["113"], type: styles.key_fn, key: ['F2'] },
    { keycode: ["114"], type: styles.key_fn, key: ['F3'] },
    { keycode: ["115"], type: styles.key_fn, key: ['F4'] },
    { keycode: ["116"], type: styles.key_fn, key: ['F5'] },
    { keycode: ["117"], type: styles.key_fn, key: ['F6'] },
    { keycode: ["118"], type: styles.key_fn, key: ['F7'] },
    { keycode: ["119"], type: styles.key_fn, key: ['F8'] },
    { keycode: ["120"], type: styles.key_fn, key: ['F9'] },
    { keycode: ["121"], type: styles.key_fn, key: ['F10'] },
    { keycode: ["122"], type: styles.key_fn, key: ['F11'] },
    { keycode: ["123"], type: styles.key_fn, key: ['F12'] },
    { keycode: ["n/a"], type: styles.key_word, key: ['pwr'] },
    { keycode: ["192"], type: styles.key_double, key: ['~', '\`'] },
    { keycode: ["49"], type: styles.key_double, key: ['!', '1'] },
    { keycode: ["50"], type: styles.key_double, key: ['#', '2'] },
    { keycode: ["51"], type: styles.key_double, key: ['$', '3'] },
    { keycode: ["52"], type: styles.key_double, key: ['@', '4'] },
    { keycode: ["53"], type: styles.key_double, key: ['%', '5'] },
    { keycode: ["54"], type: styles.key_double, key: ['^', '6'] },
    { keycode: ["55"], type: styles.key_double, key: ['&', '7'] },
    { keycode: ["56"], type: styles.key_double, key: ['*', '8'] },
    { keycode: ["57"], type: styles.key_double, key: ['(', '9'] },
    { keycode: ["48"], type: styles.key_double, key: [')', '0'] },
    { keycode: ["189"], type: styles.key_double, key: ['—', '-'] },
    { keycode: ["187"], type: styles.key_double, key: ['+', '='] },
    { keycode: ["8"], type: [styles.key_bottom_right, styles.key_word, styles.key_w4].join(" "), key: ['delete'] },
    { keycode: ["192"], type: [styles.key_bottom_left, styles.key_word, styles.key_w4].join(" "), key: ['tab'] },
    { keycode: ["81"], type: styles.key_letter, key: ['Q'] },
    { keycode: ["87"], type: styles.key_letter, key: ['W'] },
    { keycode: ["69"], type: styles.key_letter, key: ['E'] },
    { keycode: ["82"], type: styles.key_letter, key: ['R'] },
    { keycode: ["84"], type: styles.key_letter, key: ['T'] },
    { keycode: ["89"], type: styles.key_letter, key: ['Y'] },
    { keycode: ["85"], type: styles.key_letter, key: ['U'] },
    { keycode: ["73"], type: styles.key_letter, key: ['I'] },
    { keycode: ["79"], type: styles.key_letter, key: ['O'] },
    { keycode: ["80"], type: styles.key_letter, key: ['P'] },
    { keycode: ["219"], type: styles.key_double, key: ['{', '['] },
    { keycode: ["221"], type: styles.key_double, key: ['}', ']'] },
    { keycode: ["220"], type: styles.key_double, key: ['|', '\\'] },
    { keycode: ["20"], type: [styles.key_bottom_left, styles.key_word, styles.key_w5].join(" "), key: ['caps lock'] },
    { keycode: ["65"], type: styles.key_letter, key: ['A'] },
    { keycode: ["83"], type: styles.key_letter, key: ['S'] },
    { keycode: ["68"], type: styles.key_letter, key: ['D'] },
    { keycode: ["70"], type: styles.key_letter, key: ['F'] },
    { keycode: ["71"], type: styles.key_letter, key: ['G'] },
    { keycode: ["72"], type: styles.key_letter, key: ['H'] },
    { keycode: ["74"], type: styles.key_letter, key: ['J'] },
    { keycode: ["75"], type: styles.key_letter, key: ['K'] },
    { keycode: ["76"], type: styles.key_letter, key: ['L'] },
    { keycode: ["186"], type: styles.key_double, key: [':', ';'] },
    { keycode: ["222"], type: styles.key_double, key: ['"', '\''] },
    { keycode: ["13"], type: [styles.key_bottom_right, styles.key_word, styles.key_w5].join(" "), key: ['return'] },
    { keycode: ["16"], type: [styles.key_bottom_left, styles.key_word, styles.key_w6].join(" "), key: ['shift'] },
    { keycode: ["90"], type: styles.key_letter, key: ['Z'] },
    { keycode: ["88"], type: styles.key_letter, key: ['X'] },
    { keycode: ["67"], type: styles.key_letter, key: ['C'] },
    { keycode: ["86"], type: styles.key_letter, key: ['V'] },
    { keycode: ["66"], type: styles.key_letter, key: ['B'] },
    { keycode: ["78"], type: styles.key_letter, key: ['N'] },
    { keycode: ["77"], type: styles.key_letter, key: ['M'] },
    { keycode: ["188"], type: styles.key_double, key: ['<', ','] },
    { keycode: ["190"], type: styles.key_double, key: ['>', '.'] },
    { keycode: ["191"], type: styles.key_double, key: ['?', '/'] },
    { keycode: ["16-R"], type: [styles.key_bottom_right, styles.key_word, styles.key_w6].join(" "), key: ['shift'] },
    { keycode: [""], type: [styles.key_bottom_left, styles.key_word].join(" "), key: ['fn'] },
    { keycode: ["17"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['control'] },
    { keycode: ["18"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['option'] },
    { keycode: ["91"], type: [styles.key_bottom_left, styles.key_word, styles.key_w3].join(" "), key: ['command'] },
    { keycode: ["32"], type: [styles.key_double, styles.key_letter, styles.key_space].join(" "), key: ['space'] },
    { keycode: ["93-R"], type: [styles.key_bottom_left, styles.key_word, styles.key_w3].join(" "), key: ['command'] },
    { keycode: ["18-R"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['option'] },
    { keycode: ["37"], type: styles.key_arrow, key: ['◀'] },
    { keycode: ["38"], type: styles.key_arrow, key: ['▲'] },
    { keycode: ["39"], type: styles.key_arrow, key: ['▶'] },
    { keycode: ["40"], type: styles.key_arrow, key: ['▼'] },
  ]

  const value: keybind | undefined = KeyBind.find((value, index) => {
    if (value.keycode.find((value) => value == keycode))
      return value;
    return;
  })

  if (!value)
    return <div></div>
  return (
    <div className={[styles.keyboard_row].join(" ")}>
      <div className={value.type} key-code={value.keycode}>
        {value.key.map((value, index) => <div key={index}>{value}</div>)}
      </div>
    </div>
  )
}

function KeyBindFunction() {
  const KeyBind = [
    { keycode: ["27"], type: styles.key_word, key: ['esc'] },
    { keycode: ["112"], type: styles.key_fn, key: ['F1'] },
    { keycode: ["113"], type: styles.key_fn, key: ['F2'] },
    { keycode: ["114"], type: styles.key_fn, key: ['F3'] },
    { keycode: ["115"], type: styles.key_fn, key: ['F4'] },
    { keycode: ["116"], type: styles.key_fn, key: ['F5'] },
    { keycode: ["117"], type: styles.key_fn, key: ['F6'] },
    { keycode: ["118"], type: styles.key_fn, key: ['F7'] },
    { keycode: ["119"], type: styles.key_fn, key: ['F8'] },
    { keycode: ["120"], type: styles.key_fn, key: ['F9'] },
    { keycode: ["121"], type: styles.key_fn, key: ['F10'] },
    { keycode: ["122"], type: styles.key_fn, key: ['F11'] },
    { keycode: ["123"], type: styles.key_fn, key: ['F12'] },
    { keycode: ["n/a"], type: styles.key_word, key: ['pwr'] },
  ]

  return (
    <div className={[styles.keyboard_row, styles.keyboard_row_h1].join(" ")}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}

function KeyBindNumberLine() {
  const KeyBind = [
    { keycode: ["192"], type: styles.key_double, key: ['~', '\`'] },
    { keycode: ["49"], type: styles.key_double, key: ['!', '1'] },
    { keycode: ["50"], type: styles.key_double, key: ['#', '2'] },
    { keycode: ["51"], type: styles.key_double, key: ['$', '3'] },
    { keycode: ["52"], type: styles.key_double, key: ['@', '4'] },
    { keycode: ["53"], type: styles.key_double, key: ['%', '5'] },
    { keycode: ["54"], type: styles.key_double, key: ['^', '6'] },
    { keycode: ["55"], type: styles.key_double, key: ['&', '7'] },
    { keycode: ["56"], type: styles.key_double, key: ['*', '8'] },
    { keycode: ["57"], type: styles.key_double, key: ['(', '9'] },
    { keycode: ["48"], type: styles.key_double, key: [')', '0'] },
    { keycode: ["189"], type: styles.key_double, key: ['—', '-'] },
    { keycode: ["187"], type: styles.key_double, key: ['+', '='] },
    { keycode: ["8"], type: [styles.key_bottom_right, styles.key_word, styles.key_w4].join(" "), key: ['delete'] }
  ]

  return (
    <div className={styles.keyboard_row}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}
function KeyBindTapLine() {
  const KeyBind = [
    { keycode: ["192"], type: [styles.key_bottom_left, styles.key_word, styles.key_w4].join(" "), key: ['tab'] },
    { keycode: ["81"], type: styles.key_letter, key: ['Q'] },
    { keycode: ["87"], type: styles.key_letter, key: ['W'] },
    { keycode: ["69"], type: styles.key_letter, key: ['E'] },
    { keycode: ["82"], type: styles.key_letter, key: ['R'] },
    { keycode: ["84"], type: styles.key_letter, key: ['T'] },
    { keycode: ["89"], type: styles.key_letter, key: ['Y'] },
    { keycode: ["85"], type: styles.key_letter, key: ['U'] },
    { keycode: ["73"], type: styles.key_letter, key: ['I'] },
    { keycode: ["79"], type: styles.key_letter, key: ['O'] },
    { keycode: ["80"], type: styles.key_letter, key: ['P'] },
    { keycode: ["219"], type: styles.key_double, key: ['{', '['] },
    { keycode: ["221"], type: styles.key_double, key: ['}', ']'] },
    { keycode: ["220"], type: styles.key_double, key: ['|', '\\'] }
  ]
  return (
    <div className={styles.keyboard_row}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}
function KeyBindEnterLine() {
  const KeyBind = [
    { keycode: ["20"], type: [styles.key_bottom_left, styles.key_word, styles.key_w5].join(" "), key: ['caps lock'] },
    { keycode: ["65"], type: styles.key_letter, key: ['A'] },
    { keycode: ["83"], type: styles.key_letter, key: ['S'] },
    { keycode: ["68"], type: styles.key_letter, key: ['D'] },
    { keycode: ["70"], type: styles.key_letter, key: ['F'] },
    { keycode: ["71"], type: styles.key_letter, key: ['G'] },
    { keycode: ["72"], type: styles.key_letter, key: ['H'] },
    { keycode: ["74"], type: styles.key_letter, key: ['J'] },
    { keycode: ["75"], type: styles.key_letter, key: ['K'] },
    { keycode: ["76"], type: styles.key_letter, key: ['L'] },
    { keycode: ["186"], type: styles.key_double, key: [':', ';'] },
    { keycode: ["222"], type: styles.key_double, key: ['"', '\''] },
    { keycode: ["13"], type: [styles.key_bottom_right, styles.key_word, styles.key_w5].join(" "), key: ['return'] },
  ]

  return (
    <div className={styles.keyboard_row}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}

function KeyBindShiftLine() {
  const KeyBind = [
    { keycode: ["16"], type: [styles.key_bottom_left, styles.key_word, styles.key_w6].join(" "), key: ['shift'] },
    { keycode: ["90"], type: styles.key_letter, key: ['Z'] },
    { keycode: ["88"], type: styles.key_letter, key: ['X'] },
    { keycode: ["67"], type: styles.key_letter, key: ['C'] },
    { keycode: ["86"], type: styles.key_letter, key: ['V'] },
    { keycode: ["66"], type: styles.key_letter, key: ['B'] },
    { keycode: ["78"], type: styles.key_letter, key: ['N'] },
    { keycode: ["77"], type: styles.key_letter, key: ['M'] },
    { keycode: ["188"], type: styles.key_double, key: ['<', ','] },
    { keycode: ["190"], type: styles.key_double, key: ['>', '.'] },
    { keycode: ["191"], type: styles.key_double, key: ['?', '/'] },
    { keycode: ["16-R"], type: [styles.key_bottom_right, styles.key_word, styles.key_w6].join(" "), key: ['shift'] },
  ]
  return (
    <div className={styles.keyboard_row}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}

function KeyBindSpaceLine() {
  const KeyBind = [
    { keycode: [""], type: [styles.key_bottom_left, styles.key_word].join(" "), key: ['fn'] },
    { keycode: ["17"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['control'] },
    { keycode: ["18"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['option'] },
    { keycode: ["91"], type: [styles.key_bottom_left, styles.key_word, styles.key_w3].join(" "), key: ['command'] },
    { keycode: ["32"], type: [styles.key_double, styles.key_right, styles.key_space].join(" "), key: [' '] },
    { keycode: ["93-R"], type: [styles.key_bottom_left, styles.key_word, styles.key_w3].join(" "), key: ['command'] },
    { keycode: ["18-R"], type: [styles.key_bottom_left, styles.key_word, styles.key_w1].join(" "), key: ['option'] },
    { keycode: ["37"], type: styles.key_arrow, key: ['◀'] },
    { keycode: ["38", "40"], type: [styles.keydouble, styles.key_arrow_tall].join(" "), key: ['▲', '▼'] },
    { keycode: ["39"], type: styles.key_arrow, key: ['▶'] },
  ]
  return (
    <div className={[styles.keyboard_row, styles.keyboard_row_h3].join(" ")}>
      {KeyBind.map((value, index) =>
        <div key={index} className={value.type} key-code={value.keycode}>
          {value.key.map((value, index) => <div key={index}>{value}</div>)}
        </div>
      )}
    </div>
  )
}


export function KeyBind() {
  
  return (
    <div className={'min-h-[320px] overflow-scroll'}>
        <div className={`${styles.keyboard} min-w-[820px]`}>
          <KeyBindFunction />
          <KeyBindNumberLine />
          <KeyBindTapLine />
          <KeyBindEnterLine />
          <KeyBindShiftLine />
          <KeyBindSpaceLine />
        </div>
    </div>
  )
}