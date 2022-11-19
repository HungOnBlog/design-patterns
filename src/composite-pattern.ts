interface ITinhHinhKinhDoanh {
  tinhDoanhThu(): number;
}

type DonHang = {
  id: string;
  quantity: number;
  price: number;
};

class QuanAn implements ITinhHinhKinhDoanh {
  private name: string;
  private donHangs: DonHang[] = [];

  constructor(name: string) {
    this.name = name;
  }

  phucVuDonHang(donHang: DonHang) {
    this.donHangs.push(donHang);
  }

  tinhDoanhThu(): number {
    return this.donHangs.reduce((sum, donHang) => {
      return sum + donHang.quantity * donHang.price;
    }, 0);
  }
}

class Vung implements ITinhHinhKinhDoanh {
  private name: string;
  private cons: ITinhHinhKinhDoanh[] = [];

  constructor(name: string) {
    this.name = name;
  }

  themCon(quanAn: ITinhHinhKinhDoanh) {
    this.cons.push(quanAn);
  }

  tinhDoanhThu(): number {
    return this.cons.reduce((sum, con) => {
      return sum + con.tinhDoanhThu();
    }, 0);
  }
}
