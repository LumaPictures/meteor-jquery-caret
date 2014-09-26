Package.describe({
  name: "luma:jquery-caret",
  summary: "Manipulate the caret's position in a text box or content-editable element.",
  version: "1.0.0",
  git: "https://github.com/LumaPictures/meteor-jquery-caret"
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.0');

  api.use(['jquery'], ['client']);

  api.add_files("jquery.caret.js", ["client"]);
});
