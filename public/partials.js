(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['date'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class = \"currentDate\">\n  <h1 class = \"date\">\n    "
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"date","hash":{},"data":data}) : helper)))
    + "\n  </h1>\n</div>\n";
},"useData":true});
templates['day'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class = \"day\">\n  <h1 class = \"date\">\n    "
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"date","hash":{},"data":data}) : helper)))
    + "\n  </h1>\n</div>\n";
},"useData":true});
templates['goals'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class = \"goal\">\n  <div class = \"goal-content\">\n    <p class = \"goal-text\">\n      "
    + alias4(((helper = (helper = helpers.goalText || (depth0 != null ? depth0.goalText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goalText","hash":{},"data":data}) : helper)))
    + "\n    </p>\n    <p class = \"goal-date\">\n      <a href = \"#\">"
    + alias4(((helper = (helper = helpers.goalDate || (depth0 != null ? depth0.goalDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"goalDate","hash":{},"data":data}) : helper)))
    + "</a>\n    </p>\n    <form action= \"goals/delete/"
    + alias4(container.lambda((depth0 != null ? depth0.goalText : depth0), depth0))
    + "\" method = \"delete\">\n      <button type=\"submit\" class=\"modal-delete-button\">delete</button>\n    </form>\n  </div>\n</article>\n\n    \n";
},"useData":true});
})();