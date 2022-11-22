import {tee} from "./class"
console.log("Stop watch implementation")

function StopWatch (){
    let startTime, endTime, running, duration = 0;
    
    this.start = function(){
        if(running)
            throw new Error("Stop watch already started")
            running= true
            startTime = new Date();

    }
    this.stop = function(){
        if(!running)
        throw new Error("Stop watch is already stopped")
        running= false;
        endTime= new Date();

       duration = (endTime.getTime() - startTime.getTime())/1000
    }
    this.reset = function () {
        running=false;
        startTime=null;
        endTime = null;
        duration= 0;
    }

    Object.defineProperty(this,"duration",{
        get: function(){
            return duration;
        }
    })
    
    
}

// const sw =new StopWatch();
// sw.start()

const me = new tee();
console.log(me.age)