"use strict";

$(document).ready(function () {
  function insertImagesToContainers() {
    for (var i = 3; i < 7; i++) {
      for (var j = 1; j < 5; j++) {
        $("#dest-shot-".concat(i)).find(".destination-shot.shot".concat(j)).css({
          'background-image': "url(../assets/images/destination-shots/dest-shot-".concat(i, "/shot").concat(j, ".jpg)"),
          // 'background-color': 'Green',
          'border-radius': '50%',
          'background-size': 'cover',
          'width': "".concat(j === 1 ? 20 : 10, "vw"),
          'height': "".concat(j === 1 ? 20 : 35, "vh"),
          'position': 'absolute',
          'margin': '0.5vw auto',
          'top': 0,
          'left': "".concat(j * 100, "px"),
          'box-shadow': '0 8px 8px -1px lightblue'
        });
      }
    }
  }

  function addHoverEffectToImages() {
    for (var i = 3; i < 7; i++) {
      for (var j = 1; j < 5; j++) {// $(`#dest-shot-${i}`)
        //    .find(`.destination-shot.shot${j}`)
      }
    }
  }

  insertImagesToContainers();
});