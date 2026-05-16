$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });

  // Animate closing of <details class="older-news"> (open already animates via CSS)
  document.querySelectorAll("details.older-news").forEach(function (details) {
    var summary = details.querySelector("summary");
    if (!summary) return;
    summary.addEventListener("click", function (e) {
      if (!details.open) return; // opening: let CSS keyframes run
      e.preventDefault();
      var body = details.querySelector(".table-responsive");
      if (!body) {
        details.open = false;
        return;
      }
      if (body.dataset.closing === "1") return;
      body.dataset.closing = "1";
      body.style.transformOrigin = "top";
      body.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-6px)" },
        ],
        { duration: 220, easing: "ease-in" }
      ).onfinish = function () {
        delete body.dataset.closing;
        details.open = false;
      };
    });
  });

  $(".more-authors").click(function () {
    var $el = $(this);
    $el.attr("title", "");
    var showText = $el.data("authors-show");
    var hideText = $el.data("authors-hide");
    var nextText = $el.text() === hideText ? showText : hideText;
    var delay = parseInt($el.data("animation-delay"), 10) || 10;
    var cursorPosition = 0;
    var textAdder = setInterval(function () {
      $el.html(nextText.substring(0, cursorPosition + 1));
      if (++cursorPosition === nextText.length) {
        clearInterval(textAdder);
      }
    }, delay);
  });
});
