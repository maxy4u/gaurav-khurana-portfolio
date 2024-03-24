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

export function getAge(birthDateString: string) {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  const yearsDifference = today.getFullYear() - birthDate.getFullYear();

  const isBeforeBirthday =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

  return isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
}
