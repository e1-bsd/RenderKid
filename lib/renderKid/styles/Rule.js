// Generated by CoffeeScript 1.12.4
var DeclarationBlock, Rule, Selector;

Selector = require('./rule/Selector');

DeclarationBlock = require('./rule/DeclarationBlock');

module.exports = Rule = (function() {
  function Rule(selector) {
    this.selector = new Selector(selector);
    this.styles = new DeclarationBlock;
  }

  Rule.prototype.setStyles = function(styles) {
    this.styles.set(styles);
    return this;
  };

  return Rule;

})();