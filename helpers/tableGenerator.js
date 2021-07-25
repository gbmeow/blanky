

var generateRows = function(dups) {
    return dups.map(
        x =>
          `<tr><td>${x.existing}</td><td>${
            x.duplicate
          }</td></tr>`
      );
}

var generateTable = function(rows) {
    let str = "<table>";
    str += "<thead><tr>"
    str += "<th>Location</th><th>Duplicate Location</th>";
    str += "</tr></thead>";
    str += "<tbody>";
    str += rows;    
    str += "</tbody>";
    str += "</table>";
    return str;
}


var makeTable = function(dups) {
    var rows = generateRows(dups);
    return generateTable(rows.join(''));
}

module.exports = {
    generateRows: generateRows,
    makeTable: makeTable
};