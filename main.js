$(document).ready(init);

var contactList = [];
var contact = {};

function init() {
  loadFromStorage();
  updateList();

  $('.dropList').on('click', findCat)
  $('#formEntry').submit(newEntry);
  console.log(this);
  $('#catDropDown').on('change', findCat);
  $('table').on('click', '#trash', deleteTrans);
  $('table').on('click', '#fav', attachFav);
}

function removeEntries() {
  $('input:checked').closest('tr').remove();
}

function newEntry(event) {
  event.preventDefault();
  console.log(this);
  contact.name = $('#conEntry').val();
  contact.email = $('#emailEntry').val();
  contact.loc = $('#locEntry').val();
  contact.phone = $('#phoneEntry').val();
  contact.face = $('#faceEntry').val();
  contactList.push(contact);

  var $tr = $('#template').clone();
   $tr.removeAttr('id');
   $tr.children('.name').text(contact.name);
   $tr.children('.email').text(contact.email);
   $tr.children('.location').text(contact.loc);
   $tr.children('.phone').text(contact.phone);
   $tr.children('.fb').text(contact.face);
   // adding switch operator
   // switch (catEntry) {
   //   case 'Bill':
   //     $newAmount.addClass('testWith');
   //     $newAmount.text('-' + Math.abs(amountEntry));
   //     break
   //   case 'Income':
   //     $newAmount.addClass('testDep');
   //     $newAmount.text('+' + Math.abs(amountEntry));
   //     break
   //   case 'Entertainment':
   //     $newAmount.addClass('testWith');
   //     $newAmount.text('-' + Math.abs(amountEntry));
   //     break
   //   case 'Savings':
   //     $newAmount.addClass('testWith');
   //     $newAmount.text('-' + Math.abs(amountEntry));
   //     break
   //   default:
   //     $newAmount.text('');
   //   // console.log(amountEntry);
   //   }

   $('#contactList').append($tr);
   console.log(this);
 }

function deleteTrans() {
  $(this).closest('tr').remove();
}

function attachFav() {
  $(this).closest('tr').addClass('.fav');
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
  localStorage.contacts = JSON.stringify(contacts);
}

function loadFromStorage() {
  if(!localStorage.contacts) {
    localStorage.contacts = '[]';
  }
  contacts = JSON.parse(localStorage.contacts);
}

function updateList() {
  var $contactList = $('#contactList');

$contactList.children().not('#template').remove();

  var $contacts = contacts.map(function(contact, index) {
    var $tr = $('#template').clone();
    $tr.removeAttr('id');
    $tr.children('.name').text(contact.name);
    $tr.children('.email').text(contact.email);
    $tr.children('.location').text(contact.loc);
    $tr.children('.phone').text(contact.phone);
    $tr.children('.fb').text(contact.face);
    return $tr
    });
  $contactList.append($contacts);
}
