(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['goals'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class = \"goal\">\r\n  <div class = \"goal-content\">\r\n    <p class = \"goal-text\">\r\n      "
    + alias4(((helper = (helper = helpers.goalText || (depth0 != null ? depth0.goalText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goalText","hash":{},"data":data}) : helper)))
    + "\r\n    </p>\r\n    <p class = \"goal-date\">\r\n      <a href = \"#\">"
    + alias4(((helper = (helper = helpers.goalDate || (depth0 != null ? depth0.goalDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goalDate","hash":{},"data":data}) : helper)))
    + "</a>\r\n    </p>\r\n  </div>\r\n</article>\r\n";
},"useData":true});
})();