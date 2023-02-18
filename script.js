let arr=[];
function add() {
    const bookName = document.getElementById("book").value;
    const issuedTo = document.getElementById("issue").value;
    const issuedTime = new Date();
    const bookId = arr.length + 1;
    const bookStatus = "not returned";

    arr.push({
        id: bookId,
        book_name: bookName,
        issued_to: issuedTo,
        issued_time: issuedTime,
        status: bookStatus,
      });
      refreshTable();
      }
      function refreshTable() {
        const tableBody = document.getElementById("fill");
        tableBody.innerHTML = "";

        arr.forEach((book) => {
          const row = document.createElement("tr");
          row.innerHTML = `
					<td>${book.id}</td>
					<td>${book.book_name}</td>
					<td>${book.issued_to}</td>
					<td>${book.issued_time}</td>
					<td class="status ${book.status.replace(" ", "-")}">${book.status}</td>
				`;
          row.onclick = () => editBookStatus(book);
          tableBody.appendChild(row);
        });
      }
      function editBookStatus(book) {
        if (book.status === "not returned") {
          book.status = "returned";
        } else {
          book.status = "not returned";
        }
        refreshTable();
      }