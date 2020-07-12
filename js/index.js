$(function() {
  // 继续往下的代码
  $('.next').on('click', function() {
    $.fn.fullpage.moveSectionDown()
  })
  // 所有动画控制阀
  let flag = 'finish1'
  // 单独动画控制阀
  flag2 = true
  flag4=true
  flag6 = true
  flag7 = true
  flag5 = true
  $('#fullpage').fullpage({
    navigation: true,
    keyboardScrolling:false,
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
          window.location.reload()
          // flag = 'finish1'
          // $('img').attr({ style: '' })
          // $('.searchBox2').attr({ style: '' })
          // $('.searchBox').attr({ style: '' })
          // $('.mask').attr({ style: '' })
          // $('.addressee').attr({ style: '' })
          // $('.sixth').attr({ style: '' })
          // $('.star').attr({ style: '' })
          // $('.starBox').attr({ style: '' })
          // $.fn.fullpage.moveTo(1)
        })
        // 开始购物按钮的hover效果
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
        $('.eighth').mousemove(function(event) {
          console.log(event,'event')
          //鼠标位置获取position
          var e = event || window.event
          var x = e.clientX 
          var y = e.clientY 
          var style =
            'position: absolute;left:' +
            (x - 100) +
            'px;top : ' +
            (y + 30) +
            'px'
          $('.eighth .hand').attr('style', style)
        })
      }
    },
    onLeave: function(origin, destination, direction) {
      // 到2动画
      if (destination === 2 && flag === 'finish1') {
        // flag2 = false
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
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
                $('.search2').animate({ height: 20, width: 100 }, 1000)
                $('.sofas')
                  .show()
                  .animate({ height: 218 }, 1000, function() {
                    $('.second h3 .h3img1').animate({ opacity: 0 }, 1000)
                    $('.second h3 .h3img2').animate({ opacity: 1 }, 1000)
                    flag = 'finish2'
                    $('.next').show()
                    $('.next').animate({ opacity: 1 })
                  })
              }
            )
          })
      }
      if (origin === 2 && destination === 3 && flag === 'finish2') {
        // 2到3屏动画
        // flag = 'finish3'
        // let h = $(window).height()
        // if (h <= 600) {
        //   h = 600
        // }
        // $(window).resize(function() {
        //   h = $(window).height()
        //   if (h <= 600) {
        //     h = 600
        //   }
        //   $('.second .moveSofa').css({ bottom: -(h - 258) })
        // })
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
        $('.second .mask').show()
        $('.second .moveSofa')
          .show()
          .animate(
            {
              width: 215,
              bottom: '-50%',
              marginLeft: -238,
              marginBottom:-50
            },
            1500,
            function() {
              $('.third .colorBox .img2').animate(
                { opacity: 1 },
                500,
                function() {
                  $('.third .colorBox .img1').hide()
                  $('.third .cartBox .img2').animate(
                    { opacity: 1 },
                    500,
                    function() {
                      $('.third .cartBox .img1').hide()
                      flag = 'finish3'
                      $('.next').show()
                      $('.next').animate({ opacity: 1 })
                    }
                  )
                }
              )
            }
          )
      }
      // 3到4屏动画
      if (destination === 4 && flag === 'finish3' && flag4) {
        flag4=false
        const h = $(window).height()
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
        $('.second .moveSofa').css({ transform: 'rotate(16deg)' })
        $('.second .moveSofa').animate(
          { bottom: -(2 * h - 390), marginLeft: -105 },
          1900,
          'linear',
          function() {
            $('.fourth .fourth_sofa')
              .show()
              .animate(
                { bottom: 270, marginLeft: -90 },
                365,
                'linear',
                function() {
                  $('.fourth .fourth_sofa').animate(
                    { marginLeft: 1400 },
                    4000,
                    'easeInSine'
                  )
                  $('.fourth .bigCart').animate(
                    { marginLeft: 1400 },
                    3870,
                    'easeInSine',
                    function() {
                      $('.fourth .addressee').animate({ opacity: 1 }, 400)
                      $('.fourth .addressee .img2').animate(
                        { opacity: 1 },
                        400,
                        function() {
                          $('.fourth h3.h3_1').animate({ opacity: 0 }, 400)
                          $('.fourth h3.h3_2').animate({ opacity: 1 }, 400,function() {
                            flag = 'finish4'
                            $('.next').show()
                            $('.next').animate({ opacity: 1 })
                          })
                        }
                      )
                    }
                  )
                }
              )
            $('.second .moveSofa').hide()
          }
        )
      }
      // 到5屏动画
      if (destination === 5 && flag5 === true && flag==='finish4') {
        flag5 = false
        // flag = 'finish5'
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
        $('.fifth .hand').animate(
          {
            top: 402
          },
          1500,
          function() {
            $('.fifth .mouseClick').animate({ opacity: 1 }, function() {
              $('.fifth .mouse').hide()
              $('.fifth .bigSofa').animate({ top: 520 }, 1000, function() {
                $('.fifth .bill').animate({ top: 200 }, 1000, function() {
                  $('.fifth .text ').addClass('move')+
                  $('.next').show()
                  $('.next').animate({ opacity: 1 })
                  flag = 'finish5'
                  $('.fifth .bigSofa').hide()
                  $('.fifth .fifth_bigSofa').show()
                })
              })
            })
          }
        )
      }
      // 到6屏动画
      if (destination === 6 && flag6 === true && flag==='finish5') {
        flag6 = false
        $('.fifth .bigSofa').hide()
        $('.fifth .fifth_bigSofa').show()
        let h = $(window).height()
        // if (h <= 600) {
        //   h = 588
        // }
        // $(window).resize(function() {
        //   h = $(window).height()
        //   if (h <= 600) {
        //     h = 588
        //   }
        //   $('.sixth .express').css({ top: h - 123 })
        // })
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
        $('.fifth .fifth_bigSofa').animate(
          { top: h + 230, width: 60 },
          920,
          'linear',
          function() {
            $('.fifth .fifth_bigSofa')
              .hide()
              // .css({ opacity: 0 })
          }
        )
        $('.sixth .express').animate(
          {
            marginLeft: 190
          },
          1500,
          'linear',
          function() {
            $('.sixth .express').animate(
              { top: h - 123 },
              1500,
              'linear',
              function() {
                $('.sixth .express').hide()
                $('.sixth .addressee').animate({ opacity: 1 })
                $('.sixth .text').show()
                $('.sixth .text').animate(
                  { marginLeft: 175 },
                  2000,
                  'easeInOutElastic'
                )
                $('.sixth').animate(
                  { backgroundPositionX: -960 },
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
                                flag = 'finish6'
                                $('.next').show()
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
      }
      // 到7屏动画
      if (destination === 7 && flag7 === true &&flag === 'finish6') {
        flag7 = false
        $('.next').animate({ opacity: 0 })
        $('.next').hide()
        flag = false

        // $('.seventh .starBox').animate({ opacity: 1 }, 1500, function() {
          $('.seventh .starBox').delay(1500).animate({ width: 120 }, 2000, function() {
            $('.seventh .text').animate({ opacity: 1 })
            $('.next').show()
            $('.next').animate({ opacity: 1 })
          })
        // })
      }
    }
  })
})
