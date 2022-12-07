function Device(name){
    this.name = name
  }
  
  Device.prototype.getVoltage = function(voltage){
    console.log(`Voltage is ${voltage}`)
  }
  
  Device.prototype.onDevice = function(){
      console.log('The device is plugged in')
  }
  
  Device.prototype.offDevice = function(){
      console.log('The device is unplugged')
  }
  
  
  function Screen(name, resolution){
    this.name = name,
    this.resolution = resolution
  }
  
  Screen.prototype = new Device()
  
  function Lamp(name, colour, power){
    this.name = name,
    this.colour = colour,
    this.getPower = function(){
      console.log(`Lamp power is ${power}`)
    }
  }
  
  Lamp.prototype = new Device()
  
  
  const sumsung = new Screen('sumsung4k', 720);
  const bork = new Lamp('bork01', 'blue', 220);
  
  
  // console.log(sumsung)
  // console.log(bork)
  sumsung.getVoltage(30);
  bork.getPower();
  sumsung.onDevice();
  bork.offDevice();