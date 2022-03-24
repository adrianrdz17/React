
const getImage = async () => {

    try {
        const apiKey = 'XWmeqM0rXVxGF63yhUgsd259LI9wOGIy';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        console.log( url ); 
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        
        console.log( data );
        
    } catch (error) {
        // Mensaje de error
        console.error( error );        
    }
 

}

getImage();

console.log( getImage() );
