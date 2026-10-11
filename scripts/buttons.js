// Made on my own with the help of this video https://www.youtube.com/watch?v=3xYd9fJ_0Z8,
//mdn, w3schools, stackoverflow,
//and using maxpixel's site stats code as reference.
(async () => {
    try {
        
        if (document.getElementById("neighborButtons")) {
            const neighbors = [
                {title: "BRUISEDGH0ST", alt: "Bruised ghost buttons", button: "bruisedgh0st", link: "bruisedgh0st.neocities.org", fav: ""},
                {title: "CAPTCHaAngel", alt: "Captcha angel button", button: "captchaangel", link: "captchaangel.nekoweb.org", fav: ""},
                {title: "enniu", alt: "Enniu button", button: "enniu", link: "enniu.nekoweb.org"},
                {title: "eyeorb", alt: "Eye orb button", button: "eyeorb", link: "eyeorb.net", fav: ""},
                {title: "i026net", alt: "i026NETt", button: "i026net", link: "i026net.neocities.org", fav: ""},
                {title: "itinerae", alt: "Itinerae button", button: "itinerae", link: "itinerae.shop", fav: ""},
                {title: "lolv66", alt: "Lolv66 button", button: "lolv66", link: "lolv66.neocities.org", fav: ""},
                {title: "Malune", alt: "Malune button", button: "malune", link: "malune.net", fav: ""},
                {title: "No Longer Human's room", alt: "No longer human's room button", button: "maschinensturmer", link: "maschinensturmer.neocities.org", fav: ""},
                {title: "mosiac-of-love", alt: "Mosiac of love button", button: "mosiacoflove", link: "mosiac-of-love.neocities.org", fav: ""},
                {title: "Mushmallow", alt: "Mushmallow button", button: "mushmallow", link: "mushmallow.neocities.org", fav: ""},
                {title: "nyscyra", alt: "Nyscyra button", button: "nyscyra", link: "nyscyra.net", fav: "true"},
                {title: "rice.place", alt: "Rice place button", button: "riceplace", link: "rice.place", fav: "true"},
                {title: "shikkaku", alt: "Shikkaku button", button: "shikkaku", link: "shikkaku.neocities.org", fav: ""},
                {title: "sweet-pea", alt: "Sweet pea button", button: "sweetpea", link: "sweetpea.neocities.org", fav: ""},
                {title: "Timmy", alt: "Timmy button", button: "timmy", link: "timmy.nekoweb.org", fav: ""},
                {title: "treflemefle", alt: "Trefle mefle button", button: "treflemefle", link: "treflemefle.nekoweb.org", fav: "true"},
                {title: "Velvet Blue", alt: "Velvet blue button", button: "velvetblue", link: "velvet-blue.neocities.org", fav: ""},
                {title: "Vicious Delights", alt: "Vicious delights button", button: "viciousdelights", link: "viciousdelights.neocities.org", fav: ""},
                {title: "Yatagarasu", alt: "Yatagarasu button", button: "yatagarasu", link: "yatagarasu.nekoweb.org", fav: ""},
                {title: "Zhongvie", alt: "Zhongvie button", button: "zhongvie", link: "zhongvie.neocities.org", fav: ""}
            ];
            neighbors.forEach(function(nButtons) {
                let nLocation = document.getElementById("neighborButtons");
                let nOutput = "";
                for(let nButtons of neighbors){
                    nOutput += `<a href="https://${nButtons.link}" target="_blank"><img ${nButtons.fav ? `class='fav'` : ""} src="assets/graphics/buttons/${nButtons.button}.webp" title="${nButtons.fav ? `✦` : ""} ${nButtons.title}" alt="${nButtons.alt}"></a>`;
                }
                nLocation.innerHTML = nOutput;
            });
        }
        
        if (document.getElementById("coolsiteButtons")) {
            const coolsites = [
                {title: "0oxo0", alt: "0oxo0 button", button: "0oxo0", link: "0oxo0.neocities.org", fav: "true"},
                {title: "aelita", alt: "Aelita button", button: "aelita", link: "aelita.neocities.org", fav: "true"},
                {title: "Brooklynights", alt: "Brooklynights button", button: "brooklynights", link: "brooklynights.nekoweb.org", fav: "true"},
                {title: "BRUISEDGH0ST", alt: "Bruised ghost buttons", button: "bruisedgh0st", link: "bruisedgh0st.neocities.org", fav: ""},
                {title: "CAPTCHaAngel", alt: "Captcha angel button", button: "captchaangel", link: "captchaangel.nekoweb.org", fav: ""},
                {title: "Cobie site", alt: "Cobie button", button: "cobie", link: "cobie.nekoweb.org", fav: ""},
                {title: "corru.observer", alt: "Corru observer button", button: "corru", link: "corru.observer", fav: ""},
                {title: "espy.world", alt: "Espy world button", button: "espyworld", link: "espy.world", fav: "true"},
                {title: "How soon is now?", alt: "How soon is now button", button: "howsoonisnow", link: "howsoonisnow.org", fav: ""},
                {title: "i026net", alt: "i026NETt", button: "i026net", link: "i026net.neocities.org", fav: ""},
                {title: "mosiac-of-love", alt: "Mosiac of love button", button: "mosiacoflove", link: "mosiac-of-love.neocities.org", fav: ""},
                {title: "Mushmallow", alt: "Mushmallow button", button: "mushmallow", link: "mushmallow.neocities.org", fav: ""},
                {title: "neo's HEAVENWURLD", alt: "Heaven wurld button", button: "heavenwurld", link: "neo.heavenwurld.net", fav: ""},
                {title: "nyscyra", alt: "Nyscyra button", button: "nyscyra", link: "nyscyra.net", fav: "true"},
                {title: "pocl.v", alt: "POC.L button", button: "pocl", link: "pocl.vip", fav: ""},
                {title: "rice.place", alt: "Rice place button", button: "riceplace", link: "rice.place", fav: "true"},
                {title: "strawbunimilk | cute art and site", alt: "strawbunimilk", button: "strawbunimilk", link: "strawbunimilk.neocities.org", fav: "true"},
                {title: "Sol's Sunflower Fields", alt: "Sol's sunflower fields button", button: "sunshine", link: "sunshine.nekoweb.org", fav: ""},
                {title: "Swirl", alt: "Swirl button", button: "swirl", link: "swirl.neocities.org", fav: ""},
                {title: "treflemefle", alt: "Trefle mefle button", button: "treflemefle", link: "treflemefle.nekoweb.org", fav: "true"},
                {title: "unicode angel", alt: "Unicode angel button", button: "unicodeangel", link: "unicode.neocities.org", fav: ""},
                {title: "Valentinely", alt: "Valentinely button", button: "valentinely", link: "www.valentinely.cc", fav: ""},
                {title: "Waxwing", alt: "Waxwing button", button: "waxwing", link: "waxwing.neocities.org", fav: ""}
            ];
            coolsites.forEach(function(cButtons) {
                let cLocation = document.getElementById("coolsiteButtons");
                let cOutput = "";
                for(let cButtons of coolsites){
                    cOutput += `<a href="https://${cButtons.link}" target="_blank"><img ${cButtons.fav ? `class='fav'` : ""} src="assets/graphics/buttons/${cButtons.button}.webp" title="${cButtons.fav ? `✦` : ""} ${cButtons.title}" alt="${cButtons.alt}"></a>`;
                }
                cLocation.innerHTML = cOutput;
            });
        }
        
        if (document.getElementById("recourceButtons")) {
            const recources = [
                {title: "itinerae | cute graphics", alt: "Itinerae button", button: "itinerae", link: "www.itinerae.org", fav: ""},
                {title: "moosyu | very helpful guides", alt: "Moosyu button", button: "moosyu", link: "moosyu.github.io", fav: ""},
                {title: "PetraPixel | guides, cheatsheets, and tutorials", alt: "Petra pixel button", button: "petrapixel", link: "petrapixel.neocities.org", fav: ""},
                {title: "Synthetic Fruits | graphics", alt: "Synthetic fruits button", button: "syntheticfruits", link: "https://syntheticfruits.neocities.org/", fav: ""}
            ];
            recources.forEach(function(rButtons) {
                let rLocation = document.getElementById("recourceButtons");
                let rOutput = "";
                for(let rButtons of recources){
                    rOutput += `<a href="https://${rButtons.link}" target="_blank"><img ${rButtons.fav ? `class='fav'` : ""} src="assets/graphics/buttons/${rButtons.button}.webp" title="${rButtons.fav ? `✦` : ""} ${rButtons.title}" alt="${rButtons.alt}"></a>`;
                }
                rLocation.innerHTML = rOutput;
            });
        }
        
    } catch (error) {
        console.error(error);
    }
})();

