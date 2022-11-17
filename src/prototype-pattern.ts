class Pho {
  tai?: boolean;
  nam?: boolean;
  gau?: boolean;
  gan?: boolean;
  trung?: number;

  clone(): Pho {
    let clone = new Pho();
    clone.tai = this.tai;
    clone.nam = this.nam;
    clone.gau = this.gau;
    clone.gan = this.gan;
    clone.trung = this.trung;
    return clone;
  }

  serve(name: string): void {
    console.log(
      `Serving ${name} pho with: ${this.tai ? 'tai' : ''} ${
        this.nam ? 'nam' : ''
      } ${this.gau ? 'gau' : ''} ${this.gan ? 'gan' : ''} ${
        this.trung ? `${this.trung} trung` : ''
      }`,
    );
  }
}

function tiemPho() {
  const phoOfHung = new Pho();
  phoOfHung.tai = true;
  phoOfHung.nam = true;
  phoOfHung.gau = true;
  phoOfHung.gan = false;
  phoOfHung.trung = 1;

  const phoOfVinh = phoOfHung.clone();
  const phoOfVinhx = phoOfHung.clone();
  const phoOfVu = phoOfHung.clone();
  const phoOfSon = phoOfVinh.clone();
  const phoOfHoang = phoOfVinhx.clone();

  phoOfHung.serve('Hung');
  phoOfVinh.serve('Vinh');
  phoOfVinhx.serve('Vinhx');
  phoOfVu.serve('Vu');
  phoOfSon.serve('Son');
  phoOfHoang.serve('Hoang');
}

tiemPho();
