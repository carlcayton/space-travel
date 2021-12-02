
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
                  'padding-top': `calc(${j === 1 ? 25 : 5}% )`,
                  'padding-left': `calc(${j === 1 ? 25 : 5}%)`,
                  'border-radius': '50%',
                  'background-size': 'cover',
                  'position': 'absolute',
                  'display': 'flex',
                  'margin-bottom': '10%',
                  'margin-left': '10%',
                  'left': `${j * 2}%`,
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

   const JSON_PATH = '../assets/data/info.json'
   function insertInfo() {
      $.getJSON(JSON_PATH, function (data) {
         const allDestinationData = data.destinationData;
         for (let i = 0; i < allDestinationData.length; i++) {
            let counter = 0;
            const destinationData = allDestinationData[i]
            //Traverse through the object using keys to access the value later
            for (var key in destinationData) {
               if (key === 'id') continue
               $(`#destination-info-${i}`).children().eq(counter).text(
                  //Append Distance from earth if the current counter is at index 2
                  `${counter == 2 ? 'Distance from Earth: ' : ''} ${destinationData[key]}`
               )
               counter++;
            }
         }
      })
   }

   insertImagesToContainers()
   addHoverEffectToImages();
   insertInfo();

})
