// Copy link
(function() {
    var copyButton = document.querySelector('.rewards_generate button');
    var copyInput = document.querySelector('.rewards_generate input');
    copyButton.addEventListener('click', function(e) {
      e.preventDefault();
      var text = copyInput.select();
      document.execCommand('copy');
    });
    copyInput.addEventListener('click', function() {
      this.select();
    });
  })();