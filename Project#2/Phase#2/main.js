const app = Vue.createApp({
    data() {
        return {
            titleh1: `Wilhelm Gesenius \n Modern Grammarian of Ancient Hebrew`,
            imageG:  "assets/images/Gesenius_Wilhelm.jpg",
            firstLi: ["Born on 3 February 1786 in Nordhausen" , 
              "Became student of philosophy and theology at university of Helm, continued in Göttingen ",
              "By 1806 already graduated and started to teach",
              "By 1810 became a extaordinary professor, By 1811 ordinary professor. He remained the professor till his death in 1842",
              "His lectures has been attended by more than 500 students at once (half of university community)"
            ],
            secondLi: [
                "His work on Hebrew Lexicon and Chaldean (Aramaic) Lexicon. \n  It has been till 1853, and then it still became part of other lexicons like BDB (which still use it in their title)",
            "His Hebrew Grammar, which received 28 revisions. It has been also translated into English into many editions. ",
            `His works, edited by posterior authors are still being sold on modern platform, like Amazon.`  
            ]

        }
    }
})