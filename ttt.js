  $(document).on('ready', function () {
    var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    var turn = 0;

    function checkWinner() {
      for(var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        if (($('.x').hasClass(combo[0]) && $('.x').hasClass(combo[1]) && $('.x').hasClass(combo[2])) ||
        ($('.O').hasClass(combo[0]) && $('.o').hasClass(combo[1]) && $('.o').hasClass(combo[2]))) {
          alert ("You Won");
          return true
        }
          else {
            return false 
        }
      }
    }

    function tieGame(){
      if (turn ===9 && checkWinner() === false){
        alert("tie game");
      }
    }

      $('td').on('click', function () {

        if (turn % 2 === 0) {
          $(this).html("X").addClass("x");
        } else {
          $(this).html("O").addClass("o");
        }

        $(this).off('click');
        turn++;

        checkWinner()
        tieGame()
      });
});
