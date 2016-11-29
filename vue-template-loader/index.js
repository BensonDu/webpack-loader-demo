module.exports = function(content) {
  this.cacheable && this.cacheable();
  var value = content = content.replace(/\s+/g,'');
  this.value = [value];
  return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}
