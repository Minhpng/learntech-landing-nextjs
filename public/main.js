(function () {

    const faqsList = document.querySelectorAll('.faq-list-item')
    const counterWapper = document.querySelector('.counter-wrapper')
    const countNumberList = document.querySelectorAll('.counter-number')
    const videos = document.querySelectorAll('[video-controler]')

    // VIDEO CONTROLLER
    videos.forEach((video, index) => {
        const videoWrapper = video.closest('.video-wrapper')
        const playBtn = videoWrapper.querySelector('.play-icon')
        videoWrapper.onclick = function () {
            if (!videoWrapper) return

            video.setAttribute("controls", "controls")
            playBtn.style.display = 'none'
            if (!video.paused) {
                video.play()
            } else {
                video.pause()
            }
        }
    })


    faqsList.forEach(ele => {

        ele.classList.remove('expanded')
        ele.onclick = () => {
            faqsList.forEach(e => {
                if (e != ele) {
                    e.classList.remove('expanded')
                }
            })

            ele.classList.toggle('expanded')
        }
    })


    window.addEventListener('scroll', () => {

        if (!isCountReached) {
            if (elementHasReached(counterWapper)) {
                isCountReached = true

                countNumberList
                    .forEach(
                        e => increaseNumber(
                            e,
                            e.dataset.maxNumber,
                            1021
                        ))
            }
        }
    })

    function increaseNumber(element, maxNumber, curr = 0) {
        if (curr > maxNumber) {
            let formated = Number(maxNumber).toLocaleString()
            element.innerText = `${formated}+`
            return
        }
        let formated = curr.toLocaleString()
        element.innerText = `${formated}+`

        setTimeout(() => {
            increaseNumber(element, maxNumber, curr + 3112)
        }, 10)
    }

    let isCountReached = false

    function elementHasReached(e) {
        let rect = e.getBoundingClientRect()
        let isReached = rect.top - window.innerHeight < -40

        return isReached
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // loop: true,
        autoplay: true,

        centeredSlides: true,

        breakpoints: {
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is >= 640px
            // 820: {
            //     slidesPerView: 2,
            //     spaceBetween: 200
            // },
        },
        centeredSlides: true,

        rewind: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


})()