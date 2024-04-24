(() => {
    const bannerDiv = document.querySelector("#banner");
    const logoContainerDiv = document.querySelector("#banner-text-container");

    const randBanner = Math.round(Math.random() * 7);
    const randLogoFont = Math.round(Math.random() * 3);

    let bannerBG = undefined;
    let logoFont = undefined;
    
    switch(randBanner) {
        case 0:
            bannerBG = "bg-[url('/src/pics/banners/1.png')]";
            break;
        case 1:
            bannerBG = "bg-[url('/src/pics/banners/2.webp')]";
            break;
        case 2:
            bannerBG = "bg-[url('/src/pics/banners/3.png')]";
            break;
        case 3:
            bannerBG = "bg-[url('/src/pics/banners/4.gif')]";
            break;
        case 4:
            bannerBG = "bg-[url('/src/pics/banners/5.png')]";
            break;
        case 5:
            bannerBG = "bg-[url('/src/pics/banners/6.gif')]";
            break;
        case 6:
            bannerBG = "bg-[url('/src/pics/banners/7.gif')]";
            break;
        case 7:
            bannerBG = "bg-[url('/src/pics/banners/8.jpg')]";
            break;
        default:
            break;
    }

    switch(randLogoFont) {
        case 0:
            logoFont = "font-['induction']";
            break;
        case 1:
            logoFont = "font-['misa']";
            break;
        case 2:
            logoFont = "font-['abnes']";
            break;
        case 3:
            logoFont = "font-['elron']";
            break;
        default:
            logoFont = "font-['Times New Roman']"
            break;
    }

    bannerDiv.classList.add(bannerBG);
    logoContainerDiv.classList.add(logoFont);
})();