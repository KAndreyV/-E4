class Device{
    constructor(name) {
      this.name = name;
    }
    
    getVoltage(voltage){
    console.log(`Voltage is ${voltage}`);
    }
    
    onDevice(){
      console.log(`The device ${this.name} is plugged in`);
    }
    
     offDevice = function(){
     console.log(`The device ${this.name} is unplugged`);
    }
  }
  
  
  class Screen extends Device {
      constructor(resolution, name){
    super(name);
    this.resolution = resolution;
  }
  }
  
  class Lamp extends Device {
    constructor( colour, power, name){
    super(name);
    this.colour = colour;
    this.power = power;
    }
    getPower(){
      console.log(`Lamp power is ${this.power}`);
    }
  }
  
  
  const sumsung = new Screen(720, 'sumsung4k');
  const bork = new Lamp('green', 225, 'bork01');
  
  
  console.log(sumsung)
  console.log(bork)
  sumsung.getVoltage(30);
  bork.getPower();
  sumsung.onDevice();
  bork.offDevice();
  sumsung.offDevice();
  bork.onDevice();
  bork.getVoltage(50);