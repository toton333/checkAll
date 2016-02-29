$(document).ready(function(){
    
    $('#selectAll').click(function(){
        
    $('.children').prop('checked', this.checked);
    });

    
    $('.children').change(function(){
    var check = ($('.children').filter(':checked').length == $('.children').length);

    
      $('#selectAll').prop('checked', check);

    });

});