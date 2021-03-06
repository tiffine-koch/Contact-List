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
  $(this).closest('tr').addClass('.favWith');
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

function sortHeaders(e) {
  var $target = $(e.target);
  console.log($target);
  var $targetClass = $target.attr('class');

  contactArray = _.sortBy(contactArray, $targetClass);

  saveToStorage();
  updateList();
    }
