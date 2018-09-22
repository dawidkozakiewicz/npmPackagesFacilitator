let packages = {
    "body-parser": "^1.18.2",
    "express": "^4.16.3",
    "passport": "^0.4.0",
    "passport-google-oauth": "^1.0.0",
    "pug": "^2.0.3"
  }

  let tablica = Object.keys(packages)
  console.log(tablica)




const showNpmPackages = function (tablica) {
    document.querySelector('#catchme').innerHTML = 'npm install'
    tablica.forEach(function (oneNpmPackage) {
        document.querySelector('#catchme').appendChild(render(oneNpmPackage))
    })
}


const render = function (oneNpmPackage) {
    const element = document.createElement('span')
    const package = document.createElement('span')
    package.textContent = ` ${oneNpmPackage}`
    element.appendChild(package)
    return element
}




showNpmPackages(tablica)