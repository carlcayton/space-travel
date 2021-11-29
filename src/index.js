

$(document).ready(function () {
   function insertImagesToContainers() {
      for (let i = 3; i < 7; i++) {
         for (let j = 1; j < 5; j++) {
            $(`#dest-shot-${i}`)
               .find(`.destination-shot.shot${j}`)
               .css({

                  'background-image': `url(../assets/images/destination-shots/dest-shot-${i}/shot${j}.jpg)`,
                  // 'background-color': 'Green',
                  'padding-top': `calc(${j === 1 ? 30 : 15}% *(4/4))`,
                  'padding-left': `calc(${j === 1 ? 30 : 15}% *(4/4))`,
                  'border-radius': '50%',
                  'background-size': 'cover',
                  'width': `${j === 1 ? 30 : 10}%`,
                  'height': `${j === 1 ? 50 : 25}`,
                  // 'flex': '1',
                  // 'width': '50%',
                  // 'height': '100%',
                  'position': 'absolute',
                  'margin': '0.5vw auto',
                  // 'top': 0,
                  'left': `${j * 150}px`,
                  'box-shadow': '0 8px 8px -1px lightblue',

               })
         }
      }
   }

   function addHoverEffectToImages() {
      for (let i = 3; i < 7; i++) {
         for (let j = 1; j < 5; j++) {
            // $(`#dest-shot-${i}`)
            //    .find(`.destination-shot.shot${j}`)

         }
      }
   }
   insertImagesToContainers()
})
