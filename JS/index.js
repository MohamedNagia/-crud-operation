

var nameInput = document.getElementById("sietName")
var urlInput = document.getElementById("sietUrl")
var btnVisit = document.getElementById("Visit")
var btnDelete = document.getElementById("Delete")
var modal = document.getElementById("modalContent")
var sietName = /^[A-Z][a-z]{2,8}$/
var sietUrl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
var book;

if (localStorage.getItem("booksName") == null) {


  book = []

} else {

  book = JSON.parse(localStorage.getItem("booksName"))
  display()
}

// ============= add books================
function addBooks() {


  if (sietName.test(nameInput.value) == true && sietUrl.test(urlInput.value) == true) {

    var books = {
      code: nameInput.value,
      urlt: urlInput.value,
    }

    book.push(books)
    localStorage.setItem("booksName", JSON.stringify(book))


    display()

    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh");
    nameInput.classList.add("is-valid")
    nameInput.classList.remove("is-invalid")
    urlInput.classList.add("is-valid")
    urlInput.classList.remove("is-invalid")
  } else {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
    modal.classList.replace("d-none", "d-block")

    urlInput.classList.add("is-invalid")
    nameInput.classList.add("is-invalid")

    // nameInput.classList.remove("is-invalid")
  }




}
// ================display data==============

function display() {
  temp = ''
  for (var i = 0; i < book.length; i++) {
    temp += `
    <tr>
      <th >${i}</th>
      <td>${book[i].code}</td>
      <td><button class="btn btn-outline-info" onclick="visitBooks(${i})" id="Visit">Visit</button></td> 
      <td><button class="btn btn-outline-danger" onclick="deletBooks(${i})" id="Delete">Delete</button></td>
    </tr>
    `


  }

  document.getElementById("myBooks").innerHTML = temp
}
// ===================delete books==========
function deletBooks(item) {

  book.splice(item, 1)
  display()
  localStorage.setItem("booksName", JSON.stringify(book))
}
// visit url==========
function visitBooks(index) {

  window.open(book[index].urlt)


}
// ================= close validation========
function closeModal() {

  modal.classList.add("d-none")

}
