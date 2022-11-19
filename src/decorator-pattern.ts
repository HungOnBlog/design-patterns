import { createCipheriv, createDecipheriv } from 'crypto';
interface IDbCommunicator {
  connect(): void;
  writeData(key: string, data: string): void;
  readData(key: string): any;
  close(): void;
}

class DbCommunicator implements IDbCommunicator {
  private isConnected = false;
  private db: { [key: string]: any } = {};
  connect(): void {
    this.isConnected = true;
  }

  readData(key: string): any {
    if (!this.isConnected) {
      throw new Error('Not connected to database');
    }
    return this.db[key];
  }

  writeData(key: string, data: any): void {
    if (!this.isConnected) {
      throw new Error('Not connected to database');
    }
    console.log(`Write data for ${key}:${data}`);
    this.db[key] = data;
  }

  close(): void {
    this.isConnected = false;
  }
}

class EncryptDbCommunicator implements IDbCommunicator {
  private dbCommunicator: IDbCommunicator;
  private IV: string = '7q2HD4zFffVG8Nwj';
  private ENCRYPT_KEY: string = 'LbJq8TRhybp9Z0LId2nclfzCMsSS7ExH';

  constructor(dbCommunicator: IDbCommunicator) {
    this.dbCommunicator = dbCommunicator;
  }
  /**
   * Encrypt with AES
   *
   * @param data
   * @param encryptKey
   */
  private encrypt(data: any, encryptKey: string): any {
    const cipher = createCipheriv('aes-256-cbc', encryptKey, this.IV);
    return (
      cipher.update(data.toString(), 'utf8', 'base64') + cipher.final('base64')
    );
  }

  /**
   * Decrypt with AES
   * @param data
   * @param encryptKey
   * @returns
   */
  private decrypt(data: any, encryptKey: string): any {
    const decipher = createDecipheriv('aes-256-cbc', encryptKey, this.IV);
    return decipher.update(data, 'base64', 'utf8') + decipher.final('utf8');
  }

  connect(): void {
    this.dbCommunicator.connect();
  }

  writeData(key: string, data: string): void {
    const encryptData = this.encrypt(data, this.ENCRYPT_KEY);
    this.dbCommunicator.writeData(key, encryptData);
  }

  readData(key: string): void {
    const data = this.dbCommunicator.readData(key);
    return this.decrypt(data, this.ENCRYPT_KEY);
  }
  close(): void {
    this.dbCommunicator.close();
  }
}

function platform() {
  let dbCommunicator: IDbCommunicator = new DbCommunicator();

  const key: string = 'theSecretCompany';

  // Simulate write data
  const data = 'some data';
  if (key === 'theSecretCompany') {
    dbCommunicator = new EncryptDbCommunicator(dbCommunicator);
  }

  dbCommunicator.writeData(key, data);

  // Simulate read data
  if (key === 'theSecretCompany') {
    dbCommunicator = new EncryptDbCommunicator(dbCommunicator);
  }
  const rData = dbCommunicator.readData(key);
  console.log(`Read data for ${key}:${rData}`);
}

platform();
