import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const Livre = (props) => {
    const [books, setBooks] = useState(mybooks);
const addBook = (book) => {
    setBooks([...books, book]);
};
const handleSubmit = (event) => {
    event.preventDefault();
    const book = {
        id: Date.now(),
        title: event.target.title.value,
        description: event.target.description.value,
        image: event.target.image.value,
    };
    addBook(book);
    event.target.reset();
};
function LivreItem({ book, addBook }) {
  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description);
  const [image, setImage] = useState(book.image);

  function handleSave() {
    addBook(book);
  }

  return (
    <tr>
      <td>{book.id}</td>
      <td>
        <input value={title} onChange={(book) => setTitle(book.target.value)} />
      </td>
      <td>
        <input value={description} onChange={(book) => setDescription(book.target.value)} />
      </td>
      <td>
        <input value={image} onChange={(book) => setImage(book.target.value)} />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
    </tr>
  );
}


    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            cell: (row) => <button onClick={() => { fillBook(row) }} id={row.id}>Update</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },,
        {
            cell: (row) => <button onClick={() => { removeBook(row.id) }} id={row.id}>Remove</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];
const fillBook =(book)=>{
    console.log(book);
    
}
   
    const removeBook = (id) => {
        debugger;
        setBooks(books.filter((book) => book.id !== id));
    };
    return (
        <>
            <DataTable
                columns={columns}
                data={books}
            />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Titre :</label>
                <input type="text" name="title" id="title" required />
                <br />
                <label htmlFor="description">Description :</label>
                <textarea name="description" id="description" required></textarea>
                <br />
                <label htmlFor="image">Image :</label>
                <input type="text" name="image" id="image" required />
                <br />
                <button type="submit">Ajouter un livre</button>
            </form>
        </>
    );
};

const mybooks = [
    {
        "id": 1,
        "title": "livre1",
        "description": "description1",
        "image": "path-to-image1"
    },
    {
        "id": 2,
        "title": "livre2",
        "description": "description2",
        "image": "path-to-image2"
    }
];

export default Livre;
