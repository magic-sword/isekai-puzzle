function doGet() {
  var template = 'puzzle-solver.html';
  return HtmlService.createTemplateFromFile(template).evaluate();
}
