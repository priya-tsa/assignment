let to = localStorage.getItem(('to'))
let body = localStorage.getItem(('body'))
let cc = localStorage.getItem(('cc'))
let subject = localStorage.getItem(('subject'))

console.log(to, body);
var currentTime = new Date(); //get the current time.

localStorage.time = currentTime;
$('#tableInbox').append(`<tr class="unread">
<td class="tbl-checkbox">
  <label class="form-check-label">
    <input type="checkbox">
    <span class="form-check-sign"></span>
  </label>
</td>
<td class="hidden-xs">
  <i class="material-icons">star_border</i>
</td>
<td class="hidden-xs">${to}</td>
<td class="max-texts">
  <a href="#">
  ${subject}</a>
</td>
<td>${formatTime(currentTime)}</td>
</tr>`)

// formattime
function formatTime(d) {
  var date = new Date(d);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // Hour "0" Will Be "12" Each Time
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}