const words = ['Miracles','Marvels','Masterpieces','Innovations']


    let textTimeline =gsap.timeline({
        repeat:-1,
        yoyo:true
        
    })
    words.forEach(word=>{
        textTimeline.to('#typewriter' ,{
            text : word,
            duration: 1
    })

 
    })

    mainTimeline.add(textTimeline)
