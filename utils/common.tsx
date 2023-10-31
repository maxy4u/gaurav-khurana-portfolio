export function getCssVar(name: string) {
  if (typeof window !== 'undefined') {
    // Get the root element
    const r: HTMLElement | null = document.querySelector(':root');
    // Get the styles (properties and values) for the root
    const rs = getComputedStyle(r as HTMLElement);

    return rs.getPropertyValue(name);
  }
}

export function setCssVar(name: string, value: string) {
  if (typeof window !== 'undefined') {
    // Get the root element
    const r: HTMLElement | null = document.querySelector(':root');
    // Set the value of variable to another value
    r?.style.setProperty(name, value);
  }
}

export function getAge(dob: Date) {
  const diff_ms = Date.now() - dob.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
