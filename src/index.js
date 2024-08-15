import _ from 'lodash';
document.addEventListener('DOMContentLoaded', function() {

    function renderHome() {
        const div = document.createElement('div');
        div.id = "home-page-rendered";

        document.getElementById('homeBtn').addEventListener('click', function() {
            if (document.getElementById('home-page-rendered').innerHTML === "") {
                document.getElementById('menu-page-rendered').innerHTML = ""
                document.getElementById('about-page-rendered').innerHTML = ""
                div.style.display = "block"
                let headlineText = "Bun Fun Burgers Homepage"
                let pictureURL = "https://www.svgrepo.com/show/297216/hamburger-burger.svg"
                let pictureAlt = "burger picture"
                let descriptionText = "Welcome to Bun Fun Burgers - where every bite is a delicious adventure! Our restaurant is a playground for your taste buds and a sanctuary for your hunger pangs. Picture this: a whimsical wonderland where patties frolic on fluffy buns, cheese cascades like a delicious waterfall, and toppings dance in harmony with sauces. Our menu? A symphony of flavors that'll make your taste buds tap dance! So, ditch the dull and join us for a burger bonanza that's sure to leave you smiling from ear to ear. Because at Bun Fun Burgers, we're not just serving food, we're serving up laughter, joy, and the best darn burgers you'll ever sink your teeth into!"
    
                div.appendChild(headlineRender(headlineText));
                div.appendChild(pictureRender(pictureURL, pictureAlt));
                div.appendChild(descriptionRender(descriptionText));
            }
        })
        return div;

    }


    function renderMenu() {
        const div = document.createElement('div');
        div.id = "menu-page-rendered"

        document.getElementById('menuBtn').addEventListener('click', function() {
            if (document.getElementById('menu-page-rendered').innerHTML === "") {
                document.getElementById('home-page-rendered').innerHTML = ""
                document.getElementById('about-page-rendered').innerHTML = ""
                div.style.display = "block"
                let headlineText = "Bun Fun Burgers Menu"
                    let pictureURL = "https://www.svgrepo.com/show/251516/restaurant-menu.svg"
                    let pictureAlt = "menu picture"
                    let descriptionText = "The Belly Buster: Double beef patties stacked high with crispy bacon, melted cheddar cheese, lettuce, tomato, and our signature secret sauce. It's a flavor explosion guaranteed to satisfy even the heartiest appetite! The Veggie Fiesta: A garden-fresh delight featuring a savory veggie patty topped with grilled peppers, onions, melted pepper jack cheese, ripe avocado slices, and tangy salsa. Who said veggie burgers were boring? The BBQ Bonanza: Sink your teeth into this smoky sensation! Juicy beef patty slathered in tangy barbecue sauce, topped with caramelized onions, crunchy onion rings, and melted Swiss cheese. It's a BBQ lover's dream come true! The Clucking Good Chicken: Crispy fried chicken breast served with creamy coleslaw, pickles, melted provolone cheese, and a drizzle of zesty honey mustard sauce. It's clucking good! The Spicy Inferno: Brace yourself for a fiery feast! Grilled beef patty smothered in spicy jalapeños, pepper jack cheese, crispy onion straws, lettuce, tomato, and a generous dollop of sriracha mayo. It's not for the faint of heart! The Cheesy Mushroom Melt: Indulge in gooey goodness with this mouthwatering masterpiece! Juicy beef patty topped with sautéed mushrooms, melted Swiss cheese, caramelized onions, and a drizzle of savory garlic aioli. Prepare for a cheesy meltdown! The Classic Crunch: Keep it simple and satisfying with our classic burger! Grilled beef patty layered with crisp lettuce, juicy tomato, pickles, onions, ketchup, and mustard. It's a timeless favorite that never disappoints! Each burger comes with a side of crispy golden fries or upgrade to onion rings for an extra crunch!"

                div.appendChild(headlineRender(headlineText));
                div.appendChild(pictureRender(pictureURL, pictureAlt));
                div.appendChild(descriptionRender(descriptionText));
            }
        })
        return div;

    }

    function renderAbout() {
        const div = document.createElement('div');
        div.id = "about-page-rendered"

        document.getElementById('aboutBtn').addEventListener('click', function() {
            if (document.getElementById('about-page-rendered').innerHTML === "") {
                document.getElementById('menu-page-rendered').innerHTML = ""
                document.getElementById('home-page-rendered').innerHTML = ""
                div.style.display = "block"
                let headlineText = "Bun Fun Burgers About"
                let pictureURL = "https://cdn-icons-png.flaticon.com/512/4690/4690069.png"
                let pictureAlt = "about picture"
                let descriptionText = "Bun Fun Burgers is the brainchild of culinary maverick Chef Benny Bunsworth, who envisioned a whimsical haven where gastronomy meets giggles. Founded in 2018 in the heart of downtown Laughington, USA, Bun Fun Burgers was born out of a desire to infuse the burger scene with a hefty dose of humor and innovation. Chef Benny, a passionate burger aficionado with a flair for creativity, sought to revolutionize the traditional burger joint experience by crafting mouthwatering masterpieces that not only tantalize the taste buds but also tickle the funny bone. With its vibrant ambiance, playful menu names, and scrumptious offerings, Bun Fun Burgers has quickly become a beloved destination for foodies seeking a delightful dining experience filled with laughter, joy, and, of course, delicious burgers."

                div.appendChild(headlineRender(headlineText));
                div.appendChild(pictureRender(pictureURL, pictureAlt));
                div.appendChild(descriptionRender(descriptionText));
            }

        })
        return div;

    }

    function headlineRender(headlineText) {
        const headline = document.createElement('h1')
        headline.innerHTML = `${headlineText}`
        return headline;
    }

    function pictureRender(pictureURL, pictureAlt) {
        const picture = document.createElement('img')
        picture.src = `${pictureURL}`
        picture.alt = `${pictureAlt}`
        picture.style.width = "100px"
        return picture;
    }

    function descriptionRender(descriptionText) {
        const description = document.createElement('p')
        description.innerHTML = `${descriptionText}`
        return description;
    }
      
    const elementsToAppend = [renderHome(), renderMenu(), renderAbout()];

    elementsToAppend.forEach(function(element) {
        document.getElementById('content').appendChild(element);
    });
});