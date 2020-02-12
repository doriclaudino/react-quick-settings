# react-quick-settings


## how to install
  npm i or yarn (inside root folder)
  
## how to run
  npm start or yarn start
  
## learn purpose
<ol>
  <li>run the project</li>
  <li>open the browser <i>http://localhost:8080/</i></li>
  <li>go to browser console <i>(F11)</i></li>
</ol>

  
  
  
  
  execute:

<pre>
container = document.getElementById('container')
q = new QuickSettings(container)
  
q.addSlider('how_many_cats',1,200,50,1,(x)=>console.log(x))
 .addSlider('how_many_dogs',1,400,50,1,(x)=>console.log(x))
 .addSlider('how_many_horses',1,600,50,1,(x)=>console.log(x))
</pre>
