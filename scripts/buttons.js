// Made on my own with the help of this video https://www.youtube.com/watch?v=3xYd9fJ_0Z8,
//mdn, w3schools, stackoverflow,
//and using maxpixel's site stats code as reference.
(async () => {
    try {
        
        if (document.getElementById("neighborButtons")) {
            const neighbors = [
                {title: "BRUISEDGH0ST", alt: "Bruised ghost buttons", button: "bruisedgh0st", link: "bruisedgh0st.neocities.org"},
                {title: "CAPTCHaAngel", alt: "Captcha angel button", button: "captchaangel", link: "captchaangel.nekoweb.org"},
                {title: "eyeorb", alt: "Eye orb button", button: "eyeorb", link: "eyeorb.net"},
                {title: "itinerae", alt: "Itinerae button", button: "itinerae", link: "itinerae.shop"},
                {title: "lolv66", alt: "Lolv66 button", button: "lolv66", link: "lolv66.neocities.org"},
                {title: "Malune", alt: "Malune button", button: "malune", link: "malune.net"},
                {title: "No Longer Human's room", alt: "No longer human's room button", button: "maschinensturmer", link: "maschinensturmer.neocities.org"},
                {title: "mosiac-of-love", alt: "Mosiac of love button", button: "mosiacoflove", link: "mosiac-of-love.neocities.org"},
                {title: "Mushmallow", alt: "Mushmallow button", button: "mushmallow", link: "mushmallow.neocities.org"},
                {title: "nyscyra", alt: "Nyscyra button", button: "nyscyra", link: "nyscyra.net"},
                {title: "rice.place", alt: "Rice place button", button: "riceplace", link: "rice.place"},
                {title: "shikkaku", alt: "Shikkaku button", button: "shikkaku", link: "shikkaku.neocities.org"},
                {title: "sweet-pea", alt: "Sweet pea button", button: "sweetpea", link: "sweetpea.neocities.org"},
                {title: "Timmy", alt: "Timmy button", button: "timmy", link: "timmy.nekoweb.org"},
                {title: "treflemefle", alt: "Trefle mefle button", button: "treflemefle", link: "treflemefle.nekoweb.org"},
                {title: "Velvet Blue", alt: "Velvet blue button", button: "velvetblue", link: "velvet-blue.neocities.org"},
                {title: "Vicious Delights", alt: "Vicious delights button", button: "viciousdelights", link: "viciousdelights.neocities.org"},
                {title: "Yatagarasu", alt: "Yatagarasu button", button: "yatagarasu", link: "yatagarasu.nekoweb.org"},
                {title: "Zhongvie", alt: "Zhongvie button", button: "zhongvie", link: "zhongvie.neocities.org"}
            ];
            neighbors.forEach(function(nButtons) {
                let nLocation = document.getElementById("neighborButtons");
                let nOutput = "";
                for(let nButtons of neighbors){
                    nOutput += `<a href="https://${nButtons.title}"><img src="images/graphics/buttons/${nButtons.button}.webp" title="${nButtons.title}" alt="${nButtons.alt}"></a>`;
                }
                nLocation.innerHTML = nOutput;
            });
        }
        
        if (document.getElementById("coolsiteButtons")) {
            const coolsites = [
                {title: "0oxo0", alt: "0oxo0 button", button: "0oxo0", link: "0oxo0.neocities.org"},
                {title: "aelita", alt: "Aelita button", button: "aelita", link: "aelita.neocities.org"},
                {title: "blueberrymuffinss", alt: "Blueberry muffinss button", button: "blueberrymuffinss", link: "blueberrymuffinss.neocities.org"},
                {title: "Brooklynights", alt: "Brooklynights button", button: "brooklynights", link: "brooklynights.nekoweb.org"},
                {title: "BRUISEDGH0ST", alt: "Bruised ghost buttons", button: "bruisedgh0st", link: "bruisedgh0st.neocities.org"},
                {title: "CAPTCHaAngel", alt: "Captcha angel button", button: "captchaangel", link: "captchaangel.nekoweb.org"},
                {title: "Cobie site", alt: "Cobie button", button: "cobie", link: "cobie.nekoweb.org"},
                {title: "corru.observer", alt: "Corru observer button", button: "corru", link: "corru.observer"},
                {title: "espy.world", alt: "Espy world button", button: "espyworld", link: "espy.world"},
                {title: "How soon is now?", alt: "How soon is now button", button: "howsoonisnow", link: "howsoonisnow.org"},
                {title: "mosiac-of-love", alt: "Mosiac of love button", button: "mosiacoflove", link: "mosiac-of-love.neocities.org"},
                {title: "Mushmallow", alt: "Mushmallow button", button: "mushmallow", link: "mushmallow.neocities.org"},
                {title: "neo's HEAVENWURLD", alt: "Heaven wurld button", button: "heavenwurld", link: "neo.heavenwurld.net"},
                {title: "nyscyra", alt: "Nyscyra button", button: "nyscyra", link: "nyscyra.net"},
                {title: "pocl.v", alt: "POC.L button", button: "pocl", link: "pocl.vip"},
                {title: "rice.place", alt: "Rice place button", button: "riceplace", link: "rice.place"},
                {title: "strawbunimilk", alt: "strawbunimilk", button: "strawbunimilk", link: "strawbunimilk.neocities.org"},
                {title: "Sol's Sunflower Fields", alt: "Sol's sunflower fields button", button: "sunshine", link: "sunshine.nekoweb.org"},
                {title: "Swirl", alt: "Swirl button", button: "swirl", link: "swirl.neocities.org"},
                {title: "treflemefle", alt: "Trefle mefle button", button: "treflemefle", link: "treflemefle.nekoweb.org"},
                {title: "unicode angel", alt: "Unicode angel button", button: "unicodeangel", link: "unicode.neocities.org"},
                {title: "Valentinely", alt: "Valentinely button", button: "valentinely", link: "www.valentinely.cc"},
                {title: "Waxwing", alt: "Waxwing button", button: "waxwing", link: "waxwing.neocities.org"}
            ];
            coolsites.forEach(function(cButtons) {
                let cLocation = document.getElementById("coolsiteButtons");
                let cOutput = "";
                for(let cButtons of coolsites){
                    cOutput += `<a href="https://${cButtons.title}"><img src="images/graphics/buttons/${cButtons.button}.webp" title="${cButtons.title}" alt="${cButtons.alt}"></a>`;
                }
                cLocation.innerHTML = cOutput;
            });
        }
        
        if (document.getElementById("recourceButtons")) {
            const recources = [
                {title: "moosyu", alt: "Moosyu button", button: "moosyu", link: "moosyu.github.io"},
                {title: "PetraPixel", alt: "Petra pixel button", button: "petrapixel", link: "petrapixel.neocities.org"}
            ];
            recources.forEach(function(rButtons) {
                let rLocation = document.getElementById("recourceButtons");
                let rOutput = "";
                for(let rButtons of recources){
                    rOutput += `<a href="https://${rButtons.title}"><img src="images/graphics/buttons/${rButtons.button}.webp" title="${rButtons.title}" alt="${rButtons.alt}"></a>`;
                }
                rLocation.innerHTML = rOutput;
            });
        }
        
    } catch (error) {
        console.error(error);
    }
})();

