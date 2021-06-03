window.onpopstate = () => {
    console.log(window.location.hash);
    let currentRouteName = window.location.hash.slice(1);
    let currentRoute = routing.find(p => p.name === currentRouteName);
    
  
    (currentRoute || defaultRoute).component();
  };
  
  
  let container = document.querySelector('.container');
  
  
  const routing = [{
    name: "test",
    component: () => {
      container.innerHTML = `test`;
    }
  },
    {
      "name": "test1",
      "component": () => {
        container.innerHTML = `test1`;
      }
    },
    {
      "name": "test2",
      "component": () => {
        container.innerHTML = `test2`;
      }
    },
  
  ];
  
  
  const defaultRoute = {
    "name": "default",
    "component": () => {
      container.innerHTML = `default`;
    }
  };
  
  window.onpopstate();