function redirectFromFeed() {
    if(document.location.pathname.includes("/feed") || document.location.pathname.includes("/clips")) {
      document.location.href = "im";
      clearInterval(intervalId);
    }
}

function removeFeedFromSidebar() {
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
  }, 150);
}    


redirectFromFeed();
removeFeedFromSidebar();
