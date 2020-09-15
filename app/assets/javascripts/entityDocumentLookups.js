Blacklight.onLoad(function() {
  var documentsContainers = $('[data-behavior="entity-documents"]');
  documentsContainers.each(function() {
    var documentsContainer = $(this);
    var lookupUri = documentsContainer.data('lookup-uri');

    if (documentsContainer.find('article').length > 0) { return; }

    $.ajax(lookupUri).done(function(data) {
      var newDocuments = $(data).find('#documents');
      if (newDocuments.length > 0) {
        documentsContainer.find('.body').append($(data).find('#documents article'))
        documentsContainer.show();
      }
    });
  });
});
