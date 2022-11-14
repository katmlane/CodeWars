function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}


refactored 

const hello = name => name ? "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!' : "Hello, World!";
