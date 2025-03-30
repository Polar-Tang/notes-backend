I got an infinite scroll banner, here is the jsx which is truncated:
```jsx
<>
	<div className='place-items-center h-dvh bg-black grid
grid-cols-1
grid-rows-[5fr_4fr]
flex'>
		<Navbar />
		<SectionHero />
		// banner
		<div className='banner-wrapper h-full flex items-center'>
			<div className='wrapper flex items-center justify-center'>
				<ImageSection images={images} index="1" />
				<ImageSection images={images} index="2" />
			</div>
		</div>
	</div>
	<Footer/>
</>
```
image section are a map of 10 images, so now in the css the banner wrapper is the same parent width and wrapper is width auto and display flex so it can hold all their children horizontally. CSS:
```css
html {
  overflow-y: scroll;
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
body {
  overflow-y: visible;
  position: relative;
  height: unset;
}
html, body {
  overflow-x: hidden;
  margin: 0; 
}

  img {
    object-fit: cover;
    padding: 0 10px;
    cursor: pointer;
  }
  
  .banner-wrapper {
    display: flex;   
    width: 100%; 
    height: 100%;
  }
  
  .wrapper {
    display: flex;
  }
  

  .wrapper .images {
    display: flex;
    animation: swipe 20s linear infinite;

  }
  
  @keyframes swipe {
    0% {
      transform: translateX(0);
    }
  
    100% {
      transform: translateX(-100%);
    }
  }  
```
Now this animation run the images smothly and it seems like a carousel. It works well because when one of the images comes to the end, the other images appear, so it seems like the carousel is infinite and constantly spinning around, like the earth. Everything works fun and the whole planet were happy, but suddenly the client request me to scroll this carousel, so the user could scroll to acelerate, so the user could have control to acelerate the carousel. SO i add this line:
```css
.banner-wrapper {
	display: flex;
	flex-wrap: nowrap;
	overflow-x: scroll;
	width: 100%;
	height: 100%;
}
```
but now the user could easily go to the end of the scrolling, and the two images containers aren't occupying the max scrolling width, so a darkness appears because the animation isn't present there 💀, so this is breaking the illusion of the infinite carousel spinning. Want to the animation works well and scroll too without breaking the continuty of the images, but i don't know how to do that now. What do you suggest me to do now? i