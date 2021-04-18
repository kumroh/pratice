function rateLimiter(cb, limit, windowInMS){
	let counter;
	let startTime;

  return function(){		 
	if(!counter || !startTime || Date.now() - startTime > windowInMS){
	     counter = 1;
       startTime = Date.now();
			}   

      if(counter > limit && Date.now() - startTime <= windowInMS){
				return;
				
			}	
			console.log('counter',counter,'limit', limit,'elapsed', Date.now() - startTime)    

		cb();
		counter++;		
	}
}

const sync = () => {
const d = new Date();
let gh = d.getMinutes() + ':' + d.getSeconds()
	console.log('synced at: ', gh); 
}

let limitedSync = rateLimiter(sync, 2, 5000);
let g = setInterval(limitedSync, 1000);
