export function onEventStart(start: string, callback: () => void) {
  const startsAt = Date.parse(start);

  function check() {
    const remaining = startsAt - Date.now();
    if (remaining <= 0) {
      callback();
    } else {
      // Browser timers have a maximum delay of about 25 days.
      window.setTimeout(check, Math.min(remaining, 2_147_483_647));
    }
  }

  check();
}
