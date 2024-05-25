var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var updateBtn = document.getElementById("updateBtn");
var tableContent = document.getElementById("tableContent");
var globalIndex;
var bookmarkList;
if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
} else {
    bookmarkList = [];
}

// function addBookmark
displayBookmark(bookmarkList);


function addBookmark() {
    if(validateURL() && bookmarkName.value!=""){
        var bookmarks = {
            bookmarkName: bookmarkName.value,
            bookmarkURL: bookmarkURL.value,
        };
        bookmarkList.push(bookmarks);
        addToLocalStorage();
        displayBookmark(bookmarkList);
        clearInput()
    }else{

    }
    
}


// function displayBookmark

function displayBookmark(BList) {
    var cartoona = "";
    for (var i = 0; i < BList.length; i++) {
        cartoona += `<tr>
        <td class="text-capitalize">${i + 1}</td>
        <td class="text-capitalize">${BList[i].bookmarkName}</td>
        <td class="text-capitalize"><a class="btn btn-primary" href="${BList[i].bookmarkURL}">visit</a></td>
        <td class="text-capitalize"><button onclick="setFormUpdate(${i})" class="btn btn-success">Update</button></td>
        <td class="text-capitalize"><button onclick="deleteBoohmark(${i})" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    tableContent.innerHTML = cartoona;
}
// function clear inputs

function clearInput() {
    bookmarkName.value = null;
    bookmarkURL.value = null;
}
function addToLocalStorage() {
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
}

function deleteBoohmark(i) {
    bookmarkList.splice(i, 1);
    displayBookmark(bookmarkList);
    addToLocalStorage();

}

function setFormUpdate(index) {
    bookmarkName.value = bookmarkList[index].bookmarkName;
    bookmarkURL.value = bookmarkList[index].bookmarkURL;
    updateBtn.classList.remove("d-none")
    submitBtn.classList.add("d-none");
    globalIndex = index;
}

function updateBookmark() {
    bookmarkList[globalIndex].bookmarkName = bookmarkName.value;
    bookmarkList[globalIndex].bookmarkURL = bookmarkURL.value;
    displayBookmark(bookmarkList);
    addToLocalStorage();
    updateBtn.classList.add("d-none");
    submitBtn.classList.remove("d-none");
    clearInput();
}

var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");
var submitBtn = document.getElementById("submitBtn");
var updateBtn = document.getElementById("updateBtn");
var tableContent = document.getElementById("tableContent");
var globalIndex;
var bookmarkList;
if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
} else {
    bookmarkList = [];
}

// function addBookmark
displayBookmark(bookmarkList);


function addBookmark() {
    if(validateURL() && validateName() ){
        var bookmarks = {
            bookmarkName: bookmarkName.value,
            bookmarkURL: bookmarkURL.value,
        };
        bookmarkList.push(bookmarks);
        addToLocalStorage();
        displayBookmark(bookmarkList);
        clearInput()
    }else{
        Swal.fire({
            title: "The Invalid Data?",
            text: "please Enter vaild URL And Enter Site Name ",
            icon: "error"
          });
    }
    
}



// function displayBookmark

function displayBookmark(BList) {
    var cartoona = "";
    for (var i = 0; i < BList.length; i++) {
        cartoona += `<tr>
        <td class="text-capitalize">${i + 1}</td>
        <td class="text-capitalize">${BList[i].bookmarkName}</td>
        <td class="text-capitalize"><a class="btn btn-primary" href="${BList[i].bookmarkURL}">visit</a></td>
        <td class="text-capitalize"><button onclick="setFormUpdate(${i})" class="btn btn-success">Update</button></td>
        <td class="text-capitalize"><button onclick="deleteBoohmark(${i})" class="btn btn-danger">Delete</button></td>
    </tr>`
    }
    tableContent.innerHTML = cartoona;
}
// function clear inputs

function clearInput() {
    bookmarkName.value = null;
    bookmarkURL.value = null;
}
function addToLocalStorage() {
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
}

function deleteBoohmark(i) {
    bookmarkList.splice(i, 1);
    displayBookmark(bookmarkList);
    addToLocalStorage();

}

function setFormUpdate(index) {
    bookmarkName.value = bookmarkList[index].bookmarkName;
    bookmarkURL.value = bookmarkList[index].bookmarkURL;
    updateBtn.classList.remove("d-none")
    submitBtn.classList.add("d-none");
    globalIndex = index;
}

function updateBookmark() {
    if (validateURL() && validateName()) {
        bookmarkList[globalIndex].bookmarkName = bookmarkName.value;
        bookmarkList[globalIndex].bookmarkURL = bookmarkURL.value;
        displayBookmark(bookmarkList);
        addToLocalStorage();
        updateBtn.classList.add("d-none");
        submitBtn.classList.remove("d-none");
        clearInput();
    } else {
        
    }
}

function validateURL() {
    var urlRegex = /^(https?:\/\/)?([\w.-]+)+\.[a-z]{2,}(:\d{2,5})?(\/\S*)?$/;
    if (urlRegex.test(bookmarkURL.value)) {
        bookmarkURL.classList.add("is-valid");
        bookmarkURL.classList.remove("is-invalid");
        return true;
    } else {
        bookmarkURL.classList.add("is-invalid");
        bookmarkURL.classList.remove("is-valid");
        return false;
    }
}
function validateName() {
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    if (nameRegex.test(bookmarkName.value)) {
        bookmarkName.classList.add("is-valid");
        bookmarkName.classList.remove("is-invalid");
        return true;
    } else {
        bookmarkName.classList.add("is-invalid");
        bookmarkName.classList.remove("is-valid");
        return false;
    }
}
