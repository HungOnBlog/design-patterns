class Robot {
  head?: string;
  body?: string;
  arms?: string;
  legs?: string;
  armor?: string;
  sword?: string;
  shield?: string;
  wings?: string;
  constructor() {}

  introduce() {
    return JSON.stringify(this);
  }

  doTheJob() {
    return `${this.introduce()} - I am doing my job!`;
  }
}

class RobotBuilder {
  robot: Robot;
  constructor() {
    this.robot = new Robot();
  }

  addHead() {
    this.robot.head = 'Default head';
    return this;
  }

  addBody() {
    this.robot.body = 'Default body';
    return this;
  }

  addArms() {
    this.robot.arms = 'Default arms';
    return this;
  }

  addLegs() {
    this.robot.legs = 'Default legs';
    return this;
  }

  addArmor() {
    this.robot.armor = 'Default armor';
    return this;
  }

  addSword() {
    this.robot.sword = 'Default sword';
    return this;
  }

  addShield() {
    this.robot.shield = 'Default shield';
    return this;
  }

  addWings() {
    this.robot.wings = 'Default wings';
    return this;
  }

  makeRobot() {
    return this.robot;
  }

  reset() {
    this.robot = new Robot();
    return this;
  }
}

class FighterRobotBuilder implements RobotBuilder {
  robot: Robot;
  constructor() {
    this.robot = new Robot();
  }

  addHead() {
    this.robot.head = 'Fighter head';
    return this;
  }

  addBody() {
    this.robot.body = 'Fighter body';
    return this;
  }

  addArms() {
    this.robot.arms = 'Fighter arms';
    return this;
  }

  addLegs() {
    this.robot.legs = 'Fighter legs';
    return this;
  }

  addArmor() {
    this.robot.armor = 'Fighter armor';
    return this;
  }

  addSword() {
    this.robot.sword = 'Fighter sword';
    return this;
  }

  addShield() {
    this.robot.shield = 'Fighter shield';
    return this;
  }

  addWings() {
    this.robot.wings = 'Fighter wings';
    return this;
  }

  makeRobot() {
    return this.robot;
  }

  reset() {
    this.robot = new Robot();
    return this;
  }
}

class FarmerRobotBuilder implements RobotBuilder {
  robot: Robot;
  constructor() {
    this.robot = new Robot();
  }

  addHead() {
    this.robot.head = 'Farmer head';
    return this;
  }

  addBody() {
    this.robot.body = 'Farmer body';
    return this;
  }

  addArms() {
    this.robot.arms = 'Farmer arms';
    return this;
  }

  addLegs() {
    this.robot.legs = 'Farmer wheels';
    return this;
  }

  addArmor() {
    this.robot.armor = 'Farmer armor';
    return this;
  }

  addSword() {
    this.robot.sword = 'Farmer sword';
    return this;
  }

  addShield() {
    this.robot.shield = 'Farmer shield';
    return this;
  }

  addWings() {
    this.robot.wings = 'Farmer wings';
    return this;
  }

  makeRobot() {
    return this.robot;
  }

  reset() {
    this.robot = new Robot();
    return this;
  }
}

class FlyRobotBuilder implements RobotBuilder {
  robot: Robot;
  constructor() {
    this.robot = new Robot();
  }

  addHead() {
    this.robot.head = 'Fly head';
    return this;
  }

  addBody() {
    this.robot.body = 'Fly body';
    return this;
  }

  addArms() {
    this.robot.arms = 'Fly arms';
    return this;
  }

  addLegs() {
    this.robot.legs = 'Fly legs';
    return this;
  }

  addArmor() {
    this.robot.armor = 'Fly armor';
    return this;
  }

  addSword() {
    this.robot.sword = 'Fly sword';
    return this;
  }

  addShield() {
    this.robot.shield = 'Fly shield';
    return this;
  }

  addWings() {
    this.robot.wings = 'Fly wings';
    return this;
  }

  makeRobot() {
    return this.robot;
  }

  reset() {
    this.robot = new Robot();
    return this;
  }
}

class RobotMakingDirector {
  makeFighterRobot(robotBuilder: RobotBuilder): Robot {
    robotBuilder
      .addHead()
      .addBody()
      .addArms()
      .addLegs()
      .addArmor()
      .addSword()
      .addShield();
    return robotBuilder.makeRobot();
  }

  makeFarmerRobot(robotBuilder: RobotBuilder): Robot {
    robotBuilder.addHead().addBody().addArms().addLegs();
    return robotBuilder.makeRobot();
  }

  makeFlyRobot(robotBuilder: RobotBuilder): Robot {
    robotBuilder.addHead().addBody().addArms().addLegs().addWings();
    return robotBuilder.makeRobot();
  }
}

function client() {
  const robotMakingDirector = new RobotMakingDirector();
  const fighterBuilder: RobotBuilder = new FighterRobotBuilder();
  const farmerBuilder: RobotBuilder = new FarmerRobotBuilder();
  const flyBuilder: RobotBuilder = new FlyRobotBuilder();

  const fighterRobot: Robot =
    robotMakingDirector.makeFighterRobot(fighterBuilder);
  const farmerRobot: Robot = robotMakingDirector.makeFarmerRobot(farmerBuilder);
  const flyRobot: Robot = robotMakingDirector.makeFlyRobot(flyBuilder);

  console.log(fighterRobot.doTheJob());
  console.log(farmerRobot.doTheJob());
  console.log(flyRobot.doTheJob());
}
