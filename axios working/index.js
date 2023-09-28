
const  mydiv = document.getElementById('mydiv')


axios.get("https://fakestoreapi.com/products").then((res)=>{
     console.log(res.data);
      const data = res.data
    const array = []

    data.forEach(element => {
         array.push({
            title : element.title,
            price: element.price,
            image: element.image
         })
    });


    const div = document.createElement('div')

    mydiv.appendChild(div)

   array.forEach(product =>{
     const mydata = document.createElement('div')

     mydata.innerHTML = `<h5>${product.title}</h5>
     <b>${product.price}</b>
       <img src=${product.image}   />
     `

     div.appendChild(mydata)
   })



}).catch((error)=>{
    console.error(error);
})