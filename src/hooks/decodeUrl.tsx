export const customDecodeUrl = (code: string) => {
  const rs = [-1, -1, -1, -1, -1, -1];

  for (let i = 0; i < 6; i++) {
    const ang = code.charAt(i);
    if (ang >= '0' && ang <= '9') rs[i] = parseInt(ang);
    if (ang >= 'a' && ang <= 'z') rs[i] = ang.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    if (ang >= 'A' && ang <= 'D') rs[i] = ang.charCodeAt(0) - 'A'.charCodeAt(0) + 36;
  }

  return rs;
};
