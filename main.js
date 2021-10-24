/*=====SUBSTITUIÇÃO REDE SOCIAIS=====*/
const socialMediaUser = {
  github: 'arcbettini',
  youtube: 'channel/UC8qjvK1gtpbX7f7ZFE-1Hcg',
  instagram: 'alan_bettini',
  facebook: 'alanbettini',
  twitter: 'alan_bettini'
}

function changeSocialMediaUser() {
  for (let socialList of socialLinks.children) {
    const social = socialList.getAttribute('class')
    socialList.children[0].href = `https://${social}.com/${socialMediaUser[social]}`
  }
}

changeSocialMediaUser()

/*=====SUBSTITUIÇÃO PERFIL GERAL (API GITHUB)=====*/

function getGitHubProfileInfos() {
  const urlGitHubApi = `https://api.github.com/users/${socialMediaUser.github}`

  fetch(urlGitHubApi)
    .then(response => response.json())
    .then(dataJson => {
      userName.textContent = dataJson.name
      userBio.textContent = dataJson.bio
      userLink.href = dataJson.html_url
      userPhoto.src = dataJson.avatar_url
      userLogin.innerHTML = dataJson.login
    })
  /*response = nome de variável
  dataJson = nome de variável
  userName = ID html
  textContent = propriedadeDOM*/
}
getGitHubProfileInfos()

/*###ARROW FUNCTION###
function nomeDaFunção(argumentos){
  #code#
}

##FUNÇÃO ANONIMA##
argumento => {

}
*/
