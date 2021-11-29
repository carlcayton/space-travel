

$(document).ready(function () {
   function insertImagesToContainers() {
      for (let i = 3; i < 7; i++) {
         for (let j = 1; j < 5; j++) {
            if (j === 1) {
               $(`#dest-shot-${i}`)
                  .find(`.destination-shot.shot${j}`)
                  .addClass('is-last-hovered')
            }


            $(`#dest-shot-${i}`)
               .find(`.destination-shot.shot${j}`)
               .css({
                  'background-image': `url(../assets/images/destination-shots/dest-shot-${i}/shot${j}.jpg)`,
                  // 'background-color': 'Green',
                  'padding-top': `calc(${j === 1 ? 25 : 5}% *(4/4))`,
                  'padding-left': `calc(${j === 1 ? 25 : 5}% *(4/4))`,
                  'border-radius': '50%',
                  'background-size': 'cover',
                  'position': 'absolute',
                  'display': 'flex',
                  'margin-bottom': '10%',
                  'left': `${j * 80}px`,
                  'box-shadow': '0 8px 8px -1px lightblue',

               })
         }
      }
   }

   function addHoverEffectToImages() {
      for (let i = 3; i < 7; i++) {
         for (let j = 1; j < 5; j++) {
            $(`#dest-shot-${i}`)
               .find(`.destination-shot.shot${j}`)
               .hover(
                  function () {
                     $(this).siblings().css({
                        'padding-top': `calc(5% *(4/4))`,
                        'padding-left': `calc(5% *(4/4))`,
                     })
                     $(this).css({
                        'padding-top': `calc(25% *(4/4))`,
                        'padding-left': `calc(25% *(4/4))`,
                     })

                  }
               )
            // End add hover

         }
      }
   }

   insertImagesToContainers()
   addHoverEffectToImages();

})
