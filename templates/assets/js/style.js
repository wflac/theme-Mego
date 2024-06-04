function updateDateAndWeek() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    let weekday = '';

    try {
        weekday = today.toLocaleDateString('zh-CN', { weekday: 'long' });
    } catch (error) {
        console.error("获取星期失败：", error);
        weekday = "未知";
    }

    if (document.querySelector('.calendar-date')) {
        document.querySelector('.calendar-date').textContent = day;
    }

    if (document.querySelector('.calendar-event')) {
        document.querySelector('.calendar-event').textContent = `${year}年${month}月${day}日 ${weekday}`;
    }

};
updateDateAndWeek();
function Tocbot() {

    const content = document.querySelector('.post-content');
    const titles = content?.querySelectorAll('p ,h1 ,h2, h3, h4');
    if (!titles?.length) {
        const tocContainer = document.querySelector(".tocbot");
        tocContainer?.parentElement?.remove();
        return;
    }
    tocbot.init({
        tocSelector: '#toc',
        contentSelector: '.post-content',
        headingSelector: 'h2, h3, h4',
        collapseDepth: 4,
        headingsOffset: 100,
        scrollSmooth: true,
        scrollSmoothOffset: 0,
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.swiper');
    // 检查swiperContainer是否存在
    if (!swiperContainer) {
        return;
    }
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    // 初始化Swiper
    const swiper = new Swiper(swiperContainer, {
        // 配置选项
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 添加事件监听器
    swiperContainer.addEventListener('mouseover', showButtons);
    swiperContainer.addEventListener('mouseout', hideButtons);

    function showButtons() {
        nextButton.style.display = 'inline-block'; // 或 'block'
        prevButton.style.display = 'inline-block'; // 或 'block'
    }

    function hideButtons() {
        nextButton.style.display = 'none';
        prevButton.style.display = 'none';
    }
});
