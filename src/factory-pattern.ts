class NuocDung {
  constructor() {
    console.log('Nuoc dung');
  }
}
class Bo {
  constructor() {
    console.log('Bo');
  }
}
class Cha {
  constructor() {
    console.log('Cha');
  }
}
class Gio {
  constructor() {
    console.log('Gio');
  }
}
class Gan {
  constructor() {
    console.log('Gan');
  }
}

class NuocDungTpHcm extends NuocDung {
  constructor() {
    super();
    console.log('Nuoc dung TpHcm');
  }
}

class BoTpHcm extends Bo {
  constructor() {
    super();
    console.log('Bo TpHcm');
  }
}

class ChaTpHcm extends Cha {
  constructor() {
    super();
    console.log('Cha TpHcm');
  }
}

class GioTpHcm extends Gio {
  constructor() {
    super();
    console.log('Gio TpHcm');
  }
}

class GanTpHcm extends Gan {
  constructor() {
    super();
    console.log('Gan TpHcm');
  }
}

class NuocDungHaNoi extends NuocDung {
  constructor() {
    super();
    console.log('Nuoc dung Ha Noi');
  }
}

class BoHaNoi extends Bo {
  constructor() {
    super();
    console.log('Bo Ha Noi');
  }
}

class ChaHaNoi extends Cha {
  constructor() {
    super();
    console.log('Cha Ha Noi');
  }
}

class GioHaNoi extends Gio {
  constructor() {
    super();
    console.log('Gio Ha Noi');
  }
}

class GanHaNoi extends Gan {
  constructor() {
    super();
    console.log('Gan Ha Noi');
  }
}

class NuocDungHue extends NuocDung {
  constructor() {
    super();
    console.log('Nuoc dung Hue');
  }
}

class BoHue extends Bo {
  constructor() {
    super();
    console.log('Bo Hue');
  }
}

class ChaHue extends Cha {
  constructor() {
    super();
    console.log('Cha Hue');
  }
}

class GioHue extends Gio {
  constructor() {
    super();
    console.log('Gio Hue');
  }
}

class GanHue extends Gan {
  constructor() {
    super();
    console.log('Gan Hue');
  }
}

abstract class BunBo {
  bo?: Bo;
  cha?: Cha;
  gio?: Gio;
  gan?: Gan;
  nuocDung?: NuocDung;
  themBun() {}
  abstract themTopping(): void;
  abstract themNuocDung(): void;
}

class BunBoThuong extends BunBo {
  nguyenLieu: NguyenLieuBunBoFactory;
  constructor(bunboFactory: NguyenLieuBunBoTpHcmFactory) {
    super();
    this.nguyenLieu = bunboFactory;
  }
  themTopping() {
    this.bo = this.nguyenLieu.createBo();
  }
  themNuocDung(): void {
    this.nuocDung = this.nguyenLieu.createNuocDung();
  }
}

class BunBoGio extends BunBo {
  nguyenLieu: NguyenLieuBunBoFactory;
  constructor(bunboFactory: NguyenLieuBunBoTpHcmFactory) {
    super();
    this.nguyenLieu = bunboFactory;
  }
  themTopping() {
    this.bo = this.nguyenLieu.createBo();
    this.gio = this.nguyenLieu.createGio();
  }
  themNuocDung(): void {
    this.nuocDung = this.nguyenLieu.createNuocDung();
  }
}

class BunBoCha extends BunBo {
  nguyenLieu: NguyenLieuBunBoFactory;
  constructor(bunboFactory: NguyenLieuBunBoTpHcmFactory) {
    super();
    this.nguyenLieu = bunboFactory;
  }
  themTopping() {
    this.bo = this.nguyenLieu.createBo();
    this.cha = this.nguyenLieu.createCha();
  }
  themNuocDung(): void {
    this.nuocDung = this.nguyenLieu.createNuocDung();
  }
}

class BunBoGan extends BunBo {
  nguyenLieu: NguyenLieuBunBoFactory;
  constructor(bunboFactory: NguyenLieuBunBoTpHcmFactory) {
    super();
    this.nguyenLieu = bunboFactory;
  }
  themTopping() {
    this.bo = this.nguyenLieu.createBo();
    this.gan = this.nguyenLieu.createGan();
  }
  themNuocDung(): void {
    this.nuocDung = this.nguyenLieu.createNuocDung();
  }
}

