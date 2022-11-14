export class Robot {
  head: string = '';
  body: string = '';
  arms: string = '';
  legs: string = '';
  weapon: string = '';
  shield: string = '';
  wings: string = '';
}

export interface RobotBuilder {
  addHead(): void;
  addArms(): void;
  addLegs(): void;
  addWeapon(): void;
  addShield(): void;
  addWings(): void;
  getRobot(): Robot;
}

export class FighterRobotBuilder implements RobotBuilder {
  private robot: Robot = new Robot();
  addHead(): void {
    this.robot.head = 'Fighter Head';
  }
  addArms(): void {
    this.robot.arms = 'Fighter Arms';
  }
  addLegs(): void {
    this.robot.legs = 'Fighter Legs';
  }
  addWeapon(): void {
    this.robot.weapon = 'Fighter Weapon';
  }
  addShield(): void {
    this.robot.shield = 'Fighter Shield';
  }
  addWings(): void {
    this.robot.wings = '';
  }
  getRobot(): Robot {
    return this.robot;
  }
}

export class FarmerRobotBuilder implements RobotBuilder {
  private robot: Robot = new Robot();
  addHead(): void {
    this.robot.head = 'Farmer Head';
  }
  addArms(): void {
    this.robot.arms = 'Farmer Arms';
  }
  addLegs(): void {
    this.robot.legs = 'Farmer Legs';
  }
  addWeapon(): void {
    this.robot.weapon = '';
  }
  addShield(): void {
    this.robot.shield = '';
  }
  addWings(): void {
    this.robot.wings = '';
  }
  getRobot(): Robot {
    return this.robot;
  }
}

export class FlyRobotBuilder implements RobotBuilder {
  private robot: Robot = new Robot();
  addHead(): void {
    this.robot.head = 'Fly Head';
  }
  addArms(): void {
    this.robot.arms = 'Fly Arms';
  }
  addLegs(): void {
    this.robot.legs = 'Fly Legs';
  }
  addWeapon(): void {
    this.robot.weapon = '';
  }
  addShield(): void {
    this.robot.shield = '';
  }
  addWings(): void {
    this.robot.wings = 'Fly Wings';
  }
  getRobot(): Robot {
    return this.robot;
  }
}

export class Director {
  makeFighterRobot(builder: RobotBuilder): Robot {
    builder.addHead();
    builder.addArms();
    builder.addLegs();
    builder.addWeapon();
    builder.addShield();
    return builder.getRobot();
  }

  makeFarmerRobot(builder: RobotBuilder): Robot {
    builder.addHead();
    builder.addArms();
    builder.addLegs();
    return builder.getRobot();
  }

  makeFlyRobot(builder: RobotBuilder): Robot {
    builder.addHead();
    builder.addArms();
    builder.addLegs();
    builder.addWings();
    return builder.getRobot();
  }
}

function client() {
  const director = new Director();
  const fighterRobotBuilder = new FighterRobotBuilder();
  const farmerRobotBuilder = new FarmerRobotBuilder();
  const flyRobotBuilder = new FlyRobotBuilder();
  const fighterRobot = director.makeFighterRobot(fighterRobotBuilder);
  const farmerRobot = director.makeFarmerRobot(farmerRobotBuilder);
  const flyRobot = director.makeFlyRobot(flyRobotBuilder);

  console.log(flyRobot);
  console.log(fighterRobot);
  console.log(farmerRobot);
}

client();
