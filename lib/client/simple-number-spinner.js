Template.numberSpinner.events({
  'click .sub': function(){
    var spinner = $("#"+this.id);
    var val = parseInt(spinner.val());
    var min = parseInt(spinner.attr('min'));
    if (val > min ) {
      spinner.val(val-1);
    }
  },
  'click .add': function(){
    var spinner = $("#"+this.id);
    var val = parseInt(spinner.val());
    var max = parseInt(spinner.attr('max'));
    if (val < max ) {
      spinner.val(val+1);
    }
  }
});
