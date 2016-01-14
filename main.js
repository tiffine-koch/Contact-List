$(document).ready(init);

function init() {

  $('.dropList').on('click', findCat)
  $('#formEntry').submit(newEntry);
  $('#catDropDown').on('change', findCat);
  $('table').on('click', '#trash', deleteTrans);
  //sort on click indiv headers
  // console.log('load');
}

function removeEntries() {
  $('input:checked').closest('tr').remove();
}

function newEntry() {
  event.preventDefault();

  var conName = $('#conEntry').val();
  var email = $('#emailEntry').val();
  var loc = $('#locEntry').val();
  var phone = $('#phoneEntry').val();
  var face = $('#faceEntry').val();


  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.name').text(conName);
  $tr.children('.email').text(email);
  $tr.children('.location').text(loc);
  $tr.children('.phone').text(phone);
  $tr.children('.fb').text(face);
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
  // debugger;
  $('#list').prepend($tr);
}

function deleteTrans() {
  $(this).closest('tr').remove();
}
function findCat(event) {
  event.preventDefault();
  var text = $(this).text();
  $('#catEntry').text(text).append('<span class="caret"></span>');
  console.log(text);
}

var contact {
  this.name = name;
  this.email = email;
  this.location = location;
  this.phone = phone;
  this.fb = fb;
}
