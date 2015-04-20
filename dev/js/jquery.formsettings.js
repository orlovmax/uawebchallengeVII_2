;(function ( $, window, document, undefined ) {
  var defaults = {
    formElem: undefined     // form class or ID for validating
                            // else it will validate all forms
  };

  function SimpleForm( element, options ) {
    this.options = $.extend( {}, defaults, options) ;
    this.element = element;
    this.init();
  }

  SimpleForm.prototype.init = function () {
    var $this = $(this.element),
      formElem = this.options.formElem;

    // Custom validator for https://github.com/victorjonsson/jQuery-Form-Validator
    // Test for illegal characters in form fields
    $.formUtils.addValidator({
      name : 'illegal-field',
      validatorFunction : function(val, $el, conf, language) {
        var patternField = '^([^\\<\\>\\"\\%\\;\\:\\(\\)\\&\\!\\@\\#\\$\\^\\*\\+\\=\\\\\/\\|\\{\\}\\[\\]\\,]+)$';
        return new RegExp(patternField).test(val);
      },
      errorMessage : '',
      errorMessageKey: ''
    });
    // Test for illegal characters in form fields
    $.formUtils.addValidator({
      name : 'illegal-text',
      validatorFunction : function(val, $el, conf, language) {
        var patternText = '^([^\\<\\>\\%\\;\\&\\|\\^\\*\\+\\=\\{\\}\\[\\]]+)$';
        return new RegExp(patternText).test(val);
      },
      errorMessage : '',
      errorMessageKey: ''
    });

    // Validate form with https://github.com/victorjonsson/jQuery-Form-Validator
    if(!formElem){
      $.validate({
        addValidClassOnAll : true
      });
    }else{
      $.validate({
        form : formElem,
        addValidClassOnAll : true
      });
    }
  };

  $.fn.simpleForm = function ( options ) {
    return this.each(function () {
      new SimpleForm( this, options );
    });
  };

})( jQuery, window, document );
