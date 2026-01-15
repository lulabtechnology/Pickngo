export const waNumber = "50768545600";
export const waPrefillLead =
  "Hola, me interesa una máquina Pick’n GO para mi local. ¿Me brindan información?";

export function waLink(message: string = waPrefillLead) {
  const txt = encodeURIComponent(message);
  return `https://wa.me/${waNumber}?text=${txt}`;
}
