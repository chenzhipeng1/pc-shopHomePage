$(function() {
  // 继续往下的代码
  $('.next').on('click', function() {
    $.fn.fullpage.moveSectionDown()
  })
  let flag = 'finish1'
  $('#fullpage').fullpage({
    navigation: true,
    afterLoad: function(a, index, c) {
      if (index === 1) {
        $('.next').show()
      }
      if (index === 2) {
        $('.second h3 .h3img1').show()
      }
      if (index === 8) {
        $('.next').animate({ opacity: 0 })
        // 再来一次的代码
        $('.tryAgain').on('click', function() {
          flag = 'finish1'
          $.fn.fullpage.moveTo(1)
          $('img').attr({ style: '' })
          $('.searchBox2').attr({ style: '' })
          $('.searchBox').attr({ style: '' })
          $('.mask').attr({ style: '' })
          $('.addressee').attr({ style: '' })
          $('.sixth').attr({ style: '' })
          $('.star').attr({ style: '' })
          $('.starBox').attr({ style: '' })
        })
        // 手跟随效果
        $('.eighth .goBuy').hover(
          function() {
            $('.eighth .goBuy').attr(
              'src',
              './img/t1znypfhxdxxcubi7j-389-160.gif'
            )
          },
          function() {
            $('.eighth .goBuy').attr(
              'src',
              './img/t1mswrfxrcxxcfez7j-389-160.png'
            )
          }
        )
        $('div').mousemove(function(event) {
          //div鼠标移动事件
          //鼠标位置获取position
          var e = event || window.event
          var scrollX =
            document.documentElement.scrollLeft || document.body.scrollLeft
          var scrollY =
            document.documentElement.scrollTop || document.body.scrollTop
          var x = e.pageX || e.clientX + scrollX
          var y = e.pageY || e.clientY + scrollY //元素加载位置
          // console.log(x + ',' + y)
          // left: 368px;
          // top: 286px;
          // left: 309px;
          // top: 146px;
          if (y + 0 <= 247) {
            y = 247
          }
          var style =
            'position: relative;left:' +
            (x - 100) +
            'px;top : ' +
            (y - 120) +
            'px'
          // console.log(style);
          $('.eighth .hand').attr('style', style)
        })
      }
    },
    onLeave: function(origin, destination, direction) {
      // 1到2
      if (origin === 1 && destination === 2 && flag === 'finish1') {
        flag = false
        $('.next').animate({ opacity: 0 })
        $('.searchBox')
          .show()
          .animate({ marginLeft: -113 }, 2000, function() {
            $('.searchBox').hide()
            $('.searchBox2').show()

            $('.searchBox2 .text').animate(
              {
                opacity: 1
              },
              1000,
              function() {
                $('.searchBox2').animate({ marginLeft: 177, bottom: 448 }, 1000)
                $('.searchBox2 .text').animate({ height: 14, width: 28 }, 1000)
                $('.search2').animate({ height: 25, width: 100 }, 1000)
                $('.sofas')
                  .show()
                  .animate({ height: 218 }, 1000, function() {
                    flag = 'finish2'
                    $('.next').animate({ opacity: 1 })
                  })
                $('.second h3 .h3img1').animate({ opacity: 0 }, 1000)
                $('.second h3 .h3img2').animate({ opacity: 1 }, 1000)
              }
            )
          })
      }
      if (
        origin === 2 &&
        destination === 3 &&
        direction === 'down' &&
        flag === 'finish2'
      ) {
        // 2到3屏动画
        flag = false
        $('.next').animate({ opacity: 0 })

        $('.second .mask').show()
        flag = 'finish3'
        $('.second .moveSofa')
          .show()
          .animate(
            {
              width: 166,
              marginTop: 800,
              marginLeft: -214
            },
            1500,
            function() {
              $('.third .colorBox .img2').animate(
                { opacity: 1 },
                1000,
                function() {
                  $('.third .colorBox .img1').hide()
                  $('.third .cartBox .img2').animate(
                    { opacity: 1 },
                    1000,
                    function() {
                      $('.next').animate({ opacity: 1 })
                      $('.third .cartBox .img1').hide()
                    }
                  )
                }
              )
            }
          )
      }
      // 3到4屏动画
      if (origin === 3 && destination === 4 && flag === 'finish3') {
        flag = 'finish4'
        $('.next').animate({ opacity: 0 })
        $('.second .moveSofa').css({ transform: 'rotate(16deg)' })
        $('.second .moveSofa').animate(
          { marginTop: 1500, marginLeft: -60 },
          1900,
          function() {
            $('.fourth .moveSofa').show()
            $('.second .moveSofa').hide()
            $('.fourth .bigCart').animate(
              { left: 1800 },
              4000,
              'easeInSine',
              function() {
                $('.fourth .addressee').animate({ opacity: 1 }, 400)
                $('.fourth .addressee .img2').animate(
                  { opacity: 1 },
                  400,
                  function() {
                    $('.next').animate({ opacity: 1 })
                  }
                )
                $('.fourth h3.h3_1').animate({ opacity: 0 }, 400)
                $('.fourth h3.h3_2').animate({ opacity: 1 }, 400)
              }
            )
            $('.fourth .moveSofa').animate({ left: 1800 }, 4000, 'easeInSine')
          }
        )
      }
      // 4到5屏动画
      if (origin === 4 && destination === 5 && flag === 'finish4') {
        flag = 'finish5'
        $('.next').animate({ opacity: 0 })
        $('.fifth .hand').animate(
          {
            top: 402
          },
          1500,
          function() {
            $('.fifth .mouseClick').animate({ opacity: 1 }, function() {
              $('.fifth .mouse').hide()

              $('.fifth .bigSofa').animate({ top: 475 }, 1000, function() {
                $('.fifth .bill').animate({ top: 150 }, 1000, function() {
                  $('.fifth .text ').animate({ opacity: 1 })
                  flag = 'finish5'
                  $('.next').animate({ opacity: 1 })
                })
              })
            })
          }
        )
      }
      // 5到6屏动画
      if (origin === 5 && destination === 6 && flag === 'finish5') {
        flag = 'finish6'
        $('.next').animate({ opacity: 0 })
        $('.sixth .express').animate(
          {
            marginLeft: 190
          },
          1500,
          'linear',
          function() {
            $('.sixth .express').animate(
              { top: 590 },
              1500,
              'linear',
              function() {
                $('.sixth .addressee').animate({ opacity: 1 })
                $('.sixth .text').show()
                $('.sixth .text').animate(
                  { marginLeft: 175 },
                  2000,
                  'easeInOutElastic'
                )
                $('.sixth').animate(
                  { backgroundPositionX: -1050 },
                  3000,
                  function() {
                    $('.sixth .boy').animate(
                      {
                        bottom: 119,
                        marginLeft: 170,
                        width: 250
                      },
                      1000,
                      function() {
                        $('.sixth .boy').animate(
                          { marginLeft: 400 },
                          1000,
                          function() {
                            $('.sixth .girl').animate(
                              {
                                height: 290,
                                marginLeft: 700
                              },
                              1000,
                              function() {
                                $('.sixth .boyText').animate({ opacity: 1 })
                                $('.next').animate({ opacity: 1 })
                              }
                            )
                          }
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        )
        $('.fifth .bigSofa').animate(
          { top: 940, width: 60 },
          920,
          'linear',
          function() {
            $('.fifth .bigSofa').hide()
          }
        )
      }
      // 6到7屏动画
      if (origin === 6 && destination === 7 && flag === 'finish6') {
        flag = false

        $('.next').animate({ opacity: 0 })
        setTimeout(() => {
          $('.next').animate({ opacity: 0 })
          $('.seventh .starBox').animate({ width: 120 }, function() {
            $('.seventh .text').animate({ opacity: 1 })
            $('.next').animate({ opacity: 1 })
          })
        }, 1500)
      }
    }
  })
})
