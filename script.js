const $container = document.getElementById('container')

let newElements = []

for (let i = 1; i < 13; i++) {
    newElements.push(`
    
    <div class="photos">
        <p>
           <img src="images/${i}.jpg"></img>
        </p>
        <p>
            ${i}
        </p>
    </div>

    `)
}

$container.innerHTML = newElements.join('')

const $photoList = document.querySelectorAll('.photo')

$container.addEventListener('click', function(event){
    const value = event.target.closest('div').children[1].textContent.trim()

    let name = ''

    switch (value) {
        case '1':
            name = 'Image of a bird I captured around November 2019.'
            break
        case '2':
            name = 'As you can tell I enjoy taking photos of birds.'
            break 
        case '3':
            name = 'Im pretty sure this is the C building. I took this photo during a photography class in my first semester of IMD.'
            break
        case '4':
            name = 'A photo of an overgrown field I took near my house. Kinda cool.'
            break
        case '5':
            name = 'A textured photo taken of the floor near the library stairs at Algonquin College. Remember that place?'
            break
        case '6':
            name = 'An old worn down birdhouse barely hanging from a tree.'
            break
        case '7':
            name = 'Textured photo of some leaves on the ground. I remember my photography teacher praising this photo in front of the class for some reason.'
            break
        case '8':
            name = 'Sunlight breaking through some trees.'
            break
        case '9':
            name = 'Cool boardwalk I like to walk on during the fall, very peaceful.'
            break
        case '10':
            name = 'Silhouette of some trees, with the sunlight peering through.'
            break
        case '11':
            name = 'My friend trying to ollie on a skateboard. He fell over shortly after this was captured.'
            break
        case '12':
            name = 'Another photo of some trees, I thought the shadows from the sun seemed cool.'
            break          
    }

    document.getElementById('info').innerHTML = `
        <p>
            ${name}
        </p>
    `
})