var white = true
let root = document.documentElement;

function theme(){
  if(white==true){
    root.style.setProperty("--theme-bg-cl", "#363636")
    root.style.setProperty("--theme-text-cl", "black")
    console.log(root.style.getPropertyValue("--theme-bg-cl"))
  }
  else{
    
  }
}
