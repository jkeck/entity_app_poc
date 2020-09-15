Blacklight.onLoad(function() {
  $('[data-behavior="wikidata"]').each(function() {
    var container = $(this);
    var wikidataID = container.data('wikidata-id');
    var thumbContainer = $(container).find('[data-behavior="wikidata-thumb"]');
    var wikidataThumbBase = 'https://commons.wikimedia.org/w/thumb.php?width=200&f=';

    if (thumbContainer.find('img').length > 0) { return; }

    $.ajax({
      url: `https://www.wikidata.org/w/api.php?action=wbgetclaims&format=json&entity=${wikidataID}`,
      jsonp: 'callback',
      dataType: 'jsonp',
    })
      .done(function(data) {
        var imageName = data.claims.P18[0].mainsnak.datavalue.value;

        thumbContainer.append(`<img src="${wikidataThumbBase}${imageName}" />`);
      });
  });
});
