import fs from 'fs';

interface IDb {
  create(data: any): Promise<void>;
  find(id: string): Promise<any>;
  update(id: string, data: any): Promise<void>;
  delete(id: string): Promise<void>;
}

class Db implements IDb {
  dbFile: string;

  constructor() {
    this.dbFile = './data/db.json';
  }

  async create(data: any): Promise<void> {
    const file = fs.readFileSync(this.dbFile, 'utf8');
    const db = JSON.parse(file);
    if (db[data.id]) {
      throw new Error(`Record with id ${data.id} already exists`);
    } else {
      db[data.id] = data;
      fs.writeFileSync(this.dbFile, JSON.stringify(db));
    }
  }

  async find(id: string): Promise<any> {
    const file = fs.readFileSync(this.dbFile, 'utf8');
    const db = JSON.parse(file);
    if (!db[id]) {
      throw new Error(`Record with id ${id} does not exist`);
    } else {
      const data = db[id];
      return data;
    }
  }

  async update(id: string, data: any): Promise<void> {
    const file = fs.readFileSync(this.dbFile, 'utf8');
    const db = JSON.parse(file);
    if (!db[id]) {
      throw new Error(`Record with id ${id} does not exist`);
    } else {
      db[id] = data;
      fs.writeFileSync(this.dbFile, JSON.stringify(db));
    }
  }

  async delete(id: string): Promise<void> {
    const file = fs.readFileSync(this.dbFile, 'utf8');
    const db = JSON.parse(file);
    if (!db[id]) {
      throw new Error(`Record with id ${id} does not exist`);
    } else {
      delete db[id];
      fs.writeFileSync(this.dbFile, JSON.stringify(db));
    }
  }
}

class DbClient implements IDb {
  db: IDb;
  cache: { [key: string]: any } = {};
  constructor(db: IDb) {
    this.db = db;
  }

  async create(data: any): Promise<void> {
    await this.db.create(data);
    this.cache[data.id] = data;
  }

  async find(id: string): Promise<any> {
    if (this.cache[id]) {
      return this.cache[id];
    } else {
      const data = await this.db.find(id);
      this.cache[id] = data;
      return data;
    }
  }

  async update(id: string, data: any): Promise<void> {
    await this.db.update(id, data);
    this.cache[id] = data;
  }

  async delete(id: string): Promise<void> {
    await this.db.delete(id);
    delete this.cache[id];
  }
}

async function app() {
  const db = new Db();
  const dbClient = new DbClient(db);

  const data = {
    id: '1',
    name: 'John',
  };

  const data2 = {
    id: '2',
    name: 'Jane',
  };

  await dbClient.create(data);
  await dbClient.create(data2);

  const john = await dbClient.find('1');
  const jane = await dbClient.find('2');

  console.log(john);
  console.log(jane);
}

app();
