function tryRemoveFeed() {
  // Repetitive interval because of bug: if you open vk.com/dev and then come back to feed then it will not be removed
  // It won't significantly decrease page performance
  let intervalId = setInterval(function() {
    let feedNavButtonPath = "#l_nwsf";
    let clipsFeedNavContentPath = "#l_svd";
    let feedContentPath = ".wide_column_left";

    if(null != document.querySelector(feedNavButtonPath)) {
      document.querySelector(feedNavButtonPath).outerHTML = "";
      document.querySelector(clipsFeedNavContentPath).outerHTML = "";
    }

    if(null != document.querySelector(feedContentPath)
        && ((document.location.pathname == "/feed") || (document.location.pathname == "/clips"))) {
      document.querySelector(feedContentPath).outerHTML += '<h1 style="position: absolute">Сегодня без ленты ВК</h1>';
      document.querySelector(feedContentPath).outerHTML = "";
    }

  }, 150);
}

tryRemoveFeed();
