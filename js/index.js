// ********** REFERENCES

let $win = window
let $doc = document.documentElement //html
let $bar = document.querySelector(`.bar`)
let $prg = document.querySelector(`.progress`)
let $h1 = document.querySelector(`.heading`)
let $ttl = document.querySelector(`.title`)

//  1. Determine references that we nee dbased on "Advanced" 1 and 2

// ********** STEPS

// // Get the textContent from the h1
// let titleS = $h1.textContent

// // Set the textContent of the .title
// $ttl.textContent = `${titleS}`

// // Set .title opacity to 1
// $ttl.style.opacity = 1;

// // Set .title opacity to 0
// $ttl.style.opacity = 0;

// // Get the position of the h1 relative to the window (trigger)
// let positionH = 60

// // How much the window has scrolled
// let hasBeenScrolled = $win.scrollY

// // Check if the vanishing point of the h1 is less than the total scrolled...
// if ( hasBeenScrolled <= positionH ) {console.log(`gotem`)}

// // ..else.. statement
// else { console.log(`dont gotem`)}

// Capture the scroll of the window
$win.addEventListener(`scroll`, event => {

// Get the textContent from the h1
let titleS = $h1.textContent

// Set the textContent of the .title
$ttl.textContent = `${titleS}`

// Get the position of the h1 relative to the window (trigger)
let positionH = 26.66666603088379

// How much the window has scrolled
let hasBeenScrolled = $win.scrollY

// Check if the vanishing point of the h1 is less than the total scrolled...
if ( hasBeenScrolled <= positionH ) {
// Set .title opacity to 0
$ttl.style.opacity = 0;
}

// ..else.. statement
else { 
// Set .title opacity to 1
$ttl.style.opacity = 1;
}

})
//  2. Write all the steps required to complete "Advanced" 2

