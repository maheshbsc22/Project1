function gallery(){const images=["https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
 "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80", 
 "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/640px-Dubai_Marina_Skyline.jpg", 
 "https://www.world-architects.com/images/CmsImageContent/28/93/14/a7714ffa13b044c0923df9c3196e2edc/a7714ffa13b044c0923df9c3196e2edc.f5fb7444.jpg", 
 "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
 "https://media.gq-magazine.co.uk/photos/63468efef4f48bee2acb7062/master/pass/Tom-Holland-Spiderman-what-we-know-so-far.jpg"];

<h2>My Images</h2>
return(
    <ul>
    
         {images.map((image,index)=> 
         {return (<img src={image} 
            alt={'image - ${index}'}
            width={'300px'}
            height={'200px'}/>
    );})}
    </ul>
    )
}

        
        
export default gallery;