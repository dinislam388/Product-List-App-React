import './App.css'
// import  gifImg  from "./packshot.gif"
import { useState } from "react";
import BookRow from "../Components/BookRow";

export const App = () => {

const [products, setProducts] = useState([])
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [select, setSelect] = useState("")
  const [description, setDescription] = useState("")
  const [redio, setRedio] = useState("")


  // clear input 

    const clearInput = () => {
      setTitle('')
      setIsbn('')
      setAuthor('')
      setPubYear('')
	  setSelect('')
	  setDescription('')
	  setRedio('')
    }

	// form submit event
	const handleSubmit = (e) => {
		e.preventDefault();
		
		// Create book object 
		const product = {
			title,
			author,
			isbn,
			pubYear,
			select,
			description,
			redio
		  };
		  
		  setProducts([...products, product])
		clearInput()
	}

	// delete book from LS
	const deleteProducts = (isbn) => {
		const filteredBooks = products.filter(product => product.isbn !== isbn)
		setProducts(filteredBooks)
	}

	// saving data to local storage
	// useEffect(() => {
	// 	localStorage.setItem('books', JSON.stringify(books))
	// }, [books]);

// <<========================JSX===============================>>

	return (
		<div className="wrapper">
			<h1>Product_List</h1>
			<p>Product List Shop Order Now, Thank You!</p>
			<div className="main">
				<div className="form-container">

					<form onSubmit={handleSubmit}
						className="form-group">
						<label>Product Name</label>
						<input
							type="text"
							value={title}
              				onChange={(e) => setTitle(e.target.value)}
							className="form-control"
							placeholder='Type Product Name'
             				required
						></input>
						<br></br>

						<label>Product ID</label>
						<input
							type="number"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							className="form-control"
							placeholder='Type Product ID'
							required
						></input>
						<br></br>

						<label>Quantity:</label>
						<input
							type="number"
							value={isbn}
							onChange={(e) => setIsbn(e.target.value)}
							className="form-control"
							placeholder='Type Product Quantity'
							required
						></input>
						<br></br>

            			<label>Price</label>
						<input
							type="number"
							value={pubYear}
							onChange={(e) => setPubYear(e.target.value)}
							className="form-control"
							placeholder='Type Product Price'
							required
						></input>
						<br></br>

						<label>Description</label>
						<input
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="form-control"
							placeholder='Type Description'
							required
						></input>
						<br></br>

						<select  
						className='colorSelect' 
						name="select" 
						required
						id="select" 
						onChange={(e)=> {setSelect(e.target.value)}}
						>							
							<option value=''>Select Color * </option>
							<option value='Red' className='redColor'>Red</option>
							<option value='Black' className='blackColor' >Black</option>
							<option value='Green' className='greenColor' >Green</option>
							<option value='Blue' className='blueColor' >Blue</option>
                        </select>

						<div className='redioSelect'  id='sizeRedio'
						value={redio}
						>
							<input className='sizeM' type="radio" name='size'
							onClick={(e)=>{setRedio('M')}}/> 
							<label >M</label> 
							<input type="radio" name='size' 
							onClick={(e)=>{setRedio('L')}}/>
							<label>L</label> 
							<input type="radio" name='size' 
							onClick={(e)=>{setRedio('XL')}}/>
							<label>XL</label>
                        </div>

						<button
							type="submit"
							className="btn btn-success btn-md">
							ADD
						</button>
					</form>
				</div>

				<div className="view-container">
						<>
						<div className="table-responsive" >
								{
									products.length > 0 ? 
									<table className="table">
									<thead>
										<tr>
											<th>Quantity</th>
											<th>Product Name</th>
											<th>ID</th>
                      						<th>Price</th>
											<th>Description</th>
											<th>Color</th>
											<th>Size</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										{
											products.map(product => <BookRow 
												key={product.isbn}
												product={product} 
												deleteProducts = {deleteProducts}
												/>)
										}
									</tbody>
									<div style={{textAlign:'center'}}>
										<button className="btn  btn-danger btn-md" onClick={() => setProducts([])}>Remove All</button>
									</div>
								</table> 
								: 
								<h2 className='noProduct'>No Products added yet!</h2>
								// <img className='imgGif' src={ gifImg } alt="" />
								}
							</div>
							
						</>	
				</div>
			</div>
		</div>
	);
};

export default App;
