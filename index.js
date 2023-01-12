const colorInput = document.getElementById("color-input")
const modeSelect = document.getElementById("select-mode")
const colorSchemebtn = document.getElementById("color-scheme-button")
const colorSchemeContainer = document.getElementById("color-scheme-container")
const title = document.getElementById("title")

function getSchemeColors(){
  let html = ''

  const hex = colorInput.value.slice(1)
  const mode = modeSelect.value.toLowerCase()
  const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`

  fetch(url)
  .then((response) => response.json())
  .then((data) => {

    data.colors.forEach(color => {
      const val = color.hex.value
      html += `
      <div>
        <p class="color" style="background: ${val}"> </p>
        <p class="color-hex" onclick="copyColor('${val}')"> ${val} </p>
      </div>
      `
    })
      colorSchemeContainer.innerHTML = html
  })

}

function copyColor(color){
 // Create a new textarea element and set its value to the color value
 const fs = document.createElement("textarea");
 fs.value = color;

 // Append the textarea element to the body
 document.body.appendChild(fs);

 // Select the text inside the textarea element
 fs.select();

 // Copy the text to the clipboard
 document.execCommand("copy");

 // Remove the textarea element from the body
 document.body.removeChild(fs);
}


colorSchemebtn.addEventListener("click", getSchemeColors)

getSchemeColors()
