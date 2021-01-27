function triangle(row) {
  let colours = {
    RR: "R",
    RB: "G",
    RG: "B",
    BB: "B",
    BG: "R",
    BR: "G",
    GG: "G",
    GR: "B",
    GB: "R",
  };
  if (row.length === 1) {
    return row;
  }
  let nextRow = "";
  while (row.length > 1) {
    nextRow += colours[row.substring(0, 2)];
    row = row.substring(1);
  }
  return triangle(nextRow);
}
