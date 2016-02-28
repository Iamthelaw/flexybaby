# Switch Vcard vs resume
printBtn = document.querySelector("nav a")
resumePage = document.querySelector(".resume")
vCardPage = document.querySelector(".main-wrapper")

printBtn.addEventListener("click", (event)->
  event.preventDefault()
  resumeIsVisible = resumePage.style.display
  console.log(resumeIsVisible)
  if resumeIsVisible == 'flex'
    resumePage.style.display = 'none'
    vCardPage.style.display = 'flex'
  else
    resumePage.style.display = 'flex'
    vCardPage.style.display = 'none'
)

# Read contents of a JSON
request = new XMLHttpRequest()
request.open('GET', 'resume.json', true)

data = 'fiu'
request.onload = ->
  if (request.status >= 200) && (request.status < 400)
    data = JSON.parse(request.responseText)

console.log(data)
