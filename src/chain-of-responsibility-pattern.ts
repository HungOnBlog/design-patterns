import { createHash } from 'crypto';
interface IHandler {
  addHandler(handler: IHandler): void;
  execute(request: any): any;
}

class ShortenerService implements IHandler {
  private next?: IHandler;

  private hash(url: string): string {
    return createHash('md5').update(url).digest('hex');
  }

  addHandler(handler: IHandler): void {
    this.next = handler;
  }

  execute(request: any): any {
    let result = '';
    console.log('Shortening the request');

    // Get first 7 characters of the MD5 hash of the request.url
    result = this.hash(request.url).substring(0, 7);
    if (this.next) {
      request['shortened'] = result;
      return this.next.execute(request);
    } else {
      return result;
    }
  }
}

class AuthenticatorService implements IHandler {
  private next?: IHandler;
  addHandler(handler: IHandler): void {
    this.next = handler;
  }
  execute(request: any): void {
    if (['non-commercial', 'commercial'].indexOf(request['type']) === -1) {
      throw new Error('Invalid request type');
    } else {
      console.log('Valid request');
      if (this.next) {
        return this.next.execute(request);
      }
    }
  }
}

class RateLimitService implements IHandler {
  private next?: IHandler;
  addHandler(handler: IHandler): void {
    this.next = handler;
  }
  execute(request: any): void {
    let limit: number = request['type'] === 'commercial' ? 100 : 10;
    if (request['count'] > limit) {
      throw new Error('Rate limit exceeded');
    } else {
      console.log('Rate limit not exceeded');
      if (this.next) {
        return this.next.execute(request);
      }
    }
  }
}

function createChain(...handlers: IHandler[]): IHandler {
  for (let i = 0; i < handlers.length - 1; i++) {
    handlers[i].addHandler(handlers[i + 1]);
  }
  return handlers[0];
}

function client() {
  const shortenChain = createChain(
    new AuthenticatorService(),
    new RateLimitService(),
    new ShortenerService(),
  );

  const request = {
    type: 'commercial',
    count: 100,
    url: 'www.hungon.space/chain-of-responsibility-pattern',
  };

  try {
    const result = shortenChain.execute(request);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

client();
