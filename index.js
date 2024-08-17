const words = ['Miracles', 'Marvels', 'Masterpieces', 'Innovations'];

// Main Timeline
let mainTimeline = gsap.timeline({
    repeat: -1 // infinite repeat
});

// For each word, create a new timeline, use the text plugin, then append the timeline to the main one
words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay:2
    });

    textTimeline.to('#typewriter', {
        text: word,
        duration: 1
    });

    // Add each textTimeline to the mainTimeline
    mainTimeline.add(textTimeline);
});


var navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right="0";
}

function hideMenu(){
    navLinks.style.right="-200px";
}
