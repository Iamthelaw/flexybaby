(function() {
  var data, printBtn, request, resumePage, vCardPage;

  printBtn = document.querySelector("nav a");

  resumePage = document.querySelector(".resume");

  vCardPage = document.querySelector(".main-wrapper");

  printBtn.addEventListener("click", function(event) {
    var resumeIsVisible;
    event.preventDefault();
    resumeIsVisible = resumePage.style.display;
    console.log(resumeIsVisible);
    if (resumeIsVisible === 'flex') {
      resumePage.style.display = 'none';
      return vCardPage.style.display = 'flex';
    } else {
      resumePage.style.display = 'flex';
      return vCardPage.style.display = 'none';
    }
  });

  request = new XMLHttpRequest();

  request.open('GET', 'resume.json', true);

  data = 'fiu';

  request.onload = function() {
    if ((request.status >= 200) && (request.status < 400)) {
      return data = JSON.parse(request.responseText);
    }
  };

  console.log(data);

}).call(this);