class BunBoDacBiet extends BunBo {
  nguyenLieu: NguyenLieuBunBoFactory;
  constructor(bunboFactory: NguyenLieuBunBoTpHcmFactory) {
    super();
    this.nguyenLieu = bunboFactory;
  }
  themTopping() {
    this.bo = this.nguyenLieu.createBo();
    this.gio = this.nguyenLieu.createGio();
    this.cha = this.nguyenLieu.createCha();
    this.gan = this.nguyenLieu.createGan();
  }
  themNuocDung(): void {
    this.nuocDung = this.nguyenLieu.createNuocDung();
  }
}

interface NguyenLieuBunBoFactory {
  createNuocDung(): NuocDung;
  createBo(): Bo;
  createCha(): Cha;
  createGio(): Gio;
  createGan(): Gan;
}

class NguyenLieuBunBoHueFactory implements NguyenLieuBunBoFactory {
  createNuocDung(): NuocDung {
    return new NuocDungHue();
  }
  createBo(): Bo {
    return new BoHue();
  }
  createCha(): Cha {
    return new ChaHue();
  }
  createGio(): Gio {
    return new GioHue();
  }
  createGan(): Gan {
    return new GanHue();
  }
}

class NguyenLieuBunBoTpHcmFactory implements NguyenLieuBunBoFactory {
  createNuocDung(): NuocDung {
    return new NuocDungTpHcm();
  }
  createBo(): Bo {
    return new BoTpHcm();
  }
  createCha(): Cha {
    return new ChaTpHcm();
  }
  createGio(): Gio {
    return new GioTpHcm();
  }
  createGan(): Gan {
    return new GanTpHcm();
  }
}

class NguyenLieuBunBoHaNoiFactory implements NguyenLieuBunBoFactory {
  createNuocDung(): NuocDung {
    return new NuocDungHaNoi();
  }
  createBo(): Bo {
    return new BoHaNoi();
  }
  createCha(): Cha {
    return new ChaHaNoi();
  }
  createGio(): Gio {
    return new GioHaNoi();
  }
  createGan(): Gan {
    return new GanHaNoi();
  }
}

abstract class QuanBunBo {
  order(type: string): BunBo {
    const bunbo = this.create(type);
    bunbo.themBun();
    bunbo.themTopping();
    bunbo.themNuocDung();
    return bunbo;
  }
  abstract create(type: string): BunBo;
}

class QuanBunBoHue extends QuanBunBo {
  create(type: string): BunBo {
    const nguyenLieu: NguyenLieuBunBoFactory = new NguyenLieuBunBoHueFactory();
    switch (type) {
      case 'bunbothuong':
        return new BunBoThuong(nguyenLieu);
      case 'bunbogio':
        return new BunBoGio(nguyenLieu);
      case 'bunbocha':
        return new BunBoCha(nguyenLieu);
      case 'bunbogan':
        return new BunBoGan(nguyenLieu);
      case 'bunbodacbiet':
        return new BunBoDacBiet(nguyenLieu);
      default:
        throw new Error('Xin loi, chung toi khong co loai bun bo nay');
    }
  }
}

class QuanBunBoTpHcm extends QuanBunBo {
  create(type: string): BunBo {
    const nguyenLieu: NguyenLieuBunBoFactory =
      new NguyenLieuBunBoTpHcmFactory();
    switch (type) {
      case 'bunbothuong':
        return new BunBoThuong(nguyenLieu);
      case 'bunbogio':
        return new BunBoGio(nguyenLieu);
      case 'bunbocha':
        return new BunBoCha(nguyenLieu);
      case 'bunbogan':
        return new BunBoGan(nguyenLieu);
      case 'bunbodacbiet':
        return new BunBoDacBiet(nguyenLieu);
      default:
        throw new Error('Xin loi, chung toi khong co loai bun bo nay');
    }
  }
}

class QuanBunBoHaNoi extends QuanBunBo {
  create(type: string): BunBo {
    const nguyenLieu: NguyenLieuBunBoFactory =
      new NguyenLieuBunBoHaNoiFactory();
    switch (type) {
      case 'bunbothuong':
        return new BunBoThuong(nguyenLieu);
      case 'bunbogio':
        return new BunBoGio(nguyenLieu);
      case 'bunbocha':
        return new BunBoCha(nguyenLieu);
      case 'bunbogan':
        return new BunBoGan(nguyenLieu);
      case 'bunbodacbiet':
        return new BunBoDacBiet(nguyenLieu);
      default:
        throw new Error('Xin loi, chung toi khong co loai bun bo nay');
    }
  }
}
