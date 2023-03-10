//vi behöver inte löngre skriva js i slutet tack vare "parcel"
//vi behöver inte längre ha curly brackets till bibioteken
import anime from "animejs"; 
//här behöver vi curly brackets när vi hämtar från en annan modul
import { text } from "./modules/module";

anime({
    targets: 'h1',
    rotate: 360,
    duration: 2000
})

console.log(text);

//Images
const img = document.createElement('img');
document.body.append(img);

//Detta kommer inte att fungera:
// img.src = './media/cat03.jpg';


console.log(import.meta.url);
const imgURL = new URL ('./media/Cat03.jpg', import.meta.url)
img.src = imgURL;