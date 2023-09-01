// const qualify = ["Coder", "Programmer", "Problem Solver"]
// for(i=0;i<qualify.length;i++){
//     document.getElementById("qualification").innerHTML = qualify[i]+setTimeout(3000) ;
    
// }

// function changeColor() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.getElementById("containerLoader").classList.add('hide'); 
    
      setTimeout(function(){ 
        document.getElementById("containerLoader").style.display = 'none';
      }, 1000);
    }
  };
    

function resume(){
    window.open("file/Resume.pdf", '_blank', 'fullscreen=yes'); return true;
}
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();