import Ember from 'ember';
import { Mixin } from 'ember-validations';

const { $ } = Ember;

export default Ember.Controller.extend({
  // actions: {
  //   validateName: function() {
  //     if(encodeURIComponent($('#input-name').val()) === ""){
  //       console.log("ekadsk");
  //     }
  //   },
  //
  //   presentForm: function() {
  //     var inputName = encodeURIComponent($('#input-name').val());
  //     var inputEmail = encodeURIComponent($('#input-email').val());
  //     var inputDate = encodeURIComponent($('#input-date').val());
  //     var inputTitle = encodeURIComponent($('#input-title').val());
  //     var inputComments = encodeURIComponent($('#input-comments').val());
  //     console.log(inputName);
  //     var name = "entry.1759586553";
  //     var email = "entry.234305518";
  //     var date = "entry.122462794";
  //     var title = "entry.881038926";
  //     var comments = "entry.775077118";
  //     var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSexe615O2PtSnqgFfC8WNTjrXVT8J2SXnkByDomiAdGSqrehg/formResponse?";
  //     var submitRef = '&submit=-5013955692810905486';
  //     var submitURL = (baseURL + name + "=" + inputName + "&" + email + "=" + inputEmail + "&" + date + "=" + inputDate + "&" + title + "=" + inputTitle + "&" + comments + "=" + inputComments + submitRef);
  //     console.log(submitURL);
  //     // $('#input-form').attr('action', submitURL);;
  //     // console.log($('#input-form').action);
  //     $.ajax({
  //       method: "POST",
  //       url: submitURL
  //     }).done((data) => {
  //       console.log("Puppy has published.")
  //     });
  //   }
  // }
});
