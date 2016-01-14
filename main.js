$(document).ready(init);

var contactArray = [];

function init() {
  loadFromStorage();
  updateList();

  $('.dropList').on('click', findCat)
  $('#formEntry').submit(newEntry);
  console.log(this);
  $('#catDropDown').on('change', findCat);
  $('table').on('click', '#trash', deleteTrans);
  $('table').on('click', '#fav', attachFav);
  $('table').on('dblclick', 'th', sortHeaders);

}

function removeEntries() {
  $('input:checked').closest('tr').remove();
}

function newEntry(event) {
  // event.preventDefault();
  console.log(this);

  var name = $('#conEntry').val();
  var email = $('#emailEntry').val();
  var location = $('#locEntry').val();
  var phone = $('#phoneEntry').val();
  var face = $('#faceEntry').val();
  // contactList.push(contact);

 var contact = {
   "name": name,
   "email": email,
   "location": location,
   "phone": phone,
   "face":  face,
  // contact.name = $('#conEntry').val();
  // contact.email = $('#emailEntry').val();
  // contact.loc = $('#locEntry').val();
  // contact.phone = $('#phoneEntry').val();
  // contact.face = $('#faceEntry').val();
 };
  contactArray.push(contact);

  var $tr = $('#template').clone();
   $tr.removeAttr('id');
   $tr.children('.name').text(contact.name);
   $tr.children('.email').text(contact.email);
   $tr.children('.location').text(contact.loc);
   $tr.children('.phone').text(contact.phone);
   $tr.children('.face').text(contact.face);

  saveToStorage();
  updateTable();
  console.log(this);
 }

function deleteTrans() {
  $(this).closest('tr').remove();
}

function attachFav() {
  $(this).closest('tr').addClass('.fav');
  console.log(this);
}

function findCat(event) {
  event.preventDefault();
  var text = $(this).text();
  $('#catEntry').text(text).append('<span class="caret"></span>');
  console.log(text);
}

function addContact() {
  var contact = $('#formEntry').val()
  contactList.push(contact);

  saveToStorage();
  updateList();
}

function saveToStorage() {
  localStorage.contactArray = JSON.stringify(contactArray);
}

function loadFromStorage() {
  if(!localStorage.contactArray) {
    localStorage.contactArray = '[]';
  }
  contactArray = JSON.parse(localStorage.contactArray);
}

function updateList() {
var contactList = $('#contactList');

contactList.children().not('#template').remove();

  var $contacts = contactArray.map(function(contact, index) {
    var $tr = $('#template').clone();
    $tr.removeAttr('id');
    $tr.children('.name').text(contact.name);
    $tr.children('.email').text(contact.email);
    $tr.children('.location').text(contact.location);
    $tr.children('.phone').text(contact.phone);
    $tr.children('.face').text(contact.face);
    return $tr
    });
  contactList.append($contacts);
}

// function sortHeaders(event) {
//     var $targetId = $(event.target).attr('id');
//     if($targetId == 'sortN') {
//       contactList = _.sortBy(contactList, function(o) {
//         return o.name
//       });
//     }
//     if($targetId == 'sortE') {
//       contactList = _.sortBy(contactList, function(o) {
//         return o.email;
//       });
//     }
//     if($targetId == 'sortL') {
//       contactList = _.sortBy(contactList, function(o) {
//         return o.location;
//       });
//     }
//     if($targetId == 'sortP') {
//       contactList = _.sortBy(contactList, function(o) {
//         return o.phone;
//       });
//     }
//     if($targetId == 'sortF') {
//       contactList = _.sortBy(contactList, function(o) {
//         return o.face;
//         console.log('1');
//       });
//     }
//     console.log('2');
//     saveToStorage();
//     updateList();
//   }

function sortHeaders(e) {
    var $target = $(e.target);
    console.log($target);
    var $targetClass = $target.attr('class');

    contactArray = _.sortBy(contactArray, $targetClass);

    saveToStorage();
    updateList();
    }
