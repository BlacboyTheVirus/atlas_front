
$(document).ready(function () {


// Install numeric input filters.
//Discount 0.0-99.0 Decimal
$("#discount").inputFilter(function(value) {
    return /^\d*[.]?\d{0,1}$/.test(value) && (value === "" || parseFloat(value) <= 99); 
});


//Positive Integer
$("#showBuy1, #showBuy2, #promoflyerPages").inputFilter(function(value) {
  return /^\d*$/.test(value); 
});


  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Country and state lists
var country = [
  [""],
  ["Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Mnorthwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"],
  ["Alabama","Alaska","Arizona","California","Colorado","Connecticut","Delware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Loiusiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hamshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
];

$("#country").on("change",function () {
    var cntry = $(this).val();

    switch (cntry) {
      case "":
        index = 0;
        break;
      
      case "Canada":
        index = 1;
        break;

      case "USA":
        index = 2;
        break;
    }

    $("#state").empty();
    $("#state").append("<option value=''>Choose...</option>");
    
    for (c of country[index]){
        $("#state").append("<option>"+c+"</option>");
    }


});

// dating terms
$("#dating").on("change",function () {
  var dating = $(this).val();
  if(dating == "others"){
      $("#error_datingOthers").text('');
      $("#datingOthers").parent().show();
  }else{
      $("#datingOthers").parent().hide();
      
  }
});


// incentive
$("#incentive").on("change",function () {
  var incentive = $(this).val();
  if(incentive == "others"){
      $("#error_incentiveOthers").text('');
      $("#incentiveOthers").parent().show();
  }else{
      $("#incentiveOthers").parent().hide();
  }
});




$("input[name='promoFlyer']").on("click", function () {
  if($(this).prop("checked") && $(this).val()=="Yes"){
      $("#promoflyerPages").show();
  }else{
      $("#promoflyerPages").hide();
  }
});



//////////////////////////////////////////////////////////////////////////////////////////////////  
// add participants
  $("#addParticipants").click(function () {
  
    var html = $('#participantTemplate').html();
    $('#newParticipants').append(html);
    
    
  });

  // remove participants
  $(document).on('click', '#removeParticipants', function () {
      $(this).closest('#inputFormParticipants').remove();
  });



//////////////////////////////////////////////////////////////////////////////////////////////////  
// add Hotbuys
$("#addHotbuys").click(function () {
  var html = $('#hotbuyTemplate').html();
  $('#newHotbuys').append(html);
  
      //filter Hotbuys net cost or discount
      $(".hotbuysNetcost").inputFilter(function(value) {
        return /^\d*[.]?\d{0,2}$/.test(value); 
      });

});

// remove Hotbuys
$(document).on('click', '#removeHotbuys', function () {
    $(this).closest('#inputFormHotbuys').remove();
});



//////////////////////////////////////////////////////////////////////////////////////////////////  
// add Hotbuys
$("#addFreeproducts").click(function () {
  var html = $('#freeProductsTemplate').html();
  $('#newFreeproducts').append(html);
});

// remove Hotbuys
$(document).on('click', '#removeFreeproducts', function () {
    $(this).closest('#inputFreeproducts').remove();
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// F I R S T  P A N E  Submission

  $('#nextOne').click(function(){
    //check if all fields are filled
    var error_address = "";
    var error_country = "";
    var error_state = "";
    var error_city = "";
    var error_zipCode = "";
    var error_primaryContact = "";
    var error_primaryEmail = "";
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var error_primaryTelephone = "";
    var error_primaryMobile = "";
    var error_primaryFax = "";

    var errors = 0;


    if ($.trim($("#address").val()).length == 0) {
      error_address = "Address is required";
      $("#error_address").text(error_address);
      $("#address").addClass("has-error");
      errors++;
    } else {
      error_address = "";
      $("#error_address").text(error_address);
      $("#address").removeClass("has-error");
    }

    if ($("#country").val().length == 0) {
      error_country = "Country is required";
      $("#error_country").text(error_country);
      $("#country").addClass("has-error");
      errors++;
    } else {
      error_country = "";
      $("#error_country").text(error_country);
      $("#country").removeClass("has-error");
    }

    if ($.trim($("#state").val()).length == 0) {
      error_state = "State is required";
      $("#error_state").text(error_state);
      $("#state").addClass("has-error");
      errors++;
    } else {
      error_state = "";
      $("#error_state").text(error_state);
      $("#state").removeClass("has-error");
    }

    if ($.trim($("#city").val()).length == 0) {
      error_city = "City is required";
      $("#error_city").text(error_city);
      $("#city").addClass("has-error");
      errors++;
    } else {
      error_city = "";
      $("#error_city").text(error_city);
      $("#city").removeClass("has-error");
    }


    if ($.trim($("#zipCode").val()).length == 0) {
      error_zipCode = "Zip Code is required";
      $("#error_zipCode").text(error_zipCode);
      $("#zipCode").addClass("has-error");
      errors++;
    } else {
      error_zipCode = "";
      $("#error_zipCode").text(error_zipCode);
      $("#zipCode").removeClass("has-error");
    }

    if ($.trim($("#primaryContact").val()).length == 0) {
      error_primaryContact = "Contact is required";
      $("#error_primaryContact").text(error_primaryContact);
      $("#primaryContact").addClass("has-error");
      errors++;
    } else {
      error_primaryContact = "";
      $("#error_primaryContact").text(error_primaryContact);
      $("#primaryContact").removeClass("has-error");
    }

    if ($.trim($("#primaryEmail").val()).length == 0) {
      error_primaryEmail = "Email is required";
      $("#error_primaryEmail").text(error_primaryEmail);
      $("#primaryEmail").addClass("has-error");
      errors++;
    } else {
      error_primaryEmail = "";
      $("#error_primaryEmail").text(error_primaryEmail);
      $("#primaryEmail").removeClass("has-error");
    }

    if ($.trim($("#primaryTelephone").val()).length == 0) {
      error_primaryTelephone = "Telephone is required";
      $("#error_primaryTelephone").text(error_primaryTelephone);
      $("#primaryTelephone").addClass("has-error");
      errors++;
    } else {
      error_primaryTelephone = "";
      $("#error_primaryTelephone").text(error_primaryTelephone);
      $("#primaryTelephone").removeClass("has-error");
    }

     
    if ($('#newParticipants input[required]').length == 0){
          error_newParticipants = "";
          $("#error_newParticipants").text(error_newParticipants);
          $(this).removeClass("has-error");
    }

    $('#newParticipants input[required]').each(function(){
        if($(this).val()==""){
          error_newParticipants = "Fill all Participant's details";
          $("#error_newParticipants").text(error_newParticipants);
          $(this).addClass("has-error");
          errors++;
        } else {
          error_newParticipants = "";
          $("#error_newParticipants").text(error_newParticipants);
          $(this).removeClass("has-error");
        }
    });

    if (!errors){
     // $('form').submit();

      $('#supplier-tab').removeClass('active');
      $('#supplier-tab').addClass('disabled');
      $('#supplier').removeClass('active');
      
      $('#specials-tab').addClass('active');
      $('#specials-tab').removeClass('disabled');
      $('#specials').addClass('active show in');

      $('html, body').animate({
        scrollTop: 0
      }, 100);

    } else {

      $.alert({
        columnClass: 'col-md-6',
        backgroundDismiss: true,
        onClose: function () {
            $('html, body').animate({
              scrollTop: $(".has-error").offset().top-40
            }, 100);
         },
        icon: 'fa fa-warning',
        title: 'Encountered an error!',
        content: 'Some required fields have not been filled. ',
        type: 'red',
        typeAnimated: true,
      
      });
       
    }


  });


////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// S E C O N D  P A N E  Submission
$('#nextTwo').click(function(){
  //check if all fields are filled
  var error_discount = "";
  var error_discountAdditional = "";
  var error_dating = "";
  var error_datingOthers = "";
  var error_showBuy1 = "";
  var error_showBuy2 = "";
  var error_incentive = "";
  var error_incentiveOthers = "";

  var errors = 0;


  if ($.trim($("#discount").val()).length == 0) {
    error_discount = "Discount is required";
    $("#error_discount").text(error_discount);
    $("#discount").addClass("has-error");
    errors++;
  } else {
    error_discount = "";
    $("#error_discount").text(error_discount);
    $("#discount").removeClass("has-error");
  }

  if ($.trim($("#discountAdditional").val()).length == 0) {
    error_discountAdditional = "Additional Information is required";
    $("#error_discountAdditional").text(error_discountAdditional);
    $("#discountAdditional").addClass("has-error");
    errors++;
  } else {
    error_error_discountAdditional = "";
    $("#error_discountAdditional").text(error_discountAdditional);
    $("#discountAdditional").removeClass("has-error");
  }

  if ($.trim($("#dating").val()).length == 0) {
    error_dating = "Dating is required";
    $("#error_dating").text(error_dating);
    $("#dating").addClass("has-error");
    errors++;
  } else {
    error_dating = "";
    $("#error_dating").text(error_dating);
    $("#dating").removeClass("has-error");

  }

  if ( ($("#dating").val()=="others") && ($.trim($("#datingOthers").val()).length == "") ) {
    error_datingOthers = "Other dating value is required";
    $("#error_datingOthers").text(error_datingOthers);
    $("#datingOthers").addClass("has-error");
    errors++;
  } else {
    error_datingOthers = "";
    $("#error_datingOthers").text(error_dating);
    $("#datingOthers").removeClass("has-error");
  }


  if ($.trim($("#showBuy1").val()).length == 0) {
    error_showBuy1 = "1st Show Buy is required";
    $("#error_showBuy1").text(error_showBuy1);
    $("#showBuy1").addClass("has-error");
    errors++;
  } else {
    error_showBuy1 = "";
    $("#error_showBuy1").text(error_showBuy1);
    $("#showBuy1").removeClass("has-error");
  }

  if ($.trim($("#showBuy2").val()).length == 0) {
    error_showBuy2 = "2nd Show Buy is required";
    $("#error_showBuy2").text(error_showBuy2);
    $("#showBuy2").addClass("has-error");
    errors++;
  } else {
    error_showBuy2 = "";
    $("#error_showBuy2").text(error_showBuy2);
    $("#showBuy2").removeClass("has-error");
  }


  if ($.trim($("#incentive").val()).length == 0) {
    error_incentive = "Incentive is required";
    $("#error_incentive").text(error_incentive);
    $("#incentive").addClass("has-error");
    errors++;
  } else {
    error_incentive = "";
    $("#error_incentive").text(error_incentive);
    $("#incentive").removeClass("has-error");

  }

  if ( ($("#incentive").val()=="others") && ($.trim($("#incentiveOthers").val()).length == "") ) {
    error_incentiveOthers = "Other value is required";
    $("#error_incentiveOthers").text(error_incentiveOthers);
    $("#incentiveOthers").addClass("has-error");
    errors++;
  } else {
    error_incentiveOthers = "";
    $("#error_incentiveOthers").text(error_incentive);
    $("#incentiveOthers").removeClass("has-error");
  }


  if ($('#newHotbuys input[required]').length == 0){
    error_hotbuys = "";
    $("#error_hotbuys").text(error_hotbuys);
    $(this).removeClass("has-error");
  }

  $('#newHotbuys input[required]').each(function(){
    if($(this).val()==""){
      error_hotbuys = "Fill all Hotbuy details";
      $("#error_hotbuys").text(error_hotbuys);
      $(this).addClass("has-error");
      errors++;
    } else {
      error_hotbuys = "";
      $("#error_hotbuys").text(error_hotbuys);
      $(this).removeClass("has-error");
    }
  });

  if ($('#newFreeproducts input[required]').length == 0){
    error_freeproducts = "";
    $("#error_freeproducts").text(error_freeproducts);
    $(this).removeClass("has-error");
  }

  $('#newFreeproducts input[required]').each(function(){
    if($(this).val()==""){
      error_freeproducts = "Fill all Free Products details";
      $("#error_freeproducts").text(error_freeproducts);
      $(this).addClass("has-error");
      errors++;
    } else {
      error_freeproducts = "";
      $("#error_freeproducts").text(error_freeproducts);
      $(this).removeClass("has-error");
    }
  });


  if ($.trim($("#promoFlyer").val()).length == 0) {
    error_primaryContact = "Contact is required";
    $("#error_primaryContact").text(error_primaryContact);
    $("#primaryContact").addClass("has-error");
    errors++;
  } else {
    error_primaryContact = "";
    $("#error_primaryContact").text(error_primaryContact);
    $("#primaryContact").removeClass("has-error");
  }





 

  if (!errors){
   // $('form').submit();

   alert('OK');

    $('#supplier-tab').removeClass('active');
    $('#supplier-tab').addClass('disabled');
    $('#supplier').removeClass('active');
    
    $('#specials-tab').addClass('active');
    $('#specials-tab').removeClass('disabled');
    $('#specials').addClass('active show in');

    $('html, body').animate({
      scrollTop: 0
    }, 100);

  } else {

    $.alert({
      columnClass: 'col-md-6',
      backgroundDismiss: true,
      onClose: function () {
          $('html, body').animate({
            scrollTop: $(".has-error").offset().top-40
          }, 100);
       },
      icon: 'fa fa-warning',
      title: 'Encountered an error!',
      content: 'Some required fields have not been filled. ',
      type: 'red',
      typeAnimated: true,
    
    });
     
  }


});


////////////////////////////////////////////////////



//Plan selection
$(".card").on("click", function () {
  $(".card").removeClass("bg-card-selected");
  $(this).find("input[name='plan']").prop("checked", true);
  $(this).addClass("bg-card-selected");
  //var plan = $("input[name='plan']:checked").val();
});


  // $("#btn_login_details").click(function () {
  //   var error_email = "";
  //   var error_password = "";
  //   var filter =
  //     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //   if ($.trim($("#email").val()).length == 0) {
  //     error_email = "Email is required";
  //     $("#error_email").text(error_email);
  //     $("#email").addClass("has-error");
  //   } else {
  //     if (!filter.test($("#email").val())) {
  //       error_email = "Invalid Email";
  //       $("#error_email").text(error_email);
  //       $("#email").addClass("has-error");
  //     } else {
  //       error_email = "";
  //       $("#error_email").text(error_email);
  //       $("#email").removeClass("has-error");
  //     }
  //   }

  //   if ($.trim($("#password").val()).length == 0) {
  //     error_password = "Password is required";
  //     $("#error_password").text(error_password);
  //     $("#password").addClass("has-error");
  //   } else {
  //     error_password = "";
  //     $("#error_password").text(error_password);
  //     $("#password").removeClass("has-error");
  //   }

  //   if (error_email != "" || error_password != "") {
  //     return false;
  //   } else {
  //     $("#list_login_details").removeClass("active active_tab1");
  //     $("#list_login_details").removeAttr("href data-toggle");
  //     $("#login_details").removeClass("active");
  //     $("#list_login_details").addClass("inactive_tab1");
  //     $("#list_personal_details").removeClass("inactive_tab1");
  //     $("#list_personal_details").addClass("active_tab1 active");
  //     $("#list_personal_details").attr("href", "#personal_details");
  //     $("#list_personal_details").attr("data-toggle", "tab");
  //     $("#personal_details").addClass("active in");
  //   }
  // });

  // $("#previous_btn_personal_details").click(function () {
  //   $("#list_personal_details").removeClass("active active_tab1");
  //   $("#list_personal_details").removeAttr("href data-toggle");
  //   $("#personal_details").removeClass("active in");
  //   $("#list_personal_details").addClass("inactive_tab1");
  //   $("#list_login_details").removeClass("inactive_tab1");
  //   $("#list_login_details").addClass("active_tab1 active");
  //   $("#list_login_details").attr("href", "#login_details");
  //   $("#list_login_details").attr("data-toggle", "tab");
  //   $("#login_details").addClass("active in");
  // });

  // $("#btn_personal_details").click(function () {
  //   var error_first_name = "";
  //   var error_last_name = "";

  //   if ($.trim($("#first_name").val()).length == 0) {
  //     error_first_name = "First Name is required";
  //     $("#error_first_name").text(error_first_name);
  //     $("#first_name").addClass("has-error");
  //   } else {
  //     error_first_name = "";
  //     $("#error_first_name").text(error_first_name);
  //     $("#first_name").removeClass("has-error");
  //   }

  //   if ($.trim($("#last_name").val()).length == 0) {
  //     error_last_name = "Last Name is required";
  //     $("#error_last_name").text(error_last_name);
  //     $("#last_name").addClass("has-error");
  //   } else {
  //     error_last_name = "";
  //     $("#error_last_name").text(error_last_name);
  //     $("#last_name").removeClass("has-error");
  //   }

  //   if (error_first_name != "" || error_last_name != "") {
  //     return false;
  //   } else {
  //     $("#list_personal_details").removeClass("active active_tab1");
  //     $("#list_personal_details").removeAttr("href data-toggle");
  //     $("#personal_details").removeClass("active");
  //     $("#list_personal_details").addClass("inactive_tab1");
  //     $("#list_contact_details").removeClass("inactive_tab1");
  //     $("#list_contact_details").addClass("active_tab1 active");
  //     $("#list_contact_details").attr("href", "#contact_details");
  //     $("#list_contact_details").attr("data-toggle", "tab");
  //     $("#contact_details").addClass("active in");
  //   }
  // });

  // $("#previous_btn_contact_details").click(function () {
  //   $("#list_contact_details").removeClass("active active_tab1");
  //   $("#list_contact_details").removeAttr("href data-toggle");
  //   $("#contact_details").removeClass("active in");
  //   $("#list_contact_details").addClass("inactive_tab1");
  //   $("#list_personal_details").removeClass("inactive_tab1");
  //   $("#list_personal_details").addClass("active_tab1 active");
  //   $("#list_personal_details").attr("href", "#personal_details");
  //   $("#list_personal_details").attr("data-toggle", "tab");
  //   $("#personal_details").addClass("active in");
  // });

  // $("#btn_contact_details").click(function () {
  //   var error_address = "";
  //   var error_mobile_no = "";
  //   var mobile_validation = /^\d{10}$/;
  //   if ($.trim($("#address").val()).length == 0) {
  //     error_address = "Address is required";
  //     $("#error_address").text(error_address);
  //     $("#address").addClass("has-error");
  //   } else {
  //     error_address = "";
  //     $("#error_address").text(error_address);
  //     $("#address").removeClass("has-error");
  //   }

  //   if ($.trim($("#mobile_no").val()).length == 0) {
  //     error_mobile_no = "Mobile Number is required";
  //     $("#error_mobile_no").text(error_mobile_no);
  //     $("#mobile_no").addClass("has-error");
  //   } else {
  //     if (!mobile_validation.test($("#mobile_no").val())) {
  //       error_mobile_no = "Invalid Mobile Number";
  //       $("#error_mobile_no").text(error_mobile_no);
  //       $("#mobile_no").addClass("has-error");
  //     } else {
  //       error_mobile_no = "";
  //       $("#error_mobile_no").text(error_mobile_no);
  //       $("#mobile_no").removeClass("has-error");
  //     }
  //   }
  //   if (error_address != "" || error_mobile_no != "") {
  //     return false;
  //   } else {
  //     $("#btn_contact_details").attr("disabled", "disabled");
  //     $(document).css("cursor", "prgress");
  //     $("#register_form").submit();
  //   }
  // });





});



// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));
