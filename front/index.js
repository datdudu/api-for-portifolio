const information = {
    name: "Carlos Eduardo Carvalho Cardoso",
    skill: "Fullstack Developer",
    info: "I'm a fullstack developer with passion on software engineering, aiming to be one"
}


function getRequest() {
        fetch('http://127.0.0.1:3000/1', {
        method: 'get'
    })
        .then(async (response) => {
            const data = await response.json()
            alert(`Meu response: ${data}`)
            console.log(`Meu response: ${data}`)
        })
}


function postRequest() {
        fetch('http://127.0.0.1:3000/', {
        method: 'post',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({data:'Dado enviado'})
    })
        .then(async (response) => {
            const data = await response.json()
            alert(`Meu response: ${data}`)
            console.log(`Meu response: ${data}`)
        })
}

function putRequest(){
        fetch('http://127.0.0.1:3000/', {
        method: 'put',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({data:'Dado atualizado'})
    })
        .then(async (response) => {
            const data = await response.json()
            alert(`Meu response: ${data}`)
            console.log(`Meu response: ${data}`)
        })
}

function deleteRequest(){
        fetch('http://127.0.0.1:3000/23/eduardo', {
        method: 'delete',
        headers: {'content-Type': 'application/json'}
    })
        .then(async (response) => {
            const data = await response.json()
            alert(`Meu response: ${data}`)
            console.log(`Meu response: ${data}`)
        })
}

    