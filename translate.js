const translate = {

    'home': 'Inicio',
    'homee': 'Home',
    'sm': 'Sobre Mi',
    'sme': 'About Me',

    'en': `Graphic, web, user experience and user interface designer with a proven track record of work in the design industry, search engine optimization (SEO) expert, Microsoft Office, strategic planning and marketing
    digital, freecodecamp Full stack web software certification, udemy.`,

    'cht': `圖形，網頁，用戶體驗和用戶界面設計師，在設計行業中具有良好的工作記錄，搜索引擎優化（SEO）專家，Microsoft Office，戰略規劃和營銷
    數字，免費代碼營全棧Web軟件認證，udemy。`
}

const tbtn = document.getElementById('trans-btn');

tbtn.addEventListener('click', () => {
    const v = document.getElementById('tbt');
    const vbtn = v.options[v.selectedIndex].value;
    console.log(vbtn);
    if (vbtn === 'es') {
        const c = translate.home;
        document.getElementById('home').innerHTML = c;
        const am = translate.sm;
        document.getElementById('am').innerHTML = am;
    } else if (vbtn === 'en') {
        const home = translate.homee;
        document.getElementById('home').innerHTML = home;
        const am = translate.sme;
        document.getElementById('am').innerHTML = am;
    }
});