// requisicao de login
export async function requisicaoLogin(body) {
  const options = {
    method: 'POST',
    headers: {
        'Authorization': 'application/json'
    },
    body: JSON.stringify(body)
  };

  try {
    await fetch('https://m2-api-adot-pet.herokuapp.com/session/login', options)
  } catch(err) {
    console.log(err)
  }
}

