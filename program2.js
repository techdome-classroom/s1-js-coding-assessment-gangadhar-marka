const decodeTheRing = function (s, p) {
  const match = (i, j) => {
      if (j === p.length) return i === s.length;
      if (p[j] === '*') return match(i, j + 1) || (i < s.length && match(i + 1, j));
      if (p[j] === '?' || p[j] === s[i]) return i < s.length && match(i + 1, j + 1);
      return false;
  };
  return match(0, 0);
};

module.exports = decodeTheRing;
