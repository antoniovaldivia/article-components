// ********** REFERENCES

let $win = window
let $doc = document.documentElement //html
let $bar = document.querySelector(`.progress-bar`)


// ********** STEPS

// Set the display of the .progress-bar to none
$bar.style.display = `none`

// Set the display of the .progress-bar to block
$bar.style.display = `block
`
// Store the window height
let winH = $doc.clientHeight // the document's parent's height

// Store the document height
let docH = $doc.scrollHeight

// if document height < window height 
if ( docH <= winH ) { console.log(`no scroller needed`) }

// ..else.. statement
else { console.log(`I need a progress bar`) }

// How much CAN be scrolled?
let canBeScrolled = docH - winH

// How much HAS been scrolled?
let hasBeenScrolled = window.scrollY

// Determine the amount scrolled as a percentage of the total possible
let percentScrolled = hasBeenScrolled / canBeScrolled

// Apply a width to the .progress-bar
$bar.style.width = `25%`

// Capture the scroll of the window
$win.addEventListener(`scroll`, event =>{ console.log(`scrolled!!`)} )