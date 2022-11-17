// Dau 2 chau
class PlugTypeC {
  pin1: boolean = false;
  pin2: boolean = false;

  connectPin1(): void {
    this.pin1 = true;
  }

  connectPin2(): void {
    this.pin2 = true;
  }

  powerOn() {
    if (this.pin1 && this.pin2) {
      console.log('💡💡💡');
    } else {
      console.log('Your lug is broken');
    }
  }
}

// Dau 3 chau
class PlugTypeB {
  pin1: boolean = false;
  pin2: boolean = false;
  ground: boolean = false;

  connectPin1(): void {
    this.pin1 = true;
  }

  connectPin2(): void {
    this.pin2 = true;
  }

  connectGround(): void {
    this.ground = true;
  }

  charge() {
    if (this.pin1 && this.pin2 && this.ground) {
      console.log('💡💡💡');
    } else {
      console.log('Your lug is broken');
    }
  }
}

class SocketTypeC {
  maxPlug: number = 4;
  plugList: PlugTypeC[] = [];

  connectPlug(plug: PlugTypeC): void {
    if (this.plugList.length < this.maxPlug) {
      plug.connectPin1();
      plug.connectPin2();
      plug.powerOn();
      this.plugList.push(plug);
    }
  }
}

class PlugTypeBToTypeCAdapter implements PlugTypeC {
  // Definition about adaptee: https://en.wiktionary.org/wiki/adaptee
  adaptee: PlugTypeB;
  pin1: boolean;
  pin2: boolean;
  constructor(adaptee: PlugTypeB) {
    this.adaptee = adaptee;
    this.adaptee.connectGround();
    this.pin1 = this.adaptee.pin1;
    this.pin2 = this.adaptee.pin2;
  }

  connectPin1(): void {
    this.adaptee.connectPin1();
  }
  connectPin2(): void {
    this.adaptee.connectPin2();
  }
  powerOn(): void {
    this.adaptee.charge();
  }
}

function myHome() {
  const socket = new SocketTypeC();
  const myCompanyLapPlug = new PlugTypeB();
  const adapter = new PlugTypeBToTypeCAdapter(myCompanyLapPlug);
  socket.connectPlug(adapter);
}

myHome();
